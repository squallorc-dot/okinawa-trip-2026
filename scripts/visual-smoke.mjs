import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
const widths=[360,375,390,430,768,1024,1440];
const views=['overview','schedule','transport','shopping','info'];
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const reports=[];
let failed=false;
await mkdir('artifacts/screenshots',{recursive:true});
for(const width of widths){
 const page=await browser.newPage({viewport:{width,height:860},deviceScaleFactor:1,isMobile:width<761,hasTouch:width<761});
 const errors=[];
 page.on('pageerror',error=>errors.push(error.message));
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'domcontentloaded'});
 for(const view of views){
  const selector=width<=760?'.bottom-nav button[data-view="'+view+'"]':'.side-nav button[data-view="'+view+'"]';
  await page.locator(selector).click();
  await page.waitForTimeout(100);
  const metrics=await page.evaluate(()=>({
    innerWidth:window.innerWidth,
    scrollWidth:document.documentElement.scrollWidth,
    visible:document.querySelector('main')?.textContent?.trim().length||0,
    images:document.images.length,
    failedImages:[...document.images].filter(i=>i.complete && i.naturalWidth===0).length
  }));
  const overflow=metrics.scrollWidth>metrics.innerWidth+2;
  const empty=metrics.visible<180;
  if(overflow||empty||errors.length)failed=true;
  reports.push({width,view,overflow,empty,errors:[...errors],...metrics});
  if([375,390,1440].includes(width))await page.screenshot({path:'artifacts/screenshots/'+width+'-'+view+'.png',fullPage:true});
 }
 if(width===390){
  await page.locator('.bottom-nav button[data-view="schedule"]').click();
  for(let n=1;n<=6;n++){
   await page.locator('.day-tabs button[data-day="'+n+'"]').click();
   const metric=await page.evaluate(()=>({width:window.innerWidth,scrollWidth:document.documentElement.scrollWidth,events:document.querySelectorAll('.timeline-item').length}));
   const overflow=metric.scrollWidth>metric.width+2;
   if(overflow||metric.events===0)failed=true;
   reports.push({width,view:'day'+n,overflow,events:metric.events,...metric});
   if([1,3,6].includes(n))await page.screenshot({path:'artifacts/screenshots/390-day'+n+'.png',fullPage:true});
  }
 }
 await page.close();
}
await browser.close();
await writeFile('artifacts/report.json',JSON.stringify(reports,null,2));
const issues=reports.filter(x=>x.overflow||x.empty||x.errors?.length||x.events===0);
console.log('VIEWPORT SUMMARY',JSON.stringify({tested:reports.length,issues:issues.slice(0,15)},null,2));
if(process.env.GITHUB_STEP_SUMMARY){
 const rows=['## Okinawa responsive test','','Screens: '+reports.length+' view states at '+widths.join(', ')+' px.','','Problems: '+issues.length,'',...issues.map(x=>'- '+JSON.stringify(x))];
 await writeFile(process.env.GITHUB_STEP_SUMMARY,rows.join('\n'),{flag:'a'});
}
process.exitCode=failed?1:0;
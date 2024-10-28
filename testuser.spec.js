const {test, expect} = require("@playwright/test")

test("Home page", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator("#name").fill("Suresh");

const text= await page.locator("#email").fill("suresh@gmail.com");

//await expect.soft(text).toContainEqual()

await page.locator("#phone").fill("9857485794");

await page.locator("//label[text()='Address:']").fill("No.38,rajiv nagar,vanagaram,chennai-77");

const Radiobutton = page.locator("#male");

try {
    if (await Radiobutton.isVisible()) {
       await Radiobutton.check();
    } else {
        console.error("Male radio button is not visible");
    }
} catch (error) {
    console.error("An error occurred:", error);
}

const checkbox = [
    "//input[@id='sunday' and @type='checkbox']",
    "//input[@id='monday' and @type='checkbox']",
     "//input[@id='wednesday' and @type='checkbox']"
];

for (const locator of checkbox){
    await page.locator(locator).check();
}

await page.locator('#country').selectOption("United States");

const dropdown = await page.locator('#country option');
await expect(dropdown).toHaveCount(10);

const dropdown1 = await page.locator('#country').textContent();

await expect(dropdown1.includes("India")).toBeTruthy();

let status = false;

const count = await page.$$('#country option')

for (const option of count){
    let list = await option.textContent()

    if(list.includes("Australia")){
        status=true;
        break;
    }
}
expect(status).toBeTruthy();

await page.locator("//select[@id='colors']//option[1]").click();

date picker selection
const Year="2024";
const month="October";
const Day="20";

await page.locator('#datepicker').click();

while(true){

    const currentmonth = await page.locator('.ui-datepicker-month').textContent();
    const currentyear = await page.locator('.ui-datepicker-year').textContent();

    if(currentmonth==month && currentyear==Year){
        break;
    }
    await page.locator("//a[@title='Next']").click();
}

const days = await page.$$(".ui-state-default")

for(const d of days){

    if(await d.textContent()==Day){
        await d.click();
        break;
    }
}

await page.click(`//a[@class='ui-state-default'][text()='${Day}']`);

//Mouse hover
const point = await page.locator("//button[text()='Point Me']");
const laptop = await page.locator("//a[text()='Laptops']");

await point.hover()
await laptop.hover()

//right click
await laptop.click({button:"right"})

const click_text = await page.locator("//button[text()='Copy Text']");

await click_text.dblclick();

const f1= await page.locator("#field2");

await expect(f1).toHaveValue("Hello World!");

const target_field = await page.locator("#draggable");
const source_field= await page.locator("#droppable");

await target_field.dragTo(source_field);

await page.locator("#name").fill("Suresh");

await page.keyboard.press('Meta+A');

await page.keyboard.press('Meta+C');

// // await page.keyboard.down('Tab');
// // await page.keyboard.up('Tab');

await page.locator("#textarea").click();

await page.keyboard.press('Meta+V');
 
const ele1 = await page.locator("//h2[text()='Upload Files']");

await ele1.scrollIntoViewIfNeeded()

await page.locator("#singleFileInput").setInputFiles("C:/Users/sures/Downloads/Book1.xlsx");

await page.locator("#singleFileInput").setInputFiles([]);

await page.screenshot({path:'tests/Screenshots/'+Date.now()+"File_upload1.png",fullPage:true});


await page.waitForTimeout(5000);
})

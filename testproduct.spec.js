const {test, expect} = require("@playwright/test")

test("Home page", async({page})=>{
await page.goto("https://www.amazon.in/");

const pageTitle= await page.title();

console.log("pagetitle is:",pageTitle);

//expect(pageTitle).toBe('Google');

const pageurl= await page.url();

console.log("pageurl is:", pageurl);

//await page.locator('#searchDropdownBox').selectOption({label:'Watches'});

//await page.click('#nav-search-submit-button');

await page.waitForTimeout(5000);

//await page.fill('#twotabsearchtextbox','fastrack');

//await expect.soft(page).toHaveTitle();
//await expect(page).toHaveURL();

//soft assertion will not terminate the steps

//inputbox - .tobeempty, .tobeeditabled, .tobeenabled

//radio button -.check, assertion - tobechecked

//ischecked, tobetruethy


//await page.click('#nav-search-submit-button');


//const logoelement = await page.getByLabel('Amazon.in', { exact: true });

//await expect(logoelement).toBeVisible();

//toenable or todisabled

//const enablcheck = await page.locator('#twotabsearchtextbox');

//await expect(enablcheck).toBeEnabled();

//tobechecked

//tohavetext or tocontaintext()

//tohavevalue

//await expect().toBeVisible()

//await page.$$("")

//await page.close();

//const count = await page.locator('select[id="searchDropdownBox"] option');
//await expect(count).toHaveCount(46);

//const count = await page.locator('select[id="searchDropdownBox"]').textContent();

//await expect(count.includes("Alexa Skills")).toBeTruthy();

let foundAlexaSkills = false;

const count = await page.$$('select[id="searchDropdownBox"] option')

for (const option of count){
    let list = await option.textContent()

    if(list.includes("Alexa Skills")){
        foundAlexaSkills=true;
        break;
    }
}
expect(foundAlexaSkills).toBeTruthy();
//console.log("list of options:",count.length)

//const topBrandsCheckbox = page.locator("//label[@for='apb-browse-refinements-checkbox_0']//i[@class='a-icon a-icon-checkbox']");


//try {
  //  if (await topBrandsCheckbox.isVisible()) {
     //   await topBrandsCheckbox.check();
    //} else {
     //   console.error("Top Brands checkbox is not visible");
    //}
//} catch (error) {
    //console.error("An error occurred:", error);
//}

await page.close();

//await page.waitForTimeout(30000);
})
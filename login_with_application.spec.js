const{test,expect} = require("playwright/test");

//const login=require("../Pages/login_page");
const login = require("../Pages/login_page");

const logout = require("../Pages/homepage");

test("login into application", async({page})=>{

 await page.goto("https://freelance-learn-automation.vercel.app/login");

 const loginPage = new login(page);

 loginPage.login_application();

 const logout_page = new logout(page);

 logout_page.logout_application();



  await page.waitForTimeout(5000)

})
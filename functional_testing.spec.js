const {expect,test} = require("playwright/test")
const test_product_page = require("../Pages/test_product")

test("Start to testing the application", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const product=new test_product_page(page);
    //product.launch_app();
    product.app_test();
})
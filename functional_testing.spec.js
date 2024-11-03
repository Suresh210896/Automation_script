const {expect,test} = require("playwright/test")
const test_product_page = require("../Pages/test_product")

test("Start to testing the application", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const product=new test_product_page(page);
    //product.launch_app();
    product.app_test("Suresh", "suresh@gmail.com", "9857485794", "No.38,rajiv nagar,vanagaram,chennai-77");

    //product.textarea();

    product.rb();

    product.cb();

    product.dropdown_validation("United States", "Australia");

    product.date_picker("2024", "November", "07");

    // product.mouse_hover_action();

    // product.double_click();

    // product.dragdrop();

    // product.keyboard_actions();

    // product.scroll();

    // product.fileupload();

    // product.screenshot();

    await page.waitForTimeout(5000)
})
const {test, expect} = require('@playwright/test')

test.only('Login page', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const productname = "SAMSUNG Galaxy S22 5G (Green, 128 GB)"

    const products = page.locator("//div[@class='col col-7-12']");
    const dropdown = page.locator("(//select[@class='Gn+jFg'])[2]");

    await page.goto("https://www.flipkart.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");

    await page.locator("//input[@name='q']").fill("samsung s22 fe")
    await page.locator("//button[@type='submit']").click();

    const productno = await page.locator("//div[@class='cPHDOP col-12-12']");

    const count =await productno.count();

    console.log(count)

    for(let i=0;i<count;i++){
        const item = productno.nth(i);
        if(await item.locator("div").textContent()===productname){
            await item.locator("//span[text()='Add to Compare']").click();
            break;
        }
    }

    const [newPage] = await Promise.all([
        
        context.waitForEvent('page'),
        await products.nth(1).click(),
        //await expect(page.locator("//label[text()='Compare']")).toHaveText("Compare")
    ])

    
    
    await newPage.waitForLoadState('domcontentloaded');
    await newPage.locator("(//div[text()='4.4'])[1]").click();

    //await page.getByRole('button', { name: 'Add to cart' }).waitFor();

    await page.getByRole('button',{name:'ADD TO CART'}).click();
    //console.log(text);

    

    // await dropdown.click();
    // await dropdown.selectOption("20000");

    //await page.waitForLoadState("networkidle")

    //await products.nth(1).waitFor();

    // console.log(await products.nth(1).textContent());

    // console.log(await products.allTextContents());

    //await page.locator('#username').fill('rahulshettyacademy')


    await page.waitForTimeout(5000);
    
});
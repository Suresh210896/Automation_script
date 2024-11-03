class test_product {
    constructor(page) {
        this.page = page;
        this.username = "#name";
        this.email = "#email";
        this.phone_no = "#phone";
        this.address = "//textarea[@id='textarea']";
        this.radio_button = "#male";
        this.country = '#country';
        this.country_selection = '#country option';
        this.color_selection = "//select[@id='colors']//option[1]";
        this.date = '#datepicker';
        this.month = '.ui-datepicker-month';
        this.year = '.ui-datepicker-year';
        this.next = "//a[@title='Next']";
        this.day = ".ui-state-default";
        this.mousehover_pointme = "//button[text()='Point Me']";
        this.mousehover_laptops = "//a[text()='Laptops']";
        this.copy_text = "//button[text()='Copy Text']";
        this.field = "#field2";
        this.target = "#draggable";
        this.source = "#droppable";
        this.scroll_to_fileupload = "//h2[text()='Upload Files']";
        this.file_upload = "#singleFileInput";
    }

    async app_test() {
        // Fill in basic details
        await this.page.locator(this.username).fill("Suresh");
        await this.page.locator(this.email).fill("suresh@gmail.com");
        await this.page.locator(this.phone_no).fill("9857485794");
        //await this.page.locator(this.address).fill("No.38,rajiv nagar,vanagaram,chennai-77");

        let retries = 3;
        while (retries > 0) {
            try {
                await this.page.waitForSelector(this.address, { timeout: 5000 });
                await this.page.locator(this.address).fill("No.38,rajiv nagar,vanagaram,chennai-77");
                break; // Exit loop if fill action is successful
            } catch (error) {
                retries--;
                console.error(`Retrying to fill address, attempts left: ${retries}`);
                if (retries === 0) {
                    console.error("Failed to fill address field after multiple attempts:", error);
                }
            }
        }


        // Check if the radio button is visible, then select it
        const Radiobutton = this.page.locator(this.radio_button);
        try {
            await this.page.waitForSelector(this.radio_button, { timeout: 5000 });
            if (await Radiobutton.isVisible()) {
                await Radiobutton.check();
            } else {
                console.error("Male radio button is not visible");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }

        // Select checkboxes
        const checkboxes = [
            "//input[@id='sunday' and @type='checkbox']",
            "//input[@id='monday' and @type='checkbox']",
            "//input[@id='wednesday' and @type='checkbox']"
        ];

        for (const locator of checkboxes) {
            let retries = 3;
            while (retries > 0) {
                try {
                    await this.page.waitForSelector(locator, { timeout: 5000 });
                    await this.page.locator(locator).check();
                    break; // Break out of the loop if successful
                } catch (error) {
                    retries--;
                    console.error(`Retrying to check checkbox ${locator}, attempts left: ${retries}`);
                    if (retries === 0) {
                        console.error(`Failed to check checkbox ${locator} after multiple attempts:`, error);
                    }
                }
            }
        }

        // Country dropdown selection and validation
        await this.page.locator(this.country).selectOption("United States");
        const dropdownOptions = await this.page.locator(this.country_selection);
        await expect(dropdownOptions).toHaveCount(10);

        const countryText = await this.page.locator(this.country).textContent();
        await expect(countryText.includes("India")).toBeTruthy();

        let status = false;
        const options = await this.page.$$(this.country_selection);
        for (const option of options) {
            const text = await option.textContent();
            if (text.includes("Australia")) {
                status = true;
                break;
            }
        }
        expect(status).toBeTruthy();

        // Select color
        await this.page.locator(this.color_selection).click();

        // Date picker selection
        const Year = "2024";
        const Month = "October";
        const Day = "20";
        await this.page.locator(this.date).click();

        while (true) {
            const currentMonth = await this.page.locator(this.month).textContent();
            const currentYear = await this.page.locator(this.year).textContent();
            if (currentMonth === Month && currentYear === Year) {
                break;
            }
            await this.page.locator(this.next).click();
        }

        const days = await this.page.$$(this.day);
        for (const day of days) {
            if ((await day.textContent()) === Day) {
                await day.click();
                break;
            }
        }

        // Mouse hover actions
        const point = await this.page.locator(this.mousehover_pointme);
        const laptop = await this.page.locator(this.mousehover_laptops);
        await point.hover();
        await laptop.hover();

        // Right-click and double-click actions
        await laptop.click({ button: "right" });
        const copyTextButton = await this.page.locator(this.copy_text);
        await copyTextButton.dblclick();

        const field = await this.page.locator(this.field);
        await expect(field).toHaveValue("Hello World!");

        // Drag and drop
        const target = await this.page.locator(this.target);
        const source = await this.page.locator(this.source);
        await target.dragTo(source);

        // Copy and paste username
        await this.page.locator(this.username).fill("Suresh");
        await this.page.keyboard.press('Meta+A');
        await this.page.keyboard.press('Meta+C');
        await this.page.locator("#textarea").click();
        await this.page.keyboard.press('Meta+V');

        // Scroll to file upload and upload file
        const uploadSection = await this.page.locator(this.scroll_to_fileupload);
        await uploadSection.scrollIntoViewIfNeeded();
        await this.page.locator(this.file_upload).setInputFiles("C:/Users/sures/Downloads/Book1.xlsx");

        // Clear the file upload input
        await this.page.locator(this.file_upload).setInputFiles([]);

        // Take a screenshot
        await this.page.screenshot({ path: `tests/Screenshots/${Date.now()}_File_upload.png`, fullPage: true });

        // Wait for a while before ending the test
        await this.page.waitForTimeout(5000);
    }
}

module.exports = test_product;
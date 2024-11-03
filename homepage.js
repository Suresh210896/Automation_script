class home_page{

    constructor(page){
        this.page=page;
        this.menu="//img[@alt='menu']"
        this.signout="//button[text()='Sign out']"
    }

    async logout_application(){
        await this.page.click(this.menu)
        await this.page.click(this.signout)

        
    }
}

module.exports=home_page;
class login_page{
    constructor(page){
        this.page=page;
        this.username="#email1"
        this.password="#password1"
        this.loginbutton="//button[text()='Sign in']"
    }

    async login_application(){
        await this.page.fill(this.username,'sureshmari2108@gmail.com')
        await this.page.fill(this.password,'mariappan')
        await this.page.click(this.loginbutton)
        //await this.page.pause();
    }
}

module.exports=login_page;
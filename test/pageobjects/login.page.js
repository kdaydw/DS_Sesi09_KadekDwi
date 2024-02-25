const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    //NOTE: Elements Collection
    get fieldUsername () { return $('#user-name');}
    get fieldPassword () { return $('#password');}
    get buttonLogin () { return $('#login-button');}
    get lockedoutErrorLogin () { return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]');}
    get errorLoginWithoutCredential () { return $('//h3[text()="Epic sadface: Username is required"]');}

    async login (username, password) {
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.buttonLogin.click();
    }

    async userLockedOutErrorLogin () {
        await expect(this.lockedoutErrorLogin).toBeDisplayed();
    }

    async LoginWithoutCredential () {
        await expect(this.errorLoginWithoutCredential).toBeDisplayed();
    }


    open () {
        return super.open('/'); //NOTE: Will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();

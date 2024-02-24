const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    //NOTE: Elements Collection
    get fieldUsername () { return $('#user-name');}
    get fieldPassword () { return $('#password');}
    get buttonLogin () { return $('#login-button');}

    async login (username, password) {
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.buttonLogin.click();
    }

    open () {
        return super.open('/'); //NOTE: Will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();


const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

describe('Swag Lab', () => {

    // Positive case
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDAR_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validdateHomePage()  
        //TODO: akan membuat positive case
    })

    // Positive case
    it('should add to cart with standard_user spesific product', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDAR_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validdateHomePage()  
        const btnAddToCartElement = await $('#add-to-cart-sauce-labs-backpack')
        await btnAddToCartElement.click()
        //TODO: akan membuat positive case
    })

    // Positive case
    it('should login with problem_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_PROBLEM_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validdateHomePage()  
        //TODO: akan membuat positive case
    })

    // Negativ case
    it('should login with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_LOCKEDOUT_USER, process.env.PASSWORD_SAUCEDEMO)
        const errorElement = await $('[data-test="error"]');
        await expect(errorElement).toBeDisplayed();

        const errorMessage = await errorElement.getText();
        await expect(errorMessage).toEqual('Epic sadface: Sorry, this user has been locked out.');
        //TODO: akan membuat negative case
    })

    // Negativ case
    it('should login without credentials', async () => {
        await LoginPage.open()
        await LoginPage.login("", "")

        const errorElement = await $('[data-test="error"]');
        await expect(errorElement).toBeDisplayed();

        const errorMessage = await errorElement.getText();
        await expect(errorMessage).toEqual('Epic sadface: Username is required');
        //TODO: akan membuat negative case
    })
})



 //await LoginPage.open()

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
            //'You logged into a secure area!')
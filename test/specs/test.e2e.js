
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const loginPage = require('../pageobjects/login.page')

describe('Swag Lab', () => {

    //TODO: Create Positive Case Login
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDAR_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validdateHomePage()  
    })

    //TODO: Create Positive Case Add Product
    it('should add spesific product to cart with standard_user', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDAR_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validdateHomePage()  
        const btnAddToCartElement = await $('#add-to-cart-sauce-labs-backpack')
        await btnAddToCartElement.click()
    })

    //TODO: Create Positive Case Login
    it('should login with problem_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_PROBLEM_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validdateHomePage()  
    })

    //TODO: Create Positive Case Add Product
    it('should add spesific product to cart with problem_user', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_PROBLEM_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validdateHomePage()  
        const btnAddToCartElement = await $('#add-to-cart-sauce-labs-bolt-t-shirt')
        await btnAddToCartElement.click()
    })

    //TODO: Create Negative Case Login
    it('should login with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_LOCKEDOUT_USER, process.env.PASSWORD_SAUCEDEMO)
        await LoginPage.userLockedOutErrorLogin()
    })

    //TODO: Create Negative Case Login Without Username & Password
    it('should login without credentials', async () => {
        await LoginPage.open()
        await LoginPage.login("", "")
        await LoginPage.LoginWithoutCredential()
    })
})



 //await LoginPage.open()

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
            //'You logged into a secure area!')
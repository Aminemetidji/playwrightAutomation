const {test,expect} = require('@playwright/test');



test('First Playwright test', async ({page})=>
{
await page.goto("https://mercadolibre.com.ar")
await console.log(await page.title())
const username = page.locator('#user_id')
await expect(page).toHaveTitle("Mercado Libre Argentina - Envíos Gratis en el día")
await page.locator('#nav-header-menu > a:nth-child(2)').click()
await username.fill('amine.metidji@gmail.com')
await page.locator('#login_user_form > div.login-form__actions > button > span').click()


});

test('Segund Playwright test', async ({page})=>
{
await page.goto("https://google.com")
await console.log(await page.title())
await expect(page).toHaveTitle("Google")
});
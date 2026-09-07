// tests/google.spec.js
import { test, expect } from '@playwright/test';

//const { test, expect } = require('@playwright/test');

test('Open Google', async ({ page },testInfo) => {




await page.goto('https://demoblaze.com/');
const screenshot = await page.screenshot();

    await testInfo.attach('Home Page Screenshot', {
        body: screenshot,
        contentType: 'image/png'
    });
await expect(page).toHaveTitle(/STORE/);
//await page.waitForLoadState('networkidle');
//await page.getByRole('link', { name: 'Phones' }).click();
await page.locator('#itemc').filter({ hasText: 'Phones' }).waitFor();

await page.locator('#itemc').filter({ hasText: 'Phones' }).click();

    await testInfo.attach('Phones Page Screenshot', {
        body: screenshot,
        contentType: 'image/png'
    });
await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

    await testInfo.attach('Samsung galaxy s6 page Screenshot', {
        body: screenshot,
        contentType: 'image/png'
    });
  await page.getByRole('link', { name: 'Add to cart' }).click();
await page.getByRole('link', { name: 'Cart', exact: true }).click();

    await testInfo.attach('Cart Page Screenshot', {
        body: screenshot,
        contentType: 'image/png'
    });
await page.close();
});
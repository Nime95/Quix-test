// const { test, expect } = require("@playwright/test");

// test("should work Quix Integrations manager when click the Integrations settings button", async ({page,}) => {

//    await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//    await page.fill("#mod-login-username", "admin");
//    await page.fill("#mod-login-password", "zannatunnime2018");
//    await page.click("#btn-login-submit");
//    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//    await page.click('#toolbar-settings-right > li:nth-child(3) > a > span')
//    await page.click("#toolbar-settings-right > li:nth-child(3) > div > ul > li:nth-child(2) > a");
//    const text = await page.innerText("#header > div.header-inside > div.header-title.d-flex > div:nth-child(2) > div > h1");
//    expect(text.trim()).toBe("Quix - Integrations manager");

// });
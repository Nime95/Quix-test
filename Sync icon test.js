// const { test, expect } = require("@playwright/test");
 
// test("should clear icon cache when click the sync icons", async ({page,}) => {

//    await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//    await page.fill("#mod-login-username", "admin");
//    await page.fill("#mod-login-password", "zannatunnime2018");
//    await page.click("#btn-login-submit");
//    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//    await page.click('#toolbar-settings-right > li:nth-child(3) > a > span');
//    await page.click("#toolbar-settings-right > li:nth-child(3) > div > ul > li:nth-child(7) > a");
//    const text = await page.innerText("body > div.qx-notification.qx-notification-bottom-right > div");
//    expect(text.trim()).toBe("Quix icons cache cleaned.");

// });
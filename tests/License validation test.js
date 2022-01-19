// const { test, expect } = require("@playwright/test");

// test("should validate license when username name and authkey added", async ({page,}) => {

//    await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//    await page.fill("#mod-login-username", "admin");
//    await page.fill("#mod-login-password", "zannatunnime2018");
//    await page.click("#btn-login-submit");
//    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//    await page.click("#license-activation-cta");
//    await page.fill("#jform_username", "Nime");
//    await page.fill("#jform_key", "bcb44392e3b57bdcf213700c5497c067");
//    await page.click("#activateBtn");
//    const text = await page.innerText("#license-activation-cta");
//    expect(text.trim()).toBe("Verified License");

// });
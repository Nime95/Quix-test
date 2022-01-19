// const { test, expect } = require("@playwright/test");
     
// test("should create a footer template when template name and type added", async ({page,}) => {

//   await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//   await page.fill("#mod-login-username", "admin");
//   await page.fill("#mod-login-password", "zannatunnime2018");
//   await page.click("#btn-login-submit");
//   await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//   await page.click("#content > div > div > main > div.qx-toolbar.qx-background-default.qx-box-shadow-hover-small > nav > div.qx-navbar-left > ul > li:nth-child(4) > a");
//   await page.click("#page-filter > div > div > a.qx-button.qx-button-primary");
//   await page.fill("#templateName", "Test template");
//   await page.selectOption("#templateType", "footer");
//   await page.click("#templateForm > button");
//   const text = await page.innerText("#quix-builder-page-title > strong");
//   expect(text.trim()).toBe("Test Template");

// });
// const { test, expect } = require("@playwright/test");

// test("should create a new page when the page name added", async ({ page }) => {

//   await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/index.php?option=com_quix&view=pages");
//   await page.fill("#mod-login-username", "admin");
//   await page.fill("#mod-login-password", "zannatunnime2018");
//   await page.click("#btn-login-submit");
//   await page.click("#js-new-page-prompt");
//   await page.fill("body > div.qx-modal.qx-open > div > form > div.qx-modal-body > input","Testquix");
//   await page.click("body > div.qx-modal.qx-open > div > form > div.qx-modal-footer.qx-text-right > button.qx-button.qx-button-primary");
//   const text = await page.innerText("#quix-builder-page-title");
//   expect(text.trim()).toBe("Testquix");
 
// });
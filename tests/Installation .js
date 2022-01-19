// const { test, expect } = require("@playwright/test");

// test("should install manually when the file is uploaded", async ({ page }) => {

//   await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//   await page.fill("#mod-login-username", "admin");
//   await page.fill("#mod-login-password", "zannatunnime2018");
//   await page.click("#btn-login-submit");
//   await page.goto("http://localhost/joomla4/Joomla4/administrator/index.php?option=com_installer&view=install" );
//   await page.setInputFiles("button#select-file-button", "pkg_quix_pro (4.1.1).zip");
//   const text = await page.innerText("#header > div.header-inside > div.header-title.d-flex > div:nth-child(2) > div > h1");
//   console.log(text)

// });
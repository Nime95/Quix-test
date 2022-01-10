const { firefox } = require("playwright");

(async () => {
  const browser = await firefox.launch({ headless: false });
  // Create pages, interact with UI elements, assert values
  let page = await browser.newPage();

  await page.goto("http://localhost/joomla4/Joomla4/administrator/");

  await page.fill("#mod-login-username", "admin");
  await page.fill("#mod-login-password", "zannatunnime2018");
  await page.click("#btn-login-submit");

  const text = await page.innerText(".page-title");

  browser.close();
})();

const { firefox } = require("playwright");

(async () => {
  const browser = await firefox.launch({ headless: false });
  //Create pages, interact with UI elements, assert values
  let page = await browser.newPage();

    await page.goto("http://localhost/joomla4/Joomla4/administrator");
    await page.fill("#mod-login-username", "admin");
    await page.fill("#mod-login-password", "zannatunnime2018");
    await page.click("#btn-login-submit");
    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
    await page.click("#content > div > div > main > div.qx-toolbar.qx-background-default.qx-box-shadow-hover-small > nav > div.qx-navbar-left > ul > li:nth-child(2) > a");
    await page.click("#page-filter > div > div > a.qx-button.qx-button-primary")
    
    await page.fill("#templateName", "Main header");
    await page.selectOption('select#templateType > option:nth-child(2)'); 
    await page.click("#templateForm > button");

  //await page.click("#content > div > div > main > div.qx-toolbar.qx-background-default.qx-box-shadow-hover-small > nav > div.qx-navbar-left > ul > li.qx-active > a"
  //#templateName  
})();

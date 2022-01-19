const { test, expect } = require("@playwright/test");



//  test("should install manually when the file is uploaded", async ({ page }) => {

//   await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//   await page.fill("#mod-login-username", "admin");
//   await page.fill("#mod-login-password", "zannatunnime2018");
//   await page.click("#btn-login-submit");
//   await page.goto("http://localhost/joomla4/Joomla4/administrator/index.php?option=com_installer&view=install" );
//   await page.setInputFiles("button#select-file-button", "pkg_quix_pro (4.1.1).zip");
//   const text = await page.innerText("#header > div.header-inside > div.header-title.d-flex > div:nth-child(2) > div > h1");
//   console.log(text)



//  test("should create a new page when the page name added", async ({ page }) => {

//   await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/index.php?option=com_quix&view=pages");
//   await page.fill("#mod-login-username", "admin");
//   await page.fill("#mod-login-password", "zannatunnime2018");
//   await page.click("#btn-login-submit");
//   await page.click("#js-new-page-prompt");
//   await page.fill("body > div.qx-modal.qx-open > div > form > div.qx-modal-body > input","Testquix");
//   await page.click("body > div.qx-modal.qx-open > div > form > div.qx-modal-footer.qx-text-right > button.qx-button.qx-button-primary");
//   const text = await page.innerText("#quix-builder-page-title");
//   expect(text.trim()).toBe("Testquix");
//   });



     
//  test("should create a header when template name and type added", async ({page,}) => {

//   await page.goto("http://localhost:8080/joomla4/Joomla4/administrator");
//   await page.fill("#mod-login-username", "admin");
//   await page.fill("#mod-login-password", "zannatunnime2018");
//   await page.click("#btn-login-submit");
//   await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//   await page.click("#content > div > div > main > div.qx-toolbar.qx-background-default.qx-box-shadow-hover-small > nav > div.qx-navbar-left > ul > li:nth-child(2) > a");
//   await page.click("#page-filter > div > div > a.qx-button.qx-button-primary")
//   await page.fill("#templateName", "Main Header");
//   await page.selectOption("#templateType", "header");
//   await page.click("#templateForm > button");
//   const text = await page.innerText("#quix-builder-page-title > strong");
//   expect(text.trim()).toBe("Main Header");
//   });




//  test("should create a footer when template name and type added", async ({page,}) => {

//   await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//   await page.fill("#mod-login-username", "admin");
//   await page.fill("#mod-login-password", "zannatunnime2018");
//   await page.click("#btn-login-submit");
//   await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//   await page.click("#content > div > div > main > div.qx-toolbar.qx-background-default.qx-box-shadow-hover-small > nav > div.qx-navbar-left > ul > li:nth-child(3) > a");
//   await page.click("#page-filter > div > div > a.qx-button.qx-button-primary")
//   await page.fill("#templateName", "Main Footer");
//   await page.selectOption("#templateType", "footer");
//   await page.click("#templateForm > button");
//   const text = await page.innerText("#quix-builder-page-title > strong");
//   expect(text.trim()).toBe("Main Footer");
//   });



//  test("should create a footer template when template name and type added", async ({page,}) => {

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
//   });



 //  test("should create a header template when template name and type added", async ({page,}) => {

 //   await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
 //   await page.fill("#mod-login-username", "admin");
 //   await page.fill("#mod-login-password", "zannatunnime2018");
 //   await page.click("#btn-login-submit");
 //   await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
 //   await page.click("#content > div > div > main > div.qx-toolbar.qx-background-default.qx-box-shadow-hover-small > nav > div.qx-navbar-left > ul > li:nth-child(4) > a");
 //   await page.click("#page-filter > div > div > a.qx-button.qx-button-primary");
 //   await page.fill("#templateName", "Test template");
 //   await page.selectOption("#templateType", "header");
 //   await page.click("#templateForm > button");
 //   const text = await page.innerText("#quix-builder-page-title > strong");
 //   expect(text.trim()).toBe("Test Template");
 //   });




//   test("should validate license when username name and authkey added", async ({page,}) => {

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

//    });




//   test("should clear builder cache when click the certain button", async ({page,}) => {

//    await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//    await page.fill("#mod-login-username", "admin");
//    await page.fill("#mod-login-password", "zannatunnime2018");
//    await page.click("#btn-login-submit");
//    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//    await page.click("#cache-status-normal");
//    const text = await page.innerText("body > div.qx-notification.qx-notification-bottom-right");
//    expect(text.trim()).toBe("Quix Builder Cache Clean");
//    });



//   test("should open quix configuration when click the settings button", async ({page,}) => {

//    await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//    await page.fill("#mod-login-username", "admin");
//    await page.fill("#mod-login-password", "zannatunnime2018");
//    await page.click("#btn-login-submit");
//    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//    await page.click("#toolbar-settings-right > li:nth-child(2) > a > span");
//    const text = await page.innerText("#header > div.header-inside > div.header-title.d-flex > div:nth-child(2) > div > h1");
//    expect(text.trim()).toBe("Quix Configuration");
//    });


//   test("should open plugin when click the seo settings button", async ({page,}) => {

//    await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//    await page.fill("#mod-login-username", "admin");
//    await page.fill("#mod-login-password", "zannatunnime2018");
//    await page.click("#btn-login-submit");
//    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//    await page.click("#toolbar-settings-right > li:nth-child(3) > a > span");
//    await page.click("#toolbar-settings-right > li:nth-child(3) > div > ul > li:nth-child(1) > a")
//    const text = await page.innerText("#header > div.header-inside > div.header-title.d-flex > div:nth-child(2) > div > h1")
//    expect(text.trim()).toBe("Plugins")
//    });


//   test("should work Quix Integrations manager when click the Integrations settings button", async ({page,}) => {

//    await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//    await page.fill("#mod-login-username", "admin");
//    await page.fill("#mod-login-password", "zannatunnime2018");
//    await page.click("#btn-login-submit");
//    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//    await page.click('#toolbar-settings-right > li:nth-child(3) > a > span')
//    await page.click("#toolbar-settings-right > li:nth-child(3) > div > ul > li:nth-child(2) > a");
//    const text = await page.innerText("#header > div.header-inside > div.header-title.d-flex > div:nth-child(2) > div > h1");
//    expect(text.trim()).toBe("Quix - Integrations manager");
//    });


//   test("should clear dynamic cache when click the image cache", async ({page,}) => {

//    await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//    await page.fill("#mod-login-username", "admin");
//    await page.fill("#mod-login-password", "zannatunnime2018");
//    await page.click("#btn-login-submit");
//    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//    await page.click('#toolbar-settings-right > li:nth-child(3) > a > span');
//    await page.click("#toolbar-settings-right > li:nth-child(3) > div > ul > li:nth-child(5) > a");
//    const text = await page.innerText("body > div.qx-notification.qx-notification-bottom-right");
//    expect(text.trim()).toBe("Quix dynamic cache cleaned.");
//    });
    


//   test("should clear view cache when click the page cache", async ({page,}) => {

//    await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//    await page.fill("#mod-login-username", "admin");
//    await page.fill("#mod-login-password", "zannatunnime2018");
//    await page.click("#btn-login-submit");
//    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//    await page.click('#toolbar-settings-right > li:nth-child(3) > a > span');
//    await page.click("#toolbar-settings-right > li:nth-child(3) > div > ul > li:nth-child(6) > a");
//    const text = await page.innerText("body > div.qx-notification.qx-notification-bottom-right");
//    expect(text.trim()).toBe("Quix view cache cleaned.");
//    });


 
//   test("should clear icon cache when click the sync icons", async ({page,}) => {

//    await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//    await page.fill("#mod-login-username", "admin");
//    await page.fill("#mod-login-password", "zannatunnime2018");
//    await page.click("#btn-login-submit");
//    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//    await page.click('#toolbar-settings-right > li:nth-child(3) > a > span');
//    await page.click("#toolbar-settings-right > li:nth-child(3) > div > ul > li:nth-child(7) > a");
//    const text = await page.innerText("body > div.qx-notification.qx-notification-bottom-right > div");
//    expect(text.trim()).toBe("Quix icons cache cleaned.");
//    });


 
//   test("should clear builder cache when click the legacy cache", async ({page,}) => {

//    await page.goto("http://localhost:8080/joomla4/Joomla4/administrator/");
//    await page.fill("#mod-login-username", "admin");
//    await page.fill("#mod-login-password", "zannatunnime2018");
//    await page.click("#btn-login-submit");
//    await page.click("#sidebarmenu > nav:nth-child(3) > ul > li > a > span.sidebar-item-title");
//    await page.click('#toolbar-settings-right > li:nth-child(3) > a > span');
//    await page.click("#toolbar-settings-right > li:nth-child(3) > div > ul > li:nth-child(8) > a");
//    const text = await page.innerText("body > div.qx-notification.qx-notification-bottom-right");
//    expect(text.trim()).toBe("Quix builder cache cleaned.");
//    });


    


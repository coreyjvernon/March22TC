function Contactxl()
{
  Browsers.Item(btChrome).Navigate("https://smartstore.alertsite.com/");
  Project.Variables.ContactData.Reset();
  for(; !Project.Variables.ContactData.IsEOF();)
  {
    Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
    Aliases.browser.pageContactus.Wait();
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.SetText(Project.Variables.ContactData.Value("Name"));
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourEmail.SetText(Project.Variables.ContactData.Value("Email"));
    Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys(Project.Variables.ContactData.Value("Inquiry"));
  //  Delay(10000, "You can set manual and conditional delays!");
    Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
    aqObject.CheckProperty(Aliases.browser.pageContactus.sectionContent.panelYourEnquiryHasBeen, "Exists", cmpEqual, true);
    Project.Variables.ContactData.Next();
  }
  Aliases.browser.BrowserWindow.Close();
}

function ContactGen()
{
  Browsers.Item(btChrome).Navigate("https://smartstore.alertsite.com/");
  Project.Variables.ContactGen.Iterator.Reset();
  for(; !Project.Variables.ContactGen.Iterator.IsEOF();)
  {
    Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
    Aliases.browser.pageContactus.Wait();
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.SetText(Project.Variables.ContactGen.Iterator.Value("Name"));
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourEmail.SetText(Project.Variables.ContactGen.Iterator.Value("Email"));
    Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys(Project.Variables.ContactGen.Iterator.Value("Inquiry"));
  //  Delay(10000, "You can set manual and conditional delays!");
    Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
    aqObject.CheckProperty(Aliases.browser.pageContactus.sectionContent.panelYourEnquiryHasBeen, "Exists", cmpEqual, true);
    Project.Variables.ContactGen.Iterator.Next();
  }
  Aliases.browser.BrowserWindow.Close();
}
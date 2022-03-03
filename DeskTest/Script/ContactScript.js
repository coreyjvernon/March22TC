function ContactXL()
{
  //TestedApps.Orders.Run();
  Project.Variables.ContactXL.Reset();
  for(; !Project.Variables.ContactXL.IsEOF();)
  {
    Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
    Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("FamilyAlbum");
    Aliases.Orders.OrderForm.Group.Quantity.wValue = 10;
    Aliases.Orders.OrderForm.Group.Discount.Click(40, 11);
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Discount, "wText", cmpEqual, "15%");
    Aliases.Orders.OrderForm.Group.Date.wDate = "3/1/2022";
    Aliases.Orders.OrderForm.Group.Customer.SetText(Project.Variables.ContactXL.Value("Customer"));
    Aliases.Orders.OrderForm.Group.Street.SetText(Project.Variables.ContactXL.Value("Street"));
    Aliases.Orders.OrderForm.Group.City.SetText(Project.Variables.ContactXL.Value("City"));
    Aliases.Orders.OrderForm.Group.State.SetText(Project.Variables.ContactXL.Value("State"));
    Aliases.Orders.OrderForm.Group.Zip.SetText(Project.Variables.ContactXL.Value("Zip Code"));
    Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
    Aliases.Orders.OrderForm.Group.CardNo.SetText("5125478965232145");
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.CardNo, "TextLength", cmpEqual, 16);
    Aliases.Orders.OrderForm.Group.ExpDate.Keys(Project.Variables.ContactXL.Value("ExpDate"));
    Aliases.Orders.OrderForm.ButtonOK.ClickButton();
    Project.Variables.ContactXL.Next();
  }
  Aliases.Orders.MainForm.Close();
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}

function ContactGen()
{
  //TestedApps.Orders.Run();
  Project.Variables.ContactGen.Iterator.Reset();
  for(; !Project.Variables.ContactGen.Iterator.IsEOF();)
  {
    Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
    Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("FamilyAlbum");
    Aliases.Orders.OrderForm.Group.Quantity.wValue = 10;
    Aliases.Orders.OrderForm.Group.Discount.Click(40, 11);
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Discount, "wText", cmpEqual, "15%");
    Aliases.Orders.OrderForm.Group.Date.wDate = "3/1/2022";
    Aliases.Orders.OrderForm.Group.Customer.SetText(Project.Variables.ContactGen.Iterator.Value("Customer"));
    Aliases.Orders.OrderForm.Group.Street.SetText(Project.Variables.ContactGen.Iterator.Value("Street"));
    Aliases.Orders.OrderForm.Group.City.SetText(Project.Variables.ContactGen.Iterator.Value("City"));
    Aliases.Orders.OrderForm.Group.State.SetText(Project.Variables.ContactGen.Iterator.Value("State"));
    Aliases.Orders.OrderForm.Group.Zip.SetText(Project.Variables.ContactGen.Iterator.Value("ZipCode"));
    Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
    Aliases.Orders.OrderForm.Group.CardNo.SetText("5125478965232145");
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.CardNo, "TextLength", cmpEqual, 16);
    Aliases.Orders.OrderForm.Group.ExpDate.Keys(Project.Variables.ContactGen.Iterator.Value("ExpDate"));
    Aliases.Orders.OrderForm.ButtonOK.ClickButton();
    Project.Variables.ContactGen.Iterator.Next();
  }
  Aliases.Orders.MainForm.Close();
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}
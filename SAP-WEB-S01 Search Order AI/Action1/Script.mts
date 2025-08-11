' Launch Google Chrome
BrowserExecutable =  "Chrome.exe"
SystemUtil.Run BrowserExecutable,"","","",3

Set AppContext=Browser("CreationTime:=0")

AppContext.Navigate "https://sap-hana.mfdemoportal.com:44300/sap/bc/ui2/flp?sap-client=100&sap-language=EN#Shell-home"
AppContext.Maximize
AIUtil.SetContext AppContext

AIUtil("text_box", "User").Type "S4H_SD_DEM"
AIUtil("text_box", "Password").Type "Welcome1"
AIUtil("button", "Log On").Click
AIUtil("text_box", "Apps Search In: ""Apps").Type "VA03"
AIUtil.FindTextBlock("Display Sales Orders - VA03").Click
AIUtil("text_box", "Order:").Type "4040"
AIUtil.FindTextBlock("Search").Click
AIUtil.FindTextBlock("Delivery Block:").CheckExists True
AIUtil.FindTextBlock("ss", micFromTop, 1).Click
AIUtil.FindTextBlock("Sign Out").Click
AIUtil("button", "OK").Click

' Close browser
AppContext.Close

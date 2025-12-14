function doGet(){
  return HtmlService
   .createHtmlOutputFromFile("index")
   .setTitle("Production Entry Form")
}

function submitData(formData) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Sheet1");

  sheet.appendRow([
    new Date(),
    formData.date,
    formData.shift,
    formData.machine,
    formData.product,
    formData.quantity,
    formData.operator
  ]);

  return "Data Submitted Successfully!";

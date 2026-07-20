
function doPost(e){
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Responses");
  sheet.appendRow([new Date(), data.date, data.time, data.food, data.message]);

  MailApp.sendEmail({
    to: "akshayjpnair@gmail.com",
    subject: "Kanmani accepted your date invitation ❤️",
    htmlBody:
      "<b>Date:</b> "+data.date+"<br>"+
      "<b>Time:</b> "+data.time+"<br>"+
      "<b>Food:</b> "+data.food+"<br><br>"+
      "<b>Message:</b><br>"+data.message
  });

  return ContentService.createTextOutput("OK");
}

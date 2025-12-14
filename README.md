# Production_Apps_Script
Production Data Entry App (Google Apps Script)
📌 Overview

This project is a simple production data entry web application built using Google Apps Script and Google Sheets.

Users enter production details through a custom HTML form, and the data is automatically stored in a Google Sheet in real time.
No external backend or database is required.

🛠️ Tech Stack

Google Sheets – Data storage (acts as database)

Google Apps Script – Backend logic

HTML + CSS + JavaScript – Frontend form

Google Apps Script Web App – Deployment

📂 Project Structure
Production_Form_App
│
├── Code.gs        → Server-side Apps Script
└── index.html     → Frontend HTML form

📄 Google Sheet Structure

The Google Sheet contains the following columns:

Column	Description
Timestamp	Auto-generated submission time
Date	Production date
Shift	Morning / Evening / Night
Machine	Machine name or ID
Product	Product name
Quantity	Units produced
Operator	Operator name
⚙️ How It Works

User opens the Web App URL

Fills the production form

Clicks Submit

JavaScript collects form values into an object

google.script.run() sends data to Apps Script

Apps Script appends data into Google Sheet

Success message is returned and displayed

🧩 Key Code Explanation
Frontend (index.html)

Collects form input

Creates a formData object

Sends it to Apps Script

google.script.run
  .withSuccessHandler(function(response) {
    document.getElementById("msg").innerText = response;
  })
  .withFailureHandler(function(error) {
    document.getElementById("msg").innerText = "ERROR: " + error.message;
  })
  .submitData(formData);

Backend (Code.gs)

Receives the data and saves it into Google Sheets.

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
}

🚀 Deployment Steps

Open Google Sheet

Go to Extensions → Apps Script

Add Code.gs and index.html

Click Deploy → New deployment

Select Web App

Set:

Execute as: Me

Access: Anyone

Deploy and copy the /exec URL

The final URL will look like:

https://script.google.com/macros/s/XXXX/exec

✅ Features

No server or database setup required

Real-time data entry

Works on mobile and desktop

Secure via Google Apps Script

Easy to extend (dropdowns, validation, dashboards)

🔮 Possible Enhancements

Machine/Product dropdowns from Sheet

Data validation (negative quantity, empty fields)

Edit/Delete entries

Daily production dashboard

Google account–based access control

🧠 Learning Outcome

This project demonstrates how to:

Build a web app using Google Apps Script

Connect HTML forms to Google Sheets

Use client–server communication without a backend

Deploy production-ready internal tools

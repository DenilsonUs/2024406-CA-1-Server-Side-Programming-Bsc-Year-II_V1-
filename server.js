// Import the express module to handle web requests
const express = require("express");

// Create an instance of express so we can use its functions
const app = express();

// Import the database connection
var connection = require("./database.js");

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve form.html and related files
app.use(express.static(__dirname));

// Route to handle form submission (POST)
app.post("/submit", function (req, res) {
  // Extract the form data from the request
  var firstName = req.body.frname;
  var lastName = req.body.ltname;
  var email = req.body.email;
  var phoneNumber = req.body.phoneNumber;
  var eircode = req.body.eircode;

  // Check that all fields exist
  if (!firstName || !lastName || !email || !phoneNumber || !eircode) {
    console.log("Missing one or more required fields.");
    return res.status(400).send("Please fill in all fields.");
  }

  // Insert the data into the MySQL table
  var sql =
    "INSERT INTO user_data (first_name, last_name, email, phone_number, eircode) VALUES (?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [firstName, lastName, email, phoneNumber, eircode],
    function (err, result) {
      if (err) {
        console.log("Error inserting data:", err.message);
        return res.status(500).send("Database error.");
      }
      console.log("Data inserted successfully into MySQL table.");
      res.send("Your data has been saved successfully!");
    }
  );
});

// Start the server on port 3000
app.listen(3000, function () {
  // Connect to the database when the server starts
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL Database!");
  });

  console.log("Server is running on http://localhost:3000");
});

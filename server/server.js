// Import express
const express = require('express');
// Import the database
const db = require('../db/app.js'); // Not pointing to correct place!
// Define the port number where the server listens
const port = 3000;
//Create app level object of Express JS
const app = express();

// // Make methods that can interact with the database
// app.get('/api/contacts', (req, res) => {
//   // TODO: retreive contacts and send to requester
// });
//
// app.post('/api/contacts', (req, res) => {
//   const { firstName, lastName, phone } = req.body
//   // TODO: create contact
// });
//
// app.delete('/api/contacts/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   // TODO: find and delete contact by id
// });
//
// app.put('/api/contacts/:id', (req, res) => {
// });

// listening to the server on 3000 port
app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});

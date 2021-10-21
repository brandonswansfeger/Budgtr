const express = require('express');
const app = express();
const port = 3000;
// =======================================
//              DATABASE
// =======================================
const budget = require('./models/budget.js');

app.use(express.static('public'));

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/budget/', (req, res) => {
  res.render("index.ejs"); 
});

// show route
app.get('/budget/:id', (req, res) => {
  res.send(budget[req.params.id]);
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Budgtr app listening on port: ${port}`)
});

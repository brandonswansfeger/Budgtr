const express = require('express');
const app = express();
const port = 8000;
app.set("view engine", "ejs");

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
app.get('/budget/new/', (req, res) => {
  res.render("new.ejs");
});    


app.get('/budget/:id', (req, res) => {
  res.render('show.ejs', {
    allBudget: allBudget[req.params.id],
  });
});
    // allBudget[req.params.name] ), {
// New route


  

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Budgtr app listening on port: ${port}`)
});

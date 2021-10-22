const express = require('express');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
// =======================================
//              DATABASE
// =======================================
const budget = require('./models/budget.js');
app.use(express.static('public'));
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

let result = allBudget.map(a => a.amount);
const bankAccount = eval(result.join("+"));

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/budget/', (req, res) => {
  res.render("index.ejs");
});


app.post("/budget", (req, res) => {
  budget.push(req.body);
  res.redirect("/budget");
});



console.log(result);



app.get('/budget/new/', (req, res) => {
  res.render("new.ejs");
});    





app.get('/budget/:id', (req, res) => {
  res.render('show.ejs', {
    allBudget: allBudget[req.params.id],
  });
});



// show route




    // allBudget[req.params.name] ), {
// New route


  

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Budgtr app listening on port: ${port}`)
});

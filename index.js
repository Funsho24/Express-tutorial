const express = require("express");
const app = express();
const port = 3000;
const mealRouter = require("./routes/mealRouter");

// app.get, app.delete, app.patch, app.put, app.set, app.listen.
// status code 200
// setting the view engine
app.set("view engine", "ejs");
// middleware -
app.use(express.json());// parse json data

// routes
app.use(mealRouter);
// middleware
app.use((req, res, next) => {
  console.log("request made");
  next();
});

app.use((req, res, next) => {
  const requestInfo = {
    url: req.url,
    method: req.method,
    time: new Date().getDate(),
  };
  console.log(requestInfo);
  next();
});

const auth = (req, res, next) => {
  const authorized = false;
  if (authorized) {
    next();
  } else {
    res.send("you are not authorized");
  }
};

app.get("/account", auth, (req, res) => {
  res.status(200).send("Your Acoount Details");
});




//redirecting
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// error route
// app.all("*", (req, res) => {
//   res.status(404).render("error");
// });

app.use((req, res) => {
  res.status(404).render("error");
});

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});

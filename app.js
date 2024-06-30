const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const db = require("./config/Keys").MongooseUrl;
mongoose
  .connect(db)
  .then(() => console.log("MongooseDb Connected"))
  .catch((err) => console.log(err));
// Middleware
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(expressLayouts);

//@welcome page
app.use("/", require("./routes/index"));
//@routes auth pages
app.use("/users", require("./routes/users"));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server Started On Port ${port}:http://localhost:${port}`)
);

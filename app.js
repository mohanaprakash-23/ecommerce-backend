const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const connectDatabase = require("./config/connectDatabase");

const products = require("./routes/product");
const orders = require("./routes/order");

connectDatabase();

app.use(express.json());
app.use(cors());
app.use("/api/v1", products);
app.use("/api/v1", orders);
app.get("/", (req, res) => res.send("Welcome to Ecommerce API!"));

app.listen(process.env.PORT, () => {
  console.log(
    `Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

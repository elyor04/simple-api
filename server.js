const express = require("express");
const mongoose = require("mongoose");
const itemsRouter = require("./routes/items");
const app = express();

const port = process.env.PORT || 3000;
const dbURI = process.env.MONGO_URI || "mongodb://localhost:27017/simple-api";

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use the items router
app.use("/items", itemsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

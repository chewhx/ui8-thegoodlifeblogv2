const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongooseDB = require("./mongoose/config");
const recipeRoutes = require("./routes/api-recipes");
const commentRoutes = require("./routes/api-comments");

dotenv.config();

mongooseDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.use("/api/recipes", recipeRoutes);
app.use("/api/comments", commentRoutes);

//  @desc   Get all comments
//  @route  GET /api/comments
//  @access  Public

//  @desc   Get comments by ID
//  @route  GET /api/comments/:id
//  @access  Public

app.listen(5000, (req, res) => {
  console.log("Server running on 5000");
});

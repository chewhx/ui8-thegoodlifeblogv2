const express = require("express");
const { Recipe } = require("../mongoose/model");

const router = express.Router();

//  @desc   Get all recipes
//  @route  GET /api/recipes
//  @access Public

router.get("/", async (req, res) => {
  const recipes = await Recipe.find({});
  if (recipes) {
    res.status(200).json(recipes);
  } else {
    res.status(404).json({ message: "Not found." });
  }
});

//  @desc   Get recipes by ID
//  @route  GET /api/recipes/:id
//  @access Public

router.get("/:id", async (req, res) => {
  const foundRecipe = await Recipe.findOne({ recipeId: req.params.id });
  if (foundRecipe) {
    res.status(200).json(foundRecipe);
  } else {
    res.status(404).json({ message: "Not found." });
  }
});

//  @desc   Add new recipes
//  @route  POST /api/recipes
//  @access Private

router.post("/", (req, res) => {
  if (req.query.apikey === "123456") {
    const {
      recipeId,
      title,
      category,
      cuisine,
      instructions,
      ingredients,
      image,
      tags,
      video,
      source,
      dateModified,
    } = req.body;

    const newRecipe = new Recipe({
      recipeId,
      title,
      category,
      cuisine,
      instructions,
      ingredients,
      image,
      tags,
      video,
      source,
      dateModified,
    });

    newRecipe.save();

    res.status(201).json(newRecipe);
  } else {
    res.status(401).json({ message: "Request not authorised." });
  }
});

module.exports = router;

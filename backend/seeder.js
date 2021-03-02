const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mongooseDB = require("./mongoose/config");
const { Recipe } = require("./mongoose/model");
const recipeData = require("./data/newRecipes.json");

dotenv.config();
mongooseDB();

const importData = async () => {
  try {
    await Recipe.deleteMany();
    const allRecipes = await Recipe.insertMany(recipeData);
    console.log(allRecipes);
    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();

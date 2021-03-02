const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    recipeId: String,
    title: String,
    category: String,
    cuisine: String,
    instructions: String,
    ingredients: Array,
    image: String,
    tags: String,
    video: String,
    source: String,
    dateModified: String,
    comments: Array,
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

const commentSchema = new mongoose.Schema(
  {
    recipeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Recipe",
    },
    comment: String,
    username: String,
    quote: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Comment",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Recipe, Comment };

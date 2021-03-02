const express = require("express");
const { Recipe, Comment } = require("../mongoose/model");

const router = express.Router();

//  @desc   Get all comments
//  @route  GET /api/comments
//  @access Public

router.get("/", async (req, res) => {
  const comments = await Comment.find({});
  if (comments) {
    res.json(comments);
  } else {
    res.status(404).json({ message: "No comments found." });
  }
});

//  @desc   Get comment by id
//  @route  GET /api/comments/:id
//  @access Public

router.get("/:id", async (req, res) => {
  const comments = await Comment.find({ recipeId: req.params.id }).populate(
    "quote"
  );
  if (comments) {
    res.json(comments);
  } else {
    res.status(404).json({ message: "No comment with id found." });
  }
});

//  @desc   Post a comment
//  @route  POST /api/comments
//  @access Publi

router.post("/:id", async (req, res) => {
  const recipeExist = await Recipe.findOne({ recipeId: req.params.id });

  if (recipeExist) {
    const { comment, username, quote } = req.body;

    const newComment = await new Comment({
      recipeId: recipeExist._id,
      comment,
      username,
      quote,
    });

    newComment.save();

    recipeExist.comments.push(newComment._id);
    recipeExist.save();

    res.json(newComment);
  }
});

module.exports = router;

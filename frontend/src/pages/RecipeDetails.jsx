import React, { useState, useEffect } from "react";
import axios from "axios";
import kebabCase from "lodash/kebabCase";
import Tags from "../components/Details/Tags";
import { Ingredients, DateLike, Loader } from "../components/Details";
import { ShareButtons } from "../components/Buttons";
import { CommentList, CommentForm } from "../components/Comments";

const RecipeDetails = ({ match }) => {
  const recipeId = match.params.id;

  const [recipe, setRecipe] = useState();

  const postCommentHandler = (body) => {
    axios
      .post(`/api/comments/${recipeId}`, body)
      .then((error) => console.log(error));
  };

  useEffect(() => {
    axios.get(`/api/recipes/${recipeId}`).then((res) => setRecipe(res.data));
  }, [recipeId]);

  return !recipe ? (
    <Loader />
  ) : (
    <div className="recipe">
      <div className="recipe_image">
        <img src={recipe.image} alt={kebabCase(recipe.title)} />
      </div>
      <div className="recipe_body">
        <div className="recipe_tags">
          <Tags>{recipe.tags}</Tags>
        </div>
        <div className="recipe_title">{recipe.title}</div>
        <div className="recipe_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis id
          repudiandae ducimus dicta voluptates explicabo, officiis vero!
          Voluptate maxime minus quisquam pariatur culpa illo ea soluta
          necessitatibus? Nemo, alias eveniet.
        </div>
        <div className="recipe_subtitle">Ingredients:</div>
        <Ingredients>{recipe.ingredients}</Ingredients>
        <div className="recipe_subtitle">Preparation</div>
        <div className="recipe_text">{recipe.instructions}</div>
      </div>
      <div className="recipe_footer">
        <DateLike />
        <ShareButtons facebook twitter />
      </div>
      <span style={{ gridArea: "comment" }}>
        <CommentList recipeObjectId={recipe._id} />
        <CommentForm post={postCommentHandler} />
      </span>
    </div>
  );
};

export default RecipeDetails;

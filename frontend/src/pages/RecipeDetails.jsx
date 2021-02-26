import React from "react";
import recipes from "../data/recipes.json";
import kebabCase from "lodash/kebabCase";
import Tags from "../components/Details/Tags";
import { Ingredients, DateLike } from "../components/Details";
import { ShareButtons } from "../components/Buttons";
import { CommentList, CommentForm } from "../components/Comments";

const RecipeDetails = ({ match }) => {
  const recipeId = match.params.id;
  const recipe = recipes.find((recipe) => recipe.idMeal === recipeId);

  const { strMealThumb: image, strMeal: title, strTags: tags } = recipe;

  return (
    <div className="recipe">
      <div className="recipe_image">
        <img src={image} alt={kebabCase(title)} />
      </div>
      <div className="recipe_body">
        <div className="recipe_tags">
          <Tags>{tags}</Tags>
        </div>
        <div className="recipe_title">{title}</div>
        <div className="recipe_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis id
          repudiandae ducimus dicta voluptates explicabo, officiis vero!
          Voluptate maxime minus quisquam pariatur culpa illo ea soluta
          necessitatibus? Nemo, alias eveniet.
        </div>
        <div className="recipe_subtitle">Ingredients:</div>
        <Ingredients></Ingredients>
        <div className="recipe_subtitle">Preparation</div>
        <div className="recipe_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          reiciendis quod aut sint officiis officia, atque nobis sit quis quos
          facere iusto dolores inventore qui ipsam aperiam odit, amet at.
        </div>
      </div>
      <div className="recipe_footer">
        <DateLike />
        <ShareButtons facebook twitter />
      </div>
      <span style={{ gridArea: "comment" }}>
        <CommentList />
        <CommentForm />
      </span>
    </div>
  );
};

export default RecipeDetails;

import React from "react";

const Ingredients = ({ ingredients }) => {
  return (
    <ul class="recipe_ingredients">
      {ingredients.map((ingredient, index) => (
        <li key={`ingred-${index}`}>{ingredient}</li>
      ))}
    </ul>
  );
};

export default Ingredients;

Ingredients.defaultProps = {
  ingredients: [
    "1lb Pork",
    "3 chopped Garlic Clove",
    "1 tsp  Ginger",
    "1 tbs Soy Sauce",
    "1 tsp  Sesame Seed Oil",
    "3 finely chopped Carrots",
    "3 finely chopped Celery",
    "6 chopped Spring Onions",
    "1 Packet Wonton Skin",
    "Fry Oil",
    "Bottle Water",
  ],
};

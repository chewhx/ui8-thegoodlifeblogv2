import React from "react";
import Card from "../components/Cards/Card";
import recipes from "../data/recipes.json";

const Recipes = () => {
  return (
    <div class="container">
      {recipes.map(
        ({
          idMeal: id,
          strMeal: title,
          strMealThumb: image,
          strInstructions: description,
        }) => (
          <Card
            size="small"
            title={title}
            image={image}
            description={description}
            link={id}
          />
        )
      )}
    </div>
  );
};

export default Recipes;

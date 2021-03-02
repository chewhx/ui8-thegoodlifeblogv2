import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Cards/Card";
import { Loader } from "../components/Details";

const Recipes = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    axios.get("/api/recipes").then((res) => setRecipes(res.data));
  }, []);

  return !recipes ? (
    <Loader />
  ) : (
    <div class="container">
      {recipes?.map(({ recipeId, title, image, description }) => (
        <Card
          size="small"
          title={title}
          image={image}
          description={description}
          link={recipeId}
        />
      ))}
    </div>
  );
};

export default Recipes;

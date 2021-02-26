import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Cards/Card";
import recipes from "./data/recipes.json";
import { Route } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./screens/Recipes";

function App() {
  return (
    <>
      <Header />

      <Route exact path="/recipes/:id" component={RecipeDetails} />
      <Route exact path="/recipes" component={Recipes} />

      <Footer />
    </>
  );
}

export default App;

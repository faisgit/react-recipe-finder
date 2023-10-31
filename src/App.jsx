import React, { useState } from "react";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeListContainer from "./components/recipe-list-container";
import axios from "axios";
export default function App() {
  const [recipeList, updateRecipeList] = useState([]);
  const App_Id = "5ccc46b8";
  const App_Key = "c9d7bb18156fe2008441c422e4b904f0";
  const fetchData = async (searchRecipe) => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchRecipe}&app_id=${App_Id}&app_key=%20${App_Key}%09`
    );
    updateRecipeList(response.data.hits);
  };
  console.log(recipeList);
  return (
    <Router>
      <Header fetchData={fetchData} />
      <Routes>
        <Route
          path="/"
          element={<RecipeListContainer recipeList={recipeList} />}
        />
      </Routes>
    </Router>
  );
}

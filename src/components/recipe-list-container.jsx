import React from "react";
import RecipeList from "./recipe-list";
import Logo from "../assets/logo.png";
export default function RecipeListContainer(props) {
  return (
    <div className="flex flex-wrap gap-8 px-10 justify-center items-center mt-5">
      {props.recipeList.length ? (
        props.recipeList.map((list) => <RecipeList list={list.recipe} />)
      ) : (
        <div className="h-[80vh] flex justify-center items-center">
          <img
            src={Logo}
            className=" h-52 w-52 md:h-72 md:w-72 rounded-full opacity-30"
          />
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

function SavedRecipes({user}) {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    // Make a GET request to retrieve the user's saved recipes
    axios.get(`/saved_recipes?id=${user.id}`).then((response) => {
      console.log(response.data);
      setSavedRecipes(response.data);
    });
  }, []);

  return (
    <div>
      {savedRecipes.length > 0 ? (
        <ul>
          {savedRecipes.map((recipe) => (
            <li key={recipe.recipe.id}>
                <p>{recipe.recipe.title}</p>
              <img src={recipe.recipe.image} alt={recipe.name} />
              <h3>{recipe.recipe.name}</h3>
              <p>{recipe.recipe.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no saved recipes.</p>
      )}
    </div>
  );
}

export default SavedRecipes;

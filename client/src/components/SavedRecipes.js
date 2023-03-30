import React, { useState, useEffect } from "react";
import axios from "axios";

function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    // Make a GET request to retrieve the user's saved recipes
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setSavedRecipes(response.data);
    });
  }, []);

  return (
    <div>
      {savedRecipes.length > 0 ? (
        <ul>
          {savedRecipes.map((recipe) => (
            <li key={recipe.id}>
                <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.name} />
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
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
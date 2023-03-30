import React, { useState, useEffect } from "react";

function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    // Make a GET request to retrieve the user's saved recipes
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setSavedRecipes(data));
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

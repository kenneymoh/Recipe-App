import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Recipe({user}) {
  const [recipes, setRecipes] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  useEffect(() => {
    fetch('/recipes')
      .then(response => response.json())
      .then(data => {
        setRecipes(data);
        console.log(data);
        console.log(user)
        setDisabledButtons(new Array(data.length).fill(false));
      });
  }, []);
  const handleDeleteRecipe = (recipeId, index) => {
    if (!disabledButtons[index]) {
      setDisabledButtons(disabledButtons.map((value, i) => i === index ? true : value));
      fetch(`/recipes/${recipeId}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
          setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
        })
        .catch(error => console.error(error));
        window.location.reload();
    }
  };
  function handleSaveRecipe(id) {
    fetch('/saved_recipes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user_id: user.id,
            recipe_id: id
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <img src={recipe.image} alt={recipe.name} />
          <Link to = {`/recipedetails/${recipe.id}`}>more details</Link>
          <button onClick={() => handleSaveRecipe(recipe.id)}>Save</button>
{          user.id == recipe.user_id && 
<>
{/* <button>Update</button> */}
<button onClick={() => handleDeleteRecipe(recipe.id, index)} disabled={disabledButtons[index]}>Delete</button>
</>
}        </div>
      ))}
    </div>
  );
}
export default Recipe;
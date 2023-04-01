import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateRecipe from './UpdateRecipe';
function RecipeDetails() {
  const { recipeId } = useParams();
  const [oneRecipe, setRecipe] = useState(null);
  useEffect(() => {
    fetch(`/recipes/${recipeId}`)
      .then(response => response.json())
      .then(data => setRecipe(data))
      .catch(error => console.error(error));
  }, [recipeId]);
  if (!oneRecipe) {
    return <div>Loading...</div>;
  }
  const { name, image, cooking_time, description } = oneRecipe;
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} />
      <p>{cooking_time}</p>
      <p>{description}</p>
      <UpdateRecipe />
    </div>
  );
}
export default RecipeDetails;
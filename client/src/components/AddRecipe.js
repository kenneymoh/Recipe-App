import React, { useState } from 'react';
const AddRecipe = ({ user, addRecipeCallback, deleteRecipeCallback }) => {
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    image: '',
    cookingTime: '',
    user_id: user.id
  });
  const [addedRecipe, setAddedRecipe] = useState(null);
  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/recipes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })
      .then(response => response.json())
      .then(data => {
        setAddedRecipe(data);
        // addRecipeCallback(data);
      });
  };
  const handleDeleteRecipe = async () => {
    try {
      await fetch(`/recipes/${addedRecipe.id}`, {
        method: 'DELETE'
      });
      setAddedRecipe(null);
      // deleteRecipeCallback(addedRecipe.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {addedRecipe ? (
        <div>
          <h2>{addedRecipe.name}</h2>
          <p>{addedRecipe.description}</p>
          <img src={addedRecipe.image} alt={addedRecipe.name} />
          <p>Cooking time: {addedRecipe.cookingTime} minutes</p>
          <button onClick={handleDeleteRecipe}>Delete recipe</button>
        </div>
      ) : (
        <div>
          <h2>Add a new recipe</h2>
          <label>
            Name:
            <input type="text" name="name" value={recipe.name} onChange={handleChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={recipe.description} onChange={handleChange} />
          </label>
          <label>
            Image:
            <input type="text" name="image" value={recipe.image} onChange={handleChange} />
          </label>
          <label>
            Cooking time (minutes):
            <input type="number" name="cookingTime" value={recipe.cookingTime} onChange={handleChange} />
          </label>
          <button onClick={handleSubmit}>Add recipe</button>
        </div>
      )}
    </div>
  );
};
export default AddRecipe;

import React, { useState } from 'react';

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeImage, setRecipeImage] = useState('');
  const [recipeOrigin, setRecipeOrigin] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleRecipeNameChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handleRecipeImageChange = (e) => {
    setRecipeImage(e.target.value);
  };

  const handleRecipeOriginChange = (e) => {
    setRecipeOrigin(e.target.value);
  };

  const handleRecipeDescriptionChange = (e) => {
    setRecipeDescription(e.target.value);
  };

  const handleAddRecipe = () => {
    const newRecipe = {
      name: recipeName,
      image: recipeImage,
      origin: recipeOrigin,
      description: recipeDescription,
    };

    fetch('/api/category', {
      method: 'POST',
      body: JSON.stringify(newRecipe),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setRecipes([...recipes, data]);
      setRecipeName('');
      setRecipeImage('');
      setRecipeOrigin('');
      setRecipeDescription('');
    });
  };

  const handleDeleteRecipe = (recipeId) => {
    fetch(`/api/category/${recipeId}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
      setRecipes(updatedRecipes);
    });
  };

  const handleEditRecipe = (recipeId, updatedRecipe) => {
    fetch(`/api/category/${recipeId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedRecipe),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      const updatedRecipes = recipes.map((recipe) =>
        recipe.id === data.id ? data : recipe
      );
      setRecipes(updatedRecipes);
    });
  };

  return (
    <div>
      <h2>Add Category</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={recipeName} onChange={handleRecipeNameChange} />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" value={recipeImage} onChange={handleRecipeImageChange} />
      </div>
      <div>
        <label>Origin:</label>
        <input type="text" value={recipeOrigin} onChange={handleRecipeOriginChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={recipeDescription} onChange={handleRecipeDescriptionChange} />
      </div>
      <button onClick={handleAddRecipe}>Add category</button>
      <h2>categories</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          <img src={recipe.image} alt={recipe.name} />
          <p>{recipe.origin}</p>
          <p>{recipe.description}</p>
          <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
          <button onClick={() => handleEditRecipe(recipe.id, recipe)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default AddRecipe;

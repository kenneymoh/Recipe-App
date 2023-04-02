import React, { useState, useEffect } from "react";
const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    fetch("/categories")
      .then(response => response.json())
      .then(data => {
        const categories = data.map(item => item.title);
        setCategories(categories);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const handleAddCategory = () => {
    fetch("/categories", {
      method: "POST",
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
  const handleDeleteCategory = (index) => {
    const categoryId = categories[index].id;
    fetch(`/categories/${categoryId}`, {
      method: "DELETE"
    })
    .then(() => {
      const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
      setRecipes(updatedRecipes);
    });
  };
  const handleUpdateCategory = () => {
    const categoryId = categories[selectedCategory].id;
    fetch(`/categories/${categoryId}`, {
      method: "PUT",
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

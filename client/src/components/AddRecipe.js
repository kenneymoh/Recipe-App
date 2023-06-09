import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import {  } from 'react-router-dom';
const AddRecipe = ({ user, addRecipeCallback, deleteRecipeCallback }) => {
  const navigate = useNavigate()
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
    console.log(recipe)
    // return
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
        navigate('/recipe')
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
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 pt-50">
      {addedRecipe ? (
        <div>
          <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{addedRecipe.name}</h2>
          <p>{addedRecipe.description}</p>
          <img src={addedRecipe.image} alt={addedRecipe.name} />
          <p>Cooking time: {addedRecipe.cookingTime} minutes</p>
          <button onClick={handleDeleteRecipe} className="text-blue-700 hover:underline dark:text-blue-500">Delete recipe</button>
        </div>
      ) : (

    <div className="container mt-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new recipe to our awesome recipe collection.
          </h1>
          <div className="form-group">
          <label>
            Recipe Name:
            <input type="text" name="name" value={recipe.name} onChange={handleChange} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Description:
            <textarea name="description" value={recipe.description} onChange={handleChange} />
          </label>
          </div>

          <label>
            Image:
            <input type="text" name="image" value={recipe.image} onChange={handleChange} />
          </label>

          <label>
            Cooking time (minutes):
            <input type="number" name="cookingTime" value={recipe.cookingTime} onChange={handleChange} />
          </label>

          <button onClick={handleSubmit} className="text-blue-700 hover:underline dark:text-blue-500">Add recipe</button>
          <Link to="/recipe" className="btn btn-link mt-3"> Back to recipes </Link>
        </div>
      </div>
      </div>
        )}
    </div>
  );
};
export default AddRecipe;

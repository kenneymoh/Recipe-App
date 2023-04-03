// import React, { useState } from 'react';
// function DeleteRecipe(props) {
//   const [message, setMessage] = useState("");
//   function handleClick() {
//     fetch(`/categories/${props.recipeId}`, {
//       method: 'DELETE',
//     })
//     .then(response => {
//       if (response.ok) {
//         setMessage("Recipe deleted successfully.");
//       } else {
//         setMessage("An error occurred while deleting the recipe.");
//       }
//     })
//     .catch(error => {
//       setMessage("An error occurred while deleting the recipe.");
//     });
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Delete Recipe</button>
//       <p>{message}</p>
//     </div>
//   );
// }
// export default DeleteRecipe;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function DeleteRecipe({ user }) {
  const [recipes, setRecipes] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetch('/recipes')
      .then(response => response.json())
      .then(data => {
        setRecipes(data);
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
  const filteredRecipes = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center my-4">
        <input
          className="border border-gray-400 rounded py-2 px-4 mr-2"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSearchTerm('')}>
          Clear
        </button>
      </div>
      {filteredRecipes.map((recipe, index) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <img src={recipe.image} alt={recipe.name} />
          <Link to={`/recipedetails/${recipe.id}`}>more details</Link>
          <button onClick={() => handleSaveRecipe(recipe.id)}>Save</button>
          {user.id === recipe.user_id && (
            <>
              <button>Update</button>
              <button onClick={() => handleDeleteRecipe(recipe.id, index)} disabled={disabledButtons[index]}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
export default DeleteRecipe;

import React, { useState } from 'react';
function DeleteRecipe(props) {
  const [message, setMessage] = useState("");
  function handleClick() {
    fetch(`/api/recipes/${props.recipeId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setMessage("Recipe deleted successfully.");
      } else {
        setMessage("An error occurred while deleting the recipe.");
      }
    })
    .catch(error => {
      setMessage("An error occurred while deleting the recipe.");
    });
  }
  return (
    <div>
      <button onClick={handleClick}>Delete Recipe</button>
      <p>{message}</p>
    </div>
  );
}
export default DeleteRecipe;
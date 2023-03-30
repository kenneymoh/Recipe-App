import React, { useState } from 'react';
const UpdateRecipe = ({ recipe, currentUser }) => {
  const [updatedRecipe, setUpdatedRecipe] = useState(recipe || {});
  const handleSave = () => {
    // save the updated recipe
    console.log('Recipe saved:', updatedRecipe);
  };
  const handleChange = (event) => {
    setUpdatedRecipe({
      ...updatedRecipe,
      [event.target.name]: event.target.value
    });
  };
//   if (!recipe || currentUser !== recipe.updatedBy) {
//     return (
//       <div>
//         <p>Sorry, only the user who updated this recipe can save it.</p>
//       </div>
//     );
//   }
  return (
    <div>
      <h2>Update Recipe</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={updatedRecipe.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ingredients:
          <textarea
            name="ingredients"
            value={updatedRecipe.ingredients}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Directions:
          <textarea
            name="directions"
            value={updatedRecipe.directions}
            onChange={handleChange}
          />
        </label>
      </form>
      <button onClick={handleSave}>Save Recipe</button>
    </div>
  );
};
export default UpdateRecipe;

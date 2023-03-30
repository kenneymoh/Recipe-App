import React, { useState } from 'react';
const AddRecipe = () => {
const [recipe, setRecipe] = useState({
name: '',
description: '',
image: '',
cookingTime: ''
});
const [addedRecipe, setAddedRecipe] = useState(null);
const handleInputChange = (event) => {
const { name, value } = event.target;
setRecipe({ ...recipe, 
  [event.target.name] : [event.target.value] });
};
const handleAddRecipe = async () => {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(recipe)
});
const data = await response.json();
setAddedRecipe(data);
} catch (error) {
console.log(error);
}
};
const handleDeleteRecipe = async () => {
try {
await fetch(`https://jsonplaceholder.typicode.com/posts/${addedRecipe.id}`, {
method: 'DELETE'
});
setAddedRecipe(null);
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
<input type="text" name="name" value={recipe.name} onChange={handleInputChange} />
</label>
<label>
Description:
<textarea name="description" value={recipe.description} onChange={handleInputChange} />
</label>
<label>
Image:
<input type="text" name="image" value={recipe.image} onChange={handleInputChange} />
</label>
<label>
Cooking time (minutes):
<input type="number" name="cookingTime" value={recipe.cookingTime} onChange={handleInputChange} />
</label>
<button onClick={handleAddRecipe}>Add recipe</button>
</div>
)}
</div>
);
};
export default AddRecipe;
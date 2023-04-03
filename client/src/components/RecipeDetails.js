import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetails({recipe}) {
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
    const {recipeId} = useParams()
    const [oneRecipe, setRecipe] = useState([])
    useEffect(() => {
        fetch(`/recipes/${recipeId}`)
        .then(response => response.json())
        .then(data => setRecipe(data))
    }, [])

    const { name, image, cooking_time, description } = oneRecipe;
    
  return (
    
      <div className='grid grid-cols-3 md:grid-cols-2 gap-4 bg-orange-100'>
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 pt-50 " >
        
            <div>
                <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{name}</h1>
                <img src={image} />
                <p>{description}</p>
                <p>{cooking_time}</p>
                <button className="text-blue-700 hover:underline dark:text-blue-500" >Update</button>
            </div>
        
    </div>
    </div>
  )
}

export default RecipeDetails
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetails() {
    const {recipeId} = useParams()
    const [oneRecipe, setRecipe] = useState([])
    useEffect(() => {
        fetch(`/recipes/${recipeId}`)
        .then(response => response.json())
        .then(data => setRecipe(data))
    }, [])

    const { name, image, cooking_time, description } = oneRecipe;
    
  return (
    <div>
        
            <div>
                <h1>{name}</h1>
                <img src={image} />
                <p>{cooking_time}</p>
                <p>{description}</p>
            </div>
        
    </div>
  )
}

export default RecipeDetails
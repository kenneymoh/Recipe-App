import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetails() {
    const {recipeId} = useParams()
    const [oneRecipe, setRecipe] = useState([])
    useEffect(() => {
        fetch(`/categories/${recipeId}`)
        .then(response => response.json())
        .then(data => setRecipe(data))
    }, [])
    
  return (
    <div>
        {oneRecipe.map((rec) => 
            <div>
                <h1>{rec.name}</h1>
                <p>{rec.image}</p>
                <p>{rec.cooking_time}</p>
                <p>{rec.description}</p>
            </div>
        )}
    </div>
  )
}

export default RecipeDetails
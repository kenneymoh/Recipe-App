import React from 'react'
import { useState } from 'react'

function Recipe() {
    const [recipes, setRecipes] = useState([])
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        setRecipes(data)
    }, [])
  return (

    <div>
        {recipes.map((recipe) => 
                <div>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.description}</p>
                    <img src={recipe.image}/>
                </div>
            
        )}
    </div>
  )
}

export default Recipe
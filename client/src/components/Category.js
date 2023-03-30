import React, { useState } from 'react'

function Category() {
    const [category, setCategory] = useState([])

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      setCategory(data)
    }
      )

  return (
    <div>
        {category.map(cat => {
          
        })}
    </div>
  )
}

export default Category
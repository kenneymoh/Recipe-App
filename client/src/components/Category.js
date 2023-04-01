// import React, { useEffect, useState } from 'react'

// function Category() {
//     const [category, setCategory] = useState([])

//     useEffect(() => {

//       fetch("/categories")
//       .then(response => response.json())
//       .then(data => {
//         // console.log(data)
//         setCategory(data)
//       }
//         )
//     }, [])

//   return (
//     <div>
//         {category.map(cat => {
//           <div>
//           <h4>{cat.name}</h4>
//           <p>{cat.description}</p>
//           </div>
//         })}
//     </div>
//   )
// }

// export default Category




import React, { useEffect } from 'react'
import { useState } from 'react'

function Category() {
    const [category, setCategories] = useState([])
    useEffect(() => {
      fetch("/categories")
      .then(response => response.json())
      .then(data => {
          // console.log(data)
          setCategories(data)
      })
    }, [])
  return (

    <div>
        {category.map((cat) => 
                <div>
                    <h2>{cat.name}</h2>
                    <p>{cat.description}</p>
                    <img src={cat.image}/>
                </div>
            
        )}
    </div>
  )
}

export default Category

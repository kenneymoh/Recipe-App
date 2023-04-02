import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <NavLink to = '/home'>Home</NavLink>
        {/* <NavLink to = '/register'>Register</NavLink> */}
        <NavLink to = '/recipe'>Recipe</NavLink>
        <NavLink to = '/addrecipe'>Add Recipe</NavLink>
        {/* <NavLink to = '/delete'>Delete Recipe</NavLink> */}
        <NavLink to = '/category'>Category</NavLink>
        {/* <NavLink to = '/update'>Update</NavLink> */}
        <NavLink to = '/addcategory'>Add Category</NavLink>
        <NavLink to = '/saved'>Saved</NavLink>
        {/* <NavLink to = '/recipedetails'>Details</NavLink> */}
        {/* <NavLink to = '/login'>Login</NavLink> */}
        {/* <NavLink to = '/search'>Search</NavLink> */}
        <NavLink to = '/landing'>Landing</NavLink>

    </div>
  )
}

export default Navbar
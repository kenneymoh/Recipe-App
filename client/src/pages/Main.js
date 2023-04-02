import React from 'react'
import Navbar from '../components/commons/Navbar'
import Home from './Home.js'
import Footer from '../components/commons/Footer'
import Login from '../components/Login'
import { Routes, Route} from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import Register from '../components/Register'
// import Landing from '../components/Landing'
import AddRecipe from '../components/AddRecipe'
import Recipe from '../components/Recipe'
import { useState } from 'react'


function Main() {
  const [user, setUser] = useState({})
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route
        exact
        path = '/home'
        element = {<Home />}
        />
        <Route
        exact
        path = '/register'
        element = {<Register />}
        />
        <Route
        exact
        path = '/login'
        element = {<Login />}
        />
        <Route
        exact
        path = '/addcategory'
        element = {<AddRecipe user={user} />}
        />
        <Route
        exact
        path = '/recipe'
        element = {<Recipe user={user}/>}
        />
        <Route
        exact
        path = '/addrecipe'
        element = {<AddRecipe user = {user} />}
        />
         <Route
        exact
        path = '/category'
        element = {<Category />}
        />
        <Route
        exact
        path = '/update'
        element = {<UpdateRecipe />}
        />
        <Route
        exact
        path = '/addcategory'
        element = {<AddCategory />}
        />
        <Route
        exact
        path = '/saved'
        element = {<SavedRecipes user = {user} />}
        />
        <Route
        exact
        path = '/recipedetails/:recipeId'
        element = {<RecipeDetails />}
        />
        <Route
        exact
        path = '/login'
        element = {<Login setUser= {setUser}/>}
        />
        <Route
        exact
        path = '/search'
        element = {<Search />}
        />
        <Route
        exact
        path = '/landing'
        element = {<Landing />}
        />
      </Routes>
      <Footer/>
    </div>
  )
}

export default Main

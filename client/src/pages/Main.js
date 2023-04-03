import React from 'react'
// import Navbar from '../components/commons/Navbar'
import Home from './Home.js'
import Footer from '../components/commons/Footer'
import Login from '../components/Login'
import { Routes, Route} from 'react-router-dom'
import Register from '../components/Register'
import AddRecipe from '../components/AddRecipe'
import Recipe from '../components/Recipe'
import { useState } from 'react'
import UpdateRecipe from '../components/UpdateRecipe'
import Category from '../components/Category'
import AddCategory from '../components/AddCategory'
import SavedRecipes from '../components/SavedRecipes'
import RecipeDetails from '../components/RecipeDetails'
import Search from '../components/Search'


function Main() {
  const [user, setUser] = useState({})
  return (
    <div>
      {/* <Navbar/> */}
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
        {/* <Route
        exact
        path = '/addrecipe'
        element = {<AddRecipe user={user} />}
        /> */}
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
      </Routes>
      <Footer/>
    </div>
  )
}

export default Main

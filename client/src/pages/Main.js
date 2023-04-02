import React from 'react'
import Navbar from '../components/commons/Navbar'
import Home from './Home.js'
import Footer from '../components/commons/Footer'
import Login from '../components/Login'
import { Routes, Route} from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import Register from '../components/Register'
import Landing from '../components/Landing'
import AddRecipe from '../components/AddRecipe'

function Main() {
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
        element = {<AddRecipe />}
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

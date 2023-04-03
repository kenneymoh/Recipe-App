import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Home from "./views/Home";
import Recipe from "./components/Recipe";
import AddRecipe from "./components/AddRecipe";
import DeleteRecipe from "./components/DeleteRecipe";
import Category from "./components/Category";
import UpdateRecipe from "./components/UpdateRecipe";
import AddCategory from "./components/AddCategory";
import SavedRecipes from "./components/SavedRecipes";
import RecipeDetails from "./components/RecipeDetails";
import Login from "./components/Login";
import Search from "./components/Search";
import Landing from "./components/Landing";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({})
  return (
    <div className="App">
        <Navbar />
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
        path = '/recipe'
        element = {<Recipe user = {user} />}
        />
        <Route
        exact
        path = '/addrecipe'
        element = {<AddRecipe user = {user} />}
        />
        {/* <Route
        exact
        path = '/delete'
        element = {<DeleteRecipe />}
        /> */}
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
    </div>
  );
}

export default App;

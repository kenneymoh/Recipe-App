import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
function Landing() {
  const navigate = useNavigate()
  const [name, setName] = useState('hhvv')
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [recipes, setRecipes] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  useEffect(() => {
    fetch('/recipes')
      .then(response => response.json())
      .then(data => {
        setRecipes(data);
        setDisabledButtons(new Array(data.length).fill(false));
      });
  }, []);
  const handleDeleteRecipe = (recipeId, index) => {
    if (!disabledButtons[index]) {
      setDisabledButtons(disabledButtons.map((value, i) => i === index ? true : value));
      fetch(`/recipes/${recipeId}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
          setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
        })
        .catch(error => console.error(error));
        window.location.reload();
    }
  };
  return (
    <form>
        <div>
            {recipes.map((recipe, index) => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.description}</p>
                    <img src={recipe.image} alt={recipe.name} />
                    <button onClick={() => handleDeleteRecipe(recipe.id, index)} disabled={disabledButtons[index]}>Delete</button>
                </div>
      ))}
        </div>
      <button onClick={() => { localStorage.removeItem('token')}}>Logout</button>
    </form>
  )
}
export default Landing
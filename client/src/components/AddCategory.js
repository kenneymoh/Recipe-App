import React, { useState, useEffect } from "react";
const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        const categories = data.map(item => item.title);
        setCategories(categories);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const handleAddCategory = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: newCategory })
    })
      .then(response => response.json())
      .then(data => {
        const updatedCategories = [...categories, data.title];
        setCategories(updatedCategories);
        setNewCategory("");
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleDeleteCategory = (index) => {
    const categoryId = categories[index].id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${categoryId}`, {
      method: "DELETE"
    })
      .then(() => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
        setSelectedCategory(null);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleUpdateCategory = () => {
    const categoryId = categories[selectedCategory].id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: newCategory })
    })
      .then(() => {
        const updatedCategories = [...categories];
        updatedCategories[selectedCategory] = newCategory;
        setCategories(updatedCategories);
        setSelectedCategory(null);
        setNewCategory("");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Recipe Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
            <button onClick={() => handleDeleteCategory(index)}>Delete</button>
            <button onClick={() => setSelectedCategory(index)}>Edit</button>
          </li>
        ))}
      </ul>
      {selectedCategory !== null ? (
        <div>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button onClick={handleUpdateCategory}>Update Category</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button onClick={handleAddCategory}>Add Category</button>
        </div>
      )}
    </div>
  );
};
export default AddCategory;
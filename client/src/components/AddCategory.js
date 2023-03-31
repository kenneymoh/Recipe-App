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
    // code for updating category
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <span onClick={() => setSelectedCategory(index)}>{category}</span>
            <button onClick={() => handleDeleteCategory(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newCategory}
        onChange={e => setNewCategory(e.target.value)}
      />
      <button onClick={handleAddCategory}>Add Category</button>
    </div>
  );
};

export default AddCategory;

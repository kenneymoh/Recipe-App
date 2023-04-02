import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Make a request to the API endpoint that returns the user's profile data
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        // Handle the response and update the state of the component with the user's profile data
        setUserProfile(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make a PUT request to the API endpoint to update the user's name and email
    axios.put("https://jsonplaceholder.typicode.com/posts", { name, email })
      .then(response => {
        // Handle the response and update the state of the component with the updated user's profile data
        setUserProfile(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
      <p>Saved Recipes: {userProfile.savedRecipes}</p>
    </div>
  );
};

export default UserProfile;

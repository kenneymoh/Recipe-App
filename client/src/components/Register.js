import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate()
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      });
      const data = await response.json();
      console.log(data);
      // clear form fields and error message
      setUserName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error registering user');
    }
    navigate('/login')
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">UserName:</label>
        <input type="text" id="name" value={username} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </form>
  );
}
export default Register;
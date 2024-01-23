import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignup = () => {
    // signup logic goes here my G the API request to create a new user
    // ukieka data unaeza assume uingie tu for testing
    navigate('/');
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>Sign up</h1>
      </div>
      <div className="card-body">
        <form>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="button" onClick={handleSignup}>
            Sign up
          </button>
        </form>
        <p>
        🚀 Already have an account?  <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate();

    const handleLogin = () => {
      // Add logic for validating the login credentials from backend
      // an example to show that userId and password is working
      if (userId && password) {
        navigate('/landing');
      }
    };
  
    return (
        <div className="card">
        <div className="card-header">
          <h1>Login</h1>
        </div>
        <div className="card-body">
          <form>
            <label>User ID:</label>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
          <p>
            New user? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    );
  };
  
  export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// Import toast styles in your main stylesheet or component
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
}
  
function valider() {
  if (!username || !password) {

    toast.warning("Vous devez remplir tous les champs");
  } else if (username === "admin" && password === "1234") {
    navigate('/list');
  } else {
    toast.warning("Identifiants incorrects");

    
  }
  <ToastContainer/>
}



  return (
    <div>
      
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={valider}>
          Login
        </button>
        <ToastContainer/>
      </form>
    </div>
  );
};

export default Login;

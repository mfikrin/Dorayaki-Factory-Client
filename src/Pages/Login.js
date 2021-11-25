import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import "./Login.css";
import Auth from "../Auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const handleSubmit = async event => {
        event.preventDefault();
        try{
          const body = {username,password};
          await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          }).then(response => response.json().then(data => {
            if(data.accToken == undefined){
              setErrorMessage("Invalid Login");
    
            }
            else{
              localStorage.setItem("user",JSON.stringify(data))
              // console.log(JSON.stringify(data));
              history.replace(from);
              // console.log(Auth.getUser().accToken);
            }
          }));
          
        }
        catch(err){
          console.error(err.message);
        }
};

  return (
    <div className ="Body">
    <div className="Login">
      <h1 className="text-center" id="title">Dorayaki Factory.</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <span className='form-input-login'>
            Don't have an account? Signup <a href='/signup'>here</a>
        </span>
        {errorMessage && <div className="error"> {errorMessage} </div>}
      </Form>
    </div>
    </div>
  );
}

export default Login;

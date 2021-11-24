import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import "./Signup.css";
import Auth from "../Auth";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  function validateForm() {
    return username.length > 0 && password.length > 0 && email.length>0 && password2.length>0;
  }

  const handleSubmit = async event => {
        event.preventDefault();
        try{
          const body = {username,password};
          await fetch("http://localhost:5000/signup", {
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
              // console.log(Auth.getUser());
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
      <h1 className="text-center" id="title">Register to Dorayaki Factory.</h1>
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
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <Form.Group size="lg" controlId="password2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
        {errorMessage && <div className="error"> {errorMessage} </div>}
      </Form>
    </div>
    </div>
  );
}

export default Signup;

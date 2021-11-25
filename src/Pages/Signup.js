import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import "./Signup.css";
import Auth from "../Auth";
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password:'',
    password2:''
  });

  const [errors, setErrors]= useState ({});
  const [isValid, setIsvalid]= useState (true);
  const [status, setStatus]= useState ();

  const handleChange = e => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    // Sign up Form validation
    let errorsTemp = {}
    setIsvalid(true);

    // Username
    if(!values.username.trim()){
        errorsTemp.username = "Username required"
        setIsvalid(false);
    }
    if (!values.email) {
        errorsTemp.email = 'Email required';
        setIsvalid(false);
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errorsTemp.email = 'Email address is invalid';
        setIsvalid(false);
    }
    if (!values.password) {
        errorsTemp.password = 'Password is required';
        setIsvalid(false);
    }
    if (!values.password2) {
        errorsTemp.password2 = 'Password is required';
        setIsvalid(false);
    } else if (values.password2 !== values.password) {
        errorsTemp.password2 = 'Passwords do not match';
        setIsvalid(false);
    }
    
    setErrors(errorsTemp);


    // if (isValid){
    //   console.log("sudah benar 3")
    //   const body = {
    //     username: values.username,
    //     email: values.email,
    //     password: values.password
    //   }
    //   axios.post("http://localhost:5000/users", body).then(response =>{
    //     console.log(response.data)
    //     if (response.data.username==values.username && response.data.email==values.email && response.data.password==values.password){
    //       statusTemp = "Sign up berhasil"
    //     }
    //   })
    // }
    // setStatus(statusTemp)
  };

  useEffect(()=>{
    let statusTemp = '';
    if(isValid){
      const body = {
      username: values.username,
      email: values.email,
      password: values.password
      }
      axios.post("http://localhost:5000/users", body).then(response =>{
        if (response.data.username==values.username && response.data.email==values.email && response.data.password==values.password){
          statusTemp = "Sign up berhasil";
          setStatus(statusTemp);
        } else {
          statusTemp = '';
          setStatus(statusTemp);
        }
      });
    }
  }, [errors]);

  return (
    <div className ="Body">
    <div className="Login">
      <h1 className="text-center" id="title">Register to Dorayaki Factory.</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            // id='username'
            type="text"
            name='username'
            value={values.username}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.username && <p className='error-prompt'>{errors.username}</p>}
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            // id='email'
            type="text"
            name='email'
            value={values.email}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.email && <p className='error-prompt'>{errors.email}</p>}
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // id='password'
            type="password"
            name='password'
            value={values.password}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password && <p className='error-prompt'>{errors.password}</p>}
        <Form.Group size="lg" controlId="password2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // id='password2'
            type="password"
            name='password2'
            value={values.password2}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password2 && <p className='error-prompt'>{errors.password2}</p>}
        <Button block size="lg" type="submit" >
          Sign Up
        </Button>
        <span className='form-input-login'>
            Already have an account? Login <a href='/login'>here</a>
        </span>
        {status && <p className='status-prompt'>{status}</p>}
      </Form>
    </div>
    </div>
  );
}

export default Signup;

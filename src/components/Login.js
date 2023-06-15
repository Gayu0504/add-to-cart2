import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
export default function Login() {
    const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");

  const [passwordError, setpasswordError] = useState("");

  const [usernameError, setusernameError] = useState("");

  const navigate = useNavigate();

  const handleValidation = (event) => {

    let formIsValid = true;

    if (!username.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setusernameError("User Name Not Valid");
      return false;
    } else {
      setusernameError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {

    e.preventDefault();
    handleValidation();

    if (username && password) {
      axios.post('http://localhost:8081/authentication/login', {
        email: username,
        password: password
      }).then((response) => {
        if (response.data.status === "success") {
          navigate("/home");
        }
        else {
          alert('invalid credentials...!');
        }
      })
    }
  }
    return (
        <div>
            <Header />
            <div className="Login container border mt-5">
                <h3 className="text-center text-primary">Login User</h3>
                <Form onSubmit={loginSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            onChange={(event) => setUsername(event.target.value)}
                        />
                     <h6 className="text-danger">   {usernameError}</h6>
                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}

                        />
                     <h6 className="text-danger">   {passwordError}</h6>
                    </Form.Group>
                    <br />
                    <Button block="true" size="lg" type="submit" >
                        Log In
                    </Button>

                </Form>
            </div>
        </div>
    )
}

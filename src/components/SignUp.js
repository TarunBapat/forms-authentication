import { Card, Button, Form, Alert } from "react-bootstrap";
import { useState, useRef } from "react";
const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Authentication Failed");
  const emailRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repassword = repasswordRef.current.value;
    if (password !== repassword) {
      setPasswordError(true);
    }
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDwpsEdD3DTA_PI5RqMH2BHxrr9FcJ8WEE";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwpsEdD3DTA_PI5RqMH2BHxrr9FcJ8WEE";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {
      if (resp.ok) {
        const data = await resp.json();
        console.log(data);
      } else {
        const data = await resp.json();
        setError(true);
        setErrorMessage(data.error.message);
      }
    });
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h1>User Registration</h1>
          {passwordError ? (
            <Alert className="alert-danger">password does not match</Alert>
          ) : null}
          {error ? (
            <Alert className="alert-danger">{errorMessage}</Alert>
          ) : null}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                ref={repasswordRef}
              />
            </Form.Group>
            <Button variant="primary" className="w-100" type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Button
        className="btn btn-success w-100 mt-4"
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Create New Account" : "Already a member"}
      </Button>
    </>
  );
};

export default SignUp;

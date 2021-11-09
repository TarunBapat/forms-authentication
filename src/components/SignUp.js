import { Card, Button, Form, Alert } from "react-bootstrap";
import { useState, useRef } from "react";
const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== repasswordRef.current.value) {
      setError(true);
    }

    console.log(emailRef.current.value);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h1>User Registration</h1>
          {error ? <Alert>password does not match</Alert> : null}
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

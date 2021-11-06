import { Card, Button, Form, Alert } from "react-bootstrap";
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
const Signup = () => {
  const [error, setError] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const resetPasswordRef = useRef();
  const { signUp } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Alert className="alert-danger text-center">{error}</Alert>
          <h1>User Registration</h1>
          <Form>
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
                ref={resetPasswordRef}
              />
            </Form.Group>
            <Button
              variant="primary"
              className="w-100"
              type="submit"
              onClick={submitHandler}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div>Already a member?</div>
    </>
  );
};

export default Signup;

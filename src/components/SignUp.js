import { Card, Button, Form } from "react-bootstrap";

const SignUp = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h1>User Registration</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" className="w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div>Already a member?</div>
    </>
  );
};

export default SignUp;

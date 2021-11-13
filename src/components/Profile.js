import { useRef,useContext } from "react";
import { Button, Form } from "react-bootstrap";
import {AuthContext} from '../contexts/AuthContext';

const Profile = () => {
  const changedPassword = useRef();
  const auth=useContext(AuthContext);
  const token=auth.token;
  const submitHandler = (e) => {
    e.preventDefault();
    const updatedPassword = changedPassword.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDwpsEdD3DTA_PI5RqMH2BHxrr9FcJ8WEE',
    {
      method:'POST',
      body:JSON.stringify({
        idToken:token,
        password:updatedPassword,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type':'applicaton/json'
      }
    }).then(async(resp)=>{
      //resp val
    })
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Change Password</Form.Label>
        <Form.Control
          type="email"
          placeholder="Change Password"
          ref={changedPassword}
        />
      </Form.Group>
      <Button className="btn btn-success" type="submit">
        Change Password
      </Button>
    </Form>
  );
};
export default Profile;

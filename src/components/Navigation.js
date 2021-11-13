import { Nav } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  const loginStatus = authCtx.isLoggedIn;
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      {!loginStatus && (
        <Nav.Item>
          <Nav.Link eventKey="link-1">Login</Nav.Link>
        </Nav.Item>
      )}
      {loginStatus && (
        <Nav.Item>
          <Nav.Link eventKey="link-2">Logout</Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  );
};

export default Navigation;

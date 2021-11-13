import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Signup from "./components/SignUp";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

export default function App() {
  return (
    <>
      <Navigation />
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
      <Profile />
    </>
  );
}

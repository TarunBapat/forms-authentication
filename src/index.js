import { StrictMode } from "react";
import ReactDOM from "react-dom";
import AuthContextProvider from "./contexts/AuthContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
  rootElement
);

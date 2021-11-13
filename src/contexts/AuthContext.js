import { createContext, Provider, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
  };
  const logOutHandler = () => {
    setToken(null);
  };
  const value = {
    token: token,
    login: loginHandler,
    isLoggedIn: userIsLoggedIn,
    logout: logOutHandler
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

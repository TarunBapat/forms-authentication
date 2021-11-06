import { createContext, useContext, useState, useEffect } from "react";
import fire from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsubscribe = fire.onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
  }, []);
  function signUp(email, password) {
    return fire.createUserWithEmailAndPassword(email, password);
  }
  let value = {
    currentUser,
    signUp
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

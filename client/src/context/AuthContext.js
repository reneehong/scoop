import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to set authentication status
  const signin = () => setIsAuthenticated(true);
  const signup = () => setIsAuthenticated(true);
  const signout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

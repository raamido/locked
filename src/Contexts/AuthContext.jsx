import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    loggedIn: false,
  });

  return (
    <AuthContext.Provider value={[User, setUser]}>
      {children}
    </AuthContext.Provider>
  );
};

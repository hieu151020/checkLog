import { useState } from "react";
import { createContext, useContext } from "react";

const AuthContext = createContext({
  isLogged: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const KEY_LOGIN = "token";
const MOCK_TOKEN = "abcyz";

const token = window.localStorage.getItem(KEY_LOGIN);

const Authentication = (props) => {
  const [isLogged, setLogged] = useState(!!token);

  const login = ({ username, password }) => {
    // call API -> attach token to header request -> call API get userInfo -> setUser(user)
    if (username === "admin" && password === "admin") {
      window.localStorage.setItem(KEY_LOGIN, MOCK_TOKEN);
      setLogged(true);
    }
  };

  const logout = () => {
    window.localStorage.removeItem(KEY_LOGIN);
    window.location.reload();
  };

  const values = {
    isLogged,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export default Authentication;

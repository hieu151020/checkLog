import Context from "./Context";

function Provider({ children }) {
  let isLogged = window.sessionStorage.getItem("user") ? true : false;

  return <Context.Provider value={isLogged}>{children}</Context.Provider>;
}

export default Provider;

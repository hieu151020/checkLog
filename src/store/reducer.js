import { LOG_OUT, SIGN_IN } from "./contant";

const initState = {
  isLogged: window.sessionStorage.getItem("user") ? true : false,
};

function reducer(state, action) {
  switch (action.type) {
    case SIGN_IN:
      state.isLogged = true;

      return state;
    case LOG_OUT:
      state.isLogged = false;

      return state;

    default:
      break;
  }
}

export { initState };
export default reducer;

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../components/Signin/Signin";
import PrivateRoute from "../components/PrivateRoute";
import baseUrl from "../consts/RouteBaseUrl";
import { Fragment } from "react";

const routes = [
  {
    path: baseUrl.home,
    element: Home,
    isPrivate: true,
  },
  {
    path: baseUrl.signIn,
    element: Signin,
    isPrivate: false,
  },
];

export const Routers = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const Wrapper = route.isPrivate ? PrivateRoute : Fragment;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Wrapper>
                <route.element />
              </Wrapper>
            }
          />
        );
      })}
    </Routes>
  );
};

export default Routers;

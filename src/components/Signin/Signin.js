import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router";
import Context from "../../store/Context";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import TextFieldFomik from "./TextField";
import { useAuth } from "../../store/AuthenticationProvider";
import baseUrl from "../../consts/RouteBaseUrl";

function Signin(props) {
  const { isLogged, login } = useAuth();

  const handleSignIn = (user) => {
    login({ username: user.username, password: user.password });
  };

  if (isLogged) {
    return <Navigate to={baseUrl.home} />;
  }

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          const { username, password } = values;
          let user = {
            username,
            password,
          };
          handleSignIn(user);
          console.log("values", values);
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("username are require"),
          password: Yup.string().required("password are require"),
        })}
      >
        {({ values, initialValues, touched }) => {
          return (
            <Box className="wrapper">
              <h1>Sign In</h1>
              <Box
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "500px" },
                }}
                autoComplete="off"
              >
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    width: 500,
                  }}
                >
                  <Field
                    name="username"
                    component={TextFieldFomik}
                    label="Username"
                    placeholder="Username"
                    variant="outlined"
                  />
                  <Field
                    name="password"
                    component={TextFieldFomik}
                    label="Password"
                    type="password"
                    placeholder="Password"
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ marginLeft: "5px" }}
                  >
                    Sign In
                  </Button>
                </Form>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </>
  );
  // <Formik
  //   initialValues={{
  //     username: "",
  //     password: "",
  //   }}
  //   validationSchema={Yup.object().shape({
  //     username: Yup.string().required("username are require"),
  //     password: Yup.string().required("password are require"),
  //   })}
  //   onSubmit={(values) => {
  //     const { username, password } = values;
  //     let user = {
  //       username,
  //       password,
  //     };
  //     console.log(values);
  //     // handleSignIn(user);
  //   }}
  // >
  //   {(propFomik) => (
  //     <Form>
  //       <Box className="wrapper">
  //         <h1>Sign In</h1>
  //         <Box
  //           sx={{
  //             "& .MuiTextField-root": { m: 1, width: "50ch" },
  //           }}
  //           autoComplete="off"
  //         >
  //           <Field
  //             component={TextFieldFomik}
  //             label="Username"
  //             name="username"
  //             // value={userName}
  //             // onChange={(e) => setUserName(e.target.value)}
  //             // multiline
  //             // maxRows={4}
  //           />
  //           <Field
  //             component={TextFieldFomik}
  //             label="Password"
  //             name="password"
  //             type="password"
  //             // value={password}
  //             // onChange={(e) => setPassword(e.target.value)}
  //           />
  //         </Box>
  //         <Box>
  //           <Button variant="contained" type="submit">
  //             Sign In
  //           </Button>
  //         </Box>
  //       </Box>
  //     </Form>
  //   )}
  // </Formik>
}

export default Signin;

import { Button } from "@mui/material";
import React from "react";
import { useAuth } from "../store/AuthenticationProvider";

function Home(props) {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      <Button variant="contained" onClick={logout}>
        Log out
      </Button>
    </div>
  );
}

export default Home;

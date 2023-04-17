import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleHome = () => {
    navigate("/");
  };

  const mystyle = {"margin":"0px 20px","textDecoration":"none", "font-family": 'Rubik', "font-size": "16px", "font-weight":"500"}
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      style={{"height":"120px","justifyContent":"center", "background":"#DAF5FF", "boxShadow":"0px 2px 5px 0px rgba(176,218,255,0.75"}}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
          onClick={handleHome}
        >
          <img src="logo_alt.png" alt="Social Pro" height="50px" />
        </Typography>
        <nav>
          <Link
            variant="button"
            color="#017dc5"
            href="#"
            style={mystyle}
            sx={{ my: 1, mx: 1.5 }}
          >
            Features
          </Link>
          <Link
            variant="button"
            color="#017dc5"
            href="#"
            style={mystyle}
            sx={{ my: 1, mx: 1.5 }}
          >
            Enterprise
          </Link>
          <Link
            variant="button"
            color="#017dc5"
            href="#"
            style={mystyle}
            sx={{ my: 1, mx: 1.5 }}
          >
            Support
          </Link>
        </nav>
        <Button
          variant="contained"
          sx={{ my: 1, mx: 1.5 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{ my: 1, mx: 1.5 }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

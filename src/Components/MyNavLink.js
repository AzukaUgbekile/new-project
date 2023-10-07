import React from "react";
import { AppBar, Toolbar, Typography, Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const navLinkStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "none",
    textDecoration: isActive ? "none" : "underline",
  };
};

function MyNavLink() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, backgroundColor: "purple" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
              AzGaius
            </Typography>
            <Stack direction="row" spacing={2}>
              <NavLink style={navLinkStyle} to="/">
                Home
              </NavLink>
              <NavLink style={navLinkStyle} to="/Signup">
                Register
              </NavLink>
              <NavLink style={navLinkStyle} to="/Courses">
                View Courses
              </NavLink>
              <NavLink style={navLinkStyle} to="/Contact">
                Contact Us
              </NavLink>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default MyNavLink;

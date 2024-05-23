import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography onClick={() => navigate("/")} variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }}>
            Álvaro Arpal
          </Typography>
          <Button onClick={() => navigate("/")} color="inherit" children="Home" />
          <Button onClick={() => navigate("/about")} color="inherit" children="About" />
          <Button onClick={() => navigate("/contact")} color="inherit" children="Contact" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

import React from "react";
import CasesIcon from '@mui/icons-material/Cases';
import "@fontsource/roboto/400.css";
import Typography from "@mui/material/Typography";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'


function Header() {
  return (
    <React.Fragment>
      <AppBar position="sticky" color="grey">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <CasesIcon />
          <Typography
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 800,
              fontSize:20,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ShowCase
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
export default Header;

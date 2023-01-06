import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography'
//TODO:
//melhor layout
//cadastro
//função login
function Login() {

  return (
  <React.Fragment >
     <Box
    >
        <Paper
        className="login-content"
        elevation={4}
        sx={{ 
          width: "90%",
          my:5
        }}
        >
        <div>
        <Typography
           
           href="/"
           sx={{
             my: 5,
             fontFamily: 'monospace',
             fontWeight: 600,
             fontSize: 20,
             letterSpacing: '.1rem',
             color: 'inherit',
             textDecoration: 'none',
           }}
         >
           LOGIN
         </Typography>
        </div>
        <div>
      <TextField label="E-mail" variant="outlined" />
        </div>

        <div>
         <TextField label="Senha" variant="outlined" />
        </div>

        <div>
        <Link to="/home"
             >
            <Button variant="contained"  sx={{ my: 5 }}>
                Entrar
            </Button>
        </Link>
        </div>
        </Paper>
    </Box>
  </React.Fragment>
      )}
export default Login;

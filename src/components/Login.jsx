import React, { useContext } from "react";
import { Context } from "../main";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button
} from "@mui/material";

const Login = () => {

  const { auth } = useContext(Context);

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Paper elevation={6} sx={{ p: 4, width: "100%" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>

          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2
          }}>
           

            <Button
              onClick={login}
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
            >
              Login with Google
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;

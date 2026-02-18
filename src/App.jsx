import React from "react";
import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "./main";
import Loader from "./components/Loader";
import { Box } from "@mui/material";

function App() {
  
const { auth } = React.useContext(Context);
  const [user, loading] =  useAuthState(auth);
  if(loading) {
   return <Loader/>
  }
  return (
     <BrowserRouter>
      
         <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <Navbar />
      <AppRouter />
    </Box>
  
    </BrowserRouter>
     
    
  )
}

export default App

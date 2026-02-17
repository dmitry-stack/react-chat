import React from "react";
import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "./main";
import Loader from "./components/Loader";

function App() {
  
const { auth } = React.useContext(Context);
  const [user, loading] =  useAuthState(auth);
  if(loading) {
   return <Loader/>
  }
  return (
     <BrowserRouter>
      
        <Navbar />
        <AppRouter />
    </BrowserRouter>
     
    
  )
}

export default App

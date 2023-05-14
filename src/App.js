import './App.css';
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  createBrowserRouter,
  RouterProvider,
 } from 'react-router-dom';
import About from './components/About';



function App() {
  const [mode, setmode] = useState('light');  // weather mode is enabled or not

  const [alert, setAlert] = useState(null);
  


  const showAlert = (message, type)=>{
     setAlert({
      msg: message,
      type: type
      
     })
     setTimeout(() => {
      setAlert(null);
     }, 1500);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#060e45';
      showAlert(" Dark mode has been enabled","success");
      document.title = 'TextUtils - DarkMode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert(" light mode has been enabled","success");
      document.title = 'TextUtils - LightMode';
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TextForm showAlert={showAlert} heading="Enter the text below to analyze " mode={mode}/>
    },
    {
      path: "/about",
      element: <About/>
    },
  ]);
  return(
   <>
   {/* <Navbar title="TextUtils" about= "about TextUtils" /> */}

   <Navbar  title="TextUtils" about= "about us" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
    <div className="container my-3" >
        <RouterProvider router={router} />
   </div>
   
   </>
  );
}

export default App;

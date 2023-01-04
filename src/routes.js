import React from "react";
import {
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import Product from "./views/Product";

const AppRoutes = () => {
   return(
       <BrowserRouter>
          <Routes>
           <Route element = { <Login /> }  path="/" />
           <Route element = { <Home /> }  path="/home" />
           <Route element = { <Product />}  path="/product" />
         </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;
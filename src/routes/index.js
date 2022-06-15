import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../views/home";
import About from "../views/about";
import Tours from "../views/Tours";
import HomeLayout from "../component/HomeLayout";

const Index =()=>{
  return (
  <HomeLayout>
    <Routes>
      <Route exact path="/home" element= {<Home/>}> </Route>
      <Route exact path="/about" element= {<About/>}></Route>
      <Route exact path="/Tours" element= {<Tours/>}></Route>
    </Routes>
    </HomeLayout>
  );
};
export default Index;
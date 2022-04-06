import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./screen/About";
import Home from "./screen/Home";
import Profile from "./screen/Profile";
// Non si importa più switch

const Component = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default Component;

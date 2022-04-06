import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./screen/About";
import ErrorPage from "./screen/ErrorPage";
import Home from "./screen/Home";
import Profile from "./screen/Profile";
// Non si importa più switch

const Component = () => {
  return (
    <Router>
      <nav className='d-flex flex-row justify-content-center mx-auto gap-2 mb-4'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/profile/1'>Profile1</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default Component;

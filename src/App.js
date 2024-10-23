import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";

import Alumini from "./pages/Alumini";

import Contact from "./pages/Contact";

import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/alumni" element={<Alumini />} />
        <Route path="/alumni/:id" element={<Alumini />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

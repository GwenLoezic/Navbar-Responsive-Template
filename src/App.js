import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";

// - Import des Components :
import Navbar from "./Components/Navbar/Navbar.js";

// - Import des Pages :
import Home from "./Pages/Home/Home.js";
import Contact from "./Pages/Contact/Contact.js";
import Projet from "./Pages/Projet/Projet.js";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Projet" element={<Projet />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

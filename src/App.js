import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Tours from "./pages/Tours";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TourDetails from "./pages/TourDetails";
import Apply from "./pages/Apply";
import toursData from "./data/toursData";

function App() {
  return (
    <LangProvider>
      <Router>
        <Navbar tours={toursData} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LangProvider>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/hero/Home";
import About from "./pages/about/About";
import Footer from "./components/navbar/Footer";
import Tickets from "./pages/hero/Tickets";
import { Detail } from "./pages/hero/Detail";

function App() {
  return (
    <>
      <Router>
        <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
          {/* Navbar */}
          <Navbar />
          {/* Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tickets" element={<Tickets />} />
            {/* Details */}
            <Route path="/support-team" element={<Detail />} />
          </Routes>
          {/* Footer */}
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;

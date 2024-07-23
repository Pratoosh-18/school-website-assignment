import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Navbar from "./components/Navigation/Navbar";
import AcademicsPage from "./pages/Academics";
import AdmissionsPage from "./pages/Admission";
import FacultyPage from "./pages/Faculty";
import StudentsPage from "./pages/Students";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

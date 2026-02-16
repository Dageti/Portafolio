import React from "react";
import "../src/css/App.css";
import "../src/css/home.css";
import "../src/css/aboutme.css";
import "../src/css/index.css";
import "../src/css/projectdetail.css";

import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home";
import Projects from "./pages/projects.jsx";
import Aboutme from "./pages/aboutme.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";
import ProjectDetail from "./pages/projectdetail.jsx";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/cubicacion" element={<Cubicacion />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;

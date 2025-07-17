import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import WorkDetail from "./pages/WorkDetail";
import NotFound from "./pages/NotFound";
import './index.css';
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

// Create a separate component that uses the router hooks
function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.slice(1) || 'portfolio';

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
      <NavigationBar 
        currentPage={currentPath} 
        onNavigate={(path) => navigate(`/${path}`)} 
      />
      <main className="flex-grow">
        <div className="min-h-full">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects/:projectName" element={<WorkDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Main App component that provides the Router context
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import WorkDetail from "./pages/WorkDetail";
import NotFound from "./pages/NotFound";
import './index.css';
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.slice(1) || 'portfolio';

  const [fadeClass, setFadeClass] = useState("opacity-100");

  // Handle browser/URL-based navigation
  useEffect(() => {
    setFadeClass("opacity-0");
    const timeout = setTimeout(() => setFadeClass("opacity-100"), 0);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Wrapped navigate function for NavigationBar
  const handleNavigate = (path: string) => {
    if (location.pathname === `/${path}`) return;

    setFadeClass("opacity-0");
    setTimeout(() => {
      navigate(`/${path}`);
    }, 300); // matches transition duration
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
      <NavigationBar currentPage={currentPath} onNavigate={handleNavigate} />
      <main className="flex-grow">
        <div className={`transition-opacity duration-300 ease-in-out ${fadeClass}`}>
          <Routes>
            <Route path="/" element={<Portfolio onNavigate={handleNavigate} />} />
            <Route path="/portfolio" element={<Portfolio onNavigate={handleNavigate} />} />
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
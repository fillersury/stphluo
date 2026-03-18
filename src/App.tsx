import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import "./index.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const About = lazy(() => import("./pages/About"));
const Resume = lazy(() => import("./pages/Resume"));
const WorkDetail = lazy(() => import("./pages/WorkDetail"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));

const RouteFallback = () => <div className="min-h-[40vh]" aria-hidden="true" />;

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
        <Suspense fallback={<RouteFallback />}>
          <div className={`transition-opacity duration-300 ease-in-out ${fadeClass}`}>
            <Routes>
              <Route path="/" element={<Portfolio onNavigate={handleNavigate} />} />
              <Route path="/portfolio" element={<Portfolio onNavigate={handleNavigate} />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects/:projectName/:caseName" element={<WorkDetail />} />
              <Route path="/projects/:projectName" element={<WorkDetail />} />
              <Route path="/case-studies" element={<CaseStudies onNavigate={handleNavigate} />} />
              <Route path="/case-studies/:projectName" element={<WorkDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
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

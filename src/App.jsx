import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

// Route-level code splitting keeps the initial bundle small.
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

// Scrolls to top on every route change so navigation feels intentional.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  // Plays the splash animation on every load/refresh.
  const [introPlaying, setIntroPlaying] = useState(true);

  useEffect(() => {
    if (!introPlaying) return;
    // Matches the entrance sequence length in LoadingScreen (~3s)
    // before triggering the exit fade.
    const timer = setTimeout(() => setIntroPlaying(false), 3000);
    return () => clearTimeout(timer);
  }, [introPlaying]);

  return (
    <div className="relative min-h-screen bg-base font-body text-ash">
      <AnimatePresence>{introPlaying && <LoadingScreen />}</AnimatePresence>

      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-base" />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

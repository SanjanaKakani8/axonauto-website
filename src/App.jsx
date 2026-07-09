import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

import Home from './pages/Home.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
// Route-level code splitting for secondary pages keeps the initial bundle small.
// Home is loaded eagerly since it must be mounted the instant the splash
// screen plays, so the shared logo layout transition has a target to land on.
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

// Scrolls to top on every route change so navigation feels intentional.

export default function App() {
  const location = useLocation();

  // Plays the splash animation on every load/refresh.
  const [introPlaying, setIntroPlaying] = useState(true);

  useEffect(() => {
    if (!introPlaying) return;
    // Matches the entrance sequence length in LoadingScreen (~3s)
    // before triggering the exit fade.
    const timer = setTimeout(() => setIntroPlaying(false), 3100);
    return () => clearTimeout(timer);
  }, [introPlaying]);

  return (
    <div className="relative min-h-screen bg-base font-body text-ash">
      <AnimatePresence>{introPlaying && <LoadingScreen />}</AnimatePresence>

      <ScrollToTop />
      <Navbar />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-base">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-primary" />
          </div>
        }
      >
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

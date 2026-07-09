import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

import Logo from './Logo.jsx';
import useScrollPosition from '../hooks/useScrollPosition.js';
import useRipple from '../hooks/useRipple.jsx';
import { business } from '../data/business.js';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const scrolled = useScrollPosition(40);
  const [mobileOpen, setMobileOpen] = useState(false);
  const desktopBookRipple = useRipple();
  const mobileBookRipple = useRipple();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-base/90 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between py-4">
        <Link to="/" aria-label="AxonAuto home">
          <Logo size="sm" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative font-display text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-primary' : 'text-ash hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative pb-1">
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0 left-0 right-0 h-[2px] bg-primary"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${business.contact.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-ash hover:text-white transition-colors"
          >
            <Phone size={16} className="text-primary" />
            {business.contact.phone}
          </a>
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm" onClick={desktopBookRipple.onClick}>
            Book Service
            {desktopBookRipple.ripples}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-base/95 backdrop-blur-md border-t border-white/5"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 font-display text-base font-medium transition-colors duration-200 ${
                        isActive ? 'text-primary' : 'hover:text-white'
                      }`
                    }
                    style={({ isActive }) => (isActive ? {} : { color: '#E5E5E5' })}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={(e) => {
                    setMobileOpen(false);
                    mobileBookRipple.onClick(e);
                  }}
                  className="btn-primary w-full text-sm"
                >
                  Book Service
                  {mobileBookRipple.ripples}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

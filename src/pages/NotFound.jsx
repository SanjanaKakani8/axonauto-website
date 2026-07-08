import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

import SEO from '../components/SEO.jsx';
import ParticleBackground from '../components/ParticleBackground.jsx';
import Logo from '../components/Logo.jsx';

export default function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <ParticleBackground />

      <div className="container-page text-center">
        <div className="flex justify-center mb-8">
          <Logo size="md" interactive={false} />
        </div>
        <p className="font-display text-8xl font-extrabold text-primary/20 mb-2">404</p>
        <h1 className="section-heading mb-4">This road doesn't lead anywhere.</h1>
        <p className="text-ash/60 max-w-md mx-auto mb-9">
          The page you're looking for has been moved or doesn't exist. Let's get you back on route.
        </p>
        <Link to="/" className="btn-primary inline-flex">
          <HomeIcon size={18} /> Back to Home
        </Link>
      </div>
    </motion.main>
  );
}

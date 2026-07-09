import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { business } from '../data/business.js';

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi AxonAuto, I'd like to book a doorstep car service.");
  const href = `https://wa.me/${business.contact.whatsappRaw}?text=${message}`;
  const delay = 3.8;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AxonAuto on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow-sm"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
      <FaWhatsapp size={28} className="relative" />
    </motion.a>
  );
}

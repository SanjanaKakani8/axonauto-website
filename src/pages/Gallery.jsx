import { motion } from 'framer-motion';

import SEO from '../components/SEO.jsx';
import ParticleBackground from '../components/ParticleBackground.jsx';
import { galleryImages } from '../data/gallery.js';
import { business } from '../data/business.js';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Gallery() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO
        title="Service Gallery"
        description={`See AxonAuto's doorstep car service work in ${business.location.city} — real engine bays, genuine parts, and careful workmanship.`}
      />

      <section className="relative pt-40 pb-16 overflow-hidden">
        <ParticleBackground />
        <div className="container-page">
          <motion.p variants={fadeUp} initial="hidden" animate="show" className="eyebrow mb-3">
            Our Work
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="section-heading max-w-2xl"
          >
            A closer look at every service, done right.
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 border-t border-white/5 pt-16">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.figure
              key={img.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-secondary/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-base/90 to-transparent p-4 pt-10">
                <p className="text-sm text-ash/90">{img.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

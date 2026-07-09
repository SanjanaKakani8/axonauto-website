// Hero slider images. No dedicated "hero" photos were provided yet, so this
// reuses the real AxonAuto service photos already in the project (never
// placeholders). Swap in dedicated wide hero shots here later — just replace
// the `src` imports below; nothing else needs to change.

import engineBaySuzuki from '../assets/gallery/engine-bay-suzuki.webp';
import serviceKitTata from '../assets/gallery/service-kit-tata.webp';
import grilleAudi from '../assets/gallery/grille-audi.webp';
import serviceKitHyundai from '../assets/gallery/service-kit-hyundai.webp';
import grilleHyundai from '../assets/gallery/grille-hyundai.webp';

export const heroSlides = [
  { id: 'slide-1', src: engineBaySuzuki, alt: 'AxonAuto technician inspecting an engine bay at the doorstep' },
  { id: 'slide-2', src: serviceKitTata, alt: 'Genuine Motul 300V oil and filters staged for a service' },
  { id: 'slide-3', src: grilleAudi, alt: 'Premium service parts staged on a car front grille' },
  { id: 'slide-4', src: serviceKitHyundai, alt: 'Motul 300V oil and air filter kit prepared for a service' },
  { id: 'slide-5', src: grilleHyundai, alt: 'Close-up detail during a doorstep car service' },
];

export default heroSlides;

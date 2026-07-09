// Service catalog. Icons referenced by key and resolved in components
// via the ICONS map so this file stays framework-agnostic.

import periodicCarService from '../assets/services/periodic-car-service.webp';
import batteryReplacement from '../assets/services/battery-replacement.webp';
import roadsideAssistance from '../assets/services/roadside-assistance.webp';
import jumpStart from '../assets/services/jump-start.webp';

export const services = [
  {
    id: 'periodic-service',
    icon: 'wrench',
    image: periodicCarService,
    title: 'Periodic Car Service',
    shortDescription: 'Complete scheduled maintenance to keep your car running at its best.',
    description:
      'Full multi-point inspection, oil and filter change, brake check, and fluid top-ups — carried out at your doorstep on a schedule that suits you. We follow manufacturer service intervals so your warranty stays protected.',
    features: ['Multi-point inspection', 'Oil & filter change', 'Brake & fluid check', 'Digital service report'],
  },
  {
    id: 'battery-replacement',
    icon: 'battery',
    image: batteryReplacement,
    title: 'Battery Replacement',
    shortDescription: 'Same-day battery testing and replacement, wherever you are.',
    description:
      'From load testing to installation, we diagnose a failing battery on the spot and replace it with a genuine, warrantied unit — so a dead battery never turns into a stuck morning.',
    features: ['Free load testing', 'Genuine batteries', 'On-the-spot fitting', 'Old battery disposal'],
  },
  {
    id: 'roadside-assistance',
    icon: 'shield',
    image: roadsideAssistance,
    title: 'Roadside Assistance',
    shortDescription: '24/7 emergency support wherever your car needs it.',
    description:
      "Flat tyre, breakdown, or an unexpected warning light — our team reaches your location and gets you moving again, or arranges safe towing if the fix needs a workshop.",
    features: ['24/7 availability', 'Rapid response', 'On-site troubleshooting', 'Towing coordination'],
  },
  {
    id: 'jump-start',
    icon: 'zap',
    image: jumpStart,
    title: 'Jump Start',
    shortDescription: 'Fast jump starts to get a dead battery running again.',
    description:
      'A quick, safe jump start service for cars that won\'t turn over — with a follow-up battery health check so you know if it\'s time for a replacement.',
    features: ['Rapid response', 'Safe cable jump-start', 'Battery health check', 'Follow-up advice'],
  },
];

export default services;

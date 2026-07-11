// Central business data. Never hardcode business details in components —
// import from here so the whole site updates from one place.

export const business = {
  name: 'AxonAuto',
  fullName: 'AxonAuto.in',
  owner:'A. Venkat Adithya',
  tagline: 'Your Trusted Automotive Partner for Doorstep Car Care',
  shortDescription:
    'AxonAuto is your trusted automotive partner providing professional doorstep car care, maintenance, diagnostics, battery replacement and roadside assistance in 25+ locations across Hyderabad.',
  experienceYears: '10+',
  location: {
    city: 'Hyderabad',
    region: 'Telangana',
    country: 'India',
    mapsQuery: 'Hyderabad, Telangana, India',
  },
  serviceLocations: [
  'L.B. Nagar',
  'Rajendranagar',
  'TGPA, Bandlaguda Jagir',
  'Mehdipatnam',
  'Tolichowki',
  'Manikonda',
  'Narsingi',
  'Nanakramguda',
  'Tellapur',
  'Nallagandla',
  'Serilingampalle',
  'Ramachandrapuram',
  'Gachibowli',
  'Kondapur',
  'Banjara Hills',
  'Ameerpet',
  'Madhapur',
  'Kukatpally',
  'Miyapur',
  'Bachupally',
  'Balanagar',
  'Gandi Maisamma',
  'Kompally',
  'Tirumalagiri',
  'Ghatkesar',
],
  contact: {
    phone: '+91 9618332752',
    phoneRaw: '+919618332752',
    whatsapp: '+91 9618332752',
    whatsappRaw: '919618332752',
    email: 'axonauto25@gmail.com',
  },
  vision: "To become Hyderabad's most trusted doorstep automotive service provider by setting new standards in quality, convenience, and customer satisfaction. We aim to build lasting relationships through innovation, dependable service, and a commitment to keeping every journey safe and stress-free.",
  mission:
    "To make professional automotive care simple, reliable, and accessible by delivering high-quality doorstep services. We are committed to using genuine parts, skilled technicians, transparent pricing, and prompt support so every customer enjoys a safe, hassle-free, and trustworthy service experience.",
  values: [
    {
      title: 'Customer First',
      description: 'Every decision starts with what serves the person waiting for their car.',
    },
    {
      title: 'Reliability',
      description: 'We show up when we say we will, and we finish the job right.',
    },
    {
      title: 'Transparency',
      description: 'Clear pricing and honest diagnostics — no surprise charges.',
    },
    {
      title: 'Professionalism',
      description: 'Trained technicians, proper tools, respectful service every time.',
    },
    {
      title: 'Quality',
      description: 'Genuine parts and workmanship that holds up over time.',
    },
  ],
  stats: [
    { label: 'Years of Experience', value: 10, suffix: '+' },
    { label: 'Cars Serviced', value: 2400, suffix: '+' },
    { label: 'Doorstep Visits', value: 5000, suffix: '+' },
    { label: 'Locations Coverage', value: 25, suffix: '+' },
  ],
  whyChooseUs: [
    {
      title: 'Fast Service',
      description: 'Technicians dispatched quickly across Hyderabad — most visits confirmed within the hour.',
    },
    {
      title: 'Expert Technicians',
      description: 'Trained professionals who work on every major make and model.',
    },
    {
      title: 'Doorstep Convenience',
      description: 'We come to your home, office, or roadside — no need to visit a garage.',
    },
    {
      title: 'Affordable Pricing',
      description: 'Transparent, upfront quotes with no hidden charges.',
    },
    {
      title: 'Reliable Support',
      description: 'Real people on call to guide you before, during, and after service.',
    },
  ],
 
  businessHours: [
    { day: 'Monday – Sunday', hours: '24 Hours' },
  
  ],
};

export default business;

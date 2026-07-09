// Central business data. Never hardcode business details in components —
// import from here so the whole site updates from one place.

export const business = {
  name: 'AxonAuto',
  fullName: 'AxonAuto.in',
  tagline: 'Your Trusted Automotive Partner for Doorstep Car Care',
  shortDescription:
    'AxonAuto is your trusted automotive partner providing professional doorstep car care, maintenance, diagnostics, battery replacement and roadside assistance across Hyderabad.',
  experienceYears: '3+',
  location: {
    city: 'Hyderabad',
    region: 'Telangana',
    country: 'India',
    mapsQuery: 'Hyderabad, Telangana, India',
  },
  contact: {
    phone: '+91 9618332752',
    phoneRaw: '+919618332752',
    whatsapp: '+91 9618332752',
    whatsappRaw: '919618332752',
    email: 'axonauto25@gmail.com',
  },
  vision: "To become Hyderabad's most trusted doorstep automotive service provider.",
  mission:
    "Deliver reliable, professional and convenient automotive services directly at customers' doorsteps.",
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
    { label: 'Years of Experience', value: 3, suffix: '+' },
    { label: 'Cars Serviced', value: 2400, suffix: '+' },
    { label: 'Doorstep Visits', value: 5000, suffix: '+' },
    { label: 'Cities Coverage', value: 1, suffix: '' },
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
  socials: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#',
  },
  businessHours: [
    { day: 'Monday – Sunday', hours: '8:00 AM – 9:00 PM' },
  
  ],
};

export default business;

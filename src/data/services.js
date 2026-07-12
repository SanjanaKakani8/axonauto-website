import periodicCarService from "../assets/services/periodic-car-service.webp";
import batteryReplacement from "../assets/services/battery-replacement.webp";
import basicService from "../assets/services/basic-service.webp";
import standardService from "../assets/services/standard-service.webp";
import comprehensiveService from "../assets/services/comprehensive-service.webp";

import roadsideAssistance from "../assets/services/roadside-assistance.webp";
import jumpStart from "../assets/services/jump-start.webp";
import fuelAssistance from "../assets/services/fuel-assistance.webp";
import doorUnlock from "../assets/services/door-unlock.webp";
import towing from "../assets/services/towing.webp";

import dentingPainting from "../assets/services/denting-painting.webp";
import windshieldReplacement from "../assets/services/windshield-replacement.webp";
import tyreService from "../assets/services/tyre-service.webp";

export const serviceCategories = [
  "All Services",
  "Periodic",
  "Roadside Assistance",
  "Denting & Painting",
];

export const services = [
  // ================= PERIODIC =================
  {
  id: "periodic-car-service",
  category: "Periodic",
  icon: "wrench",
  image: periodicCarService,
  title: "Periodic Car Service",
  shortDescription: "Scheduled maintenance for long-lasting performance.",
  description:
    "Keep your car running smoothly with periodic maintenance including inspection, oil replacement, filters, fluid top-up and essential safety checks.",
  features: [
    "Multi-point Inspection",
    "Engine Oil Change",
    "Filter Replacement",
    "Fluid Top-up",
  ],
},
  {
    id: "basic-service",
    category: "Periodic",
    icon: "wrench",
    image: basicService,
    title: "Basic Service",
    shortDescription: "Essential maintenance for everyday driving.",
    description:
      "Includes engine oil replacement, filter inspection and a complete vehicle health check.",
    features: [
      "Engine Oil Change",
      "Oil Filter",
      "Brake Check",
      "Battery Check",
    ],
  },

  {
    id: "standard-service",
    category: "Periodic",
    icon: "wrench",
    image: standardService,
    title: "Standard Service",
    shortDescription: "Recommended scheduled maintenance package.",
    description:
      "Includes Basic Service with additional AC, suspension and wheel inspection.",
    features: [
      "Oil & Filter",
      "AC Check",
      "Wheel Inspection",
      "Fluid Top-up",
    ],
  },

  {
    id: "comprehensive-service",
    category: "Periodic",
    icon: "wrench",
    image: comprehensiveService,
    title: "Comprehensive Service",
    shortDescription: "Complete vehicle maintenance package.",
    description:
      "Full inspection and preventive maintenance for maximum vehicle performance.",
    features: [
      "Complete Inspection",
      "Brake Service",
      "Battery Test",
      "Engine Tune-up",
    ],
  },
  {
  id: "battery-replacement",
  category: "Periodic",
  icon: "battery",
  image: batteryReplacement,
  title: "Battery Replacement",
  shortDescription: "Quick doorstep battery testing and replacement.",
  description:
    "Professional battery inspection, testing and replacement using genuine batteries with warranty, all at your doorstep.",
  features: [
    "Battery Health Check",
    "Genuine Batteries",
    "Doorstep Installation",
    "Warranty Support",
  ],
},

  // ================= ROADSIDE =================

  {
    id: "roadside-assistance",
    category: "Roadside",
    icon: "shield",
    image: roadsideAssistance,
    title: "Roadside Assistance",
    shortDescription: "24×7 emergency support.",
    description:
      "Professional roadside assistance whenever your vehicle breaks down.",
    features: [
      "24/7 Support",
      "Fast Response",
      "Emergency Help",
      "Expert Technician",
    ],
  },

  {
    id: "jump-start",
    category: "Roadside",
    icon: "zap",
    image: jumpStart,
    title: "Jump Start",
    shortDescription: "Dead battery? We'll restart your vehicle.",
    description:
      "Safe jump-start service with complete battery health inspection.",
    features: [
      "Battery Jump Start",
      "Quick Arrival",
      "Battery Test",
      "Safe Procedure",
    ],
  },

  {
    id: "fuel-assistance",
    category: "Roadside",
    icon: "battery",
    image: fuelAssistance,
    title: "Fuel Assistance",
    shortDescription: "Emergency fuel delivery.",
    description:
      "Running out of fuel is no longer a problem. We'll deliver fuel wherever you are.",
    features: [
      "Petrol Delivery",
      "Diesel Delivery",
      "Fast Service",
      "24×7",
    ],
  },

  {
    id: "door-unlock",
    category: "Roadside",
    icon: "shield",
    image: doorUnlock,
    title: "Door Unlock",
    shortDescription: "Locked your keys inside?",
    description:
      "Damage-free unlocking using professional equipment.",
    features: [
      "No Damage",
      "Fast Response",
      "Professional Tools",
      "Emergency Service",
    ],
  },

  {
    id: "towing",
    category: "Roadside",
    icon: "shield",
    image: towing,
    title: "Towing",
    shortDescription: "Safe towing service.",
    description:
      "Secure transportation of your vehicle to the workshop of your choice.",
    features: [
      "Safe Transport",
      "Quick Dispatch",
      "Experienced Drivers",
      "Hyderabad Coverage",
    ],
  },

  // ================= BODY WORK =================

  {
    id: "denting-painting",
    category: "General",
    icon: "wrench",
    image: dentingPainting,
    title: "Denting & Painting",
    shortDescription: "Restore your car to showroom condition.",
    description:
      "Professional dent removal with premium quality paint finish.",
    features: [
      "Dent Removal",
      "Scratch Repair",
      "Paint Matching",
      "Premium Finish",
    ],
  },

  {
    id: "windshield-replacement",
    category: "General",
    icon: "shield",
    image: windshieldReplacement,
    title: "Windshield Replacement",
    shortDescription: "High-quality windshield replacement.",
    description:
      "OEM-quality glass replacement with proper sealing.",
    features: [
      "OEM Glass",
      "Leak Proof",
      "Fast Installation",
      "Warranty",
    ],
  },

  {
    id: "tyres",
    category: "General",
    icon: "wrench",
    image: tyreService,
    title: "Tyres",
    shortDescription: "Tyre replacement and wheel care.",
    description:
      "Tyre replacement, balancing, wheel alignment and puncture repair.",
    features: [
      "Tyre Replacement",
      "Wheel Balancing",
      "Wheel Alignment",
      "Puncture Repair",
    ],
  },
];

export default services;
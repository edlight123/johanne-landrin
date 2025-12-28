export const siteConfig = {
  // Personal Information
  name: "Johanne Landrin",
  title: "Psychologue clinicienne",
  credentials: "M.A. en Psychologie Clinique",
  profile: {
    imageUrl: "/johanne-landrin.svg",
  },

  education: [
    {
      institution: 'Walden University',
      degree:
        'Master Clinical Psychology - MBA, Health/Medical Psychology',
      years: '2012 - 2014',
    },
    {
      institution: 'Webster University',
      degree: 'Master of Business Administration (MBA), General Studies',
      years: '2000 - 2001',
    },
    {
      institution: 'Saint Leo University',
      degree: 'Bachelor of Arts (B.A.), Psychology',
      years: '1997 - 1999',
    },
    {
      institution: 'University of Technology, Jamaica',
      degree: 'Associate of Arts (A.A.), Business Administration and Management, General',
      years: '1994 - 1996',
    },
    {
      institution: 'York University',
      degree: 'EFST (Emotion Focused Skills Training)',
      details: 'Toronto, Canada',
    },
  ],

  certifications: [
    'MBTI Certified — The Myers & Briggs Foundation (Issued Nov 2016) — Credential ID: MBTI-2016-T754151',
  ],
  
  // Contact Information
  contact: {
    phone: "+509 3402 3833",
    email: "jolandrin@hotmail.com",
    whatsapp: "+509 3402 3833",
  },
  
  // Office Information (Placeholders)
  office: {
    address: "Berthé, Pétion-Ville, Haïti",
    detailedAddress: "Berthé, Pétion-Ville, Haïti",
    hours: "Lundi - Vendredi: 9h00 - 17h00",
    mapEmbedUrl: "", // Add Google Maps embed URL here
  },
  
  // Booking
  booking: {
    calendlyUrl: "https://calendly.com/johannelandrin", // Placeholder
    enableCalendly: false, // Set to true to use Calendly embed
  },
  
  // Social Media
  social: {
    facebook: "",
    instagram: "",
    linkedin: "https://linkedin.com/in/johanne-landrin-44a3742",
  },
  
  // Feature Flags
  features: {
    enableTestimonials: false,
    enableMap: false,
    enableYouthService: true,
    enableGroupService: true,
    enableCreole: true, // Haitian Creole
  },
  
  // Workshop Topics
  workshopTopics: [
    "Gestion du stress et burnout",
    "Intelligence émotionnelle",
    "Communication non-violente",
    "Santé mentale en milieu scolaire",
    "Prévention du harcèlement",
    "Résilience et traumatisme",
    "Développement personnel",
    "Gestion de conflits",
    "Bien-être au travail",
    "Parentalité positive",
  ],
  
  // SEO
  seo: {
    title: "Johanne Landrin | Psychologue clinicienne en Haïti",
    description: "Psychothérapie et accompagnement psychologique à Pétion-Ville, Haïti. Consultations au cabinet et en ligne, ainsi que des ateliers et conférences pour particuliers et organisations.",
    keywords: ["psychologue", "Haiti", "Port-au-Prince", "psychothérapie", "santé mentale", "consultation", "ateliers"],
    url: "https://johannelandrin.com", // Update with actual domain
  },
};

export type SiteConfig = typeof siteConfig;

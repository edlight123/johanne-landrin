export const siteConfig = {
  // Personal Information
  name: "Johanne Landrin",
  title: "Psychologue clinicienne",
  credentials: "M.A. en Psychologie Clinique",
  
  // Contact Information (Placeholders)
  contact: {
    phone: "+509 XXXX-XXXX",
    email: "contact@johannelandrin.com",
    whatsapp: "+509 XXXX-XXXX",
  },
  
  // Office Information (Placeholders)
  office: {
    address: "Port-au-Prince, Haïti",
    detailedAddress: "Adresse complète à configurer",
    hours: "Lundi - Vendredi: 9h00 - 17h00",
    mapEmbedUrl: "", // Add Google Maps embed URL here
  },
  
  // Booking
  booking: {
    calendlyUrl: "https://calendly.com/johannelandrin", // Placeholder
    enableCalendly: false, // Set to true to use Calendly embed
  },
  
  // Social Media (Placeholders)
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
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
    description: "Psychothérapie et accompagnement psychologique à Port-au-Prince. Consultations individuelles, ateliers et conférences pour particuliers et organisations.",
    keywords: ["psychologue", "Haiti", "Port-au-Prince", "psychothérapie", "santé mentale", "consultation", "ateliers"],
    url: "https://johannelandrin.com", // Update with actual domain
  },
};

export type SiteConfig = typeof siteConfig;

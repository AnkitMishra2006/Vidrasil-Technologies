/**
 * Central SEO and Site Configuration
 * Used across the application for metadata, sitemap, robots, and structured data.
 */

export const siteConfig = {
  name: "Vidrasil Technologies",
  shortName: "Vidrasil",
  title: "Vidrasil ERP | Modern School Management Software for Indian K-12",
  titleTemplate: "%s | Vidrasil Technologies",
  description: "Vidrasil ERP is the leading school management software for Indian K-12 institutions. Streamline student data, fee management, attendance, and parent communication in one modern school ERP system.",
  url: "https://vidrasil.com",
  ogImage: "https://vidrasil.com/Vidrasil%20Technologies%20Favicon.png", // Fallback to public asset if needed, or specific OG image
  keywords: [
    "School Management Software",
    "School ERP",
    "Student Information System",
    "K-12 School Software",
    "Fee Management System",
    "School Admin Software India",
    "Educational ERP",
    "Indian School ERP",
    "School Administration Software"
  ],
  author: {
    name: "Vidrasil Technologies",
    url: "https://vidrasil.com",
  },
  social: {
    twitter: "@vidrasil",
    linkedin: "https://linkedin.com/company/vidrasil",
  },
  business: {
    type: "Organization",
    legalName: "Vidrasil Technologies Pvt. Ltd.",
    email: "info@vidrasil.com",
    foundingDate: "2024",
    location: "India",
  }
};

export type SiteConfig = typeof siteConfig;

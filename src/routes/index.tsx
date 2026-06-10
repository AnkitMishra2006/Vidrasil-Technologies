import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import {
  Hero, BrandIntro, Problem, Solution, Features,
  Benefits, WhyVidrasil, Roadmap, EarlyAccess, Faq, FinalCTA,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vidrasil ERP | Top School Management Software & System in India" },
      {
        name: "description",
        content:
          "Discover Vidrasil ERP, the leading school management software for Indian K-12 institutions. Streamline student data, fee management, attendance, and parent communication in one modern school ERP system. Request early access.",
      },
      { property: "og:title", content: "Vidrasil ERP — Modern School Management System" },
      {
        property: "og:description",
        content:
          "Transform your school's administration with a unified ERP platform. A complete student information system and school management software for administrators, teachers, and parents.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vidrasil.com/" },
      { name: "keywords", content: "School Management Software, School ERP, Student Information System, K-12 School Software, Fee Management System, School Admin Software India" }
    ],
    links: [{ rel: "canonical", href: "https://vidrasil.com/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground corner-fades">
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <BrandIntro />
          <Problem />
          <Solution />
          <Features />
          <Benefits />
          <WhyVidrasil />
          <Roadmap />
          <EarlyAccess />
          <Faq />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

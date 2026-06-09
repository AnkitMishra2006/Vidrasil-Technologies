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
      { title: "Vidrasil ERP — Modern School Management Software for Indian Schools" },
      {
        name: "description",
        content:
          "Vidrasil ERP is a unified school management platform for Indian K–12 institutions. Manage students, attendance, fees, communication, and examinations in one intelligent system. Currently in development — apply for early access today.",
      },
      { property: "og:title", content: "Vidrasil Technologies — Empowering Education. Enabling Futures." },
      {
        property: "og:description",
        content:
          "A modern ERP platform built for Indian schools. One platform for every student, every staff member, every parent, and every administrator.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

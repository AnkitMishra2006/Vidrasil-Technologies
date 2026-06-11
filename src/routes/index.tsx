import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import {
  Hero, BrandIntro, Problem, Solution, Features,
  Benefits, WhyVidrasil, Roadmap, EarlyAccess, Faq, FinalCTA,
} from "@/components/site/Sections";
import { siteConfig } from "@/lib/seo.config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.title },
      { name: "description", content: siteConfig.description },
      { property: "og:title", content: siteConfig.title },
      { property: "og:description", content: siteConfig.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteConfig.url },
      { property: "og:image", content: siteConfig.ogImage },
      { name: "twitter:title", content: siteConfig.title },
      { name: "twitter:description", content: siteConfig.description },
      { name: "twitter:image", content: siteConfig.ogImage },
      { name: "keywords", content: siteConfig.keywords.join(", ") }
    ],
    links: [{ rel: "canonical", href: siteConfig.url }],
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

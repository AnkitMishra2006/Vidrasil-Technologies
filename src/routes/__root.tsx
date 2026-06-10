import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import favicon from "../assets/favicon-32.png";
import appleTouchIcon from "../assets/apple-touch-icon.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vidrasil Technologies — Empowering Education. Enabling Futures." },
      { name: "description", content: "Modern school management ERP for Indian K–12 institutions." },
      { name: "author", content: "Vidrasil Technologies" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vidrasil Technologies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "icon", type: "image/png", href: favicon },
      { rel: "apple-touch-icon", href: appleTouchIcon },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vidrasil.com/#organization",
        "name": "Vidrasil Technologies",
        "url": "https://vidrasil.com",
        "logo": "https://vidrasil.com/__l5e/assets-v1/68d73428-a397-4fca-8fe8-5d29d1215fb6/vidrasil-icon-tr.png",
        "description": "Vidrasil Technologies builds modern school management software (ERP) for Indian K–12 institutions.",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info@vidrasil.com",
          "contactType": "customer support"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://vidrasil.com/#software",
        "name": "Vidrasil ERP",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web, Mobile",
        "description": "A unified school management platform handling admissions, attendance, fees, communication, and examinations.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "description": "Pilot program open with free access during development."
        },
        "publisher": {
          "@id": "https://vidrasil.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://vidrasil.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the product available right now?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vidrasil ERP is in active development. We're selecting pilot institutions for early access — apply for the Pilot Program or join the waitlist."
            }
          },
          {
            "@type": "Question",
            "name": "How is this different from existing school software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most existing tools were built a decade ago. Vidrasil is being built from scratch in 2024 with modern engineering, mobile-first design and deep focus on how Indian K–12 actually operates."
            }
          },
          {
            "@type": "Question",
            "name": "How much will it cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pilot institutions get the platform free during pilot, with preferential pricing locked in at launch. Full pricing will be announced before public launch."
            }
          },
          {
            "@type": "Question",
            "name": "What size of schools is this built for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indian K–12 schools (CBSE, ICSE, State Board) — from around 200 students to multi-campus institutions with several thousand students."
            }
          },
          {
            "@type": "Question",
            "name": "How secure is our school's data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Role-based access, encrypted storage, automated backups and full per-institution data isolation on enterprise-grade cloud infrastructure."
            }
          },
          {
            "@type": "Question",
            "name": "How long does setup take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "One to three weeks for pilots, including data migration, user setup and staff training — handled by our team."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a mobile app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — the web app is mobile-first and fully responsive. A native Android/iOS app is on the roadmap."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

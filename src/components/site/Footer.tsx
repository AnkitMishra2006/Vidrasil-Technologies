import { Mail, Globe, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.14_0.04_255)] text-white/80 overflow-hidden">
      {/* Ambient brand glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-teal/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-12">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-16">
          {/* Left Side: Brand + Connect */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo size="footer" />
            
            <div className="mt-8 space-y-4">
              <p className="font-display text-2xl text-white leading-tight max-w-sm">
                Empowering Education.<br />
                <span className="text-teal">Enabling Futures.</span>
              </p>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                Intelligent digital infrastructure for educational institutions across India.
              </p>
            </div>

            {/* Connect Section - Integrated into left side */}
            <div className="mt-10">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Connect</h4>
              <div className="flex flex-col gap-3.5 text-sm">
                <a href="mailto:info@vidrasil.com" className="inline-flex items-center gap-3 text-white/65 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-teal/80" /> info@vidrasil.com
                </a>
                <a href="#" className="inline-flex items-center gap-3 text-white/65 hover:text-white transition-colors">
                  <Globe className="h-4 w-4 text-teal/80" /> vidrasil.com
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href="#" aria-label="LinkedIn" className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Twitter" className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 items-center">
            <FooterCol
              title="Product"
              items={[
                ["Features", "#solution"],
                ["Why Vidrasil", "#why"],
                ["Roadmap", "#vision"],
                ["Pricing", "#cta"],
              ]}
            />
            <FooterCol
              title="Company"
              items={[
                ["About", "#about"],
                ["Our Vision", "#vision"],
                ["Careers", "#"],
                ["Contact", "#cta"],
              ]}
            />
            <FooterCol
              title="Get Started"
              items={[
                ["Apply for Pilot", "#cta"],
                ["Join Waitlist", "#cta"],
                ["Request Demo", "#cta"],
                ["Partner With Us", "#cta"],
              ]}
            />
          </div>
        </div>

        {/* CTA Card */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 overflow-hidden relative group">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-primary/15 blur-3xl rounded-full transition-transform group-hover:scale-110" />
          <div className="relative">
            <h3 className="font-display font-semibold text-2xl text-white">Building something for your school?</h3>
            <p className="text-base text-white/50 mt-1.5">Join the early access program — free during pilot.</p>
          </div>
          <a
            href="#cta"
            className="relative inline-flex items-center justify-center gap-2 bg-white text-[oklch(0.14_0.04_255)] font-bold text-base px-8 py-4 rounded-2xl hover:bg-white/90 transition shadow-xl"
          >
            Apply for Early Access <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/40 tracking-wide">
          <p>© 2024–2025 Vidrasil Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div className="flex flex-col items-start">
      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">{title}</h4>
      <ul className="space-y-3.5">
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-[13px] font-medium text-white/60 hover:text-white transition-colors whitespace-nowrap">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

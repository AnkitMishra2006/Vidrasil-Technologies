import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, ShieldCheck, Users2, Building2, Smartphone, Sparkles,
  FileText, BarChart3, MessageSquare, Wallet, GraduationCap, CheckCircle2,
  ClipboardList, Phone, AlertTriangle, Network, FileSpreadsheet,
  Workflow, Link2, Target, HeartHandshake, Telescope, Plus, Minus,
  Clock, TrendingDown, Heart, Crown, Rocket, Lock, Hammer, FlaskConical, Mail, Loader2,
} from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";
import { PilotDialog } from "./PilotForm";
import heroBg from "@/assets/hero-bg.jpg";
import illustrationAdmin from "@/assets/illustration-admin.jpg";
import illustrationEcosystem from "@/assets/illustration-ecosystem.jpg";

/* ----------------------------- Reveal-on-scroll ----------------------------- */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ----------------------------- Icon Tile (refined, no AI-gradient look) ----------------------------- */
function IconTile({
  icon: Icon,
  tone = "primary",
  size = "md",
}: {
  icon: any;
  tone?: "primary" | "teal" | "ink" | "outline";
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-10 w-10 [&_svg]:h-4 [&_svg]:w-4",
    md: "h-12 w-12 [&_svg]:h-5 [&_svg]:w-5",
    lg: "h-14 w-14 [&_svg]:h-6 [&_svg]:w-6",
  };
  const tones = {
    primary: "bg-primary/8 text-primary ring-1 ring-primary/15",
    teal: "bg-teal/12 text-[oklch(0.45_0.13_180)] ring-1 ring-teal/25",
    ink: "bg-foreground text-background",
    outline: "bg-card text-foreground ring-1 ring-border",
  };
  return (
    <div className={`relative rounded-2xl grid place-items-center ${sizes[size]} ${tones[tone]}`}>
      <Icon />
      {tone !== "ink" && (
        <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-teal shadow-[0_0_0_3px_var(--background)]" />
      )}
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="Vidrasil School Management Software Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/15 border border-teal/30 text-foreground px-4 py-1.5 text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal animate-pulse-dot" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
            </span>
            <Rocket className="h-3.5 w-3.5" />
            Now Accepting Early Access
          </div>

          <h1 id="hero-heading" className="mt-7 font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight">
            The School Management Software for <span className="text-brand-gradient">Modern Indian Schools</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A comprehensive School ERP system for K–12 institutions. Manage students, automate fee collection, track attendance, and connect with parents in one intelligent platform.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl shadow-glow hover:opacity-95 transition">
              Request Early Access
            </a>
            <a href="#solution" className="inline-flex items-center justify-center gap-2 text-foreground font-semibold px-7 py-3.5 rounded-xl border border-border bg-card/80 backdrop-blur hover:bg-surface transition">
              See How It Works <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            In development · No commitment · Pilot program open
          </p>
        </div>

        <div className="mt-16 lg:mt-20 max-w-6xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <DashboardMockup />
        </div>

        <Reveal className="mt-16 lg:mt-20">
          <div className="rounded-2xl border border-border bg-card/70 backdrop-blur p-6 md:p-8">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Built for forward-thinking institutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Building2, t: "Indian K–12 Schools" },
                { icon: Users2, t: "Multi-Role Access" },
                { icon: ShieldCheck, t: "Secure · Cloud-Native" },
                { icon: GraduationCap, t: "CBSE · ICSE · State" },
              ].map(({ icon: I, t }) => (
                <div key={t} className="flex flex-col items-center gap-2">
                  <IconTile icon={I} tone="primary" size="sm" />
                  <p className="text-xs font-medium text-foreground/80 mt-1">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- ABOUT BRAND --------------------------- */
export function BrandIntro() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-7">
          <SectionLabel>WHO WE ARE</SectionLabel>
          <h2 id="about-heading" className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            Not just software. <span className="text-brand-gradient">Infrastructure for education.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Administrative complexity should never get in the way of teaching. We build the School Management System that quietly carries the weight of running an institution — so your team can focus on students.
          </p>

          <figure className="mt-10 border-l-4 border-teal pl-6">
            <blockquote className="font-display font-semibold text-2xl text-foreground leading-snug italic">
              "The best schools of the next decade won't just teach better. They'll run better."
            </blockquote>
          </figure>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-8 bg-brand-gradient opacity-15 blur-3xl rounded-[3rem]" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant bg-card">
              <img
                src={illustrationAdmin}
                alt="School administrator using Vidrasil ERP software dashboard"
                loading="lazy"
                width={1536}
                height={1024}
                className="w-full h-auto block"
              />
            </div>
            {/* Floating stat chip */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 bg-card border border-border rounded-2xl px-4 py-3 shadow-card animate-float-slow">
              <div className="h-9 w-9 rounded-xl bg-teal/15 text-teal grid place-items-center ring-1 ring-teal/30">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Hours saved / week</p>
                <p className="font-display font-bold text-foreground">12+ hrs</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- PROBLEM --------------------------- */
export function Problem() {
  const items = [
    { icon: ClipboardList, t: "Endless paper trails", d: "Forms, receipts, registers — scattered across files no one can find." },
    { icon: FileSpreadsheet, t: "Spreadsheets as a system", d: "Excel sheets that break under pressure with zero real-time visibility." },
    { icon: Phone, t: "Unstructured communication", d: "Notices on WhatsApp, missed circulars, manual fee reminders." },
    { icon: Wallet, t: "Fee chaos every month", d: "Tracking, receipts, concessions, follow-ups — buried in manual work." },
    { icon: AlertTriangle, t: "No real-time visibility", d: "Decisions made without data — until it's too late to act." },
    { icon: Network, t: "Disconnected stakeholders", d: "Staff, parents, students operating in separate information silos." },
  ];
  return (
    <section id="problem" aria-labelledby="problem-heading" className="py-24 lg:py-32 bg-surface relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>THE CHALLENGE</SectionLabel>
          <h2 id="problem-heading" className="mt-4 font-display font-bold text-4xl sm:text-5xl text-foreground leading-[1.1]">
            Most schools run on tools that were never built for modern education.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Without a unified School ERP, your staff spends more time managing data than managing students.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-card transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <IconTile icon={I} tone="primary" size="sm" />
                  <span className="text-xs font-mono text-muted-foreground/60 ml-auto">0{i + 1}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- SOLUTION --------------------------- */
export function Solution() {
  const pillars = [
    { icon: Building2, n: "01", tag: "Unify", t: "One source of truth", d: "Every record, transaction and log in one place. Always accurate, always accessible." },
    { icon: Workflow, n: "02", tag: "Automate", t: "Work that runs itself", d: "Reminders, reports, results, notifications — automated so your team can focus on what matters." },
    { icon: Link2, n: "03", tag: "Connect", t: "Everyone in the loop", d: "Parents, teachers, admins, leadership — all informed in real time, always." },
  ];
  return (
    <section id="solution" aria-labelledby="solution-heading" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Color accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gradient opacity-[0.08] blur-3xl rounded-full -z-10" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>THE SOLUTION</SectionLabel>
          <h2 id="solution-heading" className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            One platform. Every person. <span className="text-brand-gradient">Every school process.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Vidrasil is a unified school management platform connecting every role, department and workflow in a single intelligent ERP system.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {pillars.map(({ icon: I, n, tag, t, d }, i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="relative h-full rounded-3xl bg-card border border-border p-8 overflow-hidden group hover:shadow-elegant transition-shadow">
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-gradient opacity-70" aria-hidden />
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-muted-foreground/60">PILLAR {n}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal">{tag}</span>
                </div>
                <IconTile icon={I} tone="primary" size="lg" />
                <h3 className="mt-6 font-display font-bold text-2xl text-foreground">{t}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ecosystem illustration band */}
        <Reveal delay={150} className="mt-20">
          <div className="relative rounded-[2rem] overflow-hidden border border-border bg-card grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 relative">
              <img
                src={illustrationEcosystem}
                alt="Connected school ecosystem showing teachers, parents, and students integrated via Vidrasil ERP"
                loading="lazy"
                width={1536}
                height={1024}
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 bg-card flex flex-col justify-center">
              <SectionLabel>ONE ECOSYSTEM</SectionLabel>
              <h3 className="mt-4 font-display font-bold text-3xl lg:text-4xl text-foreground leading-tight">
                Everyone in your school,<br />
                <span className="text-brand-gradient">connected in real-time.</span>
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our School ERP ensures teachers update once, parents see instantly, and admins stay in total control.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Admins", "Teachers", "Students", "Parents"].map((r) => (
                  <span key={r} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/8 text-primary ring-1 ring-primary/15">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- FEATURES --------------------------- */
export function Features() {
  const items = [
    { icon: GraduationCap, t: "Student Information System", d: "Complete digital profiles — admission to graduation." },
    { icon: CheckCircle2, t: "Attendance Management", d: "Mark, track and notify in seconds. Zero paper." },
    { icon: Wallet, t: "Fee Management Software", d: "Structures, receipts, concessions and reminders — automated." },
    { icon: MessageSquare, t: "Communication Hub", d: "Structured, auditable messaging. No more WhatsApp chaos." },
    { icon: FileText, t: "Examination & Results", d: "Schedules, mark entry, report cards, results — handled." },
    { icon: Users2, t: "Staff Management", d: "Profiles, roles, attendance and records, professionally managed." },
    { icon: BarChart3, t: "Reports & Analytics", d: "Decision-grade dashboards for leadership, anytime." },
    { icon: Heart, t: "Parent Portal", d: "Real-time window into a child's school life." },
    { icon: Smartphone, t: "Mobile First ERP", d: "Every critical function on any device, anywhere." },
  ];
  return (
    <section id="features" aria-labelledby="features-heading" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>WHAT'S INSIDE</SectionLabel>
          <h2 id="features-heading" className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            Everything a modern school needs, in one system.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Nine connected modules built to work together — because your school operates as one integrated institution.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 50}>
              <div className="h-full rounded-2xl bg-card border border-border p-6 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-card transition-all">
                <IconTile icon={I} tone={i % 3 === 0 ? "primary" : i % 3 === 1 ? "teal" : "ink"} size="md" />
                <h3 className="mt-5 font-display font-semibold text-lg text-foreground">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- BENEFITS (dark contrast band) --------------------------- */
export function Benefits() {
  const items = [
    { icon: Clock, t: "Hours back every week", d: "Tasks that take hours now take minutes." },
    { icon: TrendingDown, t: "Errors that disappear", d: "Single data entry, validated everywhere." },
    { icon: Heart, t: "Parents who feel connected", d: "Real-time visibility builds trust." },
    { icon: Crown, t: "Leaders who can lead", d: "Less time collecting data, more time acting on it." },
    { icon: Rocket, t: "Ready to grow", d: "From one school to many — same platform." },
    { icon: Lock, t: "Data you can trust", d: "Role-based access, encrypted, compliant." },
  ];
  return (
    <section id="benefits" aria-labelledby="benefits-heading" className="py-24 lg:py-32 bg-[oklch(0.14_0.04_255)] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal/25 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            <Sparkles className="h-3.5 w-3.5" />
            WHY IT MATTERS
          </div>
          <h2 id="benefits-heading" className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            The real impact of a <span className="text-teal">Modern School ERP.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            Features describe what our school software does. Benefits describe what your institution gains in efficiency and growth.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="h-full rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.07] transition-colors backdrop-blur-sm">
                <div className="h-12 w-12 rounded-2xl bg-teal/20 text-teal grid place-items-center ring-1 ring-teal/30">
                  <I className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl">{t}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- WHY VIDRASIL --------------------------- */
export function WhyVidrasil() {
  const values = [
    { icon: Target, t: "Purpose-Built", d: "Designed specifically for Indian K–12 — academic calendar, fee structures, board affiliations." },
    { icon: HeartHandshake, t: "People-First", d: "Every screen prioritises the experience of the person using it." },
    { icon: Telescope, t: "Long-Term", d: "Built for the next decade of Indian education, not a quick market entry." },
  ];
  return (
    <section id="why" aria-labelledby="why-heading" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal>
          <SectionLabel>OUR PHILOSOPHY</SectionLabel>
          <h2 id="why-heading" className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            School administration should be <span className="text-brand-gradient">invisible.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            The best school management technology doesn't announce itself. It quietly removes friction so educators can focus on teaching.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {values.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="h-full rounded-2xl bg-card border border-border p-6 hover:border-teal/40 transition-colors">
                <IconTile icon={I} tone="teal" size="md" />
                <h3 className="mt-5 font-display font-semibold text-lg text-foreground">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- ROADMAP --------------------------- */
export function Roadmap() {
  const phases = [
    { st: "active", n: "01", tag: "Foundation", t: "Vidrasil ERP — School Management", d: "Unified administration for K–12 schools.", note: "Launching 2025" },
    { st: "next", n: "02", tag: "Expand", t: "College & Higher Education ERP", d: "Same philosophy, extended to colleges and polytechnics.", note: "On the roadmap" },
    { st: "next", n: "03", tag: "Deepen", t: "Admission Management System", d: "End-to-end digital admissions — enquiry to enrollment.", note: "On the roadmap" },
    { st: "next", n: "04", tag: "Accelerate", t: "AI Institutional Analytics", d: "Predictive dashboards for risks and opportunities.", note: "On the roadmap" },
    { st: "next", n: "05", tag: "Connect", t: "LMS & Learning Platform", d: "Integrated LMS, homework and structured parent-teacher comms.", note: "On the roadmap" },
  ];
  return (
    <section id="vision" aria-labelledby="vision-heading" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>THE ROAD AHEAD</SectionLabel>
          <h2 id="vision-heading" className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            Where we begin. <span className="text-brand-gradient">Our vision for Indian education.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A technology company with a long-term commitment to providing the best school ERP solutions for the education sector.
          </p>
        </Reveal>

        <div className="mt-14 relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
          <div className="space-y-10">
            {phases.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <div className={`pl-16 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12"} [direction:ltr]`}>
                    <div className={`rounded-2xl border bg-card p-6 ${p.st === "active" ? "border-teal/40 shadow-glow" : "border-border"}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`h-2 w-2 rounded-full ${p.st === "active" ? "bg-teal animate-pulse-dot" : "bg-primary/40"}`} />
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phase {p.n} · {p.tag}</span>
                      </div>
                      <h3 className="font-display font-semibold text-xl text-foreground">{p.t}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                      <p className={`mt-3 text-xs font-semibold ${p.st === "active" ? "text-teal" : "text-primary/70"}`}>{p.note}</p>
                    </div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                    <div className={`h-3 w-3 rounded-full ring-4 ring-surface ${p.st === "active" ? "bg-teal" : "bg-primary/50"}`} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- EARLY ACCESS --------------------------- */
export function EarlyAccess() {
  return (
    <section id="early-access" aria-labelledby="early-access-heading" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>WHERE WE ARE TODAY</SectionLabel>
          <h2 id="early-access-heading" className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            Actively Developing the Future of
            <span className="block mt-2 text-brand-gradient">Indian School Management.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We aren't rushing to market. We're building a School ERP meant to last for decades.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            { icon: Hammer, tag: "In Development", t: "Core ERP Platform", d: "Foundational modules under active build. On track for pilot launch." },
            { icon: FlaskConical, tag: "Pilot Open", t: "Become a Pilot Institution", d: "Full platform free during pilot. Direct line to the founding team." },
            { icon: Mail, tag: "Waitlist", t: "Secure Early Access", d: "Priority access at launch — pilot-proven product for your school." },
          ].map(({ icon: I, tag, t, d }, i) => (
            <Reveal key={tag} delay={i * 100}>
              <div className="h-full rounded-2xl bg-card border border-border p-7 hover:border-primary/30 transition-colors">
                <IconTile icon={I} tone={i === 1 ? "teal" : "primary"} size="md" />
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-teal">{tag}</p>
                <h3 className="mt-1 font-display font-semibold text-lg text-foreground">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- FAQ --------------------------- */
export function Faq() {
  const faqs = [
    { q: "Is the product available right now?", a: "Vidrasil ERP is in active development. We're selecting pilot institutions for early access — apply for the Pilot Program or join the waitlist." },
    { q: "How is this different from existing school software?", a: "Most existing tools were built a decade ago. Vidrasil is being built from scratch in 2024 with modern engineering, mobile-first design and deep focus on how Indian K–12 actually operates." },
    { q: "How much will it cost?", a: "Pilot institutions get the platform free during pilot, with preferential pricing locked in at launch. Full pricing will be announced before public launch." },
    { q: "What size of schools is this built for?", a: "Indian K–12 schools (CBSE, ICSE, State Board) — from around 200 students to multi-campus institutions with several thousand students." },
    { q: "How secure is our school's data?", a: "Role-based access, encrypted storage, automated backups and full per-institution data isolation on enterprise-grade cloud infrastructure." },
    { q: "How long does setup take?", a: "One to three weeks for pilots, including data migration, user setup and staff training — handled by our team." },
    { q: "Is there a mobile app?", a: "Yes — the web app is mobile-first and fully responsive. A native Android/iOS app is on the roadmap." },
    { q: "How do we get in touch?", a: "Email info@vidrasil.com or apply via the pilot program. We respond within 48 hours." },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="text-center">
          <SectionLabel>COMMON QUESTIONS</SectionLabel>
          <h2 id="faq-heading" className="mt-4 font-display font-bold text-4xl sm:text-5xl text-foreground leading-[1.1]">
            School Management Software: <span className="text-brand-gradient">FAQs</span>
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {f.q}
                  </h3>
                  <span className={`flex-shrink-0 h-9 w-9 grid place-items-center rounded-full border border-border ${isOpen ? "bg-primary text-primary-foreground border-primary" : "text-foreground bg-card"} transition`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 pr-14 text-base text-muted-foreground leading-relaxed animate-fade-up">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- FINAL CTA --------------------------- */
export function FinalCTA() {
  const [pilotOpen, setPilotOpen] = useState(false);
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [waitlistMsg, setWaitlistMsg] = useState("");

  const submitWaitlist = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") || "").trim();
    if (!email) return;
    setWaitlistStatus("loading");
    setWaitlistMsg("");
    try {
      const res = await fetch("/api/public/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "waitlist", email }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || "Failed");
      setWaitlistStatus("success");
      form.reset();
    } catch (err: any) {
      setWaitlistMsg(err?.message || "Something went wrong.");
      setWaitlistStatus("error");
    }
  };

  return (
    <section id="cta" aria-labelledby="cta-heading" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient opacity-[0.06] -z-10" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-gradient opacity-20 blur-3xl rounded-full -z-10" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel>GET STARTED</SectionLabel>
            <h2 id="cta-heading" className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
              The future of your school starts with the <span className="text-brand-gradient">right infrastructure.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Apply for our exclusive pilot program or join the waitlist to secure the most advanced School ERP system for your institution.
            </p>
          </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Reveal>
            <div className="h-full rounded-3xl bg-card border border-border p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/15 blur-2xl" aria-hidden />
              <div className="relative">
                <IconTile icon={Building2} tone="primary" size="lg" />
                <h3 className="mt-5 font-display font-bold text-2xl text-foreground">Apply for the Pilot</h3>
                <p className="mt-2 text-sm text-muted-foreground">For schools ready to shape the future of education with us.</p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "Full platform free during pilot",
                    "Dedicated onboarding support",
                    "Priority pricing at launch — for life",
                    "Direct line to the founding team",
                  ].map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <CheckCircle2 className="h-4 w-4 text-teal flex-shrink-0 mt-0.5" />
                      {it}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setPilotOpen(true)}
                  className="mt-7 w-full bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl shadow-glow hover:opacity-95 transition"
                >
                  Apply Now — It's Free
                </button>
                <p className="mt-3 text-xs text-muted-foreground text-center italic">
                  Responses within 48 hours.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl bg-card border border-border p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal/20 blur-2xl" aria-hidden />
              <div className="relative">
                <IconTile icon={Mail} tone="teal" size="lg" />
                <h3 className="mt-5 font-display font-bold text-2xl text-foreground">Join the Waitlist</h3>
                <p className="mt-2 text-sm text-muted-foreground">Stay informed and get priority access to our School ERP at launch.</p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "First to know when we go live",
                    "Updates on our progress",
                    "No commitment. Just your email.",
                  ].map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <CheckCircle2 className="h-4 w-4 text-teal flex-shrink-0 mt-0.5" />
                      {it}
                    </li>
                  ))}
                </ul>
                {waitlistStatus === "success" ? (
                  <div className="mt-7 rounded-xl border border-teal/30 bg-teal/10 text-foreground px-4 py-4 text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    You're on the list — we'll be in touch.
                  </div>
                ) : (
                  <form onSubmit={submitWaitlist} className="mt-7 flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      name="email"
                      aria-label="Your school email address"
                      required
                      maxLength={255}
                      disabled={waitlistStatus === "loading"}
                      placeholder="Your school email"
                      className="flex-1 rounded-xl border border-border bg-background px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
                    />
                    <button
                      type="submit"
                      disabled={waitlistStatus === "loading"}
                      className="inline-flex items-center justify-center gap-2 bg-teal text-teal-foreground font-semibold px-6 py-3.5 rounded-xl hover:opacity-95 transition whitespace-nowrap disabled:opacity-60"
                    >
                      {waitlistStatus === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                      Join
                    </button>
                  </form>
                )}
                {waitlistStatus === "error" && (
                  <p className="mt-2 text-xs text-destructive">{waitlistMsg}</p>
                )}
                <p className="mt-3 text-xs text-muted-foreground text-center italic">
                  Unsubscribe anytime.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <PilotDialog open={pilotOpen} onClose={() => setPilotOpen(false)} />
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

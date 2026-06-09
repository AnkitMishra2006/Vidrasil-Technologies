import { Bell, Search, Home, Users, CalendarCheck, Wallet, MessageSquare, BarChart3, GraduationCap, ChevronRight } from "lucide-react";
import { LogoIcon } from "./Logo";

export function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-10 bg-brand-gradient opacity-20 blur-3xl rounded-[3rem] -z-10" aria-hidden />

      <div className="rounded-2xl bg-card shadow-elegant border border-border overflow-hidden">
        {/* Window chrome */}
        <div className="h-9 bg-surface border-b border-border flex items-center px-4 gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="ml-4 text-xs text-muted-foreground font-medium">app.vidrasil.com</div>
        </div>

        <div className="grid grid-cols-[200px_1fr] min-h-[460px]">
          {/* Sidebar */}
          <aside className="bg-[oklch(0.18_0.04_255)] text-white/90 p-4 flex flex-col gap-1">
            <div className="flex items-center gap-2 px-2 py-3">
              <LogoIcon className="h-7 w-7" />
              <div className="font-display font-bold text-sm">Vidrasil</div>
            </div>
            <SideItem icon={Home} label="Dashboard" />
            <SideItem icon={Users} label="Students" />
            <SideItem icon={CalendarCheck} label="Attendance" active />
            <SideItem icon={Wallet} label="Fees" />
            <SideItem icon={MessageSquare} label="Communication" />
            <SideItem icon={GraduationCap} label="Exams" />
            <SideItem icon={BarChart3} label="Reports" />
          </aside>

          {/* Main */}
          <main className="bg-background p-5">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-xs text-muted-foreground">Good morning, Priya</div>
                <div className="font-display font-semibold text-lg text-foreground">Today's Overview</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 bg-surface rounded-lg px-3 py-1.5 border border-border text-xs text-muted-foreground">
                  <Search className="h-3.5 w-3.5" />
                  <span>Search students, fees…</span>
                </div>
                <div className="relative bg-surface rounded-lg p-1.5 border border-border">
                  <Bell className="h-4 w-4 text-foreground" />
                  <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-teal" />
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <Stat label="Present Today" value="1,284" delta="+2.4%" />
              <Stat label="Fees Collected" value="₹4.82L" delta="+18%" />
              <Stat label="Pending Dues" value="₹62K" delta="-12%" down />
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-foreground">Attendance</div>
                  <div className="text-[10px] text-muted-foreground">Today</div>
                </div>
                <Donut />
              </div>
              <div className="col-span-3 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-foreground">Fee Collection</div>
                  <div className="text-[10px] text-muted-foreground">Last 6 months</div>
                </div>
                <Bars />
              </div>
            </div>

            {/* Notice list */}
            <div className="mt-3 rounded-xl border border-border bg-card p-3">
              <div className="text-xs font-semibold text-foreground mb-2 px-1">Recent Activity</div>
              {[
                { c: "bg-primary/10 text-primary", t: "Class IX-B attendance marked", s: "2 mins ago" },
                { c: "bg-teal/15 text-teal", t: "₹12,500 received from Aarav Sharma", s: "8 mins ago" },
                { c: "bg-primary/10 text-primary", t: "Circular sent to all parents — Sports Day", s: "1 hr ago" },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between py-2 px-1 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className={`h-6 w-6 rounded-md grid place-items-center ${r.c}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    </span>
                    <span className="text-foreground">{r.t}</span>
                  </div>
                  <span className="text-muted-foreground">{r.s}</span>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Floating side cards */}
      <div className="hidden md:flex absolute -left-12 top-32 bg-card shadow-card border border-border rounded-2xl p-3 gap-3 items-center animate-float">
        <div className="h-10 w-10 rounded-xl bg-teal/15 text-teal grid place-items-center">
          <CalendarCheck className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[11px] text-muted-foreground">Attendance synced</div>
          <div className="text-sm font-semibold">94% present</div>
        </div>
      </div>
      <div className="hidden md:flex absolute -right-8 bottom-20 bg-card shadow-card border border-border rounded-2xl p-3 gap-3 items-center animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
          <Wallet className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[11px] text-muted-foreground">Fee receipt issued</div>
          <div className="text-sm font-semibold">₹12,500 · Class X-A</div>
        </div>
      </div>
    </div>
  );
}

function SideItem({ icon: Icon, label, active }: { icon: any; label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] ${
        active ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
      {active && <ChevronRight className="h-3.5 w-3.5 ml-auto" />}
    </div>
  );
}

function Stat({ label, value, delta, down }: { label: string; value: string; delta: string; down?: boolean }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="text-[11px] text-muted-foreground">{label}</div>
      <div className="font-display font-semibold text-lg text-foreground mt-0.5">{value}</div>
      <div className={`text-[10px] font-medium mt-1 ${down ? "text-teal" : "text-primary"}`}>{delta}</div>
    </div>
  );
}

function Donut() {
  // 94% present
  const r = 36, c = 2 * Math.PI * r, val = 0.94;
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
        <circle cx="50" cy="50" r={r} stroke="oklch(0.92 0.01 250)" strokeWidth="10" fill="none" />
        <circle
          cx="50" cy="50" r={r}
          stroke="url(#g1)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${c * val} ${c}`}
        />
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.485 0.222 265)" />
            <stop offset="100%" stopColor="oklch(0.72 0.15 180)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="space-y-1.5 text-[11px]">
        <div className="font-display font-bold text-2xl text-foreground leading-none">94%</div>
        <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> Present 1,284</div>
        <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-teal" /> Late 38</div>
        <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-muted-foreground/40" /> Absent 42</div>
      </div>
    </div>
  );
}

function Bars() {
  const data = [55, 68, 60, 82, 74, 96];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  return (
    <div className="flex items-end justify-between h-24 gap-2">
      {data.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
          <div
            className="w-full rounded-md bg-brand-gradient"
            style={{ height: `${v}%`, opacity: 0.4 + (i / data.length) * 0.6 }}
          />
          <span className="text-[9px] text-muted-foreground">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

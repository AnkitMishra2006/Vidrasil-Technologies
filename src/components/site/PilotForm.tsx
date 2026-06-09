import { useState } from "react";
import { CheckCircle2, Loader2, X } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function PilotDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      type: "pilot" as const,
      schoolName: String(form.get("schoolName") || "").trim(),
      contactName: String(form.get("contactName") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      role: String(form.get("role") || "").trim(),
      studentCount: String(form.get("studentCount") || "").trim(),
      city: String(form.get("city") || "").trim(),
      board: String(form.get("board") || "").trim(),
      message: String(form.get("message") || "").trim(),
    };
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/public/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || "Failed to send");
      setStatus("success");
    } catch (err: any) {
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-foreground/60 backdrop-blur-sm p-0 sm:p-4 animate-fade-up"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl bg-card border border-border rounded-t-3xl sm:rounded-3xl shadow-elegant max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-9 w-9 grid place-items-center rounded-full bg-muted hover:bg-muted/70 text-foreground transition"
        >
          <X className="h-4 w-4" />
        </button>

        {status === "success" ? (
          <div className="p-10 text-center">
            <div className="mx-auto h-14 w-14 rounded-full bg-teal/15 text-teal grid place-items-center ring-1 ring-teal/30">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-display font-bold text-2xl text-foreground">Application received</h3>
            <p className="mt-2 text-muted-foreground">
              Thank you! Our team will reach out within 48 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">PILOT PROGRAM</p>
            <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-foreground">
              Apply for the Vidrasil Pilot
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your school. We respond within 48 hours.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="School name" name="schoolName" required placeholder="Sunrise Public School" />
              <Field label="Contact person" name="contactName" required placeholder="Full name" />
              <Field label="Your role" name="role" required placeholder="Principal / Admin / Owner" />
              <Field label="Email" name="email" type="email" required placeholder="you@school.edu" />
              <Field label="Phone" name="phone" type="tel" required placeholder="+91 9876543210" />
              <Field label="City" name="city" required placeholder="Mumbai" />
              <SelectField
                label="Board"
                name="board"
                required
                options={["CBSE", "ICSE", "State Board", "IB / Cambridge", "Other"]}
              />
              <SelectField
                label="Student count"
                name="studentCount"
                required
                options={["< 200", "200 – 500", "500 – 1000", "1000 – 2500", "2500+"]}
              />
            </div>

            <div className="mt-4">
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                Anything else? <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <textarea
                name="message"
                rows={3}
                maxLength={2000}
                placeholder="Current pain points, timelines, or questions"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {status === "error" && (
              <div className="mt-4 text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-lg px-3 py-2">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl shadow-glow hover:opacity-95 transition disabled:opacity-60"
            >
              {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {status === "loading" ? "Submitting…" : "Submit Application"}
            </button>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              By submitting you agree we can contact you about the pilot.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-foreground mb-1.5">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-foreground mb-1.5">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

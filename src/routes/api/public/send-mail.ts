import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const RECIPIENT = "vidrasiltechnologies@gmail.com";
const MAIL_BASE = "https://mail-sender-insanzialabs.vercel.app";

const PilotSchema = z.object({
  type: z.literal("pilot"),
  schoolName: z.string().trim().min(1).max(200),
  contactName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(30),
  role: z.string().trim().min(1).max(100),
  studentCount: z.string().trim().min(1).max(50),
  city: z.string().trim().min(1).max(100),
  board: z.string().trim().min(1).max(50),
  message: z.string().trim().max(2000).optional().default(""),
});

const WaitlistSchema = z.object({
  type: z.literal("waitlist"),
  email: z.string().trim().email().max(255),
});

const BodySchema = z.discriminatedUnion("type", [PilotSchema, WaitlistSchema]);

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

function pilotTemplate(d: z.infer<typeof PilotSchema>) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 14px;background:#F8FAFC;border:1px solid #E2E8F0;font-weight:600;color:#0F172A;width:180px;font-family:Inter,Arial,sans-serif;font-size:14px;">${esc(label)}</td>
      <td style="padding:10px 14px;border:1px solid #E2E8F0;color:#334155;font-family:Inter,Arial,sans-serif;font-size:14px;">${esc(value || "—")}</td>
    </tr>`;
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#F1F5F9;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.06);">
        <tr><td style="background:linear-gradient(135deg,#2563EB,#14B8A6);padding:28px 32px;color:#fff;">
          <div style="font-size:13px;font-weight:600;letter-spacing:2px;opacity:.9;">VIDRASIL TECHNOLOGIES</div>
          <div style="font-size:24px;font-weight:700;margin-top:6px;">New Pilot Program Application</div>
        </td></tr>
        <tr><td style="padding:28px 32px;">
          <p style="margin:0 0 18px;color:#334155;font-size:15px;line-height:1.6;">A school has applied to join the Vidrasil ERP pilot program. Details below:</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            ${row("School name", d.schoolName)}
            ${row("Contact person", d.contactName)}
            ${row("Role", d.role)}
            ${row("Email", d.email)}
            ${row("Phone", d.phone)}
            ${row("City", d.city)}
            ${row("Board", d.board)}
            ${row("Student count", d.studentCount)}
          </table>
          ${d.message ? `<div style="margin-top:20px;"><div style="font-weight:600;color:#0F172A;font-size:14px;margin-bottom:6px;">Message</div><div style="padding:14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;color:#334155;font-size:14px;line-height:1.6;white-space:pre-wrap;">${esc(d.message)}</div></div>` : ""}
          <div style="margin-top:24px;padding:14px;background:#EFF6FF;border-left:3px solid #2563EB;border-radius:6px;color:#1E40AF;font-size:13px;">Reply directly to this email to reach the applicant.</div>
        </td></tr>
        <tr><td style="padding:18px 32px;background:#0F172A;color:#94A3B8;font-size:12px;text-align:center;">© Vidrasil Technologies — Pilot inquiry</td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function waitlistTemplate(d: z.infer<typeof WaitlistSchema>) {
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#F1F5F9;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:32px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.06);">
        <tr><td style="background:linear-gradient(135deg,#2563EB,#14B8A6);padding:24px 32px;color:#fff;">
          <div style="font-size:13px;font-weight:600;letter-spacing:2px;opacity:.9;">VIDRASIL TECHNOLOGIES</div>
          <div style="font-size:22px;font-weight:700;margin-top:6px;">New Waitlist Signup</div>
        </td></tr>
        <tr><td style="padding:28px 32px;color:#334155;font-size:15px;line-height:1.6;">
          <p style="margin:0 0 14px;">A new contact joined the Vidrasil waitlist:</p>
          <div style="padding:14px 18px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;color:#0F172A;font-weight:600;">${esc(d.email)}</div>
        </td></tr>
        <tr><td style="padding:16px 32px;background:#0F172A;color:#94A3B8;font-size:12px;text-align:center;">© Vidrasil Technologies — Waitlist</td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export const Route = createFileRoute("/api/public/send-mail")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.MAIL_SERVICE_KEY;
        if (!apiKey) {
          return Response.json({ success: false, message: "Mail service not configured" }, { status: 500 });
        }
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return Response.json({ success: false, message: "Invalid JSON" }, { status: 400 });
        }
        const parsed = BodySchema.safeParse(raw);
        if (!parsed.success) {
          return Response.json({ success: false, message: "Invalid input", errors: parsed.error.flatten() }, { status: 400 });
        }
        const data = parsed.data;
        const payload =
          data.type === "pilot"
            ? {
                toEmail: RECIPIENT,
                subject: `Pilot Application — ${data.schoolName}`,
                fromName: "Vidrasil Website",
                replyTo: data.email,
                emailContent: pilotTemplate(data),
              }
            : {
                toEmail: RECIPIENT,
                subject: `New Waitlist Signup — ${data.email}`,
                fromName: "Vidrasil Website",
                replyTo: data.email,
                emailContent: waitlistTemplate(data),
              };

        try {
          const res = await fetch(`${MAIL_BASE}/api/send-email`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-api-key": apiKey },
            body: JSON.stringify(payload),
          });
          const result = await res.json().catch(() => ({}));
          if (!res.ok || !(result as { success?: boolean }).success) {
            return Response.json(
              { success: false, message: (result as { message?: string }).message || "Send failed" },
              { status: 502 },
            );
          }
          return Response.json({ success: true });
        } catch (e) {
          return Response.json({ success: false, message: "Network error" }, { status: 502 });
        }
      },
    },
  },
});

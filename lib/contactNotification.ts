import { Resend } from "resend";
import type { ContactFormZodSchema } from "@/schema/contacSchema";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });

export async function sendContactNotification(
  submission: ContactFormZodSchema,
) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error(
      "Missing RESEND_API_KEY, RESEND_FROM_EMAIL, or CONTACT_NOTIFICATION_EMAIL.",
    );
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from:` ${from}`,
    to:` ${to}`,
    subject: `New project inquiry: ${submission.name}`,
    html: `
      <h2>New project inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
      <p><strong>Budget:</strong> ${escapeHtml(submission.budget)}</p>
      <p><strong>Project type:</strong> ${escapeHtml(submission.projectDetails)}</p>
      <p><strong>Project details:</strong></p>
      <p style="white-space: pre-wrap">${escapeHtml(submission.description)}</p>
    `,
  });

  if (result.error) {
    throw new Error(`Resend failed to send the notification: ${result.error.message}`);
  }
}

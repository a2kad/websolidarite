"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  ok: boolean;
  message: string;
};

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return {
      ok: false,
      message: "Veuillez remplir les champs obligatoires.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { ok: false, message: "Adresse e-mail invalide." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Web Solidarité <${process.env.CONTACT_FROM_EMAIL}>`,
      to: [process.env.CONTACT_TO_EMAIL as string],
      replyTo: email,
      subject: subject
        ? `[Contact] ${subject}`
        : `[Contact] Message de ${name}`,
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>E-mail :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "—"}</p>
        <p><strong>Sujet :</strong> ${subject || "—"}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        ok: false,
        message: "Une erreur est survenue. Veuillez réessayer plus tard.",
      };
    }

    return {
      ok: true,
      message: "Votre message a bien été envoyé. Nous vous répondrons rapidement.",
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      ok: false,
      message: "Une erreur est survenue. Veuillez réessayer plus tard.",
    };
  }
}
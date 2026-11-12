"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = {
  ok: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState
  );

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
            Nom complet *
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-green"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-green"
            placeholder="vous@email.fr"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-green"
            placeholder="06 12 34 56 78"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1.5">
            Sujet
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-green"
            defaultValue=""
          >
            <option value="" disabled>
              Choisir un sujet
            </option>
            <option value="Don de matériel">Don de matériel</option>
            <option value="Boutique / Achat">Boutique / Achat</option>
            <option value="Réparation / Diagnostic">Réparation / Diagnostic</option>
            <option value="Entreprise / RSE">Entreprise / RSE</option>
            <option value="Ateliers numériques">Ateliers numériques</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-green resize-y"
          placeholder="Votre message..."
        />
      </div>

      {state.message && (
        <div
          className={`rounded-lg px-4 py-3 text-sm ${
            state.ok
              ? "bg-green-soft text-green border border-green/20"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center px-7 py-3.5
                   bg-green hover:bg-green-hover disabled:opacity-60
                   text-white text-sm font-semibold uppercase tracking-wide
                   rounded-lg transition-colors"
      >
        {pending ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
}
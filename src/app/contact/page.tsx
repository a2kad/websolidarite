import Link from "next/link";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact – Web Solidarité",
  description:
    "Contactez l'association Web Solidarité au Havre. Formulaire, téléphone et adresse de la boutique solidaire.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Contact
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-white/80 max-w-xl mx-auto">
            Une question, un don, une réparation ou un partenariat entreprise ?
            Écrivez-nous, nous vous répondrons rapidement.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Formulaire */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-navy uppercase tracking-wide mb-2">
                Envoyez-nous un message
              </h2>
              <div className="w-12 h-1 bg-green mb-8 rounded-full" />
              <ContactForm />
            </div>

            {/* Coordonnées */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-navy text-white rounded-2xl p-7">
                <h2 className="text-lg font-bold uppercase tracking-wide mb-6">
                  Nous joindre
                </h2>

                <div className="space-y-5 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Boutique / Atelier</p>
                      <p className="text-white/75 leading-relaxed">
                        48 – 50 Rue Albert Samain
                        <br />
                        76620 Le Havre
                        <br />
                        <span className="text-white/55 text-xs">
                          (Bléville – Points Cardinaux)
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Téléphone</p>
                      <a
                        href="tel:+33954149048"
                        className="text-white/75 hover:text-white transition-colors"
                      >
                        09 54 14 90 48
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Horaires boutique</p>
                      <p className="text-white/75 leading-relaxed">
                        Mar – Ven : 14h – 18h
                        <br />
                        Samedi : 10h – 12h30 / 14h – 18h
                        <br />
                        <span className="text-white/55">Lun & Dim : fermé</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Courrier (siège)</p>
                      <p className="text-white/75 text-xs leading-relaxed">
                        18 Rue de Soquence
                        <br />
                        76600 Le Havre
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lien don */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Vous souhaitez déposer du matériel informatique ?
                </p>
                <Link
                  href="/faire-un-don"
                  className="inline-flex text-sm font-semibold uppercase tracking-wide text-green hover:underline"
                >
                  Voir les points de collecte →
                </Link>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Vous êtes une entreprise ?
                </p>
                <Link
                  href="/entreprises"
                  className="inline-flex text-sm font-semibold uppercase tracking-wide text-green hover:underline"
                >
                  Espace Entreprises →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Wrench,
  ShoppingBag,
  Bus,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Boutique Solidaire – Web Solidarité",
  description:
    "Atelier de reconditionnement informatique. Diagnostic, réparation et vente de matériels reconditionnés à prix solidaires – 48-50 Rue Albert Samain, Le Havre.",
};

const schedule = [
  { day: "Lundi", hours: "Fermée" },
  { day: "Mardi", hours: "14h00 – 18h30" },
  { day: "Mercredi", hours: "14h00 – 18h30" },
  { day: "Jeudi", hours: "Fermée" },
  { day: "Vendredi", hours: "14h00 – 18h30" },
  { day: "Samedi", hours: "13h00 – 18h30" },
  { day: "Dimanche", hours: "Fermée" },
];

const buses = [
  {
    line: "Ligne C3",
    label: "Bus N°3",
    href: "https://www.transports-lia.fr/fr/horaires-de-ligne/6/RouteSchedules/grand-hameau-hopital-prive-de-lestuaire-graville/4/grand-hameau-hopital-prive-de-lestuaire/2?KeywordsLine=3",
  },
  {
    line: "Ligne C5",
    label: "Bus N°5",
    href: "https://www.transports-lia.fr/fr/horaires-de-ligne/6/RouteSchedules/ste-adresse-ignauval-graville/7/ste-adresse-ignauval/2?KeywordsLine=5",
  },
  {
    line: "Ligne 16",
    label: "Bus N°16",
    href: "https://www.transports-lia.fr/fr/horaires-de-ligne/6/RouteSchedules/dollemard-mt-gaillard/404/dollemard/2?KeywordsLine=16",
  },
];

export default function BoutiquePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-3">
            Notre Boutique Solidaire
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium mb-5">
            Notre Atelier de reconditionnement informatique
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-white/75 max-w-2xl mx-auto text-base leading-relaxed">
            Ouvert du mardi au samedi, notre équipe vous accueille dans nos
            locaux au 48–50 Rue Albert Samain à Bléville, aux Points Cardinaux.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-slate-600 leading-relaxed mb-6">
            Nous assurons le <strong>diagnostic</strong>, la{" "}
            <strong>réparation</strong> et la{" "}
            <strong>vente de matériels informatiques et numériques</strong>{" "}
            reconditionnés à prix solidaire dans le cadre de notre projet-ESS
            (Économie Sociale et Solidaire).
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Un problème ? Une panne ?{" "}
            <Link
              href="/contact"
              className="text-green font-semibold hover:underline"
            >
              Contactez-nous
            </Link>
            , ou apportez-nous votre matériel en panne !
          </p>

          <div className="inline-flex items-start gap-3 bg-green-soft text-left rounded-xl px-5 py-4 max-w-lg">
            <Wrench className="w-5 h-5 text-green shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700 leading-relaxed">
              Le premier diagnostic de votre machine ne vous coûtera que{" "}
              <strong>30&nbsp;€</strong>* (sous réserve d&apos;adhésion à
              l&apos;association, 30&nbsp;€ étant le montant minimal de
              participation à l&apos;année).
            </p>
          </div>
        </div>
      </section>

      {/* Horaires + Localisation */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center uppercase tracking-wide mb-3">
            Informations utiles et localisation
          </h2>
          <div className="w-14 h-1 bg-green mx-auto mb-12 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Horaires */}
            <div className="bg-card border border-border rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-green-soft flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green" />
                </div>
                <h3 className="text-lg font-bold text-navy uppercase tracking-wide">
                  Horaires
                </h3>
              </div>

              <ul className="space-y-2.5">
                {schedule.map((item) => (
                  <li
                    key={item.day}
                    className="flex justify-between text-sm border-b border-slate-100 pb-2 last:border-0"
                  >
                    <span className="font-medium text-navy">{item.day}</span>
                    <span
                      className={
                        item.hours === "Fermée"
                          ? "text-slate-400"
                          : "text-slate-600"
                      }
                    >
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Adresse + contact */}
            <div className="bg-navy text-white rounded-2xl p-7 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  Localisation
                </h3>
              </div>

              <div className="space-y-4 text-sm flex-1">
                <p className="text-white/85 leading-relaxed">
                  <strong>48 – 50 Rue Albert Samain, 76620 Le Havre</strong>
                  <br />
                  Située en hauteur, en face du RAPID MARKET aux Points
                  Cardinaux.
                </p>

                <p className="text-white/70 text-xs leading-relaxed">
                  1er Bureau – Siège Social (courrier uniquement) :
                  <br />
                  18 Rue de Soquence, 76600 Le Havre
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <Phone className="w-4 h-4 text-green" />
                  <a
                    href="tel:+33954149048"
                    className="hover:text-green transition-colors"
                  >
                    09 54 14 90 48
                  </a>
                </div>

                <div className="pt-3 border-t border-white/15 text-xs text-white/55 space-y-1">
                  <p>SIRET : 820 367 753 00028 — Code : 8559B</p>
                  <p>N° RNA : W762006243</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/48+Rue+Albert+Samain,+76620+Le+Havre"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-5 py-2.5
                           bg-green hover:bg-green-hover text-white
                           text-sm font-semibold uppercase tracking-wide
                           rounded-lg transition-colors self-start"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="bg-background">
        <div className="container mx-auto px-4 pb-4">
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[16/9] md:aspect-[21/9]">
            <iframe
              title="Boutique Web Solidarité - Carte"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.8!2d0.0893!3d49.5173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd5d45229adc1fe5e!2sAssociation%20Web%20Solidarit%C3%A9!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[280px]"
            />
          </div>
        </div>
      </section>

      {/* Transports */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 justify-center mb-3">
            <Bus className="w-6 h-6 text-green" />
            <h2 className="text-2xl md:text-3xl font-bold text-navy uppercase tracking-wide">
              Rejoindre la boutique via le réseau LIA
            </h2>
          </div>
          <div className="w-14 h-1 bg-yellow-400 mx-auto mb-10 rounded-full" />

          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {buses.map((bus) => (
              <a
                key={bus.line}
                href={bus.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-2xl p-5 text-center
                           hover:shadow-md hover:border-green/40 transition-all group"
              >
                <p className="font-bold text-navy uppercase tracking-wide text-sm mb-1 group-hover:text-green transition-colors">
                  {bus.line}
                </p>
                <p className="text-sm text-slate-500 mb-3">{bus.label}</p>
                <span className="text-xs font-semibold text-green uppercase tracking-wide">
                  Voir les horaires →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Besoin d&apos;un diagnostic, d&apos;une réparation ou d&apos;un
            matériel reconditionné ?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3
                         bg-green hover:bg-green-hover text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg transition-colors"
            >
              Contactez-nous
            </Link>
            <Link
              href="/faire-un-don"
              className="inline-flex items-center justify-center px-6 py-3
                         bg-white/10 hover:bg-white/15 text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg border border-white/25 transition-colors"
            >
              Faire un don
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
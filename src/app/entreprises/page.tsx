import Link from "next/link";
import {
  Recycle,
  Briefcase,
  Heart,
  ShieldCheck,
  Monitor,
  Laptop,
  Printer,
  Smartphone,
  Tv,
  Speaker,
  FileCheck,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Entreprises – Web Solidarité",
  description:
    "Programme « Pour un Numérique Engagé » : transformez vos anciens matériels informatiques en valeur économique, environnementale et solidaire.",
};

const benefits = [
  {
    icon: Recycle,
    title: "Ressource",
    text: "Votre ancien parc devient une ressource pour l'association (rachat et déduction OETH) et un don pour des associations partenaires.",
  },
  {
    icon: Briefcase,
    title: "Emploi",
    text: "Le réemploi génère une économie circulaire et crée de l'activité auprès de personnes en situation difficile, éloignées de l'emploi.",
  },
  {
    icon: Heart,
    title: "Impact social",
    text: "Vous participez concrètement à la lutte contre la fracture numérique et à un numérique plus responsable et plus humain.",
  },
];

const accepted = [
  { icon: Laptop, label: "Ordinateurs de bureau & portables" },
  { icon: Monitor, label: "Écrans & moniteurs" },
  { icon: Smartphone, label: "Tablettes & téléphones" },
  { icon: Tv, label: "Écrans TV" },
  { icon: Printer, label: "Imprimantes de bureau" },
  { icon: Speaker, label: "Enceintes & multimédia" },
];

export default function EntreprisesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-green font-semibold uppercase tracking-widest text-sm mb-4">
            Entreprises
          </p>
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-5 leading-tight">
            Pour un Numérique Engagé
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-7 rounded-full" />
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Le programme RSE qui transforme vos anciens matériels informatiques
            et multimédia en valeur économique, environnementale et solidaire.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-slate-600 leading-relaxed text-[15px] md:text-base">
            L&apos;Association Web Solidarité, depuis sa création, accompagne
            les entreprises dans la mise en place de solutions pour réduire les
            déchets informatiques et multimédia. Nous récupérons vos anciens
            matériels et vous aidons à devenir un acteur de l&apos;économie
            solidaire et durable.
          </p>
        </div>
      </section>

      {/* Ce que devient votre matériel */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center uppercase tracking-wide mb-3">
            Après quelques jours dans nos ateliers
          </h2>
          <div className="w-14 h-1 bg-green mx-auto mb-4 rounded-full" />
          <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto text-sm">
            Votre ancien parc se transforme
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-2xl p-7 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-green-soft flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-green" />
                </div>
                <h3 className="font-bold text-navy uppercase tracking-wide text-sm mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-14 bg-navy text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-lg md:text-xl font-medium leading-relaxed text-white/90">
            À travers nos actions, nous voulons un monde meilleur, plus engagé,
            plus responsable et plus humain, où chacun peut prendre sa place.
          </p>
        </div>
      </section>

      {/* Matériels acceptés */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center uppercase tracking-wide mb-3">
            Nous récupérons
          </h2>
          <div className="w-14 h-1 bg-yellow-400 mx-auto mb-10 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {accepted.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-card border border-border rounded-xl px-5 py-4"
              >
                <div className="w-10 h-10 rounded-lg bg-green-soft flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-green" />
                </div>
                <span className="text-sm font-medium text-navy">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            …et tout autre matériel informatique ou multimédia dont vous
            n&apos;avez plus l&apos;usage.
          </p>
        </div>
      </section>

      {/* Sécurité des données */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-full bg-green-soft flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-green" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-navy uppercase tracking-wide mb-3">
                Sécurité de vos données
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Nos équipes professionnelles sont disponibles pour sécuriser
                vos données sur HDD ou SSD. Nous pouvons vous délivrer un{" "}
                <strong>certificat de destruction des données</strong>.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-green font-semibold">
                <FileCheck className="w-4 h-4" />
                Certificat de destruction disponible
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
            Devenez acteur du numérique engagé
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8 leading-relaxed">
            Contactez-nous pour organiser la récupération de votre parc
            informatique et rejoindre le programme « Pour un Numérique Engagé ».
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5
                         bg-green hover:bg-green-hover text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg transition-colors"
            >
              Nous contacter
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/faire-un-don"
              className="inline-flex items-center justify-center px-7 py-3.5
                         bg-white/10 hover:bg-white/15 text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg border border-white/25 transition-colors"
            >
              En savoir plus sur les dons
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
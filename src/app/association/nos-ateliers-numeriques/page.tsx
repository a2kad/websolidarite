import Link from "next/link";
import {
  Users,
  Laptop,
  Shield,
  GraduationCap,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Nos Ateliers Numériques – Web Solidarité",
  description:
    "Ateliers informatiques et internet au Havre. Accompagnement vers l'autonomie numérique pour tous les publics, contre la fracture numérique.",
};

const publics = [
  "Seniors souhaitant gagner en autonomie",
  "Jeunes en recherche d'insertion",
  "Personnes en situation de précarité",
  "Habitants des quartiers QPV & ZRR",
  "Demandeurs d'emploi",
  "Toute personne motivée pour apprendre",
];

const themes = [
  {
    icon: Laptop,
    title: "Prise en main de l'ordinateur",
    text: "Allumer, naviguer, fichiers, clavier, souris, et premiers réflexes utiles au quotidien.",
  },
  {
    icon: GraduationCap,
    title: "Internet & démarches en ligne",
    text: "Mails, recherches, comptes en ligne, services publics, CAF, Ameli, Impôts…",
  },
  {
    icon: Shield,
    title: "Sécurité et bons réflexes",
    text: "Reconnaître les arnaques, protéger ses données, mots de passe, phishing et bonnes pratiques.",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    text: "Petits groupes et suivi adapté au rythme de chacun, dans une ambiance bienveillante.",
  },
];

const steps = [
  "Prise de contact (formulaire, téléphone ou passage à la boutique)",
  "Échange sur vos besoins et votre niveau",
  "Proposition d'atelier ou d'accompagnement",
  "Participation et progression à votre rythme",
];

export default function AteliersNumeriquesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Nos Ateliers Numériques
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Apprendre, comprendre et utiliser les outils numériques en toute
            autonomie — au Havre et alentours.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-slate-600 leading-relaxed text-[15px] mb-5">
            L&apos;Association Web Solidarité organise des ateliers
            informatiques et internet pour toutes les personnes ayant la
            volonté d&apos;apprendre. Notre objectif : accompagner chacun vers
            une plus grande autonomie numérique.
          </p>
          <p className="text-slate-600 leading-relaxed text-[15px]">
            Ces ateliers s&apos;inscrivent dans notre mission de lutte contre la
            fracture numérique, en lien avec le territoire de la Communauté
            Urbaine Le Havre Seine-Métropole et nos actions de
            reconditionnement.
          </p>
        </div>
      </section>

      {/* Publics */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center uppercase tracking-wide mb-3">
            À qui s&apos;adressent les ateliers ?
          </h2>
          <div className="w-14 h-1 bg-green mx-auto mb-10 rounded-full" />

          <div className="grid sm:grid-cols-2 gap-3">
            {publics.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thèmes */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center uppercase tracking-wide mb-3">
            Ce que nous abordons
          </h2>
          <div className="w-14 h-1 bg-yellow-400 mx-auto mb-12 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {themes.map((theme) => (
              <div
                key={theme.title}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-soft flex items-center justify-center">
                  <theme.icon className="w-6 h-6 text-green" />
                </div>
                <h3 className="font-bold text-navy uppercase tracking-wide text-sm mb-2">
                  {theme.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {theme.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça se passe */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center uppercase tracking-wide mb-3">
            Comment participer ?
          </h2>
          <div className="w-14 h-1 bg-green mx-auto mb-10 rounded-full" />

          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li
                key={step}
                className="flex gap-4 bg-card border border-border rounded-2xl p-5"
              >
                <span className="w-9 h-9 rounded-full bg-green text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-slate-700 leading-relaxed pt-1.5">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-navy text-white rounded-2xl p-8">
              <h2 className="text-xl font-bold uppercase tracking-wide mb-6">
                Informations pratiques
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Lieu</p>
                    <p className="text-white/75 leading-relaxed">
                      Boutique / Atelier Web Solidarité
                      <br />
                      48 – 50 Rue Albert Samain
                      <br />
                      76620 Le Havre
                    </p>
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
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-navy uppercase tracking-wide mb-4">
                Matériel reconditionné
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Les ateliers s&apos;appuient sur du matériel informatique
                reconditionné par l&apos;association. Ainsi, chaque don reçu
                peut servir directement à la formation et à l&apos;autonomie
                numérique des participants.
              </p>
              <Link
                href="/faire-un-don"
                className="inline-flex items-center justify-center px-5 py-2.5
                           bg-green hover:bg-green-hover text-white
                           text-sm font-semibold uppercase tracking-wide
                           rounded-lg transition-colors self-start"
              >
                Faire un don de matériel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">
            Envie de participer ou de devenir bénévole ?
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Contactez-nous pour connaître les prochaines sessions ou proposer
            votre aide en tant que formateur / accompagnateur.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5
                         bg-green hover:bg-green-hover text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg transition-colors"
            >
              Nous contacter
            </Link>
            <Link
              href="/association"
              className="inline-flex items-center justify-center px-7 py-3.5
                         bg-white/10 hover:bg-white/15 text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg border border-white/25 transition-colors"
            >
              L&apos;Association
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
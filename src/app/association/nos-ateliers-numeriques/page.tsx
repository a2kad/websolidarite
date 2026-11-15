import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Nos Ateliers Numériques – Web Solidarité",
  description:
    "Ateliers numériques au Havre et Montivilliers. Mini-formations de 2 à 8 séances pour tous les niveaux. Partenariat CPAM / Ameli.",
};

const topics = [
  "Manipulation du clavier et de la souris",
  "Navigation sur la messagerie",
  "Internet et recherches en ligne",
  "Réseaux sociaux",
  "Création de diaporamas",
  "Montages photos",
];

export default function AteliersNumeriquesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green text-white py-14 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
            Nos Ateliers Numériques
          </h1>
          <p className="mt-2 text-white/90 text-sm md:text-base uppercase tracking-wide">
            Association Web Solidarité
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Développer les compétences numériques avec nous&nbsp;!
          </h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Besoin d&apos;améliorer la maîtrise de votre ordinateur, tablette ou
            smartphone&nbsp;? Vous êtes débutant, ou plutôt expérimenté&nbsp;?
          </p>
          <p className="text-slate-600 leading-relaxed">
            Découvrez nos mini-formations de{" "}
            <strong>2 à 8 séances</strong> conçues pour vous.
          </p>
        </div>
      </section>

      {/* Présentation + image */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-white shadow-sm">
              <Image
                src="/images/atelier-numerique-pour-tous.png"
                alt="Atelier numérique pour tous"
                fill
                className="object-contain p-4"
                priority
              />
            </div>

            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
              <p>
                Nos ateliers informatiques sont organisés pour toute personne
                désireuse d&apos;apprendre. Nous proposons des ateliers
                d&apos;apprentissage et de perfectionnement informatique dans
                différents quartiers au <strong>Havre</strong> et à{" "}
                <strong>Montivilliers</strong>.
              </p>
              <ul className="space-y-2">
                {topics.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objectif */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-slate-600 leading-relaxed text-[15px]">
            Quel que soit votre niveau de connaissance numérique, vous trouverez
            une réponse adaptée à vos besoins dans nos ateliers numériques.
            L&apos;objectif est de permettre aux{" "}
            <strong>familles</strong>, aux <strong>seniors</strong> et aux{" "}
            <strong>étudiants</strong> de réaliser des démarches
            administratives en ligne et de les guider vers une certaine
            autonomie.
          </p>
          <p className="text-slate-500 text-sm mt-4">
            Nos conseillers vous guident en fonction de vos besoins.
          </p>
        </div>
      </section>

      {/* Aide technique */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-white">
              <Image
                src="/images/atelier-accompagnement.jpg"
                alt="Accompagnement numérique personnalisé"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-white">
              <Image
                src="/images/atelier-depannage.jpg"
                alt="Aide en cas de problème technique"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
          <p className="text-center text-sm text-slate-600 mt-6">
            Un problème technique avec votre périphérique&nbsp;? Nous avons
            sûrement la solution dans{" "}
            <Link
              href="/boutique"
              className="text-green font-semibold hover:underline"
            >
              nos ateliers
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CPAM / Ameli */}
      <section className="py-14 md:py-16 bg-navy text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">
                Caisse Primaire d&apos;Assurance Maladie
              </h2>
              <div className="space-y-4 text-white/85 text-[15px] leading-relaxed">
                <p>
                  Depuis des années, l&apos;évolution numérique de
                  l&apos;administration et des services publics s&apos;est
                  poursuivie, jusqu&apos;à une dématérialisation des démarches.
                </p>
                <p>
                  Depuis <strong>2021</strong>, en partenariat avec la{" "}
                  <strong>CPAM du Havre</strong>, nous vous accompagnons vers
                  une prise en main autonome de votre espace personnel&nbsp;:
                  création de votre espace <strong>AMELI</strong>, ainsi que de
                  votre <strong>ESPACE SANTÉ</strong>, effectuer une demande de
                  prestation, télécharger vos attestations… sur votre ordinateur
                  ou smartphone — rien de plus simple&nbsp;!
                </p>
              </div>
            </div>

            <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden bg-white flex items-center justify-center p-6">
              <Image
                src="/images/logo-assurance-maladie.jpg"
                alt="l'Assurance Maladie"
                width={320}
                height={120}
                className="object-contain max-h-full w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lieux + planning */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap gap-4 justify-center mb-10 text-sm font-semibold uppercase tracking-wide">
            <a href="#lieux" className="text-navy border-b-2 border-green pb-1">
              Nos lieux d&apos;interventions
            </a>
            <a
              href="#planning"
              className="text-slate-500 hover:text-navy transition-colors"
            >
              Le planning
            </a>
          </div>

          <div id="lieux" className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-navy uppercase tracking-wide mb-6 text-center">
              Nos lieux d&apos;interventions
            </h2>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm min-h-[360px]">
              <iframe
                title="Lieux d'ateliers numériques - Le Havre"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41600!2d0.12!3d49.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e02f3c0c0c0c0c%3A0x0!2sLe%20Havre!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[360px]"
              />
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center">
              Ateliers proposés dans différents quartiers du Havre et à
              Montivilliers. Contactez-nous pour le lieu le plus proche.
            </p>
          </div>

          <div id="planning" className="mt-14 max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-navy uppercase tracking-wide mb-3">
              Le planning
            </h2>
            <div className="w-12 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Les sessions sont organisées régulièrement selon les besoins des
              participants et les disponibilités de nos conseillers numériques.
              Pour connaître les prochaines dates, contactez-nous.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3
                         bg-green hover:bg-green-hover text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Une question sur les ateliers ou le partenariat CPAM&nbsp;?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5
                       bg-green hover:bg-green-hover text-white
                       text-sm font-semibold uppercase tracking-wide
                       rounded-lg transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </>
  );
}
import Link from "next/link";
import Image from "next/image";
import { Award, Recycle, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "L'Association – Web Solidarité",
  description:
    "Association Web Solidarité France, créée en 2015 au Havre. Lutte contre la fracture numérique, reconditionnement D3E et label Ordi 3.0.",
};

export default function AssociationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            L&apos;Association
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg">
            Qui sommes-nous et que portons-nous comme projets
          </p>
        </div>
      </section>

      {/* Nos Projets & Ambitions */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-navy uppercase tracking-wide mb-3 text-center">
            Nos Projets &amp; Ambitions
          </h2>
          <div className="w-14 h-1 bg-green mx-auto mb-10 rounded-full" />

          <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
            <p>
              Occupant une place de plus en plus importante et vitale dans nos
              vies, l&apos;informatique devient incontournable, et reste malgré
              tout un <strong>univers méconnu</strong> du grand public.
            </p>
            <p>
              L&apos;Association Web Solidarité France, créée en{" "}
              <strong>avril 2015</strong>, a pris l&apos;engagement d&apos;aider
              toute personne victime de la fracture numérique (seniors, jeunes,
              personnes dans le besoin… bref tout public dans tous les quartiers
              de la ville du Havre et environnante).
            </p>
          </div>

          {/* Labels / partenaires */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-green-soft flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green" />
              </div>
              <h3 className="font-bold text-navy uppercase tracking-wide text-sm mb-3">
                Label Ordi 3.0 – Ordi 3E
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Depuis le 26 février 2019, l&apos;association est labellisée
                Ordi 3.0 – Ordi 3E (Équipements Électriques et Électroniques)
                pour ses engagements sociaux et environnementaux. Les actions
                portent sur la formation au numérique vers l&apos;autonomie et
                l&apos;équipement des familles grâce à nos matériels
                reconditionnés.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-green-soft flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-green" />
              </div>
              <h3 className="font-bold text-navy uppercase tracking-wide text-sm mb-3">
                Ambition Zéro Gâchis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Partenaire du programme Ambition Zéro Gâchis de la Communauté
                Urbaine Le Havre Seine-Métropole pour le projet des recycleries.
                La première a ouvert en novembre 2018, en donnant une deuxième
                vie aux matériels informatiques et multimédia (D3E).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy uppercase tracking-wide mb-3 text-center">
            Notre Équipe
          </h2>
          <div className="w-14 h-1 bg-yellow-400 mx-auto mb-12 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            {/* Image à gauche */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-slate-200">
              <Image
                src="/images/equipe.jpg"
                alt="Équipe Web Solidarité"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Texte à droite */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-green-soft flex items-center justify-center">
                  <Users className="w-6 h-6 text-green" />
                </div>
                <h3 className="font-bold text-navy uppercase tracking-wide">
                  Une équipe engagée
                </h3>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                Nous sommes une structure associative dirigée par une petite
                équipe dynamique de bénévoles et salariés issus de divers
                secteurs d&apos;activités et du monde WEB :
              </p>

              <ul className="space-y-2 text-sm text-slate-600 mb-8">
                {[
                  "Développeurs WEB",
                  "Administrateurs de réseaux",
                  "Webmasters",
                  "Ingénieurs à la retraite",
                  "Techniciens de réseaux",
                  "Formateurs attitrés",
                  "Secrétaires administratives",
                  "Étudiants, passionnés du WEB, acteurs d'ONG",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-slate-600 leading-relaxed">
                Ils mettent leurs expériences au profit des personnes éloignées
                du monde des nouvelles technologies de l&apos;information et de
                l&apos;Internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liens utiles association */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                href: "/association/soutenez-nous",
                label: "Soutenez-nous",
                text: "Dons, recyclerie et comment nous aider",
              },
              {
                href: "/association/nos-ateliers-numeriques",
                label: "Nos Ateliers Numériques",
                text: "Formations et accompagnement au numérique",
              },
              {
                href: "/association/projets-internationaux",
                label: "Projets Internationaux",
                text: "Nos actions au-delà du territoire",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-md hover:border-green/30 transition-all group"
              >
                <h3 className="font-bold text-navy uppercase tracking-wide text-sm mb-2 group-hover:text-green transition-colors">
                  {item.label}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{item.text}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-green">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">
            Envie de nous rejoindre ?
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Bénévoles, partenaires ou donateurs — chaque aide compte pour
            réduire la fracture numérique au Havre et alentours.
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
              href="/association/soutenez-nous"
              className="inline-flex items-center justify-center px-7 py-3.5
                         bg-white/10 hover:bg-white/15 text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg border border-white/25 transition-colors"
            >
              Soutenez-nous
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
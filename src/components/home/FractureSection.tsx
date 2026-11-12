import Link from "next/link";
import Image from "next/image";

const items = [
  {
    title: "RECYCLAGE",
    description:
      "Partenaire du programme ZERO GÂCHIS de la communauté urbaine (CU) Le Havre Seine-Métropole. Retrouvez-nous aux permanences au centre de recyclage du Havre Nord ou d'Harfleur.",
    href: "/faire-un-don",
    button: "Soutenez-nous : Le centre de Recyclage",
    icon: "♻️",
  },
  {
    title: "COLLECTE & REEMPLOI",
    description:
      "Depuis sa création, nous assurons les services de collecte, de tri et de revalorisation des matériels informatiques et multimédia pour leur redonner une deuxième vie en réduisant les déchets électroniques – D3E.",
    href: "/boutique",
    button: "Notre Boutique Solidaire",
    icon: "🔄",
  },
  {
    title: "ACCOMPAGNEMENT",
    description:
      "Nos ateliers informatiques et internet sont organisés pour toutes personnes ayant la volonté d'apprendre. Nous accompagnons divers public dans la maîtrise des outils digitaux.",
    href: "/association",
    button: "Les Ateliers Numériques",
    icon: "📖",
  },
  {
    title: "ACTIONS SOCIÉTALES",
    description:
      "Dans sa vision environnementaliste et sociale, l'association a mis en place plusieurs projets sociaux en partenariat avec les collectivités et les entreprises du territoire.",
    href: "/association",
    button: "Nos Projets",
    icon: "👥",
  },
];

export function FractureSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* ===== LEFT: À LA FRACTURE NUMÉRIQUE ===== */}
          <div className="lg:col-span-4">
            <div className="bg-navy text-white rounded-2xl p-7 md:p-8 h-full flex flex-col">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-5">
                  <span className="text-3xl">🛑</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-3">
                  À la fracture numérique
                </h2>
                <div className="w-14 h-1 bg-yellow-400 rounded-full" />
              </div>

              <div className="space-y-4 text-white/85 text-sm leading-relaxed flex-1">
                <p>
                  En France, presque 13 millions de personnes sont victimes de
                  la fracture numérique.
                </p>
                <p>
                  Elle se définit par le fossé créé par les inégalités
                  d&apos;accès aux informations, aux réseaux et aux autres
                  technologies numériques ou digitales.
                </p>
                <p>
                  Notre but, c&apos;est d&apos;accompagner vers une certaine
                  autonomie dans l&apos;utilisation des outils numériques, les
                  familles ou des personnes issues des quartiers QPV & ZRR ou
                  vivant dans une certaine précarité.
                </p>
              </div>

              <Link
                href="/association"
                className="mt-8 inline-flex items-center justify-center px-5 py-2.5
                           bg-white/15 hover:bg-white/25 text-white
                           text-sm font-semibold uppercase tracking-wide
                           rounded-lg transition-colors self-start"
              >
                En savoir plus
              </Link>
            </div>
          </div>

          {/* ===== MIDDLE: 4 items ===== */}
          <div className="lg:col-span-4 space-y-5">
            {items.map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="text-green text-xl mt-0.5 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-green font-bold text-sm uppercase tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center px-4 py-2
                               bg-slate-200 hover:bg-slate-300 text-navy
                               text-xs font-semibold uppercase tracking-wide
                               rounded-lg transition-colors"
                  >
                    {item.button}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ===== RIGHT: QUI SOMMES-NOUS ? ===== */}
          <div className="lg:col-span-4">
            <div className="bg-navy text-white rounded-2xl overflow-hidden h-full flex flex-col">
              {/* Photo */}
              <div className="relative w-full h-52 md:h-56">
                <Image
                  src="/images/main-qui-somme-nous.jpeg"
                  alt="Qui sommes-nous - Web Solidarité"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7 md:p-8 flex flex-col flex-1">
                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-3">
                  Qui sommes-nous ?
                </h2>
                <div className="w-14 h-1 bg-yellow-400 rounded-full mb-5" />

                <p className="text-sm text-white/85 leading-relaxed flex-1">
                  Nous sommes une structure associative dirigée par une petite
                  équipe dynamique de bénévoles issus de divers secteurs
                  d&apos;activités (développeurs WEB, administrateurs de réseaux,
                  webmaster, ingénieurs, formateurs attitrés, secrétaires
                  administratives, étudiants, des passionnés du WEB, acteurs
                  d&apos;ONG)
                </p>

                <Link
                  href="/association"
                  className="mt-6 inline-flex items-center justify-center px-5 py-2.5
                             bg-white/15 hover:bg-white/25 text-white
                             text-sm font-semibold uppercase tracking-wide
                             rounded-lg transition-colors self-start"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
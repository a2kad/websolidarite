import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Leaf,
  ShieldCheck,
  ClipboardList,
  HardDrive,
  Tag,
  Recycle,
  Wrench,
  TestTube,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Faire un don – Web Solidarité",
  description:
    "Donnez vos ordinateurs et appareils électroniques pour le réemploi écologique. RSE, effacement des données et lutte contre la fracture numérique.",
};

const steps = [
  {
    n: "1",
    icon: ClipboardList,
    title: "Tri et audit",
    text: "Tri et audit du matériel dans nos ateliers.",
  },
  {
    n: "2",
    icon: HardDrive,
    title: "Effacement des données",
    text: "Effacement sécurisé via DBAN (Darik’s Boot and Nuke) ou Blancco, si vos services informatiques nous confient cette mission.",
  },
  {
    n: "3",
    icon: Tag,
    title: "Traçabilité",
    text: "Traçabilité et étiquetage du matériel.",
  },
  {
    n: "4",
    icon: Recycle,
    title: "Recyclage",
    text: "Recyclage des matériels non réutilisables (ferrailles, HDD, barrettes, alimentations, cartes mères…).",
  },
  {
    n: "5",
    icon: Wrench,
    title: "Remise en état",
    text: "Nettoyage, réparation et installation d’OS Ubuntu/Linux ou Windows selon l’état du matériel.",
  },
  {
    n: "6",
    icon: TestTube,
    title: "Tests",
    text: "Test complet avant redistribution ou vente solidaire.",
  },
  {
    n: "7",
    icon: Users,
    title: "Impact social",
    text: "Équipement de nos salles d’initiation, des familles en précarité numérique, et ventes solidaires.",
  },
];

const stats = [
  {
    value: "53.6M",
    label: "de tonnes de déchets électroniques générés dans le monde*",
  },
  {
    value: "80%",
    label: "de l’empreinte carbone d’un smartphone liée à sa fabrication",
  },
  {
    value: "5X",
    label: "allonger la durée de vie des appareils : le levier le plus efficace",
  },
];

export default function FaireUnDonPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green text-white py-14 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">
            Faire un don
          </h1>
        </div>
      </section>

      {/* Intro RSE */}
      <section className="py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-navy font-bold uppercase tracking-wide text-sm md:text-base mb-3">
            La responsabilité sociale et environnementale (RSE), un enjeu majeur
            pour les entreprises.
          </p>
          <p className="text-navy font-semibold uppercase tracking-wide text-sm md:text-base mb-6">
            Donnez vos ordinateurs &amp; appareils électroniques pour le
            réemploi écologique.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 mb-10
                       bg-navy hover:bg-navy-light text-white
                       text-sm font-semibold uppercase tracking-wide
                       rounded-lg transition-colors"
          >
            Contactez-nous
          </Link>

          <div className="space-y-5 text-slate-600 text-[15px] leading-relaxed text-left md:text-center">
            <p>
              L’Association Web Solidarité initie des projets pour réutiliser
              les parcs informatiques amortis fiscalement de nombreuses
              entreprises et s’inscrit dans la logique de la directive DEEE
              (D3E – Déchets d’Équipements Électroniques et Électriques).
            </p>
            <p>
              La dotation et le choix du reconditionnement des ordinateurs sont
              une opportunité pour toute entreprise d’inscrire son activité dans
              une logique de bonnes pratiques économiques, sociales et
              environnementales — autrement dit, de répondre aux exigences de la
              RSE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-5 h-5 text-green" />
                <h3 className="font-bold text-navy uppercase tracking-wide text-sm">
                  La solidarité
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Le reconditionnement participe à la lutte contre la fracture
                numérique et à la réduction des inégalités.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Leaf className="w-5 h-5 text-green" />
                <h3 className="font-bold text-navy uppercase tracking-wide text-sm">
                  L’environnement
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Le reconditionnement réduit la production des déchets D3E et
                favorise une économie durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantie données */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card border border-border rounded-2xl p-7 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-soft flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-green" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-navy uppercase tracking-wide mb-3">
                  Garantie d’effacement des données
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Donner un parc informatique amorti implique de laisser sortir
                  de l’entreprise du matériel pouvant contenir des données
                  professionnelles confidentielles.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Il est essentiel de s’assurer que ces données seront
                  définitivement et irréversiblement effacées à{" "}
                  <strong>100&nbsp;%</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appel entreprises + process */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-center text-slate-600 leading-relaxed mb-12">
            Vous êtes une entreprise et possédez du matériel informatique et
            multimédia en fin de vie ? Revalorisez vos équipements : PC fixes et
            portables, écrans, imprimantes, smartphones, téléphonie fixe,
            tablettes, téléviseurs, infrastructure réseau, accessoires,
            consommables, câbles…{" "}
            <strong>Peu importe leur état</strong>. Le don s’inscrit pleinement
            dans votre politique RSE.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center uppercase tracking-wide mb-3">
            Notre processus
          </h2>
          <div className="w-14 h-1 bg-green mx-auto mb-12 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-soft flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-green" />
                  </div>
                  <span className="text-xs font-bold text-green uppercase tracking-wider">
                    Étape {step.n}
                  </span>
                </div>
                <h3 className="font-bold text-navy uppercase tracking-wide text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact chiffres */}
      <section className="py-16 md:py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center uppercase tracking-wide mb-3">
            Impact environnemental numérique
          </h2>
          <p className="text-center text-white/70 mb-12 text-sm md:text-base">
            Des chiffres qui révèlent l’urgence d’adopter des pratiques plus
            durables
          </p>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-navy-light/50 border border-white/10 rounded-2xl p-7 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-white/75 uppercase tracking-wide leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actualité SPB */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center uppercase tracking-wide mb-3">
            Don des salariés de l’entreprise SPB Le Havre
          </h2>
          <div className="w-14 h-1 bg-yellow-400 mx-auto mb-10 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-slate-100">
              <Image
                src="/images/spb-don.jpg"
                alt="Don des salariés SPB Le Havre – collecte de matériels informatiques"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-green font-semibold uppercase tracking-wide text-sm mb-3">
                Actualités
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les salariés de l’entreprise SPB au Havre en Normandie ont mené,
                au sein de leurs bureaux, une opération de collecte de matériels
                informatiques et multimédia pendant six (6) mois.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Au total, près de soixante (60) kilos de matériels ont été
                récupérés, sous l’impulsion bienveillante et dynamique de la
                chargée de communication.
              </p>
              <p className="text-sm font-semibold text-navy">
                Opération au mois de juillet 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">
            Prêt à faire un don ?
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Particulier ou entreprise — chaque don compte pour le réemploi et la
            solidarité numérique.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5
                         bg-green hover:bg-green-hover text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg transition-colors"
            >
              Contactez-nous
            </Link>
            <Link
              href="/entreprises"
              className="inline-flex items-center justify-center px-7 py-3.5
                         bg-white/10 hover:bg-white/15 text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg border border-white/25 transition-colors"
            >
              Espace entreprises
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
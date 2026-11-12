import Link from "next/link";
import Image from "next/image";
import {
  Recycle,
  ShieldCheck,
  ClipboardList,
  Tag,
  Wrench,
  TestTube,
  Users,
  ArrowLeft,
  Leaf,
} from "lucide-react";

export const metadata = {
  title: "Politique R.S.E. – Web Solidarité",
  description:
    "Responsabilité Sociétale et Environnementale. Collecte, traitement et valorisation des déchets informatiques et multimédia sur le territoire havrais.",
};

const processSteps = [
  {
    icon: ClipboardList,
    title: "Tri et audit",
    text: "Audit complet du matériel dans nos ateliers pour évaluer son potentiel de réemploi.",
  },
  {
    icon: ShieldCheck,
    title: "Effacement sécurisé",
    text: "Effacement total et sécurisé des données (HDD / SSD) avec possibilité de certificat.",
  },
  {
    icon: Tag,
    title: "Traçabilité",
    text: "Étiquetage et suivi de chaque équipement tout au long du processus.",
  },
  {
    icon: Recycle,
    title: "Recyclage",
    text: "Orientation vers le recyclage des matériels non récupérables, dans le respect des normes.",
  },
  {
    icon: Wrench,
    title: "Remise en état",
    text: "Nettoyage, réparation et installation des systèmes d'exploitation selon l'état du matériel.",
  },
  {
    icon: TestTube,
    title: "Tests",
    text: "Contrôle qualité complet avant mise en réemploi ou redistribution.",
  },
];

export default function PolitiqueRsePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-green font-semibold uppercase tracking-widest text-sm mb-4">
            Engagement RSE
          </p>
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-5 leading-tight">
            Responsabilité Sociétale et Environnementale
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Collecte, traitement et valorisation des déchets informatiques
            &amp; multimédia
          </p>
        </div>
      </section>

      {/* Retour */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/entreprises"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-green transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l&apos;espace Entreprises
        </Link>
      </div>

		{/* Notre vision */}
		<section className="py-12 md:py-16 bg-background">
		<div className="container mx-auto px-4 max-w-4xl">
			<h2 className="text-2xl md:text-3xl font-bold text-navy uppercase tracking-wide mb-3 text-center">
			Notre vision
			</h2>
			<div className="w-14 h-1 bg-green mx-auto mb-8 rounded-full" />

			<div className="space-y-5 text-slate-600 leading-relaxed text-[15px] max-w-3xl mx-auto">
			<p>
				Vous êtes un professionnel ? Votre activité génère des volumes
				importants de déchets informatiques et multimédia ?
			</p>
			<p>
				Avec Web Solidarité, faites le choix de la{" "}
				<strong>proximité</strong> pour la gestion de vos déchets
				numériques. Nous vous offrons toutes les solutions pour optimiser
				leur tri dans le respect des normes : le reconditionnement et le
				réemploi étant la solution pour valoriser votre matériel.
			</p>
			<p className="bg-green-soft border-l-4 border-green rounded-r-xl px-5 py-4 text-slate-700">
				Chaque année en France, plus de <strong>2,5 millions</strong>{" "}
				d&apos;ordinateurs sont jetés par des entreprises, dont au moins
				la moitié est encore fonctionnelle.
			</p>
			</div>

			{/* Schéma */}
			<div className="mt-10 rounded-2xl overflow-hidden border border-border bg-white shadow-sm">
			<Image
				src="/images/schema-reemploi.jpg"
				alt="Schéma du réemploi informatique - Web Solidarité"
				width={1200}
				height={700}
				className="w-full h-auto object-contain"
				priority
			/>
			</div>
		</div>
		</section>

      {/* Positionnement */}
      <section className="py-14 bg-navy text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
              <Leaf className="w-7 h-7 text-green" />
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">
            Un des pionniers de la revalorisation
          </h2>
          <p className="text-white/80 leading-relaxed">
            Web Solidarité est l&apos;un des pionniers de la revalorisation du
            matériel informatique et multimédia sur le territoire de la
            Métropole havraise. Notre objectif : la réduction des déchets
            électroniques, électriques et multimédia, en lien avec le programme{" "}
            <strong>Ambition Zéro Gâchis</strong> de la communauté urbaine.
          </p>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center uppercase tracking-wide mb-3">
            Notre processus
          </h2>
          <div className="w-14 h-1 bg-yellow-400 mx-auto mb-12 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-green-soft flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-green" />
                  </div>
                  <span className="text-xs font-bold text-green uppercase tracking-wider">
                    {String(i + 1).padStart(2, "0")}
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

      {/* Destination finale */}
      <section className="py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-full bg-green-soft flex items-center justify-center shrink-0">
              <Users className="w-7 h-7 text-green" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy uppercase tracking-wide mb-3">
                À qui profite le matériel revalorisé ?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Le matériel remis en état permet d&apos;équiper nos salles pour
                les ateliers informatiques, ainsi que des personnes éloignées
                du numérique. C&apos;est le cœur de notre mission : transformer
                des déchets en opportunité sociale et environnementale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">
            Confiez-nous la gestion de vos déchets numériques
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Proximité, traçabilité, sécurité des données et impact social —
            un accompagnement complet pour votre politique RSE.
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
              href="/entreprises"
              className="inline-flex items-center justify-center px-7 py-3.5
                         bg-white/10 hover:bg-white/15 text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg border border-white/25 transition-colors"
            >
              Espace Entreprises
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
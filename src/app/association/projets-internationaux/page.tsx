import Link from "next/link";
import Image from "next/image";
import { Globe, Laptop, Users, Heart } from "lucide-react";

export const metadata = {
  title: "Projets Internationaux – Web Solidarité",
  description:
    "Web Solidarité France équipe des écoles au Sénégal et développe des projets numériques internationaux pour lutter contre la fracture numérique Nord-Sud.",
};

export default function ProjetsInternationauxPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green text-white py-14 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">
            Projets Internationaux
          </h1>
        </div>
      </section>

      {/* Projet Sénégal */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm">
              <Image
                src="/images/projets/senegal-ecole-1.jpg"
                alt="Équipement informatique d'une école au Sénégal"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
              <p>
                Web Solidarité France, en partenariat avec des associations
                (Artisans du Monde France, Section Harfleur…), a mis en place
                des projets d&apos;équipements de matériels informatiques
                reconditionnés au bénéfice des{" "}
                <strong>écoles primaires et collèges au Sénégal</strong>{" "}
                (village NDEM).
              </p>
              <p>
                L&apos;esprit de ce projet est de donner la chance aux enfants
                défavorisés face à la fracture numérique entre le Nord et le
                Sud.
              </p>
              <p>
                Le but est aussi de réduire le gaspillage induit par la
                surconsommation des matières premières.
              </p>
              <p>
                D&apos;autres projets sont en cours d&apos;élaboration avec
                d&apos;autres partenaires et pays en voie de développement
                (Tunisie, Togo, Burkina Faso, Mali, Sénégal, Côte d&apos;Ivoire,
                Guinée…).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contexte mondial */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed order-2 lg:order-1">
              <p>
                Vers la fin de 2021, presque{" "}
                <strong>3 milliards de personnes</strong> dans le monde
                n&apos;avaient toujours pas accès à l&apos;internet, et la
                grande majorité vit dans les pays en développement.
              </p>
              <p>
                Les technologies du numérique offrent à tous les pays du monde
                des perspectives uniques pour accélérer la croissance économique
                et connecter les habitants de la planète aux services et aux
                emplois de tous les secteurs d&apos;activités.
              </p>
              <p>
                L&apos;exemple est palpable durant la crise sanitaire
                COVID-19 connue de tous.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm order-1 lg:order-2">
              <Image
                src="/images/projets/senegal-ecole-2.jpg"
                alt="Enfants utilisant des ordinateurs reconditionnés"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-green-soft flex items-center justify-center">
              <Globe className="w-7 h-7 text-green" />
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-[15px] mb-5">
            Face à ces enjeux de développement complexes, les technologies
            numériques peuvent libérer l&apos;innovation et permettre aux pays
            de s&apos;affranchir du processus de développement classique : e-santé,
            blockchains, services bancaires virtuels, réseaux sociaux…
          </p>
          <p className="text-slate-600 leading-relaxed text-[15px]">
            Web Solidarité France, dans sa vision nationale et internationale,
            veut bien aider à renforcer les compétences numériques en termes
            d&apos;accompagnement et d&apos;équipement des populations. Un
            accent particulier est porté sur les{" "}
            <strong>jeunes filles et les femmes</strong>, avec l&apos;appui de
            partenaires de tout bord.
          </p>
        </div>
      </section>

      {/* Projet Empire des Enfants */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative w-40 h-40 mx-auto mb-8 rounded-xl overflow-hidden border border-border shadow-sm">
            <Image
              src="/images/projets/empire-des-enfants.jpg"
              alt="Projet Empire des Enfants - Dakar"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-navy uppercase tracking-wide mb-4">
            Projet Empire des Enfants
          </h2>
          <div className="w-14 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />

          <p className="text-slate-600 leading-relaxed text-[15px] mb-8">
            Actuellement, nous projetons d&apos;appuyer le projet{" "}
            <strong>Empire des Enfants</strong> à Dakar (Sénégal) par diverses
            actions concrètes sur le terrain et recherchons activement des
            partenaires avec lesquels nous pouvons mener à bien ces projets.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="bg-card border border-border rounded-2xl p-5 flex gap-3">
              <Laptop className="w-5 h-5 text-green shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600 leading-relaxed">
                Équiper le centre avec du matériel reconditionné
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5 flex gap-3">
              <Users className="w-5 h-5 text-green shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600 leading-relaxed">
                Déployer des « Ambassadeurs du Numérique Pour Tous » pour des
                missions de solidarité de courte durée sur place
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La Grande Question */}
      <section className="py-16 md:py-20 bg-navy text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex justify-center mb-5">
            <Heart className="w-8 h-8 text-yellow-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-6">
            La Grande Question
          </h2>
          <p className="text-white/85 leading-relaxed mb-5">
            Quelles sont les solutions à adopter pour que tous les pays du monde
            récoltent les fruits des progrès technologiques et participent
            pleinement à l&apos;économie numérique mondiale ?
          </p>
          <p className="text-white/70 italic mb-8">
            Comme le prophétisait le philosophe grec Aristote : « Le progrès ne
            vaut que s&apos;il est partagé par tous. »
          </p>
          <p className="text-white/85 mb-8">
            Vous aimeriez rejoindre notre aventure ? Vous avez des idées de
            projets ou certaines demandes ?
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

      {/* Note partenaire */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-sm text-slate-500 leading-relaxed">
            À ce jour, nous avons initié un projet d&apos;équipement avec un
            partenaire de taille,{" "}
            <strong>Artisans du Monde – section Harfleur</strong>, pour doter et
            accompagner des écoles dans certains villages du Sénégal (village
            NDEM).
          </p>
        </div>
      </section>
    </>
  );
}
import Link from "next/link";
import Image from "next/image";
import { Clock, Phone, MapPin, Package } from "lucide-react";

export const metadata = {
  title: "Soutenez-nous – Web Solidarité",
  description:
    "Déposez vos dons à la Recyclerie du Havre Nord. Ordinateurs, écrans, multimédia et plus encore dans le cadre du programme Ambition Zéro Gâchis.",
};

const acceptedItems = [
  "Ordinateurs (portables et fixes)",
  "Imprimantes et scanners",
  "Écrans et moniteurs (HDMI, VGA…)",
  "Écrans de télévision",
  "Câbles (alimentation, VGA, DisplayPort, HDMI)",
  "Consoles PS3, PS4, PS5 (avec ou sans disque)",
  "Accessoires multimédia et internet",
  "Autres appareils multimédia anciens",
];

const otherDonations = [
  {
    label: "Équipements sportifs et vélos",
    href: "https://la-roue-libre.com/",
    partner: "La Roue Libre",
  },
  {
    label: "Textile, linge, chaussures, bibelots",
    href: "#",
    partner: "Le Grenier",
  },
  {
    label: "Équipements de santé",
    href: "http://www.medico-lcf.org/",
    partner: "Médico LCF",
  },
];

export default function SoutenezNousPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Soutenez-nous
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-white/80 max-w-2xl mx-auto">
            Déposez vos dons et participez à l&apos;économie circulaire sur le
            territoire havrais.
          </p>
        </div>
      </section>

      {/* Intro Zéro Gâchis */}
      <section className="py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="relative w-28 h-28 shrink-0">
              <Image
                src="/images/logo-recyclerie.png"
                alt="La Recyclerie"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-slate-600 text-center md:text-left leading-relaxed text-[15px] flex-1">
              Dans le cadre du programme{" "}
              <strong>Ambition Zéro Gâchis</strong>, la Communauté Urbaine Le
              Havre met à disposition des habitants un espace de don à la
              Recyclerie du Havre, afin de réduire les déchets produits et de
              transformer le possible en ressources.
            </p>

            <div className="relative w-28 h-28 shrink-0">
              <Image
                src="/images/logo-le-havre-seine.png"
                alt="Le Havre Seine Métropole"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* La Recyclerie */}
      <section className="py-16 md:py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm">
              <Image
                src="/images/recyclerie-havre-nord.jpg"
                alt="Centre de Recyclage Havre Nord"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy uppercase tracking-wide mb-2">
                La Recyclerie
              </h2>
              <p className="text-green font-semibold mb-5">
                Centre de Recyclage Havre Nord
              </p>

              <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
                <p>
                  À quelques pas du Lidl entre Bléville et Montgaillard (au{" "}
                  <strong>25 Rue du Capuchet, 76620 Le Havre</strong>), la
                  Recyclerie du Havre Nord vous accueille pour récupérer votre
                  matériel.
                </p>
                <p>
                  Situé à droite juste après la grille, un local récolte les
                  dons qui seront ensuite récupérés par les associations
                  partenaires du projet.
                </p>
                <p>
                  Déposez-y tous vos ordinateurs, imprimantes, écrans (y compris
                  TV HDMI/VGA), câbles, consoles PS3/PS4/PS5, accessoires
                  multimédia et autres appareils anciens : ils seront triés et
                  reconditionnés dans nos locaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que vous pouvez déposer */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 justify-center mb-3">
            <Package className="w-6 h-6 text-green" />
            <h2 className="text-2xl md:text-3xl font-bold text-navy uppercase tracking-wide">
              Matériels acceptés
            </h2>
          </div>
          <div className="w-14 h-1 bg-green mx-auto mb-10 rounded-full" />

          <div className="grid sm:grid-cols-2 gap-3 mb-12">
            {acceptedItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3"
              >
                <span className="w-2 h-2 rounded-full bg-green shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-border rounded-2xl p-6 md:p-8">
            <h3 className="font-bold text-navy uppercase tracking-wide text-sm mb-4">
              Autres dons possibles
            </h3>
            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              Il est également possible de déposer des équipements sportifs, des
              vélos, du textile, du linge, des chaussures, des bibelots ainsi
              que des équipements de santé, redistribués aux associations
              partenaires :
            </p>
            <ul className="space-y-2">
              {otherDonations.map((item) => (
                <li key={item.partner} className="text-sm text-slate-600">
                  <span className="font-medium text-navy">{item.label}</span>
                  {" → "}
                  {item.href !== "#" ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green font-semibold hover:underline"
                    >
                      {item.partner}
                    </a>
                  ) : (
                    <span className="text-green font-semibold">{item.partner}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Infos pratiques + carte */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Infos */}
            <div className="bg-card border border-border rounded-2xl p-7 md:p-8 space-y-8">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-green-soft flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-green" />
                </div>
                <div>
                  <h3 className="font-bold text-navy uppercase tracking-wide text-sm mb-2">
                    Horaires d&apos;ouverture
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Du lundi au samedi, de 10h00 à 18h00
                    <br />
                    Fermé jeudi et dimanche
                  </p>
                </div>
              </div>

              <div className="border-t border-dashed border-slate-200" />

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-green-soft flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-green" />
                </div>
                <div>
                  <h3 className="font-bold text-navy uppercase tracking-wide text-sm mb-2">
                    Téléphone
                  </h3>
                  <a
                    href="tel:+33277616825"
                    className="text-sm text-green font-semibold hover:underline"
                  >
                    02 77 61 68 25
                  </a>
                </div>
              </div>

              <div className="border-t border-dashed border-slate-200" />

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-green-soft flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-green" />
                </div>
                <div>
                  <h3 className="font-bold text-navy uppercase tracking-wide text-sm mb-2">
                    Adresse
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    25 Rue du Capuchet
                    <br />
                    76620 Le Havre
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm min-h-[320px]">
              <iframe
                title="Recyclerie du Havre Nord - Carte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d689.281907899405!2d0.09995524038363736!3d49.52379781067347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e02f57855bdbd3%3A0x9456ce0403ea2ef!2sCentre%20de%20Recyclage%20Havre%20Nord!5e0!3m2!1sfr!2sfr!4v1794493793311!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">
            Une question sur vos dons ?
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Contactez-nous ou passez directement à la Recyclerie aux horaires
            d&apos;ouverture.
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
              href="/faire-un-don"
              className="inline-flex items-center justify-center px-7 py-3.5
                         bg-white/10 hover:bg-white/15 text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg border border-white/25 transition-colors"
            >
              Faire un don (entreprises)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
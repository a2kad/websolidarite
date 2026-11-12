"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  { src: "/images/partners/partner-01.jpg", alt: "Le Havre" },
  { src: "/images/partners/partner-02.png", alt: "Logeo Seine Estuaire" },
  { src: "/images/partners/partner-03.png", alt: "Enedis" },
  { src: "/images/partners/partner-04.jpg", alt: "SPB" },
  { src: "/images/partners/partner-05.gif", alt: "Sogestran Group" },
  { src: "/images/partners/partner-06.svg", alt: "Ameli" },
  { src: "/images/partners/partner-07.jpg", alt: "Ville de Gonfreville" },
  { src: "/images/partners/partner-08.png", alt: "Le Havre Seine Métropole" },
  { src: "/images/partners/partner-09.jpg", alt: "Assurance Maladie" },
  { src: "/images/partners/partner-10.svg", alt: "Ville de Montivilliers" },
  { src: "/images/partners/partner-11.png", alt: "Caisse d'Epargne" },
  { src: "/images/partners/partner-12.png", alt: "Credit Cooperatif" },
  { src: "/images/partners/Logo_IZI_by_EDF.svg.png", alt: "IZI by EDF" },
  { src: "/images/partners/Logo-Artisans-du-monde.jpg", alt: "Artisans du monde" },
  { src: "/images/partners/Logo-Auxitec.jpg", alt: "Auxitec" },
  { src: "/images/partners/Logo-CCAS.jpg", alt: "CCAS" },
  { src: "/images/partners/Logo-CCI.png", alt: "CCI" },
  { src: "/images/partners/Logo-CRAR-Normandie-carre.png", alt: "CRAR Normandie" },
  { src: "/images/partners/Logo-Derudder.jpg", alt: "Derudder" },
  { src: "/images/partners/Logo-GMP.png", alt: "GMP" },
  { src: "/images/partners/Logo-HELVETIA.svg", alt: "HELVETIA" },
  { src: "/images/partners/Logo-le-havrelogotourisme.jpg", alt: "Le Havre Logotourisme" },
  { src: "/images/partners/Logo-legrenier.png", alt: "Le Grenier" },
  { src: "/images/partners/Logo-Lyseo.jpg", alt: "Lyseo" },
  { src: "/images/partners/Logo-Maif.png", alt: "Maif" },
  { src: "/images/partners/Logo-MEDICO.png", alt: "MEDICO" },
  { src: "/images/partners/Logo-Meilleurtaux.png", alt: "Meilleurtaux" },
  { src: "/images/partners/Logo-transdevlehavre.jpg", alt: "Transdev Le Havre" },
  { src: "/images/partners/Logo-universiteduhavre.jpg", alt: "Université du Havre" },
  { src: "/images/partners/logo-vectoriel-haropa-port.jpg", alt: "Haropa Port" },
  { src: "/images/partners/logo2020-transparent_La-Roue-Libre.png", alt: "La Roue Libre" },
  { src: "/images/partners/nbbn.png", alt: "La Recyclerie" },
  { src: "/images/partners/Safran_-_logo_2016.png", alt: "Safran" },
  { src: "/images/partners/testnouveaulogolargesansmarge.png", alt: "FabLab Le Havre Numerique" },
  // добавляй остальные сюда
];

export function PartnersSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Автопрокрутка
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.4; // скорость прокрутки

    const animate = () => {
      if (!isPaused && track) {
        position -= speed;

        // Когда уехали на половину (т.к. список продублирован) — сбрасываем
        if (Math.abs(position) >= track.scrollWidth / 2) {
          position = 0;
        }

        track.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const scrollBy = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const amount = 240;
    const current = getComputedTranslateX(track);
    const next = direction === "left" ? current + amount : current - amount;

    track.style.transition = "transform 0.4s ease";
    track.style.transform = `translateX(${next}px)`;

    setTimeout(() => {
      if (track) track.style.transition = "none";
    }, 400);
  };

  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Разделитель */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 border-t border-dashed border-slate-300" />
          <span className="text-sm font-semibold text-navy uppercase tracking-widest">
            Et découvrez aussi
          </span>
          <div className="flex-1 border-t border-dashed border-slate-300" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center uppercase tracking-wide mb-12">
          Nos Partenaires
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Кнопка влево */}
          <button
            onClick={() => scrollBy("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 rounded-full bg-white shadow-md border border-slate-200
                       flex items-center justify-center text-navy hover:bg-slate-50 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Кнопка вправо */}
          <button
            onClick={() => scrollBy("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 rounded-full bg-white shadow-md border border-slate-200
                       flex items-center justify-center text-navy hover:bg-slate-50 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Трек карусели */}
          <div className="overflow-hidden mx-12">
            <div
              ref={trackRef}
              className="flex items-center gap-12 w-max"
              style={{ willChange: "transform" }}
            >
              {/* Дублируем список для бесконечной прокрутки */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.alt}-${index}`}
                  className="flex-shrink-0 w-36 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={140}
                    height={80}
                    className="object-contain max-h-20 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Вспомогательная функция
function getComputedTranslateX(el: HTMLElement) {
  const style = window.getComputedStyle(el);
  const matrix = new DOMMatrixReadOnly(style.transform);
  return matrix.m41;
}
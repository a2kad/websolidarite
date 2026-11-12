import Image from "next/image";

const labels = [
  {
    src: "/images/labels/laureat-2021.jpg",
    alt: "Lauréat Régional 2021 - Prix de l'Inspiration en ESS",
    width: 320,
    height: 120,
  },
  {
    src: "/images/labels/ordi3.png",
    alt: "Ordi 3.0",
    width: 180,
    height: 80,
  },
  {
    src: "/images/labels/vitamin-ess.png",
    alt: "Vitamin'ESS",
    width: 220,
    height: 80,
  },
];

export function LabelsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center uppercase tracking-wide mb-12">
          Nos Labels et Lauréats
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {labels.map((label) => (
            <div
              key={label.alt}
              className="relative flex items-center justify-center"
            >
              <Image
                src={label.src}
                alt={label.alt}
                width={label.width}
                height={label.height}
                className="object-contain max-h-24 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
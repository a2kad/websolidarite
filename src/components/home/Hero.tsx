import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full">
      {/* Фоновое изображение */}
      <div className="relative w-full h-[420px] md:h-[520px]">
        <Image
          src="/images/banderole.jpg"
          alt="Boutique Web Solidarité"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Лёгкое затемнение сверху для читаемости */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
      </div>

      {/* Тёмный блок с контентом (с закруглением сверху) */}
      <div className="relative -mt-28 md:-mt-36 bg-navy rounded-t-[3rem] md:rounded-t-[4rem] pt-14 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-3">
            Faites don de vos matériels
            <br />
            informatiques & multimédia
          </h1>

          {/* Жёлтая черта */}
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8 rounded-full" />

          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ordinateurs (PC portable et PC fixe), accessoires (clavier, souris,
            enceintes, scanners), écrans TV et moniteurs et toutes connectiques
            dédiées à l&apos;informatique et au multimédia.
          </p>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/faire-un-don"
              className="inline-flex items-center justify-center min-w-[210px] px-6 py-3.5
                         bg-green hover:bg-green-hover text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg transition-colors"
            >
              Faire un don
            </Link>

            <Link
              href="/boutique"
              className="inline-flex items-center justify-center min-w-[210px] px-6 py-3.5
                         bg-transparent hover:bg-white/10 text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg border border-white/35 transition-colors"
            >
              Voir la boutique solidaire
            </Link>

            <Link
              href="/entreprises"
              className="inline-flex items-center justify-center min-w-[210px] px-6 py-3.5
                         bg-transparent hover:bg-white/10 text-white
                         text-sm font-semibold uppercase tracking-wide
                         rounded-lg border border-white/20 transition-colors"
            >
              Vous êtes un professionnel ?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
const stats = [
  {
    value: "11",
    label: "Tonnes de matériels informatiques et multimédia collectés (D3E)",
  },
  {
    value: "137",
    label: "Ateliers de formation aux usages du numérique",
  },
  {
    value: "7",
    label: "Tonnes de matériel revalorisé",
  },
  {
    value: "2088",
    label: "Personnes accompagnées (passages) par nos ateliers numériques",
  },
];

export function StatsSection() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center uppercase tracking-wide mb-12">
          Nos Résultats de 2025 en Chiffres
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navy-light/60 border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-white/75 leading-snug uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
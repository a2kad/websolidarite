export function EssSection() {
  return (
    <section className="bg-slate-100 py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-navy uppercase tracking-wide mb-3">
          Projet-Économie Sociale et Solidaire - ESS
        </h2>
        <div className="w-16 h-1 bg-green mx-auto mb-8 rounded-full" />

        <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
          <p>
            Le concept d&apos;ESS-Economie Sociale et Solidaire désigne
            l&apos;ensemble des entreprises organisées sous forme de coopératives,
            mutuelles, associations ou fondations, dont le fonctionnement
            interne et les activités sont fondées sur un principe de solidarité
            et d&apos;utilité sociale.
          </p>
          <p>
            Celles-ci adoptent des modes de gestion démocratiques et
            participatifs.
          </p>
          <p>
            Elles encadrent strictement l&apos;utilisation des bénéfices
            qu&apos;elles réalisent : le profit individuel est proscrit et les
            résultats réinvestis. Leurs ressources financières sont généralement
            en partie publiques.
          </p>
        </div>
      </div>
    </section>
  );
}
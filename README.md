# Web Solidarité

Site vitrine de l’association **Web Solidarité** (Le Havre) — lutte contre la fracture numérique, réemploi informatique et accompagnement au numérique.

## Stack technique

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Resend](https://resend.com/) (formulaire de contact)
- Déploiement prévu sur [Vercel](https://vercel.com/)

## Prérequis

- Node.js 18+ (recommandé : 20+)
- npm, pnpm ou yarn

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/VOTRE_COMPTE/websolidarite.git
cd websolidarite

# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env.local
```

Renseigner ensuite les valeurs dans `.env.local` (voir la section suivante).

## Variables d'environnement

Créer un fichier `.env.local` à la racine :

```properties
# Resend – formulaire de contact
RESEND_API_KEY=re_xxxxxxxx
CONTACT_FROM_EMAIL=onboarding@resend.dev
CONTACT_TO_EMAIL=contact@votredomaine.fr
```

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Clé API Resend |
| `CONTACT_FROM_EMAIL` | Adresse d’expédition (domaine vérifié en production) |
| `CONTACT_TO_EMAIL` | Adresse de réception des messages |

> Ne jamais committer `.env.local`.

## Scripts

```bash
# Serveur de développement
npm run dev

# Build de production
npm run build

# Lancer le build localement
npm run start

# Linter
npm run lint
```

Le site est accessible en local sur [localhost](http://localhost:3000/).

## Structure du projet

```text
src/
├── app/
│   ├── page.tsx                          # Accueil
│   ├── layout.tsx                        # Layout global
│   ├── globals.css                       # Styles globaux / thème
│   ├── actions/
│   │   └── contact.ts                    # Server Action (Resend)
│   ├── association/
│   │   ├── page.tsx                      # Qui sommes-nous
│   │   ├── soutenez-nous/
│   │   ├── nos-ateliers-numeriques/
│   │   └── projets-internationaux/
│   ├── boutique/
│   ├── contact/
│   ├── entreprises/
│   │   ├── page.tsx
│   │   └── politique-rse/
│   └── faire-un-don/
├── components/
│   ├── contact/
│   │   └── ContactForm.tsx
│   ├── home/                             # Sections de la page d’accueil
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/                               # Composants shadcn/ui
└── lib/
    └── utils.ts
public/
├── images/                               # Images du site
└── logo.png
```

## Pages principales

| Route | Description |
| --- | --- |
| `/` | Page d’accueil |
| `/association` | Présentation de l’association |
| `/association/soutenez-nous` | Dons & Recyclerie |
| `/association/nos-ateliers-numeriques` | Ateliers numériques |
| `/association/projets-internationaux` | Projets internationaux |
| `/faire-un-don` | Dons (particuliers & entreprises) |
| `/boutique` | Boutique solidaire |
| `/entreprises` | Espace entreprises / RSE |
| `/entreprises/politique-rse` | Politique R.S.E. |
| `/contact` | Formulaire de contact |

## Fonctionnalités

- Navigation responsive (menu desktop + menu mobile type drawer)
- Formulaire de contact via Resend (Server Action)
- Bloc newsletter dans le footer (prêt pour Brevo)
- Pages associatives, boutique, dons et entreprises
- Charte graphique : bleu marine, vert, accents jaunes

## Newsletter (Brevo)

Le footer contient un formulaire prêt à être relié à Brevo :

1. Créer un compte [Brevo](https://www.brevo.com/).
2. Aller dans **Contacts → Forms** et créer un formulaire.
3. Copier l’URL d’action du formulaire.
4. Remplacer dans `Footer.tsx` :

   ```tsx
   action="https://exemple.brevo.com/placeholder"
   ```

   par l’URL fournie par Brevo. Le champ email utilise `name="EMAIL"`.

## Déploiement sur Vercel

1. Pousser le code sur GitHub, GitLab ou Bitbucket.
2. Importer le dépôt sur [Vercel](https://vercel.com/).
3. Sélectionner le framework **Next.js** (détecté automatiquement).
4. Ajouter les variables d’environnement dans **Settings → Environment Variables**.
5. Déployer.

Pour un domaine personnalisé : **Settings → Domains**.

## Personnalisation

### Couleurs (extrait)

Définies dans `src/app/globals.css` :

- `--navy` : bleu principal
- `--green` : vert d’action
- Accents jaunes pour les soulignements de titres

### Images

Placer les assets dans `public/images/` (et ses sous-dossiers).

Exemples attendus : logo, banderole, photos d’équipe, recyclerie, projets internationaux.

## Développement

- Composants UI : shadcn/ui (`src/components/ui`)
- Icônes : lucide-react (+ SVG personnalisés pour les réseaux sociaux)
- Le header et le footer sont partagés via `src/app/layout.tsx`

## Licence

Projet réalisé pour l’association Web Solidarité.

Tous droits réservés.

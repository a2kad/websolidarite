"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.39 10.31V10.9H5.5v8.37h2.77z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.2 2.25h7.414l4.261 5.685L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/web-solidarite-france-2a7a43197/",
    icon: LinkedinIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100012107225593",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/websolidarite",
    icon: InstagramIcon,
  },
  {
    name: "X",
    href: "https://x.com/WebSolidarite",
    icon: XIcon,
  },
];

function NewsletterToast({
  footerRef,
}: {
  footerRef: React.RefObject<HTMLElement | null>;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (searchParams.get("newsletter") === "ok") {
      setVisible(true);
      footerRef.current?.scrollIntoView({ behavior: "smooth" });

      const params = new URLSearchParams(searchParams.toString());
      params.delete("newsletter");
      const cleanUrl = params.toString()
        ? `${pathname}?${params.toString()}`
        : pathname;
      router.replace(cleanUrl, { scroll: false });
    }
  }, [searchParams, pathname, router, footerRef]);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 flex max-w-md items-start gap-3 rounded-xl border border-green/40 bg-navy px-5 py-4 text-white shadow-2xl"
    >
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green text-sm font-bold text-white">
        ✓
      </span>
      <div className="text-sm leading-relaxed">
        <p className="font-semibold">Inscription confirmée</p>
        <p className="text-white/80">
          Merci ! Vous êtes bien inscrit(e) à la newsletter de Web Solidarité.
        </p>
      </div>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Fermer la notification"
        className="ml-2 text-white/60 transition-colors hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}

export function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  return (
    <footer ref={footerRef} className="bg-navy text-white mt-auto">
      <Suspense fallback={null}>
        <NewsletterToast footerRef={footerRef} />
      </Suspense>

      {/* Newsletter — Brevo */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-lg font-bold uppercase tracking-wide mb-2">
                Newsletter
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Restez informé : saisissez votre e-mail pour vous abonner à
                notre newsletter.
              </p>
            </div>

            <form
              action="https://b2ada37f.sibforms.com/serve/MUIFAE_E2d9v0SbJmFAP-8Wk14bZpI7FrIJWHBm0i5u00kDZ_mivTQHyF2TDLeKkc3uVdfALyw8clYIMyf9uazGptCppEWLi7DnVOnwlkUUjZm9QQ8mYXHb_59MQt7gudyk8Ry-tusIKX7wtfrpAPsrjZVRzT1uOHbhHWtBklQBCzYga4J65OJNnkHQSI4rWXQ3EgH4eHzI3B0QmAw=="
              method="POST"
              className="flex w-full md:w-auto flex-col sm:flex-row gap-2"
            >
              <label htmlFor="footer-email" className="sr-only">
                Adresse e-mail
              </label>
              <input
                id="footer-email"
                type="email"
                name="EMAIL"
                required
                placeholder="Votre adresse e-mail"
                className="w-full sm:w-72 px-4 py-3 rounded-lg text-sm
                           bg-white text-navy placeholder:text-slate-400
                           outline-none focus:ring-2 focus:ring-green"
              />
              <input
                type="text"
                name="email_address_check"
                defaultValue=""
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <input type="hidden" name="locale" value="fr" />

              <button
                type="submit"
                className="px-6 py-3 bg-green hover:bg-green-hover text-white
                           text-sm font-semibold uppercase tracking-wide
                           rounded-lg transition-colors whitespace-nowrap"
              >
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">
              Web Solidarité
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Association qui lutte contre la fracture numérique et donne une
              seconde vie aux matériels informatiques au Havre et alentours.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-green
                             flex items-center justify-center
                             text-white transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">
              Liens utiles
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/association" className="hover:text-white transition-colors">
                  L&apos;Association
                </Link>
              </li>
              <li>
                <Link
                  href="/association/soutenez-nous"
                  className="hover:text-white transition-colors"
                >
                  Soutenez-nous
                </Link>
              </li>
              <li>
                <Link
                  href="/association/nos-ateliers-numeriques"
                  className="hover:text-white transition-colors"
                >
                  Nos Ateliers Numériques
                </Link>
              </li>
              <li>
                <Link
                  href="/association/projets-internationaux"
                  className="hover:text-white transition-colors"
                >
                  Projets Internationaux
                </Link>
              </li>
              <li>
                <Link href="/faire-un-don" className="hover:text-white transition-colors">
                  Faire un don
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:text-white transition-colors">
                  Boutique Solidaire
                </Link>
              </li>
              <li>
                <Link href="/entreprises" className="hover:text-white transition-colors">
                  Entreprises
                </Link>
              </li>
              <li>
                <Link
                  href="/entreprises/politique-rse"
                  className="hover:text-white transition-colors"
                >
                  Politique R.S.E.
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">
              Contact
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              48 – 50 Rue Albert Samain
              <br />
              76620 Le Havre
              <br />
              <a
                href="tel:+33954149048"
                className="hover:text-white transition-colors"
              >
                09 54 14 90 48
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/50">
          © 2026 Web Solidarité. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
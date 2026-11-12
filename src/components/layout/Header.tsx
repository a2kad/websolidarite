"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Accueil", href: "/" },
  {
    label: "L'Association",
    href: "/association",
    children: [
      { label: "Qui sommes-nous", href: "/association" },
      { label: "Soutenez-nous", href: "/association/soutenez-nous" },
      {
        label: "Nos Ateliers Numériques",
        href: "/association/nos-ateliers-numeriques",
      },
      {
        label: "Projets Internationaux",
        href: "/association/projets-internationaux",
      },
    ],
  },
  { label: "Faire un don", href: "/faire-un-don" },
  { label: "Boutique Solidaire", href: "/boutique" },
  {
    label: "Entreprises",
    href: "/entreprises",
    children: [
      { label: "Espace Entreprises", href: "/entreprises" },
      { label: "Politique R.S.E.", href: "/entreprises/politique-rse" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Web Solidarité"
            width={180}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center text-sm font-semibold uppercase tracking-wide">
          {navItems.map((item, index) => (
            <div key={item.href} className="flex items-center">
              {index > 0 && <div className="w-px h-4 bg-white/25 mx-4" />}

              {item.children ? (
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 py-1 text-white"
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>

                  {openDropdown === item.href && (
                    <div className="absolute top-full left-0 pt-2 min-w-[240px] z-50">
                      <div className="bg-navy border border-white/10 rounded-lg shadow-xl py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm normal-case tracking-normal font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="relative py-1 text-white transition-colors
                             after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400
                             after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="bg-navy text-white border-navy-light w-[280px] sm:w-[320px]"
        >
          <SheetHeader>
            <SheetTitle className="text-white text-left text-lg uppercase tracking-wide">
              Menu
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-8 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-md text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </Link>

                {item.children && (
                  <div className="ml-4 mb-2 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
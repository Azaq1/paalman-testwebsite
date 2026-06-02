"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Diensten", href: "#diensten" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className={`flex items-center group rounded-lg px-2 py-1 transition-all duration-300 ${
            scrolled ? "bg-transparent" : "bg-white/95 shadow-sm"
          }`}
        >
          <Image
            src="/media/imgi_10_302133664_1034909324019713_5860883037804678760_n.jpg"
            alt="Paalman Installatie en Service"
            width={120}
            height={44}
            className="object-contain h-11 w-auto"
            priority
          />
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNav(item.href)}
                className={`px-4 py-2 text-sm font-medium tracking-wide rounded-md transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-green-700 hover:bg-green-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:0641035574"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: "#007228", fontFamily: "var(--font-dm-sans, sans-serif)" }}
        >
          <Phone size={15} />
          Bel ons
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md"
                style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:0641035574"
              className="flex items-center gap-2 w-full mt-2 px-4 py-3 rounded-md text-sm font-semibold text-white justify-center"
              style={{ backgroundColor: "#007228" }}
            >
              <Phone size={15} />
              Bel: 06-41035574
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

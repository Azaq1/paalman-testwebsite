"use client";

import { motion } from "framer-motion";
import { Phone, FileText, CheckCircle, Star } from "lucide-react";
import Image from "next/image";

const usps = [
  {
    icon: <Phone size={18} />,
    title: "Altijd bereikbaar",
    desc: "Ook buiten kantooruren",
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Afspraak is afspraak",
    desc: "Geen verrassingen achteraf",
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Gecertificeerd vakman",
    desc: "Meer dan 6 jaar ervaring",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/media/imgi_2_475872709_1573049473539026_7592696045939364928_n.jpg"
          alt="Paalman Installatie en Service"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Subtle green accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#007228" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-3xl">

          {/* Google Rating Badge */}
          <motion.a
            href="https://g.page/paalman-installatie-holten"
            target="_blank"
            rel="noopener noreferrer"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#FBBF24" stroke="none" />
              ))}
            </div>
            <span className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
              4.8 / 5 · Google Reviews
            </span>
          </motion.a>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Uw installateur
            <span className="block" style={{ color: "#4ade80" }}>
              in Holten —
            </span>
            <span className="block text-white">vakwerk, altijd.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
          >
            Gas · Water · Elektra · Sanitair · Riolering · Verwarming
            <span className="block mt-1 text-white/60 text-base">
              Actief in Holten, Rijssen, Markelo, Goor, Deventer, Wierden en omgeving
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-3 mb-12"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-white font-semibold text-base transition-all hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#007228", fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              <FileText size={18} />
              Vraag een offerte aan
            </button>
            <a
              href="tel:0641035574"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-base border-2 border-white text-white bg-transparent transition-all hover:bg-white hover:text-gray-900"
              style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              <Phone size={18} />
              Bel direct: 06-41035574
            </a>
          </motion.div>

          {/* USP bar */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4 sm:gap-8"
          >
            {usps.map((usp, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: "rgba(0,114,40,0.7)" }}>
                  {usp.icon}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                    {usp.title}
                  </div>
                  <div className="text-white/60 text-xs" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                    {usp.desc}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}

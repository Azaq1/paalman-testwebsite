"use client";

import { motion } from "framer-motion";
import { Phone, FileText, CheckCircle, Star, Send } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";

const usps = [
  { icon: <Phone size={16} />, title: "Altijd bereikbaar", desc: "Ook buiten kantooruren" },
  { icon: <CheckCircle size={16} />, title: "Afspraak is afspraak", desc: "Geen verrassingen achteraf" },
  { icon: <CheckCircle size={16} />, title: "Gecertificeerd vakman", desc: "Meer dan 6 jaar ervaring" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

type FormData = { naam: string; telefoon: string; dienst: string; bericht: string };

const diensten = ["Gas", "Water", "Elektra", "Sanitair", "Riolering", "Verwarming", "Anders"];

function HeroForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log(data);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#007228" }}>
          <CheckCircle size={24} className="text-white" />
        </div>
        <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
          Aanvraag verstuurd!<br />
          <span className="text-white/60 font-normal">Wij bellen u zo snel mogelijk terug.</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <h3 className="text-white font-bold text-lg mb-4 text-center" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
        Vraag gratis offerte aan
      </h3>

      <div>
        <input
          {...register("naam", { required: true })}
          placeholder="Uw naam *"
          className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border text-white placeholder-white/50 outline-none focus:bg-white/15 transition-colors ${errors.naam ? "border-red-400" : "border-white/20 focus:border-white/50"}`}
          style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
        />
      </div>

      <div>
        <input
          {...register("telefoon", { required: true })}
          type="tel"
          placeholder="Telefoonnummer *"
          className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border text-white placeholder-white/50 outline-none focus:bg-white/15 transition-colors ${errors.telefoon ? "border-red-400" : "border-white/20 focus:border-white/50"}`}
          style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
        />
      </div>

      <div>
        <select
          {...register("dienst", { required: true })}
          className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border text-white outline-none focus:bg-white/15 transition-colors appearance-none ${errors.dienst ? "border-red-400" : "border-white/20 focus:border-white/50"}`}
          style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
          defaultValue=""
        >
          <option value="" disabled style={{ color: "#111" }}>Selecteer dienst *</option>
          {diensten.map((d) => (
            <option key={d} value={d} style={{ color: "#111" }}>{d}</option>
          ))}
        </select>
      </div>

      <div>
        <textarea
          {...register("bericht")}
          rows={3}
          placeholder="Korte omschrijving (optioneel)"
          className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:bg-white/15 focus:border-white/50 transition-colors resize-none"
          style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-70"
        style={{ backgroundColor: "#007228", fontFamily: "var(--font-dm-sans, sans-serif)" }}
      >
        <Send size={14} />
        {isSubmitting ? "Versturen..." : "Verstuur aanvraag"}
      </button>

      <p className="text-white/40 text-xs text-center" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
        Wij reageren binnen 1 werkdag
      </p>
    </form>
  );
}

export default function Hero() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Green accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#007228" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT: tekst */}
          <div className="max-w-xl">
            {/* Google Rating Badge */}
            <motion.a
              href="https://g.page/paalman-installatie-holten"
              target="_blank"
              rel="noopener noreferrer"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-7 hover:bg-white/20 transition-colors"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#FBBF24" stroke="none" />
                ))}
              </div>
              <span className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                5.0 / 5 · Google Reviews
              </span>
            </motion.a>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl sm:text-6xl font-bold text-white leading-[1.05] mb-5"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Voor al uw
              <span className="block" style={{ color: "#4ade80" }}>installaties</span>
              <span className="block text-white">en onderhoud.</span>
            </motion.h1>

            {/* Subkop */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-white/55 text-sm mb-7"
              style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              Holten · Rijssen · Markelo · Goor · Deventer · Wierden
            </motion.p>

            {/* Knoppen */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              <a
                href="tel:0641035574"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-base border-2 border-white text-white bg-transparent transition-all hover:bg-white hover:text-gray-900"
                style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
              >
                <Phone size={18} />
                Bel direct: 06-41035574
              </a>
              <a
                href="#diensten"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-base text-white transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#007228", fontFamily: "var(--font-dm-sans, sans-serif)" }}
              >
                Bekijk diensten
              </a>
            </motion.div>

            {/* USPs */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6"
            >
              {usps.map((usp, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: "rgba(0,114,40,0.7)" }}>
                    {usp.icon}
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>{usp.title}</div>
                    <div className="text-white/50 text-xs" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>{usp.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: compact contactformulier */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto"
          >
            <div
              className="rounded-2xl p-6 border border-white/15"
              style={{ backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(16px)" }}
            >
              <HeroForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

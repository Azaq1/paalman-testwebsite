"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    vraag: "In welk gebied is Paalman Installatie actief?",
    antwoord:
      "Wij zijn actief in Holten en de regio Overijssel, waaronder Rijssen, Markelo, Goor, Deventer, Wierden en omliggende plaatsen.",
  },
  {
    vraag: "Voeren jullie ook spoedklussen uit?",
    antwoord:
      "Ja, voor storingen en urgente klussen zijn wij ook buiten reguliere openingstijden bereikbaar. Bel ons op 06-41035574.",
  },
  {
    vraag: "Wat kost een CV-ketel vervangen?",
    antwoord:
      "De kosten hangen af van het type ketel en de situatie. Wij geven altijd een duidelijke offerte vooraf — zonder verborgen kosten.",
  },
  {
    vraag: "Zijn jullie gecertificeerd?",
    antwoord:
      "Ja, wij werken gecertificeerd en volgens de geldende NEN-normen voor gas, elektra en sanitair.",
  },
  {
    vraag: "Hoe snel kunnen jullie komen?",
    antwoord:
      "In de meeste gevallen plannen wij een afspraak binnen 1–3 werkdagen. Bij spoed proberen wij dezelfde dag of de volgende dag te komen.",
  },
  {
    vraag: "Werken jullie voor particulieren en bedrijven?",
    antwoord:
      "Wij werken voor zowel particulieren als zakelijke klanten in de regio Overijssel.",
  },
  {
    vraag: "Kunnen jullie ook een complete badkamer renoveren?",
    antwoord:
      "Ja, van sloopwerk tot de laatste afwerking — wij verzorgen complete sanitairinstallaties en badkamerrenovaties.",
  },
  {
    vraag: "Hoe kan ik een offerte aanvragen?",
    antwoord:
      "Vul het contactformulier in op deze website, bel ons op 06-41035574, of stuur een e-mail. Wij reageren binnen 1 werkdag.",
  },
];

function FAQItem({ vraag, antwoord, i }: { vraag: string; antwoord: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: i * 0.06 }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className="text-base font-semibold text-gray-900 group-hover:text-green-700 pr-8 transition-colors"
          style={{ fontFamily: "var(--font-dm-sans, sans-serif)", color: open ? "#007228" : undefined }}
        >
          {vraag}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all"
          style={{
            backgroundColor: open ? "#007228" : "#f3f4f6",
            color: open ? "white" : "#6b7280",
          }}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-sm text-gray-500 leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              {antwoord}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: header + context */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#007228", fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              <span className="w-8 h-px" style={{ backgroundColor: "#007228" }} />
              Vragen
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Veelgestelde
              <span className="block">vragen</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              Staat uw vraag er niet bij? Bel of mail ons gerust — wij helpen u graag verder.
            </motion.p>
            <motion.a
              href="tel:0641035574"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white text-sm font-semibold"
              style={{ backgroundColor: "#007228", fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              Stel uw vraag: 06-41035574
            </motion.a>
          </div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6"
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} vraag={faq.vraag} antwoord={faq.antwoord} i={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

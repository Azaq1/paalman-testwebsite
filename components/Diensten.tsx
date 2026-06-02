"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const diensten = [
  {
    naam: "Gas",
    beschrijving:
      "Van gasleiding aanleg tot storingen. Wij zorgen voor een veilige en gecertificeerde gasinstallatie in uw woning of bedrijfspand.",
    foto: "https://images.unsplash.com/photo-1622801185864-874be8248594?w=800&q=80",
    alt: "Gasmeters installatie",
  },
  {
    naam: "Water",
    beschrijving:
      "Lekkage, nieuwe leidingen of complete installaties. Paalman regelt het snel en vakkundig.",
    foto: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=800&q=80",
    alt: "Loodgieter bezig met leidingen",
  },
  {
    naam: "Elektra",
    beschrijving:
      "Groepenkast, bedrading, stopcontacten of storingen. Veilig en volgens de nieuwste NEN-normen.",
    foto: "/media/imgi_24_81551303_1031707040515743_7160032716648349696_n.jpg",
    alt: "Elektra installatie kabeltrommels",
  },
  {
    naam: "Sanitair",
    beschrijving:
      "Toilet, douche, wastafel of complete badkamer. Wij installeren en vervangen al uw sanitair.",
    foto: "https://images.unsplash.com/photo-1722650270596-8d603f9516ed?w=800&q=80",
    alt: "Moderne badkamer sanitair",
  },
  {
    naam: "Riolering",
    beschrijving:
      "Verstoppingen, rioolreparaties en nieuwbouwaansluitingen. Ook voor spoedgevallen.",
    foto: "https://images.unsplash.com/photo-1646009445351-b8192e095f3a?w=800&q=80",
    alt: "Buizen riolering installatie",
  },
  {
    naam: "Verwarming",
    beschrijving:
      "CV-ketel plaatsing, onderhoud en reparatie. Van radiatoren tot vloerverwarming.",
    foto: "/media/imgi_18_81003716_1031707217182392_8431780096431357952_n.jpg",
    alt: "CV-ketel en verwarming",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Diensten() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diensten" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#007228", fontFamily: "var(--font-dm-sans, sans-serif)" }}
          >
            <span className="w-8 h-px" style={{ backgroundColor: "#007228" }} />
            Wat wij doen
            <span className="w-8 h-px" style={{ backgroundColor: "#007228" }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Onze diensten
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
          >
            Van kleine reparaties tot complete installaties — wij doen het vakkundig en netjes.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {diensten.map((dienst) => (
            <motion.div
              key={dienst.naam}
              variants={card}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-400 cursor-default"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={dienst.foto}
                  alt={dienst.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Green accent strip on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 translate-y-1 group-hover:translate-y-0 transition-transform duration-300"
                  style={{ backgroundColor: "#007228" }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors"
                  style={{ fontFamily: "var(--font-playfair, serif)", color: "inherit" }}
                >
                  {dienst.naam}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
                >
                  {dienst.beschrijving}
                </p>
                <a
                  href="tel:0641035574"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: "#007228", fontFamily: "var(--font-dm-sans, sans-serif)" }}
                >
                  Bel voor info
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    naam: "Fam. Smits",
    bron: "Werkspot",
    tekst:
      "CV-ketel vervangen en de gehele cv installatie waterzijdig ingeregeld. Super tevreden, heel erg netjes gewerkt. Ook in de communicatie erg duidelijk.",
    sterren: 5,
    datum: "3 maanden geleden",
  },
  {
    naam: "Richard",
    bron: "Werkspot",
    tekst:
      "Verouderde meterkast vervangen en elektrastoringen opgespoord en hersteld. Is altijd bereikbaar en houdt zich altijd aan zijn afspraken. Afspraak is ook echt een afspraak.",
    sterren: 5,
    datum: "5 maanden geleden",
  },
  {
    naam: "Google Review",
    bron: "Google",
    tekst:
      "Snel geholpen bij een lekkage. Vakkundig en netjes uitgevoerd. Duidelijke communicatie vooraf en geen verborgen kosten achteraf. Absolute aanrader!",
    sterren: 5,
    datum: "2 maanden geleden",
  },
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=13664839709b14a6&sxsrf=ANbL-n50TnrzpLTTidbdipCNvTK49KlDqw:1780392055098&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOQnMyz1y3k6NY01Vbof8bpOMMzB1SCnOz7-seuE0gAXBrEkMb-s_SgfxhFsuEcsmSmvNEOqCzTTFfh8-xzKq_Z49WZb4qVAcEiP77G-0uc-JrB2lag%3D%3D&q=Paalman+Installatie+En+Service+Reviews&sa=X&ved=2ahUKEwit64SgneiUAxUp2wIHHVSpJ_IQ0bkNegQIMBAF&biw=1352&bih=756&dpr=2";

export default function Reviews() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-24"
      style={{ backgroundColor: "#f8faf9" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FBBF24" stroke="none" />
                ))}
                <span className="text-gray-900 font-bold ml-1 text-sm" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>5.0</span>
              </div>
              <div className="text-gray-500 text-xs" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                Gemiddeld · Google Reviews
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#007228", fontFamily: "var(--font-dm-sans, sans-serif)" }}
          >
            <span className="w-8 h-px" style={{ backgroundColor: "#007228" }} />
            Klantervaringen
            <span className="w-8 h-px" style={{ backgroundColor: "#007228" }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Wat onze klanten zeggen
          </motion.h2>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote
                size={28}
                className="absolute top-5 right-5 opacity-10"
                style={{ color: "#007228" }}
              />
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(review.sterren)].map((_, j) => (
                  <Star key={j} size={14} fill="#FBBF24" stroke="none" />
                ))}
              </div>
              <p
                className="text-gray-700 text-sm leading-relaxed mb-5 italic"
                style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
              >
                &ldquo;{review.tekst}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-sm font-semibold text-gray-900"
                    style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
                  >
                    {review.naam}
                  </div>
                  <div
                    className="text-xs text-gray-400"
                    style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
                  >
                    {review.datum} · {review.bron}
                  </div>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: "#007228" }}
                >
                  {review.naam[0]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 font-semibold text-sm transition-all hover:text-white"
            style={{
              borderColor: "#007228",
              color: "#007228",
              fontFamily: "var(--font-dm-sans, sans-serif)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#007228";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#007228";
            }}
          >
            Bekijk alle Google Reviews →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

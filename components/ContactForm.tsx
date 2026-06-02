"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

type FormData = {
  naam: string;
  email: string;
  telefoon: string;
  dienst: string;
  bericht: string;
};

const diensten = [
  "Gas",
  "Water",
  "Elektra",
  "Sanitair",
  "Riolering",
  "Verwarming",
  "Anders",
];

export default function ContactForm() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulated form submit
    await new Promise((r) => setTimeout(r, 800));
    console.log("Form data:", data);
    setSent(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24"
      style={{ backgroundColor: "#007228" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#86efac", fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              <span className="w-8 h-px bg-green-300" />
              Contact
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Direct een offerte
              <span className="block">of vraag?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-green-100 leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              Neem contact op via het formulier of bel ons direct. Wij reageren binnen 1 werkdag.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { label: "Telefoon", value: "06-41035574", href: "tel:0641035574" },
                { label: "E-mail", value: "info@paalmaninstallatie-service.nl", href: "mailto:info@paalmaninstallatie-service.nl" },
                { label: "Adres", value: "Canadastraat 107, 7451 ZL Holten", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 w-2 h-2 rounded-full bg-green-300 flex-shrink-0 mt-2" />
                  <div>
                    <div className="text-green-200 text-xs tracking-wide uppercase mb-0.5" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-green-200 transition-colors" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#e8f5ee" }}>
                  <CheckCircle size={32} style={{ color: "#007228" }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                  Aanvraag verstuurd!
                </h3>
                <p className="text-gray-500 text-sm" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                  Wij nemen binnen 1 werkdag contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                  Stuur ons een bericht
                </h3>

                {/* Naam */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                    Naam *
                  </label>
                  <input
                    {...register("naam", { required: "Naam is verplicht" })}
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors outline-none focus:ring-2 ${
                      errors.naam
                        ? "border-red-300 focus:ring-red-100"
                        : "border-gray-200 focus:border-green-500 focus:ring-green-50"
                    }`}
                    placeholder="Uw volledige naam"
                    style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
                  />
                  {errors.naam && (
                    <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>{errors.naam.message}</p>
                  )}
                </div>

                {/* Email + Telefoon */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                      E-mail *
                    </label>
                    <input
                      {...register("email", {
                        required: "E-mail is verplicht",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Ongeldig e-mailadres" },
                      })}
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors outline-none focus:ring-2 ${
                        errors.email
                          ? "border-red-300 focus:ring-red-100"
                          : "border-gray-200 focus:border-green-500 focus:ring-green-50"
                      }`}
                      placeholder="uw@email.nl"
                      style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                      Telefoon
                    </label>
                    <input
                      {...register("telefoon")}
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm transition-colors outline-none focus:ring-2 focus:border-green-500 focus:ring-green-50"
                      placeholder="06-..."
                      style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
                    />
                  </div>
                </div>

                {/* Dienst */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                    Dienst *
                  </label>
                  <select
                    {...register("dienst", { required: "Kies een dienst" })}
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors outline-none focus:ring-2 bg-white ${
                      errors.dienst
                        ? "border-red-300 focus:ring-red-100"
                        : "border-gray-200 focus:border-green-500 focus:ring-green-50"
                    }`}
                    style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
                  >
                    <option value="">Selecteer een dienst</option>
                    {diensten.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  {errors.dienst && (
                    <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>{errors.dienst.message}</p>
                  )}
                </div>

                {/* Bericht */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>
                    Bericht *
                  </label>
                  <textarea
                    {...register("bericht", { required: "Bericht is verplicht" })}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors outline-none focus:ring-2 resize-none ${
                      errors.bericht
                        ? "border-red-300 focus:ring-red-100"
                        : "border-gray-200 focus:border-green-500 focus:ring-green-50"
                    }`}
                    placeholder="Omschrijf uw situatie of vraag..."
                    style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
                  />
                  {errors.bericht && (
                    <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>{errors.bericht.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-70"
                  style={{ backgroundColor: "#007228", fontFamily: "var(--font-dm-sans, sans-serif)" }}
                >
                  {isSubmitting ? (
                    <span>Versturen...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      Verstuur aanvraag
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const dienstenLinks = [
  "Gas", "Water", "Elektra", "Sanitair", "Riolering", "Verwarming",
];

const werkgebied = [
  "Holten", "Rijssen", "Markelo", "Goor", "Deventer", "Wierden",
  "Gehele regio Overijssel",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a2b1b" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Company info */}
          <div>
            <div className="mb-5">
              <div className="inline-block bg-white rounded-lg px-3 py-2">
                <Image
                  src="/media/imgi_10_302133664_1034909324019713_5860883037804678760_n.jpg"
                  alt="Paalman Installatie en Service"
                  width={130}
                  height={48}
                  className="object-contain h-12 w-auto"
                />
              </div>
            </div>
            <p
              className="text-green-200/60 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              Uw gecertificeerde installateur voor gas, water, elektra, sanitair, riolering en verwarming in Holten en de regio Overijssel.
            </p>
            <div className="space-y-3">
              <a
                href="tel:0641035574"
                className="flex items-center gap-2.5 text-green-100/80 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
              >
                <Phone size={14} style={{ color: "#4ade80" }} />
                06-41035574
              </a>
              <a
                href="mailto:info@paalmaninstallatie-service.nl"
                className="flex items-center gap-2.5 text-green-100/80 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
              >
                <Mail size={14} style={{ color: "#4ade80" }} />
                info@paalmaninstallatie-service.nl
              </a>
              <div
                className="flex items-start gap-2.5 text-green-100/80 text-sm"
                style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
              >
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#4ade80" }} />
                Canadastraat 107, 7451 ZL Holten
              </div>
            </div>
          </div>

          {/* Column 2: Diensten */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              Diensten
            </h4>
            <ul className="space-y-2.5">
              {dienstenLinks.map((d) => (
                <li key={d}>
                  <a
                    href="#diensten"
                    className="text-green-100/60 hover:text-white text-sm transition-colors flex items-center gap-2"
                    style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-green-600 flex-shrink-0" />
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Werkgebied */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
            >
              Werkgebied
            </h4>
            <ul className="space-y-2.5">
              {werkgebied.map((plaats) => (
                <li key={plaats}>
                  <span
                    className="text-green-100/60 text-sm flex items-center gap-2"
                    style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-green-600 flex-shrink-0" />
                    {plaats}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-green-100/40 text-xs"
            style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
          >
            © 2025 Paalman Installatie en Service · KvK 81432313
          </p>
          <a
            href="#"
            className="text-green-100/40 hover:text-green-100/60 text-xs transition-colors"
            style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}
          >
            Privacybeleid
          </a>
        </div>
      </div>
    </footer>
  );
}

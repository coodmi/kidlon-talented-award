import { Trophy } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#030810] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand — full width on mobile, 2 cols on md */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
              <div>
                <div className="text-white font-bold text-xs sm:text-sm">KIDLON</div>
                <div className="gradient-text text-[10px] sm:text-xs font-semibold tracking-widest">TALENTED AWARD</div>
              </div>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs mb-3 sm:mb-4">
              The Kidlon Talented Award by Twimbol celebrates extraordinary
              talent in children and young people aged 5–25 across the globe.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-xs">Organized by</span>
              <span className="text-yellow-400 font-bold text-xs sm:text-sm">Twimbol</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-xs tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { label: "Home",        href: "#home"       },
                { label: "About",       href: "#about"      },
                { label: "Categories",  href: "#categories" },
                { label: "How It Works",href: "#how-it-works"},
                { label: "Winners",     href: "#winners"    },
                { label: "Nominate",    href: "#nominate"   },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-500 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-xs tracking-widest uppercase">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Privacy Policy","Terms of Service","Cookie Policy","Nomination Rules","Judging Criteria","Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-[#1e3a5f] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {year} Kidlon Talented Award by{" "}
            <span className="text-yellow-400 font-semibold">Twimbol</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gray-600 text-xs">Nominations Open</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

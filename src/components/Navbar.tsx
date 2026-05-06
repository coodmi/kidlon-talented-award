"use client";

import { useState, useEffect } from "react";
import { Menu, X, Trophy, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About",        href: "#about"       },
  { label: "Categories",   href: "#categories"  },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Winners",      href: "#winners"     },
  { label: "Contact",      href: "#contact"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#04080f]/90 backdrop-blur-xl border-b border-[#1a3050]/80 shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-5 h-5 text-black" strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 rounded-xl bg-yellow-400/40 pulse-ring" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-sm tracking-wider">KIDLON</span>
              <span className="gradient-text text-[10px] font-bold tracking-[0.2em] uppercase">Talented Award</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 font-medium whitespace-nowrap relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-4/5" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="#nominate"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-sm hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-105 whitespace-nowrap"
            >
              Nominate Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#04080f]/98 backdrop-blur-xl border-t border-[#1a3050] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
            >
              {link.label}
              <ChevronDown className="w-4 h-4 -rotate-90 text-gray-600" />
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#nominate"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-center text-sm hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-lg"
            >
              🏆 Nominate Now — It&apos;s Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

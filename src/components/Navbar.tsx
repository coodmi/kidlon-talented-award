"use client";

import { useState, useEffect } from "react";
import { Menu, X, Trophy } from "lucide-react";

const navLinks = [
  { label: "Home",        href: "#home" },
  { label: "About",       href: "#about" },
  { label: "Categories",  href: "#categories" },
  { label: "How It Works",href: "#how-it-works" },
  { label: "Winners",     href: "#winners" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#050a14]/95 backdrop-blur-md border-b border-[#1e3a5f] shadow-lg shadow-blue-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center glow-gold group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
              <div className="absolute inset-0 rounded-lg bg-yellow-400/30 pulse-ring" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-xs sm:text-sm tracking-wide">KIDLON</span>
              <span className="gradient-text text-[10px] sm:text-xs font-semibold tracking-widest">TALENTED AWARD</span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2.5 lg:px-4 py-2 text-xs lg:text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-200 rounded-lg hover:bg-white/5 font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="#nominate"
              className="px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xs lg:text-sm hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 glow-gold hover:scale-105 whitespace-nowrap"
            >
              Nominate Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-1.5 text-gray-300 hover:text-yellow-400 transition-colors rounded-lg hover:bg-white/5"
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
        <div className="bg-[#050a14]/98 backdrop-blur-md border-t border-[#1e3a5f] px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 rounded-lg transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#nominate"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-center text-sm hover:from-yellow-300 hover:to-yellow-400 transition-all"
          >
            Nominate Now
          </a>
        </div>
      </div>
    </nav>
  );
}

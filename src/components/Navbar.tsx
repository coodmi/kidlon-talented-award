"use client";

import { useState, useEffect } from "react";
import { Menu, X, Trophy } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Winners", href: "#winners" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050a14]/95 backdrop-blur-md border-b border-[#1e3a5f] shadow-lg shadow-blue-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center glow-gold group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-5 h-5 text-black" />
              </div>
              <div className="absolute inset-0 rounded-lg bg-yellow-400/30 pulse-ring" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-sm tracking-wide">KIDLON</span>
              <span className="gradient-text text-xs font-semibold tracking-widest">TALENTED AWARD</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-200 rounded-lg hover:bg-white/5 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#nominate"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-sm hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 glow-gold hover:scale-105"
            >
              Nominate Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#050a14]/98 backdrop-blur-md border-t border-[#1e3a5f] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-white/5 rounded-lg transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#nominate"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-center hover:from-yellow-300 hover:to-yellow-400 transition-all"
          >
            Nominate Now
          </a>
        </div>
      </div>
    </nav>
  );
}

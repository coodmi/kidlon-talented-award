"use client";

import { useState, useEffect } from "react";
import { Menu, X, Trophy, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About",        href: "#about"        },
  { label: "Categories",   href: "#categories"   },
  { label: "How It Works", href: "#how-it-works"  },
  { label: "Winners",      href: "#winners"      },
  { label: "Contact",      href: "#contact"      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md group-hover:shadow-blue-200 transition-shadow">
              <Trophy className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-slate-900 font-black text-sm tracking-tight">KIDLON</span>
              <span className="text-blue-600 text-[10px] font-bold tracking-widest uppercase">Talented Award</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-600 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#nominate" className="btn-gold text-sm py-2.5 px-5">
              🏆 Nominate Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-white border-t border-slate-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-all"
            >
              {link.label}
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
            </a>
          ))}
          <div className="pt-2 pb-1">
            <a
              href="#nominate"
              onClick={() => setMenuOpen(false)}
              className="btn-gold w-full text-sm py-3"
            >
              🏆 Nominate Now — It&apos;s Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

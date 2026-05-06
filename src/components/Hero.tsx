"use client";

import { ChevronDown, Award, Sparkles, ArrowRight, Star } from "lucide-react";

function StarField() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: (i * 13 + 7) % 100,
    y: (i * 19 + 11) % 100,
    size: i % 4 === 0 ? 2 : 1,
    delay: (i % 7) * 0.6,
    duration: 2 + (i % 4) * 0.8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

const stats = [
  { value: "500+", label: "Nominees", icon: "🌍" },
  { value: "50+",  label: "Countries", icon: "🏆" },
  { value: "12",   label: "Categories", icon: "⭐" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center hero-bg overflow-hidden"
    >
      <StarField />

      {/* Ambient orbs */}
      <div className="absolute top-1/3 left-1/6 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-blue-600/8 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full bg-yellow-400/5 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 sm:pt-28 sm:pb-20">

        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/25 bg-yellow-400/8 text-yellow-300 text-xs font-semibold mb-8 backdrop-blur-sm tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
          <span>3rd Annual Edition · Organized by Twimbol</span>
          <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
        </div>

        {/* Trophy icon */}
        <div className="flex justify-center mb-8">
          <div className="relative float-anim">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 to-amber-600/20 border border-yellow-400/20 scale-125" />
              {/* Main icon */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 flex items-center justify-center shadow-2xl glow-gold">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-black" strokeWidth={1.5} />
              </div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-3xl bg-yellow-400/30 pulse-ring" />
            </div>
            {/* Orbiting stars */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-yellow-400"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${deg}deg) translateX(56px) translateY(-50%)`,
                  opacity: 0.6 + (i % 3) * 0.15,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main headline */}
        <h1 className="hero-title text-white mb-4 sm:mb-5">
          <span className="block text-gray-200 font-black">KIDLON</span>
          <span className="block gradient-text">TALENTED</span>
          <span className="block text-white font-black">AWARD</span>
        </h1>

        <p className="text-xs sm:text-sm text-blue-300/80 font-semibold tracking-[0.25em] uppercase mb-5 sm:mb-6">
          Celebrating Young Brilliance Worldwide
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2">
          The world&apos;s premier recognition program for extraordinary children and young people aged{" "}
          <span className="text-white font-semibold">5–25</span>. Discover, celebrate, and empower
          the next generation of world-changers across arts, science, sports, and beyond.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16">
          <a href="#nominate" className="btn-primary w-full sm:w-auto text-base">
            <Award className="w-5 h-5" />
            Nominate a Talent
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#about" className="btn-secondary w-full sm:w-auto text-base">
            Discover the Award
          </a>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-0 sm:gap-2 max-w-lg mx-auto">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="text-center px-6 sm:px-8 py-4">
                <div className="text-2xl sm:text-3xl font-black gradient-text mb-0.5">{s.value}</div>
                <div className="text-xs text-gray-500 font-medium tracking-wide uppercase">{s.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#1a3050] to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-2 mt-8 text-gray-600 text-xs">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400/60 text-yellow-400/60" />
            ))}
          </div>
          <span>Trusted by families in 50+ countries</span>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 hover:text-yellow-400 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <div className="w-6 h-10 rounded-full border border-gray-700 group-hover:border-yellow-400/50 flex items-start justify-center pt-1.5 transition-colors">
          <div className="w-1 h-2 rounded-full bg-gray-600 group-hover:bg-yellow-400 animate-bounce transition-colors" />
        </div>
      </a>
    </section>
  );
}

"use client";

import { ChevronDown, Award, Sparkles } from "lucide-react";

function StarField() {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: (i * 17 + 3) % 100,
    y: (i * 23 + 7) % 100,
    size: (i % 3) + 1,
    delay: (i % 5) * 0.8,
    duration: 2.5 + (i % 3),
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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center hero-bg overflow-hidden pt-20"
    >
      <StarField />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-yellow-400/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span>Organized by Twimbol</span>
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
        </div>

        {/* Trophy icon */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative float-anim">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 flex items-center justify-center glow-gold shadow-2xl">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black" />
            </div>
            {/* Orbiting dots */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-yellow-400/70"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${deg}deg) translateX(44px) translateY(-50%)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Headline — clamp keeps it proportional on every screen */}
        <h1 className="hero-title text-white mb-3">
          <span className="block">KIDLON</span>
          <span className="block gradient-text">TALENTED</span>
          <span className="block">AWARD</span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-blue-300 font-semibold tracking-widest uppercase mb-4 sm:mb-5">
          Celebrating Young Brilliance
        </p>

        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2">
          Discover, celebrate, and empower the most talented children and young
          individuals across the globe. Recognizing extraordinary gifts in arts,
          science, sports, and beyond.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
          <a
            href="#nominate"
            className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-sm sm:text-base hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 glow-gold hover:scale-105 shadow-xl text-center"
          >
            🏆 Nominate a Talent
          </a>
          <a
            href="#about"
            className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-blue-500 text-blue-300 font-bold text-sm sm:text-base hover:bg-blue-500/20 hover:text-white transition-all duration-300 hover:scale-105 text-center"
          >
            Learn More
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-sm sm:max-w-lg mx-auto">
          {[
            { value: "500+", label: "Nominees" },
            { value: "50+",  label: "Countries" },
            { value: "12",   label: "Categories" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black gradient-text">{s.value}</div>
              <div className="text-xs text-gray-400 font-medium mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-yellow-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}

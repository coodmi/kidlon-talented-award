"use client";

import { useEffect, useRef } from "react";
import { Star, ChevronDown, Award, Sparkles } from "lucide-react";

function StarField() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
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
      className="relative min-h-screen flex flex-col items-center justify-center hero-bg overflow-hidden"
    >
      <StarField />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-yellow-400/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-sm font-semibold mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span>Organized by Twimbol</span>
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Trophy Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative float-anim">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 flex items-center justify-center glow-gold shadow-2xl">
              <Award className="w-12 h-12 md:w-16 md:h-16 text-black" />
            </div>
            {/* Orbiting stars */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-yellow-400"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${deg}deg) translateX(60px) translateY(-50%)`,
                  opacity: 0.6 + i * 0.05,
                }}
              />
            ))}
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
          <span className="block">KIDLON</span>
          <span className="block gradient-text text-glow-gold">TALENTED</span>
          <span className="block text-white">AWARD</span>
        </h1>

        <p className="text-lg md:text-xl text-blue-300 font-semibold tracking-widest uppercase mb-6">
          Celebrating Young Brilliance
        </p>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Discover, celebrate, and empower the most talented children and young
          individuals across the globe. The Kidlon Talented Award recognizes
          extraordinary gifts in arts, science, sports, and beyond.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#nominate"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 glow-gold hover:scale-105 shadow-xl"
          >
            🏆 Nominate a Talent
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-blue-500 text-blue-300 font-bold text-lg hover:bg-blue-500/20 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          {[
            { value: "500+", label: "Nominees" },
            { value: "50+", label: "Countries" },
            { value: "12", label: "Categories" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-yellow-400 transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}

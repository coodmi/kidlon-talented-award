"use client";

import { Target, Eye, Heart, Globe } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission",   desc: "To identify and celebrate extraordinary talent in children and young people, giving them a global platform to shine.",  color: "from-yellow-400 to-amber-500",  glow: "shadow-yellow-500/20" },
  { icon: Eye,    title: "Our Vision",    desc: "A world where every talented child is seen, valued, and empowered to reach their full potential regardless of background.", color: "from-blue-500 to-blue-700",     glow: "shadow-blue-500/20"   },
  { icon: Heart,  title: "Our Values",    desc: "Inclusivity, excellence, integrity, and compassion guide everything we do. Talent has no age, no border, and no limit.",   color: "from-purple-500 to-purple-700", glow: "shadow-purple-500/20" },
  { icon: Globe,  title: "Global Reach",  desc: "Twimbol's Kidlon Award connects talented youth from over 50 countries, building a worldwide community of young achievers.", color: "from-teal-400 to-teal-600",     glow: "shadow-teal-500/20"   },
];

const highlights = [
  { label: "Award Editions",     value: "3rd Annual", color: "text-yellow-400" },
  { label: "Age Group",          value: "5 – 25 Years", color: "text-blue-400"   },
  { label: "Prize Pool",         value: "$50,000+",   color: "text-green-400"  },
  { label: "Nominations Open",   value: "Year Round", color: "text-purple-400" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] via-[#071020] to-[#050a14] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            About the Award
          </span>
          <h2 className="section-title text-white mb-4 sm:mb-5">
            What is <span className="gradient-text">Kidlon Talented Award?</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
            A prestigious recognition program by{" "}
            <span className="text-yellow-400 font-semibold">Twimbol</span>,
            dedicated to discovering and celebrating exceptional talent in
            children and young people aged 5–25 across every discipline.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-20">
          {values.map((item) => (
            <div
              key={item.title}
              className={`relative p-5 sm:p-6 rounded-2xl bg-[#0d1526] border border-[#1e3a5f] card-hover group shadow-xl ${item.glow}`}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{item.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* About Twimbol — two-col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              About Twimbol
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4">
              Powered by <span className="gradient-text">Twimbol</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
              Twimbol is a forward-thinking organization committed to youth
              development and talent empowerment. Through innovative programs
              and global partnerships, Twimbol creates pathways for young
              talents to be recognized on the world stage.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-5 sm:mb-6">
              The Kidlon Talented Award is Twimbol&apos;s flagship initiative,
              bringing together educators, parents, industry leaders, and
              communities to celebrate the next generation of world-changers.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-sm sm:text-base hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 glow-blue"
            >
              Get in Touch
            </a>
          </div>

          {/* Highlights card */}
          <div className="relative mt-4 md:mt-0">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0d1526] to-[#071020] border border-[#1e3a5f] overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-25 pointer-events-none" />
              <div className="relative z-10 space-y-4 sm:space-y-5">
                {highlights.map((h) => (
                  <div key={h.label} className="flex items-center justify-between py-2.5 sm:py-3 border-b border-[#1e3a5f] last:border-0">
                    <span className="text-gray-400 text-xs sm:text-sm">{h.label}</span>
                    <span className={`font-bold text-base sm:text-lg ${h.color}`}>{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-yellow-400/20 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

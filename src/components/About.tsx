"use client";

import { Target, Eye, Heart, Globe, ArrowRight, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To identify and celebrate extraordinary talent in children and young people, giving them a global platform to shine and grow.",
    color: "from-yellow-400 to-amber-500",
    bg: "bg-yellow-400/8",
    border: "border-yellow-400/20",
    iconColor: "text-yellow-400",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A world where every talented child is seen, valued, and empowered to reach their full potential regardless of background.",
    color: "from-blue-400 to-blue-600",
    bg: "bg-blue-400/8",
    border: "border-blue-400/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Inclusivity, excellence, integrity, and compassion guide everything we do. Talent has no age, no border, and no limit.",
    color: "from-purple-400 to-purple-600",
    bg: "bg-purple-400/8",
    border: "border-purple-400/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Twimbol's Kidlon Award connects talented youth from over 50 countries, building a worldwide community of young achievers.",
    color: "from-teal-400 to-teal-600",
    bg: "bg-teal-400/8",
    border: "border-teal-400/20",
    iconColor: "text-teal-400",
  },
];

const highlights = [
  { label: "Award Edition",      value: "3rd Annual",   color: "text-yellow-400" },
  { label: "Age Group",          value: "5 – 25 Years", color: "text-blue-400"   },
  { label: "Prize Pool",         value: "$50,000+",     color: "text-green-400"  },
  { label: "Nominations",        value: "Free & Open",  color: "text-purple-400" },
];

const features = [
  "Expert panel of global judges",
  "Transparent, fair selection process",
  "International media coverage",
  "Scholarship opportunities",
  "Mentorship from industry leaders",
  "Lifetime alumni network",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#04080f] via-[#060d1a] to-[#04080f] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="badge bg-blue-500/10 border border-blue-500/25 text-blue-400 mb-4 mx-auto">
            About the Award
          </div>
          <h2 className="section-title text-white mb-5">
            What is{" "}
            <span className="gradient-text">Kidlon Talented Award?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A prestigious recognition program by{" "}
            <span className="text-yellow-400 font-semibold">Twimbol</span>, dedicated to
            discovering and celebrating exceptional talent in children and young people
            aged 5–25 across every discipline.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-20 sm:mb-24">
          {pillars.map((item) => (
            <div
              key={item.title}
              className={`relative p-6 rounded-2xl ${item.bg} border ${item.border} card-hover group overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-60`} />
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* About Twimbol — two-col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="badge bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 mb-5">
              About Twimbol
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
              Powered by{" "}
              <span className="gradient-text">Twimbol</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
              Twimbol is a forward-thinking organization committed to youth development
              and talent empowerment. Through innovative programs and global partnerships,
              Twimbol creates pathways for young talents to be recognized on the world stage.
            </p>
            <p className="text-gray-400 leading-relaxed mb-7 text-sm sm:text-base">
              The Kidlon Talented Award is Twimbol&apos;s flagship initiative, bringing together
              educators, parents, industry leaders, and communities to celebrate the next
              generation of world-changers.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-secondary inline-flex"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Highlights card */}
          <div className="relative">
            <div className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0a1220] to-[#0d1829] border border-[#1a3050] overflow-hidden shadow-2xl">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
              <div className="absolute inset-0 shimmer opacity-20 pointer-events-none" />

              <h4 className="text-white font-bold text-lg mb-6 relative z-10">Award at a Glance</h4>

              <div className="relative z-10 space-y-0">
                {highlights.map((h, i) => (
                  <div
                    key={h.label}
                    className={`flex items-center justify-between py-4 ${
                      i < highlights.length - 1 ? "border-b border-[#1a3050]" : ""
                    }`}
                  >
                    <span className="text-gray-400 text-sm">{h.label}</span>
                    <span className={`font-black text-lg ${h.color}`}>{h.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA inside card */}
              <div className="relative z-10 mt-6 pt-6 border-t border-[#1a3050]">
                <a
                  href="#nominate"
                  className="btn-primary w-full text-sm"
                >
                  Submit a Nomination — Free
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-yellow-400/15 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-blue-500/15 blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

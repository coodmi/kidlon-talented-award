"use client";

import {
  Music,
  Palette,
  FlaskConical,
  Dumbbell,
  BookOpen,
  Code2,
  Mic2,
  Film,
  Leaf,
  Calculator,
  Drama,
  Lightbulb,
} from "lucide-react";

const categories = [
  { icon: Music, title: "Music & Singing", desc: "Vocal talent, instrumental mastery, and original compositions", color: "from-pink-500 to-rose-600", bg: "bg-pink-500/10", border: "border-pink-500/30" },
  { icon: Palette, title: "Visual Arts", desc: "Painting, drawing, sculpture, and digital art", color: "from-orange-400 to-orange-600", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  { icon: FlaskConical, title: "Science & Innovation", desc: "Research, experiments, and scientific discoveries", color: "from-cyan-400 to-cyan-600", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  { icon: Dumbbell, title: "Sports & Athletics", desc: "Individual and team sports excellence", color: "from-green-400 to-green-600", bg: "bg-green-500/10", border: "border-green-500/30" },
  { icon: BookOpen, title: "Literature & Writing", desc: "Poetry, storytelling, essays, and creative writing", color: "from-yellow-400 to-amber-500", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
  { icon: Code2, title: "Technology & Coding", desc: "Apps, games, websites, and software development", color: "from-blue-400 to-blue-600", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { icon: Mic2, title: "Public Speaking", desc: "Debate, oratory, and communication excellence", color: "from-purple-400 to-purple-600", bg: "bg-purple-500/10", border: "border-purple-500/30" },
  { icon: Film, title: "Film & Photography", desc: "Cinematography, photography, and video production", color: "from-red-400 to-red-600", bg: "bg-red-500/10", border: "border-red-500/30" },
  { icon: Leaf, title: "Environment & Nature", desc: "Conservation projects and environmental awareness", color: "from-emerald-400 to-emerald-600", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  { icon: Calculator, title: "Mathematics", desc: "Problem solving, competitions, and mathematical research", color: "from-indigo-400 to-indigo-600", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
  { icon: Drama, title: "Performing Arts", desc: "Dance, theater, acting, and stage performance", color: "from-fuchsia-400 to-fuchsia-600", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/30" },
  { icon: Lightbulb, title: "Entrepreneurship", desc: "Young business ideas, startups, and social enterprises", color: "from-yellow-300 to-yellow-500", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#071020] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Award Categories
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            12 Categories of{" "}
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Talent comes in many forms. We celebrate brilliance across a wide
            spectrum of disciplines — because every gift deserves recognition.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`group relative p-5 rounded-2xl ${cat.bg} border ${cat.border} card-hover cursor-pointer overflow-hidden`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <cat.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-base mb-1.5">{cat.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Don&apos;t see your category?{" "}
            <span className="text-yellow-400 font-semibold">We accept all forms of talent.</span>
          </p>
          <a
            href="#nominate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 glow-gold hover:scale-105"
          >
            🌟 Submit Your Nomination
          </a>
        </div>
      </div>
    </section>
  );
}

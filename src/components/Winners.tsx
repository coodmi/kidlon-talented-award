"use client";

import { Trophy, Star, MapPin, Award } from "lucide-react";

const winners = [
  {
    name: "Amara Johnson",
    age: 14,
    country: "Nigeria",
    category: "Music & Singing",
    achievement: "Composed and performed an original symphony at age 13, captivating audiences worldwide.",
    year: "2024",
    rank: "🥇 Gold",
    color: "from-yellow-400 to-amber-500",
    initials: "AJ",
  },
  {
    name: "Liam Chen",
    age: 16,
    country: "China",
    category: "Technology & Coding",
    achievement: "Built an AI-powered app that helps visually impaired students learn mathematics.",
    year: "2024",
    rank: "🥇 Gold",
    color: "from-blue-400 to-blue-600",
    initials: "LC",
  },
  {
    name: "Sofia Martinez",
    age: 11,
    country: "Spain",
    category: "Visual Arts",
    achievement: "Her paintings were exhibited in three international galleries before her 12th birthday.",
    year: "2024",
    rank: "🥇 Gold",
    color: "from-pink-400 to-rose-600",
    initials: "SM",
  },
  {
    name: "Kwame Asante",
    age: 18,
    country: "Ghana",
    category: "Entrepreneurship",
    achievement: "Founded a social enterprise providing clean water solutions to 5 rural communities.",
    year: "2024",
    rank: "🥈 Silver",
    color: "from-green-400 to-green-600",
    initials: "KA",
  },
  {
    name: "Priya Sharma",
    age: 15,
    country: "India",
    category: "Science & Innovation",
    achievement: "Developed a low-cost water purification device using locally available materials.",
    year: "2024",
    rank: "🥈 Silver",
    color: "from-cyan-400 to-cyan-600",
    initials: "PS",
  },
  {
    name: "Ethan Williams",
    age: 13,
    country: "USA",
    category: "Mathematics",
    achievement: "Solved a long-standing mathematical problem and published a paper in a peer-reviewed journal.",
    year: "2024",
    rank: "🥉 Bronze",
    color: "from-orange-400 to-orange-600",
    initials: "EW",
  },
];

export default function Winners() {
  return (
    <section id="winners" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#071020] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-yellow-400/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Hall of Fame
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Past <span className="gradient-text">Winners</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the extraordinary young talents who have been recognized by the
            Kidlon Talented Award. Their stories inspire millions.
          </p>
        </div>

        {/* Winners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {winners.map((winner) => (
            <div
              key={winner.name}
              className="group relative p-6 rounded-2xl bg-[#0d1526] border border-[#1e3a5f] card-hover overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${winner.color}`} />

              {/* Rank badge */}
              <div className="absolute top-4 right-4 px-2 py-1 rounded-lg bg-[#050a14] border border-[#1e3a5f] text-xs font-bold text-gray-300">
                {winner.rank}
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${winner.color} flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {winner.initials}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{winner.name}</h3>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{winner.country}</span>
                    <span className="text-gray-600">•</span>
                    <span>Age {winner.age}</span>
                  </div>
                </div>
              </div>

              {/* Category */}
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold">{winner.category}</span>
              </div>

              {/* Achievement */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{winner.achievement}</p>

              {/* Year */}
              <div className="flex items-center justify-between pt-3 border-t border-[#1e3a5f]">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500 text-xs">Class of {winner.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-yellow-400/50 text-yellow-400 font-bold hover:bg-yellow-400/10 transition-all duration-300 hover:scale-105"
          >
            <Trophy className="w-5 h-5" />
            View All Winners
          </a>
        </div>
      </div>
    </section>
  );
}

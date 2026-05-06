"use client";

import { Trophy, Star, MapPin, Award } from "lucide-react";

const winners = [
  { name: "Amara Johnson", age: 14, country: "Nigeria", category: "Music & Singing",      achievement: "Composed and performed an original symphony at age 13, captivating audiences worldwide.", year: "2024", rank: "🥇 Gold",   color: "from-yellow-400 to-amber-500",  initials: "AJ" },
  { name: "Liam Chen",     age: 16, country: "China",   category: "Technology & Coding",  achievement: "Built an AI-powered app that helps visually impaired students learn mathematics.",         year: "2024", rank: "🥇 Gold",   color: "from-blue-400 to-blue-600",     initials: "LC" },
  { name: "Sofia Martinez",age: 11, country: "Spain",   category: "Visual Arts",           achievement: "Her paintings were exhibited in three international galleries before her 12th birthday.",  year: "2024", rank: "🥇 Gold",   color: "from-pink-400 to-rose-600",     initials: "SM" },
  { name: "Kwame Asante",  age: 18, country: "Ghana",   category: "Entrepreneurship",      achievement: "Founded a social enterprise providing clean water solutions to 5 rural communities.",      year: "2024", rank: "🥈 Silver", color: "from-green-400 to-green-600",   initials: "KA" },
  { name: "Priya Sharma",  age: 15, country: "India",   category: "Science & Innovation",  achievement: "Developed a low-cost water purification device using locally available materials.",        year: "2024", rank: "🥈 Silver", color: "from-cyan-400 to-cyan-600",     initials: "PS" },
  { name: "Ethan Williams",age: 13, country: "USA",     category: "Mathematics",           achievement: "Solved a long-standing mathematical problem and published a peer-reviewed paper.",         year: "2024", rank: "🥉 Bronze", color: "from-orange-400 to-orange-600", initials: "EW" },
];

export default function Winners() {
  return (
    <section id="winners" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#071020] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow-400/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            Hall of Fame
          </span>
          <h2 className="section-title text-white mb-4">
            Past <span className="gradient-text">Winners</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-2">
            Meet the extraordinary young talents recognised by the Kidlon
            Talented Award. Their stories inspire millions.
          </p>
        </div>

        {/* Grid — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {winners.map((w) => (
            <div key={w.name} className="group relative p-5 sm:p-6 rounded-2xl bg-[#0d1526] border border-[#1e3a5f] card-hover overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${w.color}`} />

              {/* Rank */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-0.5 rounded-lg bg-[#050a14] border border-[#1e3a5f] text-xs font-bold text-gray-300">
                {w.rank}
              </div>

              {/* Avatar + name */}
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${w.color} flex items-center justify-center text-white font-black text-base sm:text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  {w.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-base sm:text-lg leading-tight truncate">{w.name}</h3>
                  <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm flex-wrap">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span>{w.country}</span>
                    <span className="text-gray-600">•</span>
                    <span>Age {w.age}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mb-2 sm:mb-3">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-yellow-400 text-xs sm:text-sm font-semibold">{w.category}</span>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{w.achievement}</p>

              <div className="flex items-center justify-between pt-3 border-t border-[#1e3a5f]">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500 text-xs">Class of {w.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-yellow-400/50 text-yellow-400 font-bold text-sm sm:text-base hover:bg-yellow-400/10 transition-all duration-300 hover:scale-105">
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
            View All Winners
          </a>
        </div>
      </div>
    </section>
  );
}

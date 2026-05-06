"use client";

import { ClipboardList, Search, Star, Trophy, ArrowRight } from "lucide-react";

const steps = [
  { step: "01", icon: ClipboardList, title: "Submit Nomination",    desc: "Fill out our simple form with details about the talented child or young person — their achievements, age, and category.", color: "from-yellow-400 to-amber-500",  glow: "shadow-yellow-500/30" },
  { step: "02", icon: Search,        title: "Review & Verification",desc: "Our expert panel reviews all nominations, verifies achievements, and shortlists the most outstanding candidates.",        color: "from-blue-500 to-blue-700",     glow: "shadow-blue-500/30"   },
  { step: "03", icon: Star,          title: "Public Voting",        desc: "Shortlisted nominees are featured on our platform. Community votes contribute 40% to the final score.",                   color: "from-purple-500 to-purple-700", glow: "shadow-purple-500/30" },
  { step: "04", icon: Trophy,        title: "Award Ceremony",       desc: "Winners receive trophies, certificates, scholarships, and global recognition through Twimbol's network.",                 color: "from-green-400 to-green-600",   glow: "shadow-green-500/30"  },
];

const timeline = [
  { month: "Jan – Mar", event: "Nominations Open",     active: true  },
  { month: "Apr – May", event: "Review & Shortlisting",active: false },
  { month: "June",      event: "Public Voting",        active: false },
  { month: "July",      event: "Award Ceremony",       active: false },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] to-[#071020] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            The Process
          </span>
          <h2 className="section-title text-white mb-4">
            How It <span className="gradient-text-blue">Works</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-2">
            From nomination to celebration — our transparent, fair process
            ensures every talented young person gets a genuine chance to shine.
          </p>
        </div>

        {/* Steps — 1 col mobile, 2 col sm, 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {steps.map((step) => (
            <div key={step.step} className="relative group">
              <div className={`relative p-5 sm:p-6 rounded-2xl bg-[#0d1526] border border-[#1e3a5f] card-hover shadow-xl ${step.glow}`}>
                {/* Step badge */}
                <div className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#050a14] border border-[#1e3a5f] flex items-center justify-center">
                  <span className="text-[10px] font-black text-gray-500">{step.step}</span>
                </div>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="p-5 sm:p-8 rounded-3xl bg-[#0d1526] border border-[#1e3a5f]">
          <h3 className="text-white font-bold text-base sm:text-xl mb-6 sm:mb-8 text-center">
            📅 Award <span className="gradient-text">Timeline 2025</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {timeline.map((item) => (
              <div key={item.month} className="flex flex-col items-center text-center">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-2 sm:mb-3 ${
                  item.active
                    ? "bg-gradient-to-br from-yellow-400 to-amber-500 glow-gold"
                    : "bg-[#1e3a5f] border border-[#2a4a7f]"
                }`}>
                  {item.active
                    ? <Star className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    : <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                  }
                </div>
                <div className={`text-xs font-bold mb-0.5 ${item.active ? "text-yellow-400" : "text-gray-500"}`}>
                  {item.month}
                </div>
                <div className={`text-xs sm:text-sm font-semibold leading-tight ${item.active ? "text-white" : "text-gray-400"}`}>
                  {item.event}
                </div>
                {item.active && (
                  <span className="mt-1.5 px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-400 text-[10px] sm:text-xs font-bold">
                    OPEN NOW
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

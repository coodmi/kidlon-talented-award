"use client";

import { ClipboardList, Search, Star, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Submit Nomination",
    desc: "Fill out our simple nomination form with details about the talented child or young person you want to nominate. Include their achievements, age, and category.",
    color: "from-yellow-400 to-amber-500",
    glow: "shadow-yellow-500/30",
  },
  {
    step: "02",
    icon: Search,
    title: "Review & Verification",
    desc: "Our expert panel reviews all nominations. We verify achievements, assess impact, and shortlist the most outstanding candidates in each category.",
    color: "from-blue-500 to-blue-700",
    glow: "shadow-blue-500/30",
  },
  {
    step: "03",
    icon: Star,
    title: "Public Voting",
    desc: "Shortlisted nominees are featured on our platform. The community votes for their favorites, contributing 40% to the final score alongside expert judging.",
    color: "from-purple-500 to-purple-700",
    glow: "shadow-purple-500/30",
  },
  {
    step: "04",
    icon: Trophy,
    title: "Award Ceremony",
    desc: "Winners are announced at our prestigious annual ceremony. They receive trophies, certificates, scholarships, and global recognition through Twimbol's network.",
    color: "from-green-400 to-green-600",
    glow: "shadow-green-500/30",
  },
];

const timeline = [
  { month: "Jan – Mar", event: "Nominations Open", active: true },
  { month: "Apr – May", event: "Review & Shortlisting", active: false },
  { month: "June", event: "Public Voting", active: false },
  { month: "July", event: "Award Ceremony", active: false },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] to-[#071020] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            The Process
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            How It <span className="gradient-text-blue">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From nomination to celebration — our transparent, fair process
            ensures every talented young person gets a genuine chance to shine.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-[#1e3a5f] to-transparent z-0 -translate-y-1/2" />
              )}

              <div
                className={`relative p-6 rounded-2xl bg-[#0d1526] border border-[#1e3a5f] card-hover shadow-xl ${step.glow} z-10`}
              >
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#050a14] border border-[#1e3a5f] flex items-center justify-center">
                  <span className="text-xs font-black text-gray-500">{step.step}</span>
                </div>

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="p-8 rounded-3xl bg-[#0d1526] border border-[#1e3a5f]">
          <h3 className="text-white font-bold text-xl mb-8 text-center">
            📅 Award <span className="gradient-text">Timeline 2025</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timeline.map((item, i) => (
              <div key={item.month} className="relative flex flex-col items-center text-center">
                {/* Connector */}
                {i < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
                )}

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 z-10 ${
                    item.active
                      ? "bg-gradient-to-br from-yellow-400 to-amber-500 glow-gold"
                      : "bg-[#1e3a5f] border border-[#2a4a7f]"
                  }`}
                >
                  {item.active ? (
                    <Star className="w-5 h-5 text-black" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-gray-500" />
                  )}
                </div>
                <div
                  className={`text-xs font-bold mb-1 ${
                    item.active ? "text-yellow-400" : "text-gray-500"
                  }`}
                >
                  {item.month}
                </div>
                <div
                  className={`text-sm font-semibold ${
                    item.active ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.event}
                </div>
                {item.active && (
                  <span className="mt-2 px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-400 text-xs font-bold">
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

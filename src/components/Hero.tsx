"use client";

import { ArrowRight, Award, CheckCircle, Star, Users, Globe } from "lucide-react";

const trustedBy = [
  "🇳🇬 Nigeria", "🇬🇭 Ghana", "🇮🇳 India", "🇺🇸 USA",
  "🇬🇧 UK", "🇨🇦 Canada", "🇿🇦 South Africa", "🇧🇷 Brazil",
  "🇦🇺 Australia", "🇸🇬 Singapore", "🇰🇪 Kenya", "🇵🇰 Pakistan",
];

export default function Hero() {
  return (
    <section id="home" className="hero-bg pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="badge badge-gold mb-5 inline-flex">
              <Star className="w-3 h-3 fill-amber-500" />
              3rd Annual Edition · Nominations Open
            </div>

            <h1 className="hero-title mb-5">
              Celebrate the{" "}
              <span className="gradient-text">Brightest Young</span>{" "}
              Talents Worldwide
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              The Kidlon Talented Award by{" "}
              <span className="text-blue-600 font-semibold">Twimbol</span> recognizes
              extraordinary children and young people aged{" "}
              <strong className="text-slate-700">5–25</strong> across arts, science,
              sports, technology, and beyond.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 mb-8">
              {[
                "100% free to nominate — no fees ever",
                "Open to all nationalities and backgrounds",
                "Expert panel + public voting process",
                "Scholarships, trophies & global recognition",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-green-500 flex-shrink-0 w-5 h-5" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#nominate" className="btn-gold">
                <Award className="w-5 h-5" />
                Nominate a Talent
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="btn-outline">
                Learn More
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-200">
              <div className="flex -space-x-2">
                {["AJ","LC","SM","KA","PS"].map((init, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                    style={{ background: ["#3b82f6","#10b981","#f59e0b","#8b5cf6","#ef4444"][i] }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">500+ nominees</span> from 50+ countries
                </p>
              </div>
            </div>
          </div>

          {/* Right — visual card */}
          <div className="relative lg:pl-8">
            {/* Main card */}
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-600 via-amber-400 to-blue-600" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md float">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Kidlon Talented Award</h3>
                  <p className="text-xs text-slate-500">3rd Annual Edition · 2025</p>
                </div>
                <div className="ml-auto badge badge-green pulse-soft">
                  Open
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: Users, value: "500+", label: "Nominees", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: Globe, value: "50+",  label: "Countries", color: "text-amber-600", bg: "bg-amber-50" },
                  { icon: Award, value: "12",   label: "Categories", color: "text-green-600", bg: "bg-green-50" },
                ].map((s) => (
                  <div key={s.label} className={`${s.bg} rounded-xl p-3 text-center`}>
                    <s.icon className={`w-4 h-4 ${s.color} mx-auto mb-1`} />
                    <div className={`font-black text-lg ${s.color}`}>{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Timeline preview */}
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">2025 Timeline</p>
                {[
                  { phase: "Jan – Mar", label: "Nominations Open", active: true  },
                  { phase: "Apr – May", label: "Review & Shortlist", active: false },
                  { phase: "June",      label: "Public Voting",     active: false },
                  { phase: "July",      label: "Award Ceremony",    active: false },
                ].map((t) => (
                  <div key={t.phase} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${t.active ? "bg-green-500" : "bg-slate-200"}`} />
                    <span className={`text-xs font-medium w-20 flex-shrink-0 ${t.active ? "text-green-600" : "text-slate-400"}`}>{t.phase}</span>
                    <span className={`text-xs ${t.active ? "text-slate-700 font-semibold" : "text-slate-400"}`}>{t.label}</span>
                    {t.active && <span className="ml-auto badge badge-green text-[10px] py-0.5 px-2">Now</span>}
                  </div>
                ))}
              </div>

              <a href="#nominate" className="btn-gold w-full mt-5 text-sm py-3">
                Submit Free Nomination
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 flex items-center gap-2 hidden sm:flex">
              <span className="text-lg">🏆</span>
              <div>
                <p className="text-xs font-bold text-slate-800">$50,000+</p>
                <p className="text-[10px] text-slate-500">Prize Pool</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 flex items-center gap-2 hidden sm:flex">
              <span className="text-lg">🌍</span>
              <div>
                <p className="text-xs font-bold text-slate-800">50+ Countries</p>
                <p className="text-[10px] text-slate-500">Global reach</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by marquee */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
            Nominees from across the globe
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-4 marquee-track w-max">
              {[...trustedBy, ...trustedBy].map((country, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-600 font-medium"
                >
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

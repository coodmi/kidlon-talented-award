"use client";

import { ArrowRight, Award, CheckCircle, Star, Users, Globe, Sparkles, TrendingUp, Trophy } from "lucide-react";

const trustedBy = [
  "🇳🇬 Nigeria", "🇬🇭 Ghana", "🇮🇳 India", "🇺🇸 USA",
  "🇬🇧 UK", "🇨🇦 Canada", "🇿🇦 South Africa", "🇧🇷 Brazil",
  "🇦🇺 Australia", "🇸🇬 Singapore", "🇰🇪 Kenya", "🇵🇰 Pakistan",
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/5 to-purple-200/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-bold text-amber-900">3rd Annual Edition</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-700">Nominations Open</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              <span className="block text-slate-900">Kidlon Present</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                Junior Startup
              </span>
              <span className="block text-slate-900">Award</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Celebrating extraordinary young entrepreneurs aged{" "}
              <span className="font-bold text-blue-600">5–25</span> who are building the future through innovation, creativity, and impact.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto lg:mx-0">
              {[
                { icon: Trophy, text: "100% Free to Enter", color: "text-amber-600", bg: "bg-amber-50" },
                { icon: Globe, text: "Global Recognition", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: TrendingUp, text: "$50,000+ Prize Pool", color: "text-green-600", bg: "bg-green-50" },
                { icon: Users, text: "Expert Mentorship", color: "text-purple-600", bg: "bg-purple-50" },
              ].map((item) => (
                <div key={item.text} className={`flex items-center gap-3 ${item.bg} rounded-xl p-3 border border-${item.color.replace('text-', '')}/20`}>
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#nominate" 
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                <Award className="w-5 h-5" />
                Submit Your Startup
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-700 font-bold text-base border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {["AJ","LC","SM","KA","PS"].map((init, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-3 border-white flex items-center justify-center text-white text-sm font-bold shadow-md hover:scale-110 transition-transform"
                    style={{ background: ["#3b82f6","#10b981","#f59e0b","#8b5cf6","#ef4444"][i] }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  <span className="font-bold text-slate-900">500+</span> young entrepreneurs from <span className="font-bold text-slate-900">50+</span> countries
                </p>
              </div>
            </div>
          </div>

          {/* Right — Hero visual card */}
          <div className="relative">
            {/* Main award card */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 backdrop-blur-sm">
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500" />

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg float">
                    <Trophy className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-slate-900">Junior Startup Award</h3>
                    <p className="text-sm text-slate-500">2025 Edition</p>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-green-100 border border-green-200">
                  <span className="text-xs font-bold text-green-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    OPEN
                  </span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { icon: Users, value: "500+", label: "Startups", gradient: "from-blue-500 to-blue-600" },
                  { icon: Globe, value: "50+", label: "Countries", gradient: "from-purple-500 to-purple-600" },
                  { icon: Award, value: "12", label: "Categories", gradient: "from-amber-500 to-amber-600" },
                ].map((s) => (
                  <div key={s.label} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity" style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                    <div className="relative bg-slate-50 rounded-2xl p-4 text-center border border-slate-100 group-hover:border-slate-200 transition-all">
                      <s.icon className={`w-5 h-5 mx-auto mb-2 bg-gradient-to-br ${s.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                      <div className={`text-2xl font-black bg-gradient-to-br ${s.gradient} bg-clip-text text-transparent mb-1`}>{s.value}</div>
                      <div className="text-xs font-medium text-slate-500">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div className="space-y-3 mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">2025 Timeline</p>
                {[
                  { phase: "Jan – Mar", label: "Nominations Open", active: true, color: "green" },
                  { phase: "Apr – May", label: "Review & Judging", active: false, color: "slate" },
                  { phase: "June", label: "Public Voting", active: false, color: "slate" },
                  { phase: "July", label: "Grand Ceremony", active: false, color: "slate" },
                ].map((t) => (
                  <div key={t.phase} className="flex items-center gap-3 group">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${t.active ? 'bg-green-500 ring-4 ring-green-100' : 'bg-slate-200'} group-hover:scale-110 transition-transform`} />
                    <span className={`text-sm font-bold w-24 flex-shrink-0 ${t.active ? 'text-green-600' : 'text-slate-400'}`}>{t.phase}</span>
                    <span className={`text-sm ${t.active ? 'text-slate-900 font-semibold' : 'text-slate-400'}`}>{t.label}</span>
                    {t.active && (
                      <span className="ml-auto px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                        NOW
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a 
                href="#nominate" 
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold text-base hover:from-amber-500 hover:to-amber-600 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                <Trophy className="w-5 h-5" />
                Submit Free Nomination
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Floating info cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border border-slate-200 px-4 py-3 hidden lg:flex items-center gap-3 hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <p className="text-sm font-black text-slate-900">$50,000+</p>
                <p className="text-xs text-slate-500">Prize Pool</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-slate-200 px-4 py-3 hidden lg:flex items-center gap-3 hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <p className="text-sm font-black text-slate-900">Global Reach</p>
                <p className="text-xs text-slate-500">50+ Countries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by marquee */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
            🌟 Young Entrepreneurs from Around the World
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-4 marquee-track w-max">
              {[...trustedBy, ...trustedBy].map((country, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-5 py-2.5 bg-white border-2 border-slate-200 rounded-full text-sm text-slate-700 font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all"
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

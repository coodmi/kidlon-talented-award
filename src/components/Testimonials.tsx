"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  { quote: "Winning the Kidlon Award changed my life. I got a scholarship, international exposure, and most importantly, the confidence to pursue my dreams.", name: "Amara Johnson",   role: "2024 Gold Winner – Music",      country: "🇳🇬 Nigeria",      initials: "AJ", color: "from-yellow-400 to-amber-500"  },
  { quote: "As a parent, seeing my daughter recognised on a global stage was overwhelming. Twimbol truly cares about nurturing young talent.",                 name: "Maria Chen",      role: "Parent of 2024 Nominee",        country: "🇨🇳 China",        initials: "MC", color: "from-blue-400 to-blue-600"     },
  { quote: "The nomination process was transparent and fair. The judges were professional and the feedback helped my students grow tremendously.",             name: "Dr. James Okafor",role: "School Principal & Nominator",  country: "🇬🇭 Ghana",        initials: "JO", color: "from-green-400 to-green-600"   },
  { quote: "Kidlon Award is not just a competition — it's a movement. It's changing how the world sees young African talent.",                                 name: "Fatima Al-Hassan",role: "Youth Advocate",                country: "🇸🇦 Saudi Arabia", initials: "FA", color: "from-purple-400 to-purple-600" },
  { quote: "My son's coding project won bronze and now he has mentors from top tech companies. This award opens real doors.",                                  name: "Robert Williams", role: "Parent of 2023 Winner",         country: "🇺🇸 USA",          initials: "RW", color: "from-cyan-400 to-cyan-600"     },
  { quote: "The Kidlon Award gave our school's art program the recognition it deserved. Three of our students were shortlisted this year!",                   name: "Ms. Priya Nair",  role: "Art Teacher & Mentor",          country: "🇮🇳 India",        initials: "PN", color: "from-pink-400 to-rose-600"     },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071020] to-[#050a14] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            Testimonials
          </span>
          <h2 className="section-title text-white mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-2">
            Hear from winners, parents, educators, and advocates who have
            experienced the transformative power of the Kidlon Talented Award.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="group relative p-5 sm:p-6 rounded-2xl bg-[#0d1526] border border-[#1e3a5f] card-hover overflow-hidden">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
              </div>

              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-[#1e3a5f]">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-xs sm:text-sm truncate">{t.name}</div>
                  <div className="text-gray-500 text-xs truncate">{t.role}</div>
                  <div className="text-gray-500 text-xs">{t.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Globe, Trophy, Star } from "lucide-react";

const stats = [
  { icon: Users,  value: 500, suffix: "+",  label: "Total Nominees",       color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
  { icon: Globe,  value: 50,  suffix: "+",  label: "Countries",            color: "text-blue-400",   bg: "bg-blue-400/10",   border: "border-blue-400/30"   },
  { icon: Trophy, value: 120, suffix: "+",  label: "Awards Given",         color: "text-green-400",  bg: "bg-green-400/10",  border: "border-green-400/30"  },
  { icon: Star,   value: 3,   suffix: "rd", label: "Annual Edition",       color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref   = useRef<HTMLSpanElement>(null);
  const done  = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const steps = 50;
          const inc   = target / steps;
          let cur     = 0;
          const t     = setInterval(() => {
            cur += inc;
            if (cur >= target) { setCount(target); clearInterval(t); }
            else setCount(Math.floor(cur));
          }, 2000 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050a14] via-[#0a1628] to-[#050a14] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`relative p-4 sm:p-6 md:p-8 rounded-2xl ${s.bg} border ${s.border} text-center card-hover overflow-hidden group`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center mx-auto mb-3`}>
                <s.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${s.color}`} />
              </div>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-black ${s.color} mb-1`}>
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

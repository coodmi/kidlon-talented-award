"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Globe, Trophy, Star } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Total Nominees", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
  { icon: Globe, value: 50, suffix: "+", label: "Countries Represented", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
  { icon: Trophy, value: 120, suffix: "+", label: "Awards Given", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/30" },
  { icon: Star, value: 3, suffix: "rd", label: "Annual Edition", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050a14] via-[#0a1628] to-[#050a14] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`relative p-6 md:p-8 rounded-2xl ${stat.bg} border ${stat.border} text-center card-hover overflow-hidden group`}
            >
              {/* Background glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div
                className={`w-12 h-12 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>

              <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-2`}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>

              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Globe, Trophy, Star, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users,     value: 500,  suffix: "+", label: "Total Nominees",  desc: "From around the world",    color: "text-blue-600",   bg: "bg-blue-50",   border: "border-blue-100"   },
  { icon: Globe,     value: 50,   suffix: "+", label: "Countries",       desc: "Global representation",    color: "text-amber-600",  bg: "bg-amber-50",  border: "border-amber-100"  },
  { icon: Trophy,    value: 120,  suffix: "+", label: "Awards Given",    desc: "Lives transformed",        color: "text-green-600",  bg: "bg-green-50",  border: "border-green-100"  },
  { icon: TrendingUp,value: 50,   suffix: "K+",label: "Prize Pool ($)",  desc: "In scholarships & prizes", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const steps = 50;
        const inc = target / steps;
        let cur = 0;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 1600 / steps);
      }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className={`flex items-center gap-4 p-5 rounded-2xl ${s.bg} border ${s.border}`}>
              <div className={`w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <div>
                <div className={`text-2xl font-black ${s.color} leading-none mb-0.5`}>
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-slate-700 font-semibold text-sm leading-tight">{s.label}</div>
                <div className="text-slate-400 text-xs hidden sm:block">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

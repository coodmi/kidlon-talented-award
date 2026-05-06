"use client";

import { Mail, Phone, MapPin, Send, Share2, MessageCircle, Video, Rss } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#071020] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            Get In Touch
          </span>
          <h2 className="section-title text-white mb-4">
            Contact <span className="gradient-text-blue">Us</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-2">
            Have questions about the award? Want to partner with us? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

          {/* Left — contact info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                Reach Out to <span className="gradient-text">Twimbol</span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Mail,   label: "Email",   value: "awards@twimbol.com",                        href: "mailto:awards@twimbol.com" },
                  { icon: Phone,  label: "Phone",   value: "+1 (800) TWIMBOL",                          href: "tel:+18008946265"          },
                  { icon: MapPin, label: "Address", value: "Twimbol HQ, Innovation District, Global City", href: "#"                     },
                ].map((item) => (
                  <a key={item.label} href={item.href}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#0d1526] border border-[#1e3a5f] hover:border-blue-500/50 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-gray-500 text-xs mb-0.5">{item.label}</div>
                      <div className="text-white text-xs sm:text-sm font-medium break-words">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex gap-2 sm:gap-3">
                {[
                  { icon: MessageCircle, label: "Twitter / X", color: "hover:bg-sky-500/20 hover:border-sky-500/50 hover:text-sky-400"   },
                  { icon: Share2,        label: "Instagram",   color: "hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-400" },
                  { icon: Rss,           label: "Facebook",    color: "hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400" },
                  { icon: Video,         label: "YouTube",     color: "hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400"    },
                ].map((s) => (
                  <a key={s.label} href="#" aria-label={s.label}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0d1526] border border-[#1e3a5f] flex items-center justify-center text-gray-400 transition-all duration-200 ${s.color}`}
                  >
                    <s.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — newsletter + FAQ */}
          <div className="space-y-4 sm:space-y-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0d1526] to-[#071020] border border-[#1e3a5f] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-blue-500" />
              <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">📬 Stay Updated</h4>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                Get the latest news about nominations, winners, and events delivered to your inbox.
              </p>
              {subscribed ? (
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs sm:text-sm text-center">
                  ✅ You&apos;re subscribed! Welcome to the Kidlon community.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#050a14] border border-[#1e3a5f] text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 text-xs sm:text-sm"
                  />
                  <button type="submit" className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all flex-shrink-0">
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-white font-bold text-base sm:text-lg">Quick FAQ</h4>
              {[
                { q: "Who can be nominated?",    a: "Any child or young person aged 5–25 with exceptional talent in any field." },
                { q: "Is nomination free?",      a: "Yes! Completely free. We believe talent should be recognised regardless of financial status." },
                { q: "How are winners selected?",a: "Expert panel judging (60%) + public voting (40%) determines the winners." },
                { q: "Can I nominate myself?",   a: "Yes, self-nominations are accepted. You can also be nominated by a parent, teacher, or mentor." },
              ].map((faq) => (
                <div key={faq.q} className="p-3 sm:p-4 rounded-xl bg-[#0d1526] border border-[#1e3a5f]">
                  <div className="text-yellow-400 font-semibold text-xs sm:text-sm mb-1">{faq.q}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Mail, Phone, MapPin, Send, Share2, MessageCircle, Video, Rss } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#071020] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Contact <span className="gradient-text-blue">Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about the award? Want to partner with us? We&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-6">
                Reach Out to <span className="gradient-text">Twimbol</span>
              </h3>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "awards@twimbol.com", href: "mailto:awards@twimbol.com" },
                  { icon: Phone, label: "Phone", value: "+1 (800) TWIMBOL", href: "tel:+18008946265" },
                  { icon: MapPin, label: "Address", value: "Twimbol HQ, Innovation District, Global City", href: "#" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1526] border border-[#1e3a5f] hover:border-blue-500/50 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs mb-0.5">{item.label}</div>
                      <div className="text-white text-sm font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: MessageCircle, label: "Twitter / X", color: "hover:bg-sky-500/20 hover:border-sky-500/50 hover:text-sky-400" },
                  { icon: Share2, label: "Instagram", color: "hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-400" },
                  { icon: Rss, label: "Facebook", color: "hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400" },
                  { icon: Video, label: "YouTube", color: "hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className={`w-11 h-11 rounded-xl bg-[#0d1526] border border-[#1e3a5f] flex items-center justify-center text-gray-400 transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter + FAQ */}
          <div className="space-y-6">
            {/* Newsletter */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0d1526] to-[#071020] border border-[#1e3a5f] overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-blue-500" />
              <h4 className="text-white font-bold text-lg mb-2">
                📬 Stay Updated
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest news about nominations, winners, and events
                delivered to your inbox.
              </p>
              {subscribed ? (
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center">
                  ✅ You&apos;re subscribed! Welcome to the Kidlon community.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#050a14] border border-[#1e3a5f] text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all flex items-center gap-1"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-lg">Quick FAQ</h4>
              {[
                { q: "Who can be nominated?", a: "Any child or young person aged 5–25 with exceptional talent in any field." },
                { q: "Is nomination free?", a: "Yes! Nominations are completely free. We believe talent should be recognized regardless of financial status." },
                { q: "How are winners selected?", a: "A combination of expert panel judging (60%) and public voting (40%) determines the winners." },
                { q: "Can I nominate myself?", a: "Yes, self-nominations are accepted. You can also be nominated by a parent, teacher, or mentor." },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="p-4 rounded-xl bg-[#0d1526] border border-[#1e3a5f]"
                >
                  <div className="text-yellow-400 font-semibold text-sm mb-1">{faq.q}</div>
                  <div className="text-gray-400 text-sm">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

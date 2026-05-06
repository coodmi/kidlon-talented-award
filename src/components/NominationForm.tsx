"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, Trophy } from "lucide-react";

const categories = [
  "Music & Singing","Visual Arts","Science & Innovation","Sports & Athletics",
  "Literature & Writing","Technology & Coding","Public Speaking","Film & Photography",
  "Environment & Nature","Mathematics","Performing Arts","Entrepreneurship","Other",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function NominationForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    nominatorName: "", nominatorEmail: "",
    nomineeName: "", nomineeAge: "", nomineeCountry: "",
    category: "", achievement: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/nominate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ nominatorName:"",nominatorEmail:"",nomineeName:"",nomineeAge:"",nomineeCountry:"",category:"",achievement:"",message:"" });
      } else setFormState("error");
    } catch { setFormState("error"); }
  };

  const input = "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#050a14] border border-[#1e3a5f] text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all duration-200 text-sm";

  return (
    <section id="nominate" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] to-[#071020] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            Nominations Open
          </span>
          <h2 className="section-title text-white mb-4">
            Nominate a <span className="gradient-text">Talent</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-2">
            Know a talented child or young person? Give them the recognition
            they deserve. Nominations are free and open to all.
          </p>
        </div>

        <div className="relative p-5 sm:p-8 md:p-10 rounded-3xl bg-[#0d1526] border border-[#1e3a5f] shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400" />

          {formState === "success" ? (
            <div className="text-center py-10 sm:py-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3">Nomination Submitted! 🎉</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6">
                Thank you! Our team will review it and get back to you within 5–7 business days.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-sm sm:text-base hover:from-yellow-300 hover:to-yellow-400 transition-all"
              >
                Submit Another Nomination
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

              {/* Step 1 */}
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-black flex-shrink-0">1</span>
                  Your Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Your Full Name *</label>
                    <input type="text" name="nominatorName" value={form.nominatorName} onChange={handleChange} required placeholder="John Doe" className={input} />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Your Email *</label>
                    <input type="email" name="nominatorEmail" value={form.nominatorEmail} onChange={handleChange} required placeholder="john@example.com" className={input} />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-black text-black flex-shrink-0">2</span>
                  Nominee Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="sm:col-span-1">
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Full Name *</label>
                    <input type="text" name="nomineeName" value={form.nomineeName} onChange={handleChange} required placeholder="Jane Smith" className={input} />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Age *</label>
                    <input type="number" name="nomineeAge" value={form.nomineeAge} onChange={handleChange} required min="5" max="25" placeholder="e.g. 14" className={input} />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Country *</label>
                    <input type="text" name="nomineeCountry" value={form.nomineeCountry} onChange={handleChange} required placeholder="e.g. Nigeria" className={input} />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Award Category *</label>
                  <select name="category" value={form.category} onChange={handleChange} required className={input}>
                    <option value="">Select a category...</option>
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-black flex-shrink-0">3</span>
                  Tell Us About Their Talent
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Key Achievement *</label>
                    <input type="text" name="achievement" value={form.achievement} onChange={handleChange} required placeholder="e.g. Won national science competition at age 12" className={input} />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Additional Details</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us more about their talent, journey, and why they deserve this award..." className={`${input} resize-none`} />
                  </div>
                </div>
              </div>

              {formState === "error" && (
                <div className="p-3 sm:p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-sm sm:text-base hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 glow-gold hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3"
              >
                {formState === "loading" ? (
                  <><Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />Submitting...</>
                ) : (
                  <><Trophy className="w-4 h-4 sm:w-5 sm:h-5" />Submit Nomination<Send className="w-4 h-4 sm:w-5 sm:h-5" /></>
                )}
              </button>

              <p className="text-center text-gray-600 text-xs">
                By submitting, you agree to our{" "}
                <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> and{" "}
                <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
                Nominations are free.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

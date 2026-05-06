import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Winners from "@/components/Winners";
import Testimonials from "@/components/Testimonials";
import NominationForm from "@/components/NominationForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Categories />
      <HowItWorks />
      <Winners />
      <Testimonials />
      <NominationForm />
      <Contact />
      <Footer />
    </main>
  );
}

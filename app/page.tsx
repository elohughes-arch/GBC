"use client";
// Use "../" to go up one level from the 'app' folder to the 'components' folder
import SplashScreen from "../components/SplashScreen";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import TrustStats from "../components/TrustStats";
import ServiceGrid from "../components/ServiceGrid";
import PhotoGrid from "../components/PhotoGrid";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { siteData } from "../data/siteData";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen selection:bg-teal-500 selection:text-white">
      <SplashScreen />
      <Nav />
      
      <Hero />
      <TrustStats />
      <ServiceGrid />
      <PhotoGrid />
      <About />
      <Contact />
      
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden animate-fade-in-up">
        <a 
          href={`tel:${siteData.phone.replace(/\s/g, '')}`}
          className="flex items-center justify-center gap-3 w-full py-4 bg-teal-500 text-white font-bold rounded-2xl shadow-2xl shadow-teal-500/40 active:scale-95 transition-transform"
        >
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            aria-hidden="true"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Now for a Free Quote
        </a>
      </div>
    </main>
  );
}

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Site-ta load hoye gele timer-ti bondho hobe
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark-bg selection:bg-coral selection:text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          /* --- PREMIUM WELCOME LOADER --- */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#050505]"
          >
            <div className="flex flex-col items-center text-center px-6">
              {/* Animated Welcome Tag */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-coral font-black tracking-[0.4em] uppercase text-[10px] mb-4"
              >
                Welcome to
              </motion.span>

              {/* Main Name Branding */}
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-white italic mb-2"
              >
                BONNA <span className="text-slate-blue">AKTER'S</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl font-light uppercase tracking-[0.3em] text-white/80"
              >
                Digital Portfolio
              </motion.h2>

              {/* Decorative Progress Line */}
              <div className="mt-10 w-40 md:w-60 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 h-full w-full bg-gradient-to-r from-transparent via-coral to-transparent"
                />
              </div>

              {/* Small Loading Indicator */}
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mt-6 text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]"
              >
                Personalizing your experience...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          /* --- MAIN CONTENT SECTION --- */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Home />
              <About />
              <Projects />
              <Education />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
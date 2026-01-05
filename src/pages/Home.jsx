import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/bonna-profile.png";
import { SiReact, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";

export default function Home() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-coral font-bold tracking-[0.3em] uppercase text-xs mb-4">Available for Hire</h2>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
            MERN STACK <br /> <span className="text-slate-blue uppercase">Developer</span>
          </h1>
          <p className="mt-8 text-slate-400 text-lg max-w-lg leading-relaxed italic">
            "Code is like humor. When you have to explain it, it’s bad. I strive to write code that speaks for itself."
          </p>
          <div className="mt-10 flex flex-wrap gap-6">
            <a href="#projects" className="px-8 py-4 bg-white text-black font-black rounded-xl hover:bg-coral hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">Start a Project</a>
            <a href="/resume.pdf" target="_blank" className="px-8 py-4 border border-white/10 text-white font-black rounded-xl hover:bg-white/5 transition-all">Download Resume</a>
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 bg-slate-blue/20 blur-[100px] rounded-full" />
            <motion.img src={profileImg} className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-[-40px] z-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 p-4 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"><SiReact size={28} color="#61DBFB" /></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-4 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"><SiMongodb size={28} color="#47A248" /></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 p-4 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"><SiNodedotjs size={28} color="#68a063" /></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 p-4 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"><SiExpress size={28} color="#ffffff" /></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
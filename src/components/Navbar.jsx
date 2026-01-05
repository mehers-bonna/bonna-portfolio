import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-dark-bg/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-black tracking-tighter text-white uppercase">
          BONNA AKTER<span className="text-coral">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300 uppercase tracking-widest">
          <a href="#home" className="hover:text-coral transition-colors">Home</a>
          <a href="#about" className="hover:text-coral transition-colors">About</a>
          <a href="#projects" className="hover:text-coral transition-colors">Projects</a>
          <a href="#contact" className="px-6 py-2.5 bg-coral hover:bg-orange-600 text-white rounded-full transition-all shadow-lg shadow-coral/20">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
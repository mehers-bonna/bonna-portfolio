import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
      <h2 className="text-4xl font-black text-white mb-16 tracking-tighter uppercase">Education & <span className="text-slate-blue">Journey</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div whileHover={{ scale: 1.02 }} className="p-10 bg-white/2 border border-white/5 rounded-[3rem] hover:border-coral/20 transition-all">
          <div className="w-12 h-12 bg-coral/10 rounded-2xl flex items-center justify-center text-coral mb-8 font-black">01</div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Pallabi Government College</h3>
          <p className="text-coral font-black mt-2 uppercase tracking-widest text-xs">BBS in Accounting | Graduation</p>
          <p className="text-slate-500 mt-6 leading-relaxed">Focusing on business fundamentals and accounting while pursuing my passion for technology independently.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="p-10 bg-white/2 border border-white/5 rounded-[3rem] hover:border-slate-blue/20 transition-all">
          <div className="w-12 h-12 bg-slate-blue/10 rounded-2xl flex items-center justify-center text-slate-blue mb-8 font-black">02</div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Programming Hero</h3>
          <p className="text-slate-blue font-black mt-2 uppercase tracking-widest text-xs">MERN Stack Development | 2024</p>
          <p className="text-slate-500 mt-6 leading-relaxed">Intensive training on MongoDB, Express.js, React, and Node.js to build industry-level web applications.</p>
        </motion.div>
      </div>
    </section>
  );
}
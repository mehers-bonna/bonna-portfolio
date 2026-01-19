import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
      {/* Title Animation */}
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-black text-white mb-16 tracking-tighter uppercase"
      >
        Education & <span className="text-slate-blue">Journey</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 01: Education */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ 
            y: -10,
            scale: 1.02,
            borderColor: "rgba(255, 111, 97, 0.3)", // Coral glow on hover
            boxShadow: "0px 20px 40px rgba(255, 111, 97, 0.05)"
          }} 
          className="p-10 bg-white/2 border border-white/5 rounded-[3rem] transition-all duration-300"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-12 h-12 bg-coral/10 rounded-2xl flex items-center justify-center text-coral mb-8 font-black"
          >
            01
          </motion.div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Pallabi Government College</h3>
          <p className="text-coral font-black mt-2 uppercase tracking-widest text-xs">BBS in Accounting | Graduation</p>
          <p className="text-slate-500 mt-6 leading-relaxed">Focusing on business fundamentals and accounting while pursuing my passion for technology independently.</p>
        </motion.div>

        {/* Card 02: Programming Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          whileHover={{ 
            y: -10,
            scale: 1.02,
            borderColor: "rgba(91, 102, 243, 0.3)", // Slate-blue glow on hover
            boxShadow: "0px 20px 40px rgba(91, 102, 243, 0.05)"
          }} 
          className="p-10 bg-white/2 border border-white/5 rounded-[3rem] transition-all duration-300"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="w-12 h-12 bg-slate-blue/10 rounded-2xl flex items-center justify-center text-slate-blue mb-8 font-black"
          >
            02
          </motion.div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Programming Hero</h3>
          <p className="text-slate-blue font-black mt-2 uppercase tracking-widest text-xs">MERN Stack Development | 2025</p>
          <p className="text-slate-500 mt-6 leading-relaxed">Intensive training on MongoDB, Express.js, React, and Node.js to build industry-level web applications.</p>
        </motion.div>
      </div>
    </section>
  );
}
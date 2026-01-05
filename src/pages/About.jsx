import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Completed Projects", value: "15+" },
  { label: "Technologies Used", value: "20+" },
  { label: "Learning Hours", value: "500+" }
];

export default function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">About <span className="text-coral">Me</span></h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I am a passionate MERN Stack Developer who loves transforming ideas into real, user-friendly digital experiences. Skilled in MongoDB, Express, React, and Node.js. Completed graduation from Pallabi Government College.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                <h3 className="text-3xl font-black text-coral">{stat.value}</h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-bold leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="p-10 bg-gradient-to-br from-coral/10 to-transparent border border-coral/10 rounded-[3rem]">
           <h3 className="text-xl font-bold text-white mb-4">My Philosophy</h3>
           <p className="text-slate-400 italic">"I believe in building applications that are not just functional, but also provide a seamless and delightful user experience. Performance and clean architecture are my top priorities."</p>
        </div>
      </div>
    </section>
  );
}
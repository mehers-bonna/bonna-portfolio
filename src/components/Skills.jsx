import React from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiStripe, SiGithub } from "react-icons/si";

const iconMap = {
  HTML5: <SiHtml5 color="#E34F26" />, CSS3: <SiCss3 color="#1572B6" />, JavaScript: <SiJavascript color="#F7DF1E" />, 
  React: <SiReact color="#61DBFB" />, "Next.js": <SiNextdotjs color="#ffffff" />, Tailwind: <SiTailwindcss color="#06B6D4" />,
  Node: <SiNodedotjs color="#339933" />, Express: <SiExpress color="#ffffff" />, MongoDB: <SiMongodb color="#47A248" />,
  Firebase: <SiFirebase color="#FFCA28" />, "Stripe API": <SiStripe color="#008CD1" />, Git: <SiGithub color="#F05032" />
};

export default function Skills() {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } // Cards will appear one by one
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-black text-white mb-16 tracking-tighter uppercase"
      >
        Technical <span className="text-coral">Expertise</span>
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {Object.entries(portfolioData.Skills).map(([cat, items]) => (
          <motion.div 
            key={cat} 
            variants={itemVariants}
            whileHover={{ y: -10, borderColor: "rgba(255, 111, 97, 0.2)" }}
            className="p-10 bg-slate-900/40 border border-white/5 rounded-[3rem] hover:bg-white/5 transition-all duration-300"
          >
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-10 text-center border-b border-white/5 pb-6">{cat}</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {items.map((s, idx) => (
                <motion.div 
                  key={s} 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                    {iconMap[s] || s[0]}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
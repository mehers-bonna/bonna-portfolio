import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Completed Projects", value: "15+" },
  { label: "Technologies Used", value: "20+" },
  { label: "Learning Hours", value: "500+" }
];

export default function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 -mt-80">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE: Text & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">
            About <span className="text-coral">Me</span>
          </h2>
          
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-8">
            <p>
              Hello! I'm <span className="text-white font-bold">Bonna Akter</span>, a MERN Stack Developer who finds joy in turning complex problems into elegant digital solutions. My journey into programming started with a deep curiosity about how the web works, which eventually led me to dive headfirst into the world of JavaScript.
            </p>
            
            <p>
              I specialize in building full-stack applications using the <span className="text-white">MERN (MongoDB, Express, React, Node.js)</span> stack. What I enjoy most is the process of crafting clean, scalable architecture and creating user interfaces that feel intuitive and alive. To me, coding isn't just about logic; it's an art form.
            </p>

            <p>
              When I'm not staring at a terminal, you'll likely find me in my <span className="text-coral italic font-medium">garden</span>. I'm a passionate gardener who loves nurturing plants and watching them grow—a hobby that has taught me patience and the importance of strong roots, both in life and in software development.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.5 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100 
                }} 
                className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center hover:border-coral/30 transition-colors"
              >
                <h3 className="text-3xl font-black text-coral">{stat.value}</h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-bold leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Philosophy Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative p-10 bg-gradient-to-br from-coral/10 to-transparent border border-coral/10 rounded-[3rem] overflow-hidden group"
        >
          {/* Background Decorative Element */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-coral/5 rounded-full blur-3xl group-hover:bg-coral/10 transition-all duration-500" 
          />
          
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
             My Philosophy
          </h3>
          <p className="text-slate-300 italic text-xl leading-relaxed">
            "I believe that building software is like gardening. You need a fertile foundation (clean architecture), constant care (debugging), and the right environment to let the user experience truly bloom. I don't just write code; I grow digital ecosystems."
          </p>
          
          <div className="mt-8 flex items-center gap-4">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[2px] bg-coral" 
            />
            <span className="text-xs uppercase tracking-widest font-black text-white/50">Bonna Akter</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
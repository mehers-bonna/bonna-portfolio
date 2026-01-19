import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../data/portfolioData";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Animation variants for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } // Cards will appear one by one
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 -mt-20">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tighter uppercase italic"
      >
        Latest <span className="text-coral">Projects</span>
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {portfolioData.Projects.map((p) => (
          <motion.div 
            key={p.title} 
            variants={cardVariants}
            whileHover={{ y: -15, transition: { duration: 0.3 } }} 
            className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden group shadow-2xl"
          >
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={p.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={p.title} 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <motion.button 
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                   onClick={() => setSelectedProject(p)} 
                   className="px-6 py-3 bg-white text-black font-black rounded-full text-[10px] tracking-widest uppercase transform scale-90 group-hover:scale-100 transition-all hover:bg-coral hover:text-white"
                 >
                   View Details
                 </motion.button>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight text-center">{p.title}</h3>
              <div className="flex gap-3">
                <a 
                  href={p.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-3 bg-coral text-white rounded-xl font-black text-[9px] tracking-[0.15em] uppercase text-center flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                >
                  <FiExternalLink size={14} /> Live
                </a>
                <a 
                  href={p.source} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-black text-[9px] tracking-[0.15em] uppercase text-center flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  <FiGithub size={14} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* MODERN MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 50 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0a0c10] border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors p-2"
              >
                <FiX size={32} />
              </button>

              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-tighter italic"
              >
                {selectedProject.title}
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-1.5 bg-coral rounded-full mb-8" 
              />
              
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                src={selectedProject.image} 
                className="w-full h-[200px] md:h-[400px] object-cover rounded-3xl mb-8 border border-white/5" 
                alt="" 
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-xs font-black text-coral uppercase tracking-[0.2em] mb-4">Project Overview</h4>
                  <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
                    {selectedProject.description}
                  </p>
                  
                  <h4 className="text-xs font-black text-coral uppercase tracking-[0.2em] mb-4">Key Features</h4>
                  <ul className="space-y-2 text-slate-300 text-sm font-medium">
                    {selectedProject.features?.map(f => <li key={f}>• {f}</li>)}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="text-xs font-black text-coral uppercase tracking-[0.2em] mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {selectedProject.techStack?.map(t => (
                      <span key={t} className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-[10px] font-black text-slate-300 uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={selectedProject.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 py-4 bg-coral text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-xl shadow-coral/30 transition-all"
                    >
                      <FiExternalLink /> Visit Live Website
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={selectedProject.source} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 py-4 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
                    >
                      <FiGithub /> Source Code
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
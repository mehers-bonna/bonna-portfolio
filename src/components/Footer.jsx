import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
// Apnar image-ti eikhane import koren
import ProfileImg from '../assets/bonna-profile.png'; 

export default function Footer() {
  return (
    <footer className="bg-[#05070a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Profile Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            {/* Image Section - Replacing "BA" with your image */}
            <div className="w-16 h-16 rounded-2xl border-2 border-coral shadow-lg shadow-coral/20 overflow-hidden bg-white/5">
              <img 
                src={ProfileImg} 
                alt="Bonna Akter" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white text-2xl font-black italic uppercase">Bonna Akter</h3>
              <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">MERN Stack Developer</p>
            </div>
          </div>
          <p className="text-slate-500 leading-relaxed max-w-sm">
            Building modern, scalable web applications with the MERN stack. Let's collaborate and build something amazing together!
          </p>
          <div className="flex gap-4">
            {[
              { Icon: FiGithub, link: "https://github.com/mehers-bonna" },
              { Icon: FiLinkedin, link: "https://www.linkedin.com/in/bonna-akterr/" },
              { Icon: FiMail, link: "mailto:mehersbonna17131713@gmail.com" },
              { Icon: FaWhatsapp, link: "https://wa.me/8801324534240" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-coral hover:text-white transition-all duration-300"
              >
                <social.Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest mb-8 italic">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 font-bold text-sm">
            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-coral transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest mb-8 italic">Get In Touch</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-400 group">
              <FiPhone className="group-hover:text-coral transition-colors" />
              <span className="text-sm font-bold tracking-tight text-white/80">+880 1997-854008</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 group">
              <FiMail className="group-hover:text-coral transition-colors" />
              <span className="text-sm font-bold tracking-tight text-white/80 italic">mehersbonna17131713@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 group">
              <FiMapPin className="group-hover:text-coral transition-colors" />
              <span className="text-sm font-bold tracking-tight text-white/80">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-[10px] font-black tracking-[0.2em] uppercase">
          © 2026 BONNA AKTER. All rights reserved.
        </p>
        <p className="text-slate-600 text-[10px] font-black tracking-[0.2em] uppercase flex items-center gap-2">
          Handcrafted by <span className="text-coral">Bonna</span>
        </p>
      </div>
    </footer>
  );
}
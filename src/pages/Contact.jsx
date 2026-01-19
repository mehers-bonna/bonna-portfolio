import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiCheckCircle, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    emailjs
      .send(
        "service_g6pw13j",
        "template_nx0wqwn",
        templateParams,
        "dcrBFWvQ_Cl5_FJOS"
      )
      .then(
        () => {
          setIsSent(true);
          setIsSending(false);
          toast.success("Message sent successfully!");
          form.current.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setIsSending(false);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  // Animation variants for contact list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 -mt-24">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white tracking-tighter uppercase italic"
        >
          Contact <span className="text-coral">Me</span>
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1.5 bg-coral mx-auto mt-4 rounded-full" 
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#0a0c10] border border-white/5 p-8 md:p-16 rounded-[4rem]"
      >
        <div className="flex flex-col justify-between">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-10 leading-relaxed"
            >
              I'm currently available for MERN Stack projects and full-time roles.
              Let's build something extraordinary together.
            </motion.p>
            
            {/* Contact Details with Socials Animated */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {/* Email */}
              <motion.div variants={itemVariants} className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-coral/30 transition-all group">
                <FiMail className="text-coral group-hover:scale-110 transition-transform" size={20} />
                <span className="text-white font-bold text-xs md:text-sm tracking-tight">mehersbonna17131713@gmail.com</span>
              </motion.div>

              {/* LinkedIn */}
              <motion.a variants={itemVariants} href="https://www.linkedin.com/in/bonna-akterr/" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-coral/30 transition-all group">
                <FiLinkedin className="text-coral group-hover:scale-110 transition-transform" size={20} />
                <span className="text-white font-bold text-xs md:text-sm tracking-tight uppercase">LinkedIn Profile</span>
              </motion.a>

              {/* GitHub */}
              <motion.a variants={itemVariants} href="https://github.com/mehers-bonna" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-coral/30 transition-all group">
                <FiGithub className="text-coral group-hover:scale-110 transition-transform" size={20} />
                <span className="text-white font-bold text-xs md:text-sm tracking-tight uppercase">GitHub Repositories</span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a variants={itemVariants} href="https://wa.me/8801324534240" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-coral/30 transition-all group">
                <FaWhatsapp className="text-coral group-hover:scale-110 transition-transform" size={20} />
                <span className="text-white font-bold text-xs md:text-sm tracking-tight">+880 1324-534240</span>
              </motion.a>

              {/* Location */}
              <motion.div variants={itemVariants} className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/5">
                <FiMapPin className="text-coral" size={20} />
                <span className="text-white font-bold text-xs md:text-sm tracking-tight uppercase">Dhaka, Bangladesh</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Working Form Animated */}
        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          ref={form} 
          onSubmit={sendEmail} 
          className="space-y-4"
        >
          <input
            type="text"
            name="user_name"
            required
            placeholder="FULL NAME"
            className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-coral transition-all font-bold text-xs tracking-widest"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="EMAIL ADDRESS"
            className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-coral transition-all font-bold text-xs tracking-widest"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="YOUR MESSAGE"
            className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-coral transition-all font-bold text-xs tracking-widest"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSending}
            className={`w-full py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs ${
              isSent
                ? "bg-green-500 text-white"
                : "bg-coral text-white hover:shadow-2xl hover:shadow-coral/40"
            }`}
          >
            {isSending ? "Sending..." : isSent ? <>Sent Successfully <FiCheckCircle /></> : <>Send Message <FiSend /></>}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
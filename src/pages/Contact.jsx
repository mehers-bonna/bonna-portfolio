import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiCheckCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Using explicit template parameters to ensure data mapping matches EmailJS dashboard
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

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      {/* Toast container for professional notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Contact <span className="text-coral">Me</span>
        </h2>
        <div className="w-20 h-1.5 bg-coral mx-auto mt-4 rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#0a0c10] border border-white/5 p-8 md:p-16 rounded-[4rem]"
      >
        <div>
          <p className="text-slate-400 text-lg mb-12">
            I'm currently available for MERN Stack projects and full-time roles.
            Let's build something extraordinary together.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-coral/30 transition-all">
              <FiMail className="text-coral" size={24} />
              <span className="text-white font-bold tracking-tight text-sm md:text-base">
                mehersbonna17131713@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-slate-blue/30 transition-all">
              <FiMapPin className="text-slate-blue" size={24} />
              <span className="text-white font-bold tracking-tight">
                Dhaka, Bangladesh
              </span>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
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

          <button
            disabled={isSending}
            className={`w-full py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs ${
              isSent
                ? "bg-green-500 text-white"
                : "bg-coral text-white hover:shadow-2xl hover:shadow-coral/40"
            }`}
          >
            {isSending ? (
              "Sending..."
            ) : isSent ? (
              <>
                Sent Successfully <FiCheckCircle />
              </>
            ) : (
              <>
                Send Message <FiSend />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
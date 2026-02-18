import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Sparkles, Zap, Globe, ShieldCheck, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ShinyButton from "@/components/animations/ShinyButton";

const AboutSection = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const isBengali = i18n.language === "bn";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className={`relative py-24 overflow-hidden ${isBengali ? "font-bengali" : ""}`}>
      
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(100% 100% at 50% 0%, #020617 0%, #0a192f 100%)",
        }}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 max-w-6xl relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">
            About <span className="text-[#d69e2e]">Us</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            {isBengali
              ? "শিক্ষার্থীদের একাডেমিক ডকুমেন্টেশন এবং কভার পেজ তৈরির প্রক্রিয়াকে সহজ ও দ্রুত করতে তৈরি একটি ওপেন-সোর্স সলিউশন।"
              : "An open-source solution built to make academic documentation and cover page generation faster and easier for students."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {[
            {
              icon: Zap,
              title: isBengali ? "মুহূর্তেই জেনারেট" : "Instant Generate",
              desc: isBengali ? "সহজ ইন্টারফেসের মাধ্যমে কয়েক সেকেন্ডেই প্রফেশনাল কভার পেজ তৈরি করুন।" : "Create professional cover pages in seconds with an easy interface."
            },
            {
              icon: Globe,
              title: isBengali ? "সবার জন্য উন্মুক্ত" : "Free for All",
              desc: isBengali ? "কোনো রেজিস্ট্রেশন ছাড়াই প্রতিটি ফিচার লাইফটাইম ফ্রি ব্যবহারের সুবিধা।" : "Lifetime free access to every feature without any registration."
            },
            {
              icon: ShieldCheck,
              title: isBengali ? "সম্পূর্ণ নিরাপদ" : "Fully Secure",
              desc: isBengali ? "আপনার কোনো ব্যক্তিগত ডেটা আমাদের সার্ভারে সেভ করা হয় না।" : "Your personal data is never stored on our servers."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group p-8 bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-[2.5rem] text-center hover:border-[#d69e2e]/40 transition-all duration-500"
            >
              <item.icon className="w-10 h-10 text-[#d69e2e] mx-auto mb-5" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div variants={itemVariants} className="lg:col-span-7 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl flex flex-col justify-center">
            <h3 className="text-3xl font-black text-white mb-6">{isBengali ? 'ডেভেলপার' : 'The Developer'}</h3>
            <p className="text-slate-400 text-lg mb-8 font-light leading-relaxed">
              {isBengali 
                ? "আমি আল রিফাত সাব্বির। ডাব্লিউইউবি-র একজন শিক্ষার্থী এবং ফুল-স্ট্যাক ডেভেলপার। একাডেমিক কাজের চাপ কমাতে এবং ফরম্যাটিং ঝামেলা দূর করতে এই প্রজেক্টটি ডেভেলপ করা।" 
                : "I'm Al Rifat Sabbir. A student at WUB and a full-stack developer. Developed this project to reduce academic pressure and formatting hassles."}
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/alrifatsabbir" target="_blank" className="p-3.5 bg-white/5 hover:bg-[#d69e2e] hover:text-black rounded-xl transition-all duration-300"><Github size={20}/></a>
              <a href="https://linkedin.com/in/alrifatsabbir" target="_blank" className="p-3.5 bg-white/5 hover:bg-[#d69e2e] hover:text-black rounded-xl transition-all duration-300"><Linkedin size={20}/></a>
              <a href="mailto:alrifatsabbir@gmail.com" className="p-3.5 bg-white/5 hover:bg-[#d69e2e] hover:text-black rounded-xl transition-all duration-300"><Mail size={20}/></a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="col-span-2 p-10 rounded-[2.5rem] bg-[#d69e2e] text-black text-center flex flex-col justify-center shadow-2xl shadow-[#d69e2e]/20">
              <div className="text-5xl font-black tracking-tighter">2500+</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] mt-1 opacity-80">{isBengali ? 'সক্রিয় ব্যবহারকারী' : 'Active Users'}</div>
            </div>
            <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center">
              <div className="text-2xl font-black text-white">16+</div>
              <div className="text-[9px] uppercase font-bold tracking-widest text-[#d69e2e] mt-1">{isBengali ? 'টেমপ্লেট' : 'Templates'}</div>
            </div>
            <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center">
              <div className="text-2xl font-black text-white">7k+</div>
              <div className="text-[9px] uppercase font-bold tracking-widest text-[#d69e2e] mt-1">{isBengali ? 'জেনারেটেড' : 'Generated'}</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
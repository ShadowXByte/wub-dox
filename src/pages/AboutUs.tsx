import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Sparkles, Zap, Globe, ShieldCheck, ArrowRight, Coffee, Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ShinyButton from "@/components/animations/ShinyButton";

const About = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const isBengali = i18n.language === "bn";

  return (
    <div className={`relative min-h-screen overflow-hidden ${isBengali ? "font-bengali" : ""}`}>
      <div className="sr-only">
            <h1>WUB DOX - {isBengali ? "প্রফেশনাল কভার পেজ জেনারেটর" : "Professional Cover Page Generator"}</h1>
            <p>
                {isBengali 
                    ? "WUB DOX ব্যবহার করে অ্যাসাইনমেন্ট, ল্যাব রিপোর্ট এবং ফোরামের জন্য দ্রুত কভার পেজ তৈরি করুন। এটি একটি সম্পূর্ণ ফ্রি অনলাইন টুল যা শিক্ষার্থীদের কাজের সুবিধার্থে তৈরি করা হয়েছে।" 
                    : "WUB DOX is a powerful online tool to generate professional cover pages for assignments, lab reports, forums, and homework. Free to use with no registration required."}
            </p>
            <nav className="sr-only">
                {/* WUB DOX Internal Links */}
                <a href="/">Home</a>
                <a href="/templates">All Cover Page Templates</a>
                <a href="/editor/assignment">Assignment Cover Page Generator</a>
                <a href="/editor/labReport">University Lab Report Cover Page</a>
                <a href="/editor/forum">Academic Forum Presentation Cover Page</a>
                <a href="/editor/homework">Simple Homework Cover Page</a>
                <a href="/blogs">Blogs about WUB DOX</a>
                <a href="/contact">Contact Developer</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>   
                {/* Project & Developer Social Links */}
                <a href="https://github.com/alrifatsabbir/wub-dox" rel="external noopener noreferrer">View Source on GitHub</a>
                <a href="https://github.com/alrifatsabbir" rel="external noopener noreferrer">Developer GitHub Profile</a>
                <a href="https://linkedin.com/in/alrifatsabbir" rel="external noopener noreferrer">LinkedIn Profile</a>
                <a href="https://facebook.com/alrifatsabbir1" rel="external noopener noreferrer">Facebook Page</a>
                <a href="https://twitter.com/alrifatsabbir" rel="external noopener noreferrer">Twitter / X Profile</a>
                <a href="https://instagram.com/alrifatsabbir" rel="external noopener noreferrer">Instagram Profile</a>
                <a href="https://behance.net/alrifatsabbir" rel="external noopener noreferrer">Behance Portfolio</a>
                <a href="https://stackoverflow.com/users/24326530/alrifatsabbir" rel="external noopener noreferrer">Stack Overflow Profile</a>
                <a href="https://dribbble.com/alrifatsabbir" rel="external noopener noreferrer">Dribbble Design Portfolio</a>
                <a href="https://youtube.com/@alrifatsabbir" rel="external noopener noreferrer">YouTube Channel</a>
                <a href="https://medium.com/@alrifatsabbir" rel="external noopener noreferrer">Medium Blog</a>
                <a href="https://dev.to/alrifatsabbir" rel="external noopener noreferrer">DEV Community Profile</a>
                <a href="https://codepen.io/alrifatsabbir" rel="external noopener noreferrer">CodePen Profile</a>
                <a href="https://wa.me/+8801688525596" rel="external noopener noreferrer">Whatsapp</a>
            </nav>
            <p className='sr-only'>
                    {/* Garbage Search Optimization - GaSO*/}
                    <p>wubdox</p>
                    <p>wubbox</p>
                    <p>wubdocx</p>
                    <p>wubdocs</p>
                    <p>wub docx</p>
                    <p>wub docs</p>
                    <p>wub doc</p>
                    <p>wubdoc</p>
                    <p>WUB</p>
                    <p>WUBDOX</p>
                    <p>WUBDOCS</p>
                    <p>WUBDOCX</p>
                    <p>WUBBOX</p>
                    <p>WUB DOCS</p>
                    <p>WUB DOCX</p>
                    <p>WUB BOX</p>
                    <p>WUB DOC</p>
                    <p>WORLD UNIVERSITY OF BANGLADESH DOX</p>
                    <p>World University of Bangladesh Dox</p>
            </p>
        </div>


      {/* Exact Background from your design */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(120% 120% at 50% 0%, #020617 40%, #0a192f 100%)",
        }}
      />

      {/* Your Floating Glow Blobs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-96 h-96 bg-[#d69e2e]/10 blur-[100px] rounded-full top-10 left-[-100px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full bottom-0 right-[-120px]"
      />

      <div className="container mx-auto px-4 py-32 max-w-6xl relative z-10">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#ffd]"
          >
            <Sparkles className="w-4 h-4 text-[#d69e2e]" />
            {isBengali ? "আমাদের সম্পর্কে" : "About Us"}
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
            WUB <span className="text-[#d69e2e]">DOX</span>
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-light">
            {isBengali
              ? "এটি একজন শিক্ষার্থীর তৈরি একটি সমাধান, যা পরীক্ষার আগের চাপ কমানোর জন্য তৈরি হয়েছে।"
              : "It’s a student-built solution designed to eliminate last-minute academic stress."}
          </p>
        </motion.div>

        {/* GLOW CARDS - Professional Data */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: Zap,
              title: isBengali ? "সুপার ফাস্ট" : "Super Fast",
              desc: isBengali ? "মাত্র কয়েক সেকেন্ডে আপনার কভার পেজ রেডি।" : "Get your cover page ready in seconds."
            },
            {
              icon: Globe,
              title: isBengali ? "ওপেন সোর্স" : "Open Source",
              desc: isBengali ? "সবার জন্য উন্মুক্ত এবং সম্পূর্ণ ফ্রি প্ল্যাটফর্ম।" : "Open for everyone and completely free platform."
            },
            {
              icon: ShieldCheck,
              title: isBengali ? "নিরাপদ" : "Privacy First",
              desc: isBengali ? "আপনার ডেটা ১০০% নিরাপদ এবং লোকাল প্রসেসড।" : "Your data is 100% safe and processed locally."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#d69e2e]/20 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
              <div className="relative md:h-[240px] bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10 text-center hover:border-[#d69e2e]/30 transition duration-500">
                <item.icon className="w-12 h-12 text-[#d69e2e] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DEVELOPER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="p-10 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-4xl font-black text-white mb-6">{isBengali ? 'ডেভেলপার' : 'The Developer'}</h2>
            <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
              {isBengali 
                ? "আমি আল রিফাত সাব্বির। একজন ফুল-স্ট্যাক ডেভেলপার। WUB-এর শিক্ষার্থী হিসেবে আমি জানি কভার পেজ তৈরি করা কতটা ঝামেলার, তাই এই সলিউশনটি আপনাদের জন্য।" 
                : "I'm Al Rifat Sabbir. A full-stack developer. As a student at WUB, I know the struggle, so I built this solution for you."}
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/alrifatsabbir" target="_blank" className="p-4 bg-white/5 hover:bg-[#d69e2e] hover:text-black rounded-2xl transition-all"><Github size={24}/></a>
              <a href="https://linkedin.com/in/alrifatsabbir" target="_blank" className="p-4 bg-white/5 hover:bg-[#d69e2e] hover:text-black rounded-2xl transition-all"><Linkedin size={24}/></a>
              <a href="mailto:alrifatsabbir@gmail.com" className="p-4 bg-white/5 hover:bg-[#d69e2e] hover:text-black rounded-2xl transition-all"><Mail size={24}/></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-16 hover:animate-pulse hover:rotate-3 transition-all duration-500 cursor-pointer rounded-[2.5rem] bg-[#d69e2e] text-black text-center col-span-2 shadow-2xl shadow-[#d69e2e]/20">
              <div className="text-5xl font-black">2500+</div>
              <div className="text-xs uppercase font-bold tracking-widest mt-2">{isBengali ? 'সক্রিয় ব্যবহারকারী' : 'Active Users'}</div>
            </div>
            <div className="p-8 rounded-[2rem] hover:animate-pulse hover:rotate-3 transition-all duration-500 cursor-pointer bg-white/5 border border-white/10 text-center">
              <div className="text-3xl font-black text-white">16+</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#d69e2e] mt-1">{isBengali ? 'টেমপ্লেট' : 'Templates'}</div>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/5 border hover:animate-pulse transition-all duration-500 hover:rotate-3 cursor-pointer border-white/10 text-center">
              <div className="text-3xl font-black text-white">7k+</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#d69e2e] mt-1">{isBengali ? 'জেনারেটেড' : 'Generated'}</div>
            </div>
          </div>
        </motion.div>

        {/* STORY SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 py-24 px-10 md:px-20 rounded-[4rem] bg-white/5 border border-white/10 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 text-[#d69e2e] mb-8 font-black text-xs tracking-[0.3em] uppercase">
            <Coffee size={24} /> {isBengali ? 'পেছনের কথা' : 'The Story'}
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter">
            {isBengali ? "কিভাবে শুরু হলো?" : "How It Started?"}
          </h2>

          <div className="space-y-8 text-slate-300 text-xl font-light leading-relaxed max-w-4xl">
            <p>
              {isBengali
                ? "রাত ৪টা পর্যন্ত কোডিং শেষ করে ল্যাব রিপোর্টের কভার পেজ না বানিয়েই ঘুমিয়ে পড়ি। সকালে ল্যাব এক্সাম, আর সেই তাড়াহুড়ো থেকেই আইডিয়াটা মাথায় আসে।"
                : "After coding until 4 AM, I fell asleep without making my own lab cover page. Morning was the exam, and that rush sparked the idea."}
            </p>
            <div className="p-10 bg-[#d69e2e]/10 border-l-4 border-[#d69e2e] text-white italic rounded-r-[2rem]">
              {isBengali
                ? '"এমন একটা সাইট বানা যেখানে জাস্ট ডাটা দিলেই কভার পেজ হয়ে যাবে।" — বন্ধুদের এই আইডিয়া থেকেই জানুয়ারি ২০২৬-এ WUB DOX এর যাত্রা শুরু।'
                : '"Build something where we just input data and it works." — That suggestion from friends gave birth to WUB DOX in Jan 2026.'}
            </div>
          </div>
        </motion.div>

        {/* CTA SECTION - Using ShinyButton as requested */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight">
            {isBengali
              ? "এখনই নিজের কভার পেজ তৈরি করুন"
              : "Generate Your Cover Page Now"}
          </h2>

          <div className="flex justify-center">
            <ShinyButton onClick={() => navigate("/templates")}>
              <span className="flex items-center gap-2 px-2 py-2 text-lg font-bold">
                {isBengali ? "শুরু করুন" : "Get Started"}
                <ArrowRight className="w-5 h-5" />
              </span>
            </ShinyButton>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
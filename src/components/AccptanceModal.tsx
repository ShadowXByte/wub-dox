import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ExternalLink } from 'lucide-react';

const AcceptanceBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('wub-dox-accepted');
    if (!hasAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('wub-dox-accepted', 'true');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-[#0a192f]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1.5 bg-[#fbbf24]" />
              
              <div className="p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex p-2 rounded-lg bg-[#fbbf24]/10 mt-1">
                    <ShieldCheck className="w-5 h-5 text-[#fbbf24]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-bold text-lg leading-none">Legal Notice</h3>
                    <p className="text-slate-400 text-sm max-w-2xl">
                      By continuing to use <span className="text-[#fbbf24] font-medium">WUB DOX</span>, you agree to our 
                      <a href="/terms" className="text-white hover:underline mx-1">Terms</a>, 
                      <a href="/privacy" className="text-white hover:underline mx-1">Privacy Policy</a>, and 
                      <a href="/licenses" className="text-white hover:underline mx-1">License</a>.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={handleAccept}
                    className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-[#fbbf24] hover:bg-[#f59e0b] text-[#030816] font-bold text-sm transition-all active:scale-[0.98] whitespace-nowrap"
                  >
                    Accept & Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AcceptanceBanner;
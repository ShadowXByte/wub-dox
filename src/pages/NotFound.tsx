import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030816] px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#fbbf24]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center max-w-2xl">
        {/* Animated 404 Text */}
        <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 animate-pulse">
          404
        </h1>
        
        <div className="space-y-6 -mt-4 md:-mt-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            {isBengali ? "হারিয়ে গেছেন নাকি?" : "Lost in Space?"}
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            {isBengali 
              ? "আপনি যে পেজটি খুঁজছেন সেটি হয়তো ডিলিট হয়েছে অথবা ভুল লিঙ্কে এসেছেন।" 
              : "The page you're looking for doesn't exist or has been moved to another universe."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              asChild 
              className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold px-8 py-6 rounded-xl transition-all hover:scale-105 active:scale-95"
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                {isBengali ? "হোম পেজে ফিরুন" : "Back to Home"}
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-6 rounded-xl transition-all"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              {isBengali ? "পিছনে যান" : "Go Back"}
            </Button>
          </div>
        </div>

        {/* SEO friendly invisible content */}
        <div className="sr-only">
            <p>Error 404: Page Not Found. WUB DOX cover page generator helper.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
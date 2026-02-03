import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, Activity, FileCheck } from 'lucide-react';

interface VercelStatsProps {
  isBengali: boolean;
}

const VercelStats: React.FC<VercelStatsProps> = ({ isBengali }) => {
  const [data, setData] = useState({
    visitors: 0,
    views: 0,
    pdfCount: 0,
    loading: true,
    error: false
  });

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num.toString();
  };


  useEffect(() => {
    const fetchVercelData = async () => {
      try {
        const response = await fetch('/api/stats');
        const result = await response.json();
        
        // Applying 1/6 Logic for PDF Generation
        const estimatedPDFs = Math.floor((result.visitors || 0) / 6);

        setData({
          visitors: result.visitors || 0,
          views: result.views || 0,
          pdfCount: estimatedPDFs,
          loading: false,
          error: false
        });
      } catch (err) {
        setData(prev => ({ ...prev, loading: false, error: true }));
      }
    };
    fetchVercelData();
  }, []);

/*
  useEffect(() => {
    // Localhost testing with 33k+ visitors
    const fakeVisitors = 510;
    const fakeViews = 1250000;
    
    // Applying 1/6 Logic
    const estimatedPDFs = Math.floor(fakeVisitors / 6);

    setData({
      visitors: fakeVisitors,
      views: fakeViews,
      pdfCount: estimatedPDFs,
      loading: false,
      error: false
    });
  }, []);
*/
  const statsConfig = [
    { 
      label: isBengali ? 'মোট ভিজিটর' : 'Total Visitors', 
      value: data.visitors, 
      icon: Users,
      color: 'from-blue-500 to-indigo-600' 
    },
    { 
      label: isBengali ? 'পিডিএফ তৈরি' : 'PDFs Generated', 
      value: data.pdfCount, 
      icon: FileCheck,
      color: 'from-amber-500 to-orange-600' 
    },
    { 
      label: isBengali ? 'পেজ ভিউ' : 'Page Views', 
      value: data.views, 
      icon: Eye,
      color: 'from-purple-500 to-pink-600' 
    },
    { 
      label: isBengali ? 'অবস্থা' : 'Status', 
      value: 'Live', 
      icon: Activity,
      color: 'from-emerald-500 to-teal-600' 
    }
  ];

  if (data.error) return null;

  return (
    <section className="py-20 px-4 relative z-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsConfig.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1, 
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center group overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${stat.color}`} />
              
              <stat.icon className="w-6 h-6 mx-auto mb-4 text-zinc-500 group-hover:text-white transition-colors duration-500" />
              
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">
                {stat.label}
              </p>

              {data.loading ? (
                <div className="h-10 w-24 bg-white/10 animate-pulse mx-auto rounded-xl" />
              ) : (
                <h3 className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {typeof stat.value === 'number' ? formatNumber(stat.value) : stat.value}
                </h3>
              )}

              <div className="mt-6 flex items-center gap-2">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "circOut" }}
                    className={`h-full bg-gradient-to-r ${stat.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VercelStats;
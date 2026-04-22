import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 2 second fake progress loading simulation with easing
    const duration = 2000;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      // Easing function for progress (easeOutQuart) to start fast and slow down
      const x = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - x, 4);
      
      setProgress(Math.min(easeProgress * 100, 100));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-neutral-950 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", // Slide the entire dark screen up to reveal the website like a curtain
        opacity: 0,
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } // Custom easing for premium feel
      }}
    >
      {/* Background Ambience / Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, filter: "blur(15px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-16 relative overflow-hidden px-8 py-4"
        >
          {/* Use the large variant of the requested logo */}
          <img 
            src="https://web2.itnahodinu.cz/delphia/logodelphia.png" 
            alt="Delphia" 
            className="h-28 md:h-40 object-contain drop-shadow-[0_0_25px_rgba(255,165,0,0.25)] relative z-10"
          />
          
          {/* Subtle light sweep effect running across the logo */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-20"
            initial={{ x: "-150%" }}
            animate={{ x: "150%" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
          />
        </motion.div>

        {/* Loading Progress Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-64 max-w-[80vw]"
        >
          {/* Labels */}
          <div className="flex justify-between items-end mb-3 text-neutral-400 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em]">
            <span>Inicializace</span>
            <span className="text-orange-500 font-bold">{Math.round(progress)}%</span>
          </div>
          
          {/* Track */}
          <div className="h-[2px] w-full bg-neutral-800/50 rounded-full overflow-hidden relative">
            {/* Fill */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.8)]"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

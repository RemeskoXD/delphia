import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden font-sans text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[12rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none">
            404
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="-mt-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-6">Tato stránka neexistuje.</h2>
          <p className="text-neutral-400 text-lg md:text-xl font-medium mb-12 max-w-lg mx-auto">
            Odkaz, na který jste klikli, je zřejmě neplatný, nebo byla stránka přesunuta v rámci probíhající modernizace sítě.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-950 font-bold rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <ArrowLeft className="w-5 h-5 mr-3" /> Zpět na hlavní stranu
            </Link>
            <Link 
              to="/kontakty" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors"
            >
              Kontaktovat podporu
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Abstract Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
    </div>
  );
}

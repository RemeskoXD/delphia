import { Link } from 'react-router-dom';
import { Box, CheckCircle2, ArrowRight, Fullscreen, Shield, Ruler } from 'lucide-react';
import { motion } from 'motion/react';

export default function ThreeDAudit() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-neutral-950 text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="3D Audit budov" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/60 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 text-neutral-300 text-xs font-bold tracking-widest uppercase mb-8 border border-white/10 backdrop-blur-xl">
              Digitalizace Nemovitostí
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              3D Audit <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">a Pasportizace.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-medium">
              Využijte laserové skenování LiDAR pro tvorbu dokonalých digitálních dvojčat (Digital Twins) vašich komplexů pro BIM a efektivní facility management.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl font-black text-neutral-950 mb-8 tracking-tighter">Budoucnost správy budov je digitální.</h2>
            <p className="text-xl text-neutral-500 font-medium leading-relaxed mb-10">
              Přesné stavební zaměření komplexních a starých budov pomocí archaických metod již nestačí. Aplikujeme 3D laserové skripty nové generace, které dokážou v reálném čase digitalizovat masivní objekty.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-50 p-2 rounded-xl mr-5 shrink-0 border border-orange-100">
                    <Fullscreen className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-neutral-950 tracking-tight mb-1">Mračna bodů (Point Clouds)</h4>
                    <p className="text-neutral-500 font-medium">Skenování s přesností na pár milimetrů, zachycující každý stínový detail, odhalující stavební nedokonalosti a chybějící prvky.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-50 p-2 rounded-xl mr-5 shrink-0 border border-orange-100">
                    <Box className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-neutral-950 tracking-tight mb-1">Tvorba BIM Modulů</h4>
                    <p className="text-neutral-500 font-medium">Export nasnímaných a filtrovaných dat do plně strukturovaného softwaru Revit nebo Archicad a pasportizace prvků.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-50 p-2 rounded-xl mr-5 shrink-0 border border-orange-100">
                    <Ruler className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-neutral-950 tracking-tight mb-1">Bleskové Zaměření</h4>
                    <p className="text-neutral-500 font-medium">Provedení pasportizace u komplexů nad 1000m² trvá zlomový čas oproti konvenčnímu rýsování v terénu.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-neutral-100 rounded-[3rem] transform translate-x-4 translate-y-4 opacity-50"></div>
            <div className="bg-neutral-950 p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full"></div>
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-lg relative z-10 border border-neutral-800">
                    <Box className="w-12 h-12 text-neutral-950" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight relative z-10">Mějte naprostý přehled.</h3>
                <p className="text-neutral-400 font-medium mb-12 relative z-10 text-lg">
                  Posuňte své stavební a facility portfolio na bezchybný digitální řád. Zajišťujeme skenování pro malé sklady i objemné nemocnice.
                </p>
                <Link to="/kontakty" className="w-full flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-orange-600/20 text-lg group active:scale-[0.98] relative z-10">
                  Poptat 3D Skenování
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}

import { CheckCircle2, FileText, Clock, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function OtherBuildings() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <Link to="/energeticke-stitky" className="inline-flex items-center text-neutral-500 hover:text-orange-600 font-bold transition-colors group">
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Zpět na přehled
        </Link>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase mb-6 border border-orange-100">
            Kategorie
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-950 mb-8 tracking-tighter">Energetické štítky pro <br className="hidden md:block"/>ostatní budovy.</h2>
          <p className="text-xl text-neutral-500 mb-10 font-medium leading-relaxed">
            Zajišťujeme energetickou certifikaci a posudky pro komerční, masivní administrativní, průmyslové a veřejné budovy a celky.
          </p>
          
          <h3 className="text-2xl font-black text-neutral-950 mt-12 mb-6 tracking-tight">Pro jaké budovy zpracováváme PENB?</h3>
          <ul className="space-y-4 mb-12">
            {[
              'Kancelářské a administrativní budovy',
              'Obchodní centra a retailové prodejny',
              'Hotely, resorty a ubytovací zařízení',
              'Školy, kampusy a vzdělávací instituce',
              'Nemocnice a zdravotnická zařízení',
              'Sportovní haly a arény',
              'Průmyslové a logistické haly (vytápěné části)'
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="bg-orange-50 p-2 rounded-xl mr-5 shrink-0 border border-orange-100">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-neutral-700 font-medium text-lg pt-1">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-neutral-50 rounded-[2.5rem] p-10 border border-neutral-200">
            <h3 className="text-2xl font-black text-neutral-950 mb-4 tracking-tight">Povinnost vyvěšení PENB</h3>
            <p className="text-neutral-500 font-medium mb-0">
              U budov užívaných orgánem veřejné moci (s celkovou energeticky vztažnou plochou větší než 250 m²) a u budov s plochou nad 500 m², které jsou často navštěvované veřejností, je striktní zákonná povinnost umístit průkaz na viditelném místě.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="bg-neutral-950 rounded-[2.5rem] p-10 shadow-2xl sticky top-32 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full"></div>
            <h3 className="text-3xl font-black text-white mb-2 tracking-tight relative z-10">Tarif</h3>
            <p className="text-neutral-400 font-medium mb-10 relative z-10">Cenové podmínky zpracování</p>
            
            <div className="space-y-6 mb-12 relative z-10">
              <div className="flex items-center border-b border-white/10 pb-6">
                <div className="bg-white/10 p-3 rounded-2xl mr-5 border border-white/10">
                  <FileText className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 font-bold uppercase tracking-wider mb-1">Cena</p>
                  <p className="text-3xl font-black text-white flex items-baseline">
                    Individuální <span className="text-base font-medium text-neutral-500 ml-2">dle parametrů</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center border-b border-white/10 pb-6">
                <div className="bg-white/10 p-3 rounded-2xl mr-5 border border-white/10">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 font-bold uppercase tracking-wider mb-1">Doba dodání</p>
                  <p className="text-2xl font-bold text-white">Dle dohody</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-2xl mr-5 border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 font-bold uppercase tracking-wider mb-1">Legislativní platnost</p>
                  <p className="text-2xl font-bold text-white">10 let</p>
                </div>
              </div>
            </div>

            <Link to="/kontakty" className="flex items-center justify-center w-full bg-orange-600 hover:bg-orange-500 text-white text-center font-bold py-5 rounded-2xl transition-all shadow-xl shadow-orange-600/20 group active:scale-[0.98] text-lg relative z-10">
              Vyplnit poptávku <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

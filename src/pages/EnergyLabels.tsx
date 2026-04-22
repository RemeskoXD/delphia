import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Building, Building2, ArrowRight, FileText, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function EnergyLabels() {
  const location = useLocation();
  const isBaseRoute = location.pathname === '/energeticke-stitky';

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative bg-neutral-950 text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="Energetické štítky" 
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
              Certifikace & PENB
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Energetické <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Štítky (PENB).</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-medium">
              Průkaz energetické náročnosti budovy (PENB) je povinný při kolaudaci, prodeji či pronájmu. Zpracujeme ho expresně a v prémiové kvalitě.
            </p>
          </motion.div>
        </div>
      </section>

      {isBaseRoute ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          
          {/* Intro & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 items-center">
            
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
            >
              <h2 className="text-4xl font-black text-neutral-950 mb-8 tracking-tighter">Proč legislativa vyžaduje energetický štítek?</h2>
              <p className="text-lg text-neutral-500 mb-8 leading-relaxed font-medium">
                PENB sofistikovaně zařazuje budovu do třídy (A až G) a poskytuje absolutní přehled o spotřebě energie. Jde o tvrdý zákonný požadavek pro realitní trh a stavební autority. Bez PENB se vystavujete riziku pokut.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-xl mr-5 shrink-0 border border-orange-100">
                    <CheckCircle2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-neutral-700 font-medium text-lg pt-1"><strong>Kolaudace novostavby</strong> nebo větší rekonstrukce.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-xl mr-5 shrink-0 border border-orange-100">
                    <CheckCircle2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-neutral-700 font-medium text-lg pt-1"><strong>Prodej nemovitosti</strong> (musí být striktně součástí inzerce).</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-xl mr-5 shrink-0 border border-orange-100">
                    <CheckCircle2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-neutral-700 font-medium text-lg pt-1"><strong>Pronájem</strong> domu nebo bytu pro ochranu nájemníka.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-xl mr-5 shrink-0 border border-orange-100">
                    <CheckCircle2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-neutral-700 font-medium text-lg pt-1"><strong>Žádost o dotaci</strong> (Nová zelená úsporám).</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-neutral-100 rounded-[3rem] transform translate-x-4 translate-y-4 opacity-50"></div>
              <div className="bg-neutral-950 p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full"></div>
                <h3 className="text-3xl font-black text-white mb-10 tracking-tight">Proč Delphia Czech?</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-2xl mr-5 shrink-0 border border-white/10">
                      <Clock className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-1 tracking-tight">Expresní dodání</h4>
                      <p className="text-neutral-400 font-medium">Bleskové zpracování dokumentace bez dalších příplatků.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-2xl mr-5 shrink-0 border border-white/10">
                      <ShieldCheck className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-1 tracking-tight">Cenová garance</h4>
                      <p className="text-neutral-400 font-medium">Garantujeme prémiovou kvalitu za nejlepší tržní smluvní ceny.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-2xl mr-5 shrink-0 border border-white/10">
                      <FileText className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-1 tracking-tight">Právní imunita</h4>
                      <p className="text-neutral-400 font-medium">Autorizované výstupy zaručující 100% průchodnost byrokracií.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-950 mb-6 tracking-tighter">Vyberte kategorii budovy</h2>
            <p className="text-xl text-neutral-500 font-medium">Objevte specifické požadavky a ceny na míru vašemu portfoliu.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {/* Category 1 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Link to="/energeticke-stitky/rodinne-domy" className="group block bg-neutral-50 rounded-[2.5rem] p-10 border border-neutral-200 hover:bg-neutral-950 hover:border-neutral-950 transition-colors duration-500 h-full">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-neutral-200 group-hover:bg-neutral-800 group-hover:border-neutral-700 transition-colors">
                    <HomeIcon className="w-8 h-8 text-neutral-700 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-neutral-950 mb-4 group-hover:text-white tracking-tight transition-colors">Rodinné domy</h3>
                <p className="text-neutral-500 mb-8 font-medium leading-relaxed group-hover:text-neutral-400 transition-colors">
                    Zpracujeme PENB pro váš rodinný dům rychle a spolehlivě. Nutné pro kolaudaci novostavby a prodej.
                </p>
                <div className="flex items-center font-bold text-neutral-950 group-hover:text-amber-500 transition-colors">
                    Zobrazit detaily a ceník <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
                </Link>
            </motion.div>

            {/* Category 2 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <Link to="/energeticke-stitky/bytove-domy" className="group block bg-neutral-50 rounded-[2.5rem] p-10 border border-neutral-200 hover:bg-neutral-950 hover:border-neutral-950 transition-colors duration-500 h-full">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-neutral-200 group-hover:bg-neutral-800 group-hover:border-neutral-700 transition-colors">
                    <Building className="w-8 h-8 text-neutral-700 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-neutral-950 mb-4 group-hover:text-white tracking-tight transition-colors">Bytové domy</h3>
                <p className="text-neutral-500 mb-8 font-medium leading-relaxed group-hover:text-neutral-400 transition-colors">
                    Komplexní energetické hodnocení primárně pro SVJ a bytová družstva. Nezbytné pro žádosti o dotace.
                </p>
                <div className="flex items-center font-bold text-neutral-950 group-hover:text-amber-500 transition-colors">
                    Zobrazit detaily a ceník <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
                </Link>
            </motion.div>

            {/* Category 3 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Link to="/energeticke-stitky/ostatni-budovy" className="group block bg-neutral-50 rounded-[2.5rem] p-10 border border-neutral-200 hover:bg-neutral-950 hover:border-neutral-950 transition-colors duration-500 h-full">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-neutral-200 group-hover:bg-neutral-800 group-hover:border-neutral-700 transition-colors">
                    <Building2 className="w-8 h-8 text-neutral-700 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-neutral-950 mb-4 group-hover:text-white tracking-tight transition-colors">Ostatní budovy</h3>
                <p className="text-neutral-500 mb-8 font-medium leading-relaxed group-hover:text-neutral-400 transition-colors">
                    Certifikace pro komerční, masivní administrativní, průmyslové a veřejné budovy.
                </p>
                <div className="flex items-center font-bold text-neutral-950 group-hover:text-amber-500 transition-colors">
                    Zobrazit detaily a ceník <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
                </Link>
            </motion.div>
          </div>

          {/* Jak to funguje */}
          <div className="bg-neutral-950 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://delphia.sk/images/breadcrumb/Header1920new4.jpg')] opacity-10 mix-blend-overlay object-cover w-full h-full"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full"></div>
            
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-16 text-center tracking-tighter">Jak si objednat energetický štítek?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-neutral-800"></div>
                
                <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto bg-orange-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 shadow-xl shadow-orange-600/30 transform rotate-3">1</div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">Objednávka</h3>
                    <p className="text-neutral-400 font-medium">Vyberte typ budovy a kontaktujte nás přes formulář nebo telefonicky.</p>
                </div>
                
                <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto bg-neutral-800 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 border border-neutral-700 transform -rotate-3 text-neutral-400">2</div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">Podklady</h3>
                    <p className="text-neutral-400 font-medium">Zašlete nám projektovou dokumentaci. Pokud ji nemáte, zajistíme zaměření.</p>
                </div>
                
                <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto bg-neutral-800 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 border border-neutral-700 transform rotate-3 text-neutral-400">3</div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">Zpracování</h3>
                    <p className="text-neutral-400 font-medium">Do 48 hodin od dodání kompletních podkladů zpracujeme váš architektonický PENB.</p>
                </div>
                
                <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto bg-neutral-800 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 border border-neutral-700 transform -rotate-3 text-neutral-400">4</div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">Předání</h3>
                    <p className="text-neutral-400 font-medium">Certifikát vám zašleme elektronicky s autorizačním kódem i poštou.</p>
                </div>
                </div>
                <div className="mt-20 text-center">
                <Link to="/kontakty" className="inline-flex items-center justify-center bg-white text-neutral-950 px-10 py-5 rounded-full font-bold transition-all shadow-xl hover:scale-105 active:scale-95 text-lg">
                    Nezávazně poptat <ArrowRight className="ml-3 w-6 h-6 text-orange-600" />
                </Link>
                </div>
            </div>
          </div>

        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

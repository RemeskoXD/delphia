import { CheckCircle2, ChevronRight, Calculator, Home, Building, Factory } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-neutral-950 text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="Ceník služeb" 
            className="w-full h-full object-cover opacity-50 mix-blend-screen"
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
              Transparentní ceník
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Investice do <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">vašich úspor.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-medium">
              Transparentní ceny za profesionální energetické služby. Bez skrytých poplatků, bez nesmyslných příplatků za rychlost. Garantujeme nejlepší poměr cena/výkon v ČR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="py-24 bg-neutral-50 relative border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-neutral-950 tracking-tighter">Základní ceník PENB (vč. 21% DPH)</h2>
                <p className="text-neutral-500 font-medium mt-4">Orientační ceny nejžádanějších certifikátů.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Standard Tier */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] p-10 border border-neutral-200 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-300 flex flex-col"
                >
                    <div className="bg-neutral-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                        <Home className="w-6 h-6 text-neutral-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-950 mb-2 tracking-tight">Bytové jednotky & Malé RD</h3>
                    <p className="text-neutral-500 font-medium text-sm mb-6">Ideální pro prodej a pronájem bytu či chalupy.</p>
                    
                    <div className="text-4xl font-black text-neutral-950 mb-8">od 2 900 <span className="text-lg text-neutral-400 font-medium">Kč</span></div>
                    
                    <ul className="space-y-4 mb-10 flex-1">
                        <li className="flex items-start text-sm text-neutral-600 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" /> Zpracování do 48h</li>
                        <li className="flex items-start text-sm text-neutral-600 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" /> Digitální verze i tisk</li>
                        <li className="flex items-start text-sm text-neutral-600 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" /> 100% jistota u úřadů</li>
                    </ul>
                    
                    <Link to="/kontakty" className="w-full py-4 px-6 rounded-full font-bold text-center border border-neutral-200 hover:bg-neutral-950 hover:text-white transition-colors duration-300">Poptat štítek</Link>
                </motion.div>

                {/* Popular Tier */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-neutral-950 text-white rounded-[2rem] p-10 border border-neutral-800 shadow-2xl relative flex flex-col transform md:-translate-y-4"
                >
                    <div className="absolute -top-4 inset-x-0 flex justify-center">
                        <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">Nejčastější</span>
                    </div>
                    <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                        <Home className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Větší Rodinné domy</h3>
                    <p className="text-neutral-400 font-medium text-sm mb-6">Standardní novostavby, dotace, rekonstrukce.</p>
                    
                    <div className="text-4xl font-black text-white mb-8">4 990 <span className="text-lg text-neutral-500 font-medium">Kč</span></div>
                    
                    <ul className="space-y-4 mb-10 flex-1">
                        <li className="flex items-start text-sm text-neutral-300 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" /> Komplexní zhodnocení</li>
                        <li className="flex items-start text-sm text-neutral-300 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" /> Doporučení pro úspory</li>
                        <li className="flex items-start text-sm text-neutral-300 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" /> Předání autorizovanou osobou</li>
                        <li className="flex items-start text-sm text-neutral-300 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" /> Odeslání na do 48h (při dodání dat)</li>
                    </ul>
                    
                    <Link to="/kontakty" className="w-full py-4 px-6 rounded-full font-bold text-center bg-orange-600 hover:bg-orange-500 text-white transition-colors duration-300">Poptat štítek</Link>
                </motion.div>

                {/* Premium Tier */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-[2rem] p-10 border border-neutral-200 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-300 flex flex-col"
                >
                    <div className="bg-neutral-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                        <Building className="w-6 h-6 text-neutral-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-950 mb-2 tracking-tight">Bytové domy (do 15 bytů)</h3>
                    <p className="text-neutral-500 font-medium text-sm mb-6">SVJ, bytová družstva, velcí majitelé.</p>
                    
                    <div className="text-4xl font-black text-neutral-950 mb-8">od 12 500 <span className="text-lg text-neutral-400 font-medium">Kč</span></div>
                    
                    <ul className="space-y-4 mb-10 flex-1">
                        <li className="flex items-start text-sm text-neutral-600 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" /> Analýza pro SVJ a družstva</li>
                        <li className="flex items-start text-sm text-neutral-600 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" /> Variantní posouzení zateplení</li>
                        <li className="flex items-start text-sm text-neutral-600 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" /> Osobní konzultace výstupů</li>
                    </ul>
                    
                    <Link to="/kontakty" className="w-full py-4 px-6 rounded-full font-bold text-center border border-neutral-200 hover:bg-neutral-950 hover:text-white transition-colors duration-300">Poptat štítek</Link>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Complex Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h2 className="text-3xl font-black text-neutral-950 tracking-tighter">Korporátní a speciální služby</h2>
            </div>
            
            <div className="space-y-4">
                <div className="group flex items-center justify-between p-6 rounded-2xl border border-neutral-100 hover:border-orange-500/50 hover:bg-orange-50/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mr-6 group-hover:bg-white group-hover:shadow-sm">
                            <Building className="w-5 h-5 text-neutral-500 group-hover:text-orange-600 transition-colors" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-neutral-950">Velký panelový dům (15+ bytů)</h4>
                            <p className="text-sm text-neutral-500 font-medium mt-1">Komplexní posouzení vč. doporučení na dotace.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-xl font-black text-neutral-950 mr-4">od 18 000 Kč</span>
                        <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-orange-500 transition-colors" />
                    </div>
                </div>

                <div className="group flex items-center justify-between p-6 rounded-2xl border border-neutral-100 hover:border-orange-500/50 hover:bg-orange-50/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mr-6 group-hover:bg-white group-hover:shadow-sm">
                            <Factory className="w-5 h-5 text-neutral-500 group-hover:text-orange-600 transition-colors" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-neutral-950">Komerční objekty & ESG</h4>
                            <p className="text-sm text-neutral-500 font-medium mt-1">Administrativní budovy, haly, továrny. Carbon footprint.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-xl font-black text-neutral-950 mr-4">Individuálně</span>
                        <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-orange-500 transition-colors" />
                    </div>
                </div>
                
                <div className="group flex items-center justify-between p-6 rounded-2xl border border-neutral-100 hover:border-orange-500/50 hover:bg-orange-50/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mr-6 group-hover:bg-white group-hover:shadow-sm">
                            <Calculator className="w-5 h-5 text-neutral-500 group-hover:text-orange-600 transition-colors" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-neutral-950">AI Audit & 3D Pasportizace</h4>
                            <p className="text-sm text-neutral-500 font-medium mt-1">Legislativní zajištění dle EU AI Act a přesné skenování.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-xl font-black text-neutral-950 mr-4">Dle rozsahu</span>
                        <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-orange-500 transition-colors" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="bg-neutral-950 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-transparent mix-blend-overlay"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-24 text-center">
             <div className="inline-flex items-center justify-center w-20 h-20 bg-white/5 border border-white/10 rounded-3xl mb-8">
                 <Calculator className="w-10 h-10 text-orange-400" />
             </div>
             <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Potřebujete přesnou nabídku?</h2>
             <p className="text-xl text-neutral-400 mb-10 font-medium">Napište nám detaily své nemovitosti. Vypočítáme přesnou cenu a obratem vám pošleme nabídku.</p>
             <Link to="/kontakty" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-full font-bold text-sm tracking-wide uppercase hover:bg-orange-500 shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_50px_rgba(234,88,12,0.5)] transition-all duration-300">
                Přejít na kontakty <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
        </div>
      </section>

    </div>
  );
}

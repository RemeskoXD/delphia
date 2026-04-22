import { BarChart3, Leaf, Globe2, TrendingDown, ChevronRight, ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function ESG() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-neutral-950 text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="CO2 a ESG Reporting" 
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
              Pro korporace & Podniky
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              CO2 a ESG <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Reporting.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-medium">
              Připravte svou firmu na novou éru udržitelnosti. Komplexní měření uhlíkové stopy, ESG strategie a plnohodnotný compliance reporting dle předpisů EU.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Intro to ESG */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-neutral-100 rounded-[3rem] transform translate-x-4 translate-y-4 opacity-50"></div>
            <div className="bg-neutral-950 p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full"></div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Proč řešit ESG a CO2?</h3>
                <ul className="space-y-6 text-neutral-300 font-medium">
                <li className="flex items-center"><TrendingDown className="w-6 h-6 text-orange-500 mr-4 shrink-0" /> Splnění tvrdých legislativních požadavků (CSRD)</li>
                <li className="flex items-center"><TrendingDown className="w-6 h-6 text-orange-500 mr-4 shrink-0" /> Diametrálně lepší přístup k financování (Zelené úvěry)</li>
                <li className="flex items-center"><TrendingDown className="w-6 h-6 text-orange-500 mr-4 shrink-0" /> Vyšší konkurenceschopnost na B2B trhu</li>
                <li className="flex items-center"><TrendingDown className="w-6 h-6 text-orange-500 mr-4 shrink-0" /> Tlak dodavatelského řetězce nadnárodních gigantů</li>
                </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl font-black text-neutral-950 mb-8 tracking-tighter">Co je vůbec ESG?</h2>
            <p className="text-xl text-neutral-500 font-medium leading-relaxed mb-12">
              Zkratka ESG představuje tři klíčové pilíře, podle kterých globální trh, investoři a státy hodnotí udržitelnost firem. Je to nový standard, který určuje hodnotu vaší společnosti.
            </p>
            
            <div className="space-y-6">
              <div className="group flex items-start p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-white p-3 rounded-2xl mr-6 border border-neutral-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <strong className="block text-xl text-neutral-950 font-bold mb-2 tracking-tight">Environmental (Životní prostředí)</strong>
                  <span className="text-neutral-500 font-medium line-clamp-2">Přímá i nepřímá uhlíková stopa, nakládání s odpady, energetická efektivita budov a vliv na biodiverzitu.</span>
                </div>
              </div>

              <div className="group flex items-start p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-white p-3 rounded-2xl mr-6 border border-neutral-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Globe2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <strong className="block text-xl text-neutral-950 font-bold mb-2 tracking-tight">Social (Společnost)</strong>
                  <span className="text-neutral-500 font-medium line-clamp-2">Pracovní práva, bezpečnost práce, vztah s místními komunitami, diverzita a ochrana dat zaměstnanců.</span>
                </div>
              </div>

              <div className="group flex items-start p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-white p-3 rounded-2xl mr-6 border border-neutral-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <strong className="block text-xl text-neutral-950 font-bold mb-2 tracking-tight">Governance (Zodpovědné řízení)</strong>
                  <span className="text-neutral-500 font-medium line-clamp-2">Struktura vlastnictví, transparentnost výkonného vedení, odměňování a protikorupční etika podnikání.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Services Bento Grid */}
        <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-neutral-950 mb-6 tracking-tighter">Jak vám přesně pomůžeme</h2>
                <p className="text-xl text-neutral-500 font-medium">Od prvotního sběru dat až po finální auditovatelný dokument zaručujeme plynulý průchod legislativou bez zbytečného byrokratického stresu.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-200 group hover:bg-neutral-950 hover:border-neutral-950 transition-colors duration-500"
                >
                    <div className="w-16 h-16 bg-white rounded-2xl border border-neutral-200 flex items-center justify-center mb-8 group-hover:bg-neutral-800 group-hover:border-neutral-700 transition-colors">
                        <BarChart3 className="w-8 h-8 text-neutral-700 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <h4 className="text-2xl font-black text-neutral-950 mb-4 tracking-tight group-hover:text-white transition-colors">1. Výpočet uhlíkové stopy</h4>
                    <p className="text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-400 transition-colors">
                        Změříme vaše emise Scope 1, 2 a 3 přesně podle striktního mezinárodního standardu GHG Protocol. Zajistíme 100% přesnost vstupních i výstupních dat.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-200 group hover:bg-neutral-950 hover:border-neutral-950 transition-colors duration-500"
                >
                    <div className="w-16 h-16 bg-white rounded-2xl border border-neutral-200 flex items-center justify-center mb-8 group-hover:bg-neutral-800 group-hover:border-neutral-700 transition-colors">
                        <Target className="w-8 h-8 text-neutral-700 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <h4 className="text-2xl font-black text-neutral-950 mb-4 tracking-tight group-hover:text-white transition-colors">2. Architektura strategie</h4>
                    <p className="text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-400 transition-colors">
                        Samotné číslo nestačí. Vytvoříme plnohodnotný akční plán pro dekarbonizaci a zlepšení vašeho ESG skóre tak, aby dával finanční smysl i managementu.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-200 group hover:bg-neutral-950 hover:border-neutral-950 transition-colors duration-500"
                >
                    <div className="w-16 h-16 bg-white rounded-2xl border border-neutral-200 flex items-center justify-center mb-8 group-hover:bg-neutral-800 group-hover:border-neutral-700 transition-colors">
                        <FileText className="w-8 h-8 text-neutral-700 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <h4 className="text-2xl font-black text-neutral-950 mb-4 tracking-tight group-hover:text-white transition-colors">3. Nefinanční reporting</h4>
                    <p className="text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-400 transition-colors">
                        Výstupní dokumentace. Vygenerujeme neprůstřelný report připravený pro auditory, vázaný na legislativu CSRD a požadavky ESRS.
                    </p>
                </motion.div>
            </div>
        </div>
      </section>
      
      {/* Mini CTA */}
      <section className="bg-neutral-950 border-t border-neutral-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://delphia.sk/images/breadcrumb/Header1920new4.jpg')] opacity-30 mix-blend-overlay object-cover w-full h-full"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">Začněte řešit ESG včas.</h2>
            <p className="text-xl text-neutral-400 mb-10 font-medium">Nedovolte, aby vaši firmu zbrzdila chybějící byrokracie v dodavatelském řetězci. Objednejte si konzultaci s naším expertem.</p>
            <Link to="/kontakty" className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase hover:bg-orange-500 transition-all duration-300">
                Poptat konzultaci ESG <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
        </div>
      </section>

    </div>
  );
}

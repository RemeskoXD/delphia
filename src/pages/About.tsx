import { Users, Target, Award, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-neutral-950 text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="O společnosti Delphia Czech" 
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
              Příběh naší společnosti
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Kde se setkává <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">inženýrství a vize.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-medium">
              Jsme přední franšízou úspěšné slovenské společnosti Delphia. Od roku 2008 definujeme standardy v energetickém auditu a certifikacích budov.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Premium Redesign */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl font-black text-neutral-950 mb-8 tracking-tighter leading-tight">
              Spojení sil.<br/>
              Zažité know-how.
            </h2>
            <div className="space-y-6 text-lg text-neutral-500 font-medium leading-relaxed mb-10">
              <p>
                Začali jsme s jednoduchým cílem: vnést absolutní profesionalitu a rychlost do segmentu, kde klienti často naráželi na pomalost a složitost nařízení.
              </p>
              <p>
                Navazujeme na 17 let tvrdé práce a tisíce vydaných certifikátů společnosti Delphia SK. Nyní naši autorizovaní specialisté a procesy pomáhají na českém trhu nadnárodním korporacím i běžným domácnostem.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center text-neutral-950 font-bold border-b border-neutral-100 pb-4">
                <ShieldCheck className="w-6 h-6 text-orange-600 mr-4" />
                Garantovaná kvalita obhajitelná před zákonem
              </div>
              <div className="flex items-center text-neutral-950 font-bold border-b border-neutral-100 pb-4">
                <Zap className="w-6 h-6 text-orange-600 mr-4" />
                Extrémní rychlost doručení bez kompromisů
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute inset-0 bg-orange-600 rounded-[3rem] transform translate-x-6 translate-y-6 opacity-10"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Leadership" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/20 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>

        {/* Pillars / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
             { icon: Target, title: "Naše mise", desc: "Zefektivňovat český svět nemovitostí. Snížit uhlíkovou stopu, ušetřit kapitál a nabídnout legislativní záštitu díky bezkonkurenční technické znalosti." },
             { icon: Users, title: "Elitní tým", desc: "Jsme úzce specializovaní. Tým netvoří žádní teoretici, ale zkušení inženýři, auditoři a odborníci z realitního developmentu chápající reálné potřeby trhu." },
             { icon: Award, title: "Závazek Excelence", desc: "Naší největší vizitkou jsou stovky vracejících se klientů z řad realitních kanceláří i podniků, pro které jsme partnerem prvotní volby." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="bg-neutral-50 p-10 rounded-[2rem] border border-neutral-200/60 hover:shadow-xl hover:shadow-neutral-200 transition-all duration-500 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-neutral-100 rounded-2xl mb-8 shadow-sm group-hover:bg-orange-600 transition-colors duration-500">
                <item.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-neutral-950 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-neutral-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Executive Board */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-950 mb-6 tracking-tighter">
              Kdo za námi stojí
            </h2>
            <p className="text-xl text-neutral-500 font-medium">
              Vedení spojující zkušenosti z vrcholného bankovnictví a velkého realitního developmentu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            
            {/* Jaroslav Čech */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 border border-neutral-200/60 shadow-xl shadow-neutral-200/50 flex flex-col md:flex-row gap-10 items-start"
            >
              <div className="shrink-0 w-full md:w-auto relative">
                <div className="absolute inset-0 bg-orange-600/10 rounded-3xl translate-x-3 translate-y-3"></div>
                <img 
                  src="https://web2.itnahodinu.cz/delphia/majitel.webp" 
                  alt="Jaroslav Čech" 
                  className="w-full md:w-48 h-64 md:h-56 object-cover rounded-3xl relative z-10"
                />
              </div>
              <div>
                <h3 className="text-3xl font-black text-neutral-950 tracking-tighter">Jaroslav Čech</h3>
                <p className="text-orange-600 font-bold uppercase tracking-wider text-xs mt-2 mb-6">CEO Delphia Energy</p>
                
                <blockquote className="text-neutral-950 font-medium italic border-l-2 border-orange-500 pl-4 mb-6 text-sm leading-relaxed">
                  "Mým posláním je spojit sílu značky Delphia se specifickými potřebami českého trhu s důrazem na absolutní profesionalitu."
                </blockquote>
                
                <ul className="space-y-3 text-sm text-neutral-500 font-medium">
                  <li><strong className="text-neutral-950">Expertiza:</strong> 14 let ve vrcholovém managementu Komerční banky. Hluboký vhled do správy aktiv.</li>
                  <li><strong className="text-neutral-950">Development:</strong> Od roku 2016 úspěšný investor a land developer.</li>
                  <li><strong className="text-neutral-950">Klíčový přínos:</strong> Propojení energetického managementu s finanční architekturou.</li>
                </ul>
              </div>
            </motion.div>

            {/* Kateřina Haláková */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 border border-neutral-200/60 shadow-xl shadow-neutral-200/50 flex flex-col md:flex-row gap-10 items-start"
            >
              <div className="shrink-0 w-full md:w-auto relative">
                <div className="absolute inset-0 bg-orange-600/10 rounded-3xl translate-x-3 translate-y-3"></div>
                <img 
                  src="https://web2.itnahodinu.cz/delphia/majitelka.webp" 
                  alt="Kateřina Haláková" 
                  className="w-full md:w-48 h-64 md:h-56 object-top object-cover rounded-3xl relative z-10"
                />
              </div>
              <div>
                <h3 className="text-3xl font-black text-neutral-950 tracking-tighter">Kateřina Haláková</h3>
                <p className="text-orange-600 font-bold uppercase tracking-wider text-xs mt-2 mb-6">Head of Sales</p>
                
                <blockquote className="text-neutral-950 font-medium italic border-l-2 border-orange-500 pl-4 mb-6 text-sm leading-relaxed">
                  "Jsem přesvědčena, že certifikace budov bude určovat budoucnost českého realitního trhu."
                </blockquote>
                
                <ul className="space-y-3 text-sm text-neutral-500 font-medium">
                  <li><strong className="text-neutral-950">Zkušenosti:</strong> Manažerské posty v NN (akvizice) a KB (vedení týmů).</li>
                  <li><strong className="text-neutral-950">Realitní vhled:</strong> Vlastní podnikání v oblasti investic a správy činžovních domů a business center.</li>
                  <li><strong className="text-neutral-950">Klíčový přínos:</strong> Identifikace skrytého potenciálu skrze ESG a energetickou optimalizaci.</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* Mini CTA */}
      <section className="bg-neutral-50 border-t border-neutral-200 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-950 mb-6 tracking-tighter">Hledáte spolehlivého partnera pro vaši budovu?</h2>
            <Link to="/kontakty" className="inline-flex items-center justify-center bg-neutral-950 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase hover:bg-orange-600 transition-all duration-300">
                Ozvěte se nám <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
        </div>
      </section>
    </div>
  );
}

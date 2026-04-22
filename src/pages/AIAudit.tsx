import { Link } from 'react-router-dom';
import { Bot, CheckCircle2, ArrowRight, ShieldAlert, Scale, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function AIAudit() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-neutral-950 text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="AI Audit (EU AI Act)" 
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
              Legislativní Compliance
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              AI Audit <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">(EU AI Act).</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-medium">
              Zajistíme pro vás kompletní audit systémů umělé inteligence podle nové evropské legislativy. Nechte byrokratické starosti na nás.
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
            <h2 className="text-4xl font-black text-neutral-950 mb-8 tracking-tighter">Ochráníme vás před brutálními sankcemi.</h2>
            <p className="text-xl text-neutral-500 font-medium leading-relaxed mb-6">
              Akt o umělé inteligenci (EU AI Act) představuje tvrdý regulatorní rámec pro vývojáře a implementátory AI systémů. Nekompliance vede k astronomickým pokutám, které mohou položit firmu.
            </p>
            <p className="text-xl text-neutral-500 font-medium leading-relaxed mb-10">
              Přebíráme 100% odpovědnost za proces. Důkladně zrevidujeme vaše algoritmy, vytvoříme matici rizik a vygenerujeme neprůstřelnou certifikaci souladu.
            </p>
            
            <a href="https://asociace.ai/eu-ai-act/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-950 font-bold rounded-xl transition-colors mb-12">
              <Scale className="w-5 h-5 mr-3 text-orange-600" /> Co přesně vyžaduje zákon?
            </a>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-50 p-2 rounded-xl mr-5 shrink-0 border border-orange-100">
                    <ShieldAlert className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-neutral-950 tracking-tight mb-1">Hloubková analýza systémů.</h4>
                    <p className="text-neutral-500 font-medium">Brakedown používaných modelů LLM či prediktivní analytiky.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-50 p-2 rounded-xl mr-5 shrink-0 border border-orange-100">
                    <Bot className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-neutral-950 tracking-tight mb-1">Strikní kategorizace rizik.</h4>
                    <p className="text-neutral-500 font-medium">Zařazení vašich systémů (unacceptable, high, limited, minimal).</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-50 p-2 rounded-xl mr-5 shrink-0 border border-orange-100">
                    <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-neutral-950 tracking-tight mb-1">Implementace opatření.</h4>
                    <p className="text-neutral-500 font-medium">Právní boilerplate a softwarové záplaty k dosažení compliance.</p>
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
                    <Bot className="w-12 h-12 text-neutral-950" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight relative z-10">Mějte 100% klid a jistotu</h3>
                <p className="text-neutral-400 font-medium mb-12 relative z-10 text-lg">
                  Nenechte svou firmu ohroženou zásahem evropských úřadů. Svěřte technický a právní audit AI do rukou skutečných expertů.
                </p>
                <Link to="/kontakty" className="w-full flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-orange-600/20 text-lg group active:scale-[0.98] relative z-10">
                  Rezervovat Audit
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}

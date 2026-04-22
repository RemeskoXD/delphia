import { Shield, Lock, FileText, CheckCircle, Database, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function GDPR() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Premium Dark Header */}
      <div className="relative bg-neutral-950 text-white pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="Podmínky zpracování osobních údajů" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/90 to-white"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 text-neutral-300 text-xs font-bold tracking-widest uppercase mb-8 border border-white/10 backdrop-blur-md"
          >
            <Shield className="w-4 h-4 mr-2 text-orange-500" />
            Ochrana soukromí a dat
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter"
          >
            GDPR & Legislativa
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-400 max-w-2xl mx-auto font-medium"
          >
            Transparentnost a zabezpečení dat na nejvyšší korporátní a inženýrské úrovni. Přečtěte si, jak nakládáme s vašimi osobními údaji.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10 relative z-20">
        <motion.div 
          className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-neutral-200 p-8 md:p-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.div variants={itemVariants} className="mb-14">
            <div className="flex items-center mb-6">
              <div className="bg-orange-50 p-3 rounded-2xl mr-5 border border-orange-100">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-black text-neutral-950 tracking-tight">1. Správce osobních údajů</h2>
            </div>
            <div className="pl-0 md:pl-16 text-lg text-neutral-500 space-y-4 font-medium leading-relaxed">
              <p>
                Správcem vašich osobních údajů je společnost <strong>Delphia Czech s.r.o.</strong>, se sídlem Václavské náměstí 1, 110 00 Praha 1, Česká republika. Dbáme na nejpřísnější dodržování norem EU.
              </p>
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 mt-6 inline-block w-full">
                <p className="mb-1"><span className="text-neutral-400">Centrální E-mail:</span> <a href="mailto:info@delphiaenergy.cz" className="text-neutral-900 font-bold hover:text-orange-600 transition-colors">info@delphiaenergy.cz</a></p>
                <p><span className="text-neutral-400">Recepce / Infolinka:</span> <a href="tel:+420602655046" className="text-neutral-900 font-bold hover:text-orange-600 transition-colors">+420 602 655 046</a></p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-14">
            <div className="flex items-center mb-6">
              <div className="bg-orange-50 p-3 rounded-2xl mr-5 border border-orange-100">
                <Database className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-black text-neutral-950 tracking-tight">2. Účely a právní základ</h2>
            </div>
            <div className="pl-0 md:pl-16">
              <p className="text-lg text-neutral-500 font-medium mb-6">Vaše digitální i fyzické osobní údaje zpracováváme výhradně pro tyto účely:</p>
              <div className="space-y-4">
                <div className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-sm hover:border-orange-200 transition-colors">
                  <h4 className="font-bold text-neutral-950 mb-2 flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Plnění smluvního vztahu</h4>
                  <p className="text-neutral-500 text-sm">Zpracování nezbytné pro audity, projekty (PENB, ESG reporty) a komunikaci.</p>
                </div>
                <div className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-sm hover:border-orange-200 transition-colors">
                  <h4 className="font-bold text-neutral-950 mb-2 flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Právní povinnosti</h4>
                  <p className="text-neutral-500 text-sm">Povinná účetnictví, daňová evidence vůči orgánům ČR a EU.</p>
                </div>
                <div className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-sm hover:border-orange-200 transition-colors">
                  <h4 className="font-bold text-neutral-950 mb-2 flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Oprávněný zájem & Souhlas</h4>
                  <p className="text-neutral-500 text-sm">Ochrana právních nároků, občasný B2B marketing a analytika s vaším dobrovolným svolením.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-14">
            <div className="flex items-center mb-6">
              <div className="bg-orange-50 p-3 rounded-2xl mr-5 border border-orange-100">
                <Lock className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-black text-neutral-950 tracking-tight">3. Doba uložení v systémech</h2>
            </div>
            <ul className="pl-0 md:pl-16 text-lg text-neutral-500 space-y-3 font-medium list-disc list-inside marker:text-orange-500">
              <li>Pevně po dobu trvání exkluzivního smluvního vztahu.</li>
              <li>Daňové a účetní dokumenty konzervujeme bezpečně na <strong>10 let</strong> dle zákonné lhůty.</li>
              <li>Až do okamžiku vašeho odvolání souhlasu nebo uplatnění námitky pro specifické účely.</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-14">
            <div className="flex items-center mb-6">
              <div className="bg-orange-50 p-3 rounded-2xl mr-5 border border-orange-100">
                <Eye className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-black text-neutral-950 tracking-tight">4. Garantovaná práva subjektů</h2>
            </div>
            <div className="pl-0 md:pl-16">
              <p className="text-lg text-neutral-500 font-medium mb-6">V rámci evropského GDPR (2016/679) disponujete plným spektrem práv k vašim datům:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Právo na přístup k informacím',
                  'Právo na opravu chyb do 48h',
                  'Právo být zapomenut (Výmaz)',
                  'Právo omezit zpracování',
                  'Právo na přenositelnost (Export)',
                  'Právo odvolat souhlas s užitím'
                ].map((right, idx) => (
                  <div key={idx} className="flex items-center px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3 shrink-0"></div>
                    <span className="text-neutral-800 font-semibold text-sm">{right}</span>
                  </div>
                ))}
              </div>
              
              <p className="mt-8 text-neutral-500 font-medium">
                Své požadavky delegujte na náš bezpečnostní panel formou emailu na <strong className="text-neutral-900">info@delphiaenergy.cz</strong>. V případě pochybení můžete eskalovat případ Úřadu pro ochranu osobních údajů.
              </p>
            </div>
          </motion.div>

          <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center text-sm font-bold text-neutral-400">
            <span>Delphia Czech s.r.o. Data Privacy</span>
            <span className="mt-2 sm:mt-0 px-4 py-1.5 bg-neutral-100 rounded-lg text-neutral-600">Verze dokumentu: 2.1 (Září 2024)</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

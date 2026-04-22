import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-neutral-950 text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="Kontaktujte nás" 
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
              24/7 Podpora pro firemní klienty
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Jsme připraveni <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">vám pomoci.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-medium">
              Ať už se jedná o certifikaci rodinného domu nebo pětiletou ESG strategii pro korporaci, náš tým je vám plně k dispozici.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info (Bento Style) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-black text-neutral-950 mb-4 tracking-tighter">Začněme jednat</h2>
              <p className="text-lg text-neutral-500 font-medium mb-10">Napište nám nebo nám rovnou zavolejte. Odpovídáme obratem.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              
              {/* Phone */}
              <div className="bg-neutral-50 p-6 xl:p-8 rounded-3xl border border-neutral-200 group hover:border-orange-500/50 hover:bg-orange-50/50 transition-colors">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-neutral-100 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                  <Phone className="w-5 h-5 text-neutral-950 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-neutral-500 mb-2 text-sm uppercase tracking-wider">Telefon</h3>
                <a href="tel:+420602655046" className="text-xl font-black text-neutral-950 group-hover:text-orange-600 transition-colors">+420 602 655 046</a>
              </div>

              {/* Email */}
              <div className="bg-neutral-50 p-6 xl:p-8 rounded-3xl border border-neutral-200 group hover:border-orange-500/50 hover:bg-orange-50/50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-neutral-100 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                    <Mail className="w-5 h-5 text-neutral-950 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-neutral-500 mb-2 text-sm uppercase tracking-wider">E-mail</h3>
                </div>
                <a href="mailto:info@delphiaenergy.cz" className="text-lg xl:text-xl font-black text-neutral-950 group-hover:text-orange-600 transition-colors block truncate w-full">info@delphiaenergy.cz</a>
              </div>

              {/* Address */}
              <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200 md:col-span-2 lg:col-span-1 xl:col-span-2 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-neutral-100">
                  <MapPin className="w-5 h-5 text-neutral-950" />
                </div>
                <h3 className="font-bold text-neutral-500 mb-3 text-sm uppercase tracking-wider">Sídlo společnosti</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                    <div>
                        <p className="text-xl font-black text-neutral-950 leading-tight">
                            Delphia Czech s.r.o.<br />
                            Václavské náměstí 1<br />
                            110 00 Praha 1
                        </p>
                        <p className="text-sm font-medium text-neutral-500 mt-2">IČO: 12345678, DIČ: CZ12345678</p>
                    </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-neutral-950 p-8 rounded-3xl border border-neutral-800 md:col-span-2 lg:col-span-1 xl:col-span-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 blur-2xl rounded-full translate-x-10 -translate-y-10"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <div className="flex items-center mb-3">
                            <Clock className="w-5 h-5 text-orange-500 mr-3" />
                            <h3 className="font-bold text-neutral-400 text-sm uppercase tracking-wider">Provozní doba</h3>
                        </div>
                        <p className="text-xl font-black text-white">Po - Pá: 8:00 - 16:30</p>
                        <p className="text-sm font-medium text-neutral-500 mt-1">So - Ne i o svátcích máme zavřeno</p>
                    </div>
                    <div className="px-4 py-2 bg-white/10 rounded-full border border-white/10 w-fit">
                        <span className="text-sm font-bold text-white flex items-center justify-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Nyní jsme online
                        </span>
                    </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-12 rounded-[3rem] border border-neutral-200 shadow-2xl shadow-neutral-200/50"
          >
            <h2 className="text-3xl font-black text-neutral-950 mb-8 tracking-tighter">Odešlete poptávku</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-950 mb-3">Jméno a příjmení</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl border border-neutral-200 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-neutral-400 font-medium" placeholder="Jan Novák" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-950 mb-3">Telefonní číslo</label>
                  <input type="tel" className="w-full px-5 py-4 rounded-2xl border border-neutral-200 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-neutral-400 font-medium" placeholder="+420 123 456 789" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-neutral-950 mb-3">E-mailová adresa</label>
                <input type="email" className="w-full px-5 py-4 rounded-2xl border border-neutral-200 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-neutral-400 font-medium" placeholder="jmeno@firma.cz" />
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-950 mb-3">O jakou službu máte primárně zájem?</label>
                <select className="w-full px-5 py-4 rounded-2xl border border-neutral-200 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-white font-medium text-neutral-700">
                  <option>Průkaz PENB (Rodinné a bytové domy)</option>
                  <option>Tepelné audity a dotace (NZÚ)</option>
                  <option>Komplexní výpočet uhlíkové stopy</option>
                  <option>ESG / CSRD Nefinanční reporting</option>
                  <option>AI Audit / 3D Skenování</option>
                  <option>Jiné / Potřebuji se nejdříve poradit</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-950 mb-3">Zpráva s detaily (volitelné)</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-2xl border border-neutral-200 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all resize-none placeholder:text-neutral-400 font-medium" placeholder="Dobrý den, potřeboval bych nacenit pět rodinných domů v Praze 5..."></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-orange-600/20 text-lg group active:scale-[0.98] mt-4">
                Odeslat poptávku
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-neutral-500 font-medium mt-4">Odkliknutím souhlasíte se zpracováním osobních údajů v rámci poptávky.</p>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

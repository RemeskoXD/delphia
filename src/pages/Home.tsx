import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Home as HomeIcon, Building, Leaf, Calculator, BarChart3, Bot, Box, Clock, ShieldCheck, Star, Zap } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function Home() {
  useEffect(() => {
    // Load YouTube API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Define the global callback
    (window as any).onYouTubeIframeAPIReady = () => {
      new (window as any).YT.Player('bg-video', {
        events: {
          onReady: (event: any) => {
            event.target.setPlaybackRate(2);
            event.target.playVideo();
          },
        },
      });
    };

    return () => {
      delete (window as any).onYouTubeIframeAPIReady;
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[85vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe 
            id="bg-video"
            src="https://www.youtube.com/embed/twT0KIJANJA?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=twT0KIJANJA&start=94&playsinline=1&enablejsapi=1" 
            title="Background Video" 
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-40"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold mb-8 border border-orange-500/20 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-3 animate-pulse"></span>
              Nejrychlejší PENB v České republice
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
            >
              Váš partner pro <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                energetickou efektivitu
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl"
            >
              Zajistíme energetické štítky, audity a dotace. Rychle, spolehlivě a za garantovaně nejnižší cenu na trhu.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/energeticke-stitky" className="group relative bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg text-center transition-all duration-300 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_60px_rgba(234,88,12,0.6)] hover:-translate-y-1">
                <span className="relative z-10 flex items-center">
                  Získat energetický štítek <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/kalkulacky" className="group bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg text-center transition-all duration-300 flex items-center justify-center hover:-translate-y-1">
                Spočítat úspory
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            <div className="flex items-center justify-center md:justify-start space-x-5 md:px-6">
              <div className="bg-orange-500/20 p-4 rounded-2xl text-orange-500">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">do 48h</div>
                <div className="text-neutral-400 font-medium">Expresní zpracování</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-5 md:px-6 pt-6 md:pt-0">
              <div className="bg-orange-500/20 p-4 rounded-2xl text-orange-500">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+ let</div>
                <div className="text-neutral-400 font-medium">Zkušeností v oboru</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-5 md:px-6 pt-6 md:pt-0">
              <div className="bg-orange-500/20 p-4 rounded-2xl text-orange-500">
                <Star className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10 000+</div>
                <div className="text-neutral-400 font-medium">Spokojených klientů</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services Categories */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-black mb-6"
            >
              Kompletní energetická řešení
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              Od energetických štítků až po komplexní audity. Vše pod jednou střechou, rychle a profesionálně.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: "/energeticke-stitky", icon: HomeIcon, title: "PENB (Štítky)", desc: "Pro prodej, pronájem i kolaudaci. Expresně do 48 hodin." },
              { to: "/energeticke-stitky/bytove-domy", icon: Building, title: "Energetické audity", desc: "Hloubkové analýzy pro firmy a SVJ. Odhalíme skryté úspory." },
              { to: "/esg", icon: Leaf, title: "Dotační poradenství", desc: "Nová zelená úsporám a další programy. Vyřídíme za vás." },
              { to: "/kalkulacky", icon: Zap, title: "Snížení náročnosti", desc: "Projekty a optimalizace pro maximální efektivitu." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={service.to} className="group block h-full bg-white rounded-3xl p-8 border border-slate-100 hover:border-orange-500/50 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-orange-600 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="mt-8 flex items-center text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Více informací <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
                Proč zvolit nás?<br/>
                <span className="text-orange-600">Nejrychlejší a nejlevnější</span> na trhu
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Jsme hrdou franšízou úspěšné slovenské společnosti Delphia, která od roku 2008 přináší komplexní a spolehlivé energetické služby.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 group-hover:border-orange-500 group-hover:shadow-orange-500/20 transition-all mr-5 shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Rychlost: PENB do 48 hodin</h4>
                    <p className="text-slate-600">Expresní termín bez příplatku (při dodání podkladů bez nutnosti zaměření).</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 group-hover:border-orange-500 group-hover:shadow-orange-500/20 transition-all mr-5 shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Garantovaná nejnižší cena</h4>
                    <p className="text-slate-600">Neustále sledujeme konkurenci a nabízíme nejlepší podmínky v ČR.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 group-hover:border-orange-500 group-hover:shadow-orange-500/20 transition-all mr-5 shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Odbornost a jistota</h4>
                    <p className="text-slate-600">Dokumentace schválená experty, která projde každou kontrolou.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <Link to="/o-nas" className="inline-flex items-center text-orange-600 font-bold text-lg hover:text-orange-700 transition-colors">
                  Poznejte náš příběh <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-[2.5rem] transform translate-x-6 translate-y-6 opacity-20"></div>
              <img 
                src="https://www.delphia.sk/images/2026/02/05/image-1200-x-1400-px-1.png" 
                alt="Náš tým při práci" 
                className="relative rounded-[2.5rem] shadow-2xl object-cover h-[600px] w-full border-8 border-white"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center space-x-4"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Certifikovaní</div>
                  <div className="text-xl font-bold text-black">Specialisté</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Tech & Other Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-black mb-6"
            >
              Inovace a moderní technologie
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              Držíme krok s dobou. Nabízíme pokročilé audity a reporting pro moderní firmy.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { to: "/ai-audit", icon: Bot, title: "AI Audit (EU AI Act)", desc: "Zákonná povinnost pro systémy umělé inteligence. Zhotovíme pro vás kompletní audit, ať máte klid a jistotu." },
              { to: "/3d-audit", icon: Box, title: "3D Audit budov", desc: "Přesné 3D skenování a pasportizace budov pro detailní přehled, plánování rekonstrukcí a správu nemovitostí." },
              { to: "/esg", icon: BarChart3, title: "CO2 a ESG Reporting", desc: "Pomůžeme vaší firmě s výpočtem uhlíkové stopy a přípravou nefinančního reportingu podle standardů ESG." },
              { to: "/kalkulacky", icon: Calculator, title: "Energetické kalkulačky", desc: "Využijte naše online nástroje pro orientační výpočet úspor, návratnosti investic a energetické náročnosti." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={item.to} className="flex flex-col sm:flex-row items-center sm:items-start bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group h-full">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-6 sm:mb-0 sm:mr-8 group-hover:bg-orange-600 group-hover:border-orange-600 transition-colors shrink-0">
                    <item.icon className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center" referrerPolicy="no-referrer"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Jste připraveni ušetřit za energie?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 mb-10"
          >
            Kontaktujte nás ještě dnes a získejte nezávaznou konzultaci zdarma.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/kontakty" className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_60px_rgba(234,88,12,0.6)] hover:-translate-y-1">
              Kontaktujte nás
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

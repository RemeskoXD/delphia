import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Home as HomeIcon, Building, Leaf, Calculator, BarChart3, Bot, Box, Clock, ShieldCheck, Star, Zap } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';

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
      <SEO 
        title="Delphia | Lídři v PENB a ESG Auditech" 
        description="Komplexní energetické služby v ČR a SR. Vypracujeme energetické štítky (PENB) do 48h, završíme vaše ESG a CSRD reporty a připravíme EU AI audity."
      />
      
      {/* Hero Section */}
      <section className="relative bg-neutral-950 text-white overflow-hidden min-h-[90vh] flex items-center pt-24 pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe 
            id="bg-video"
            src="https://www.youtube.com/embed/twT0KIJANJA?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=twT0KIJANJA&start=94&playsinline=1&enablejsapi=1" 
            title="Background Video" 
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-40 mix-blend-screen"
          ></iframe>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-950/10 via-neutral-950/70 to-neutral-950/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 text-neutral-300 text-xs font-bold tracking-widest uppercase mb-10 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.03)]"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 mr-3 shadow-[0_0_10px_rgba(234,88,12,0.8)]"></span>
              Lídr v energetických auditech v ČR a SR
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-8 leading-[1.05]"
            >
              Nová éra <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500">
                energetické efektivity
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-2xl text-neutral-400 mb-12 leading-relaxed font-medium max-w-3xl mx-auto"
            >
              Posouváme hranice firemního reportingu, 3D pasportizace a certifikací budov. Rychlost, špičková data a technologický náskok pro vaše podnikání.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <Link to="/esg" className="group relative bg-white text-neutral-950 px-8 py-4 rounded-full font-bold text-lg text-center transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-105 active:scale-95 w-full sm:w-auto">
                <span className="relative z-10 flex items-center">
                  Pro firmy a korporace <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/energeticke-stitky/rodinne-domy" className="group bg-neutral-900/50 hover:bg-neutral-800 backdrop-blur-xl text-white border border-neutral-700/50 px-8 py-4 rounded-full font-bold text-lg text-center transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95 w-full sm:w-auto">
                Pro domácnosti (PENB)
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract Architectural Lines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-neutral-900/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
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

      {/* Trusted By / Client Logos */}
      <section className="mb-24 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-neutral-400">Důvěřují nám lídři na trhu a instituce</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 md:gap-24">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Dm-drogerie-Logo.svg/3840px-Dm-drogerie-Logo.svg.png" alt="DM Drogerie" className="h-12 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJVJhYmItqQstpeb1ObeWsTfa5gmKeuoNzA&s" alt="Lidl" className="h-12 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Kaufland_Logo.svg/3840px-Kaufland_Logo.svg.png" alt="Kaufland" className="h-14 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
          <img src="https://delphia.sk/images/2024/08/02/herrys-110-x-54-px.png" alt="Herrys" className="h-12 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
          <img src="https://delphia.sk/images/2024/08/02/penta-real-estate-110-x-54-px.png" alt="Penta Real Estate" className="h-8 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
          <img src="https://delphia.sk/images/2024/08/02/heluz-110-x-54-px-5.png" alt="Heluz" className="h-10 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* Services Categories - Bento Grid Redesign */}
      <section className="py-24 bg-neutral-50 relative border-t border-neutral-200">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 space-y-6 md:space-y-0 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-950 tracking-tighter"
              >
                Komplexní ekosystém <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">chytrých auditů</span>
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-500 max-w-md font-medium"
            >
              Od energetických štítků až po pokročilou AI integraci a 3D pasportizaci firem.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            
            {/* Massive Card: ESG & CO2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-6 lg:col-span-8"
            >
              <Link to="/esg" className="group block h-full bg-neutral-950 text-white p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-orange-600/20 blur-[100px] rounded-full group-hover:bg-orange-500/30 transition-colors duration-700"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="mb-16">
                    <div className="bg-white/10 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-orange-600 transition-colors duration-500">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">CO2 a ESG Reporting</h3>
                    <p className="text-xl text-neutral-400 leading-relaxed max-w-xl">
                      Připravte svou firmu na budoucnost. Navrhneme strategii udržitelnosti, spočítáme uhlíkovou stopu a zajistíme kompletní legislativní shodu s CSRD.
                    </p>
                  </div>
                  <div className="flex items-center text-orange-400 font-bold uppercase tracking-wider text-sm mt-auto">
                    Konzultovat ESG strategii <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Accent Card: PENB */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-1 md:col-span-6 lg:col-span-4"
            >
              <Link to="/energeticke-stitky" className="group block h-full bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-500 hover:scale-[1.02]">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="mb-16">
                    <div className="bg-white/20 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                      <HomeIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-4xl font-black mb-6 tracking-tight leading-tight">PENB Štítky do 48h</h3>
                    <p className="text-lg font-medium text-orange-50 leading-relaxed">
                      Zákonná povinnost pro průkaz energetické náročnosti vyřešena expresně a bez starostí.
                    </p>
                  </div>
                  <div className="flex items-center font-bold uppercase tracking-wider text-sm mt-auto">
                    Získat štítek <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Small Card: AI Audit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-1 md:col-span-4 lg:col-span-4"
            >
              <Link to="/ai-audit" className="group block h-full bg-white p-10 rounded-[2.5rem] border border-neutral-200/60 shadow-sm hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    <Bot className="w-48 h-48" />
                 </div>
                 <div className="relative z-10">
                    <div className="bg-neutral-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neutral-950 transition-colors duration-500">
                      <Bot className="w-7 h-7 text-neutral-950 group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-neutral-950 mb-4 tracking-tight">AI Audit (EU AI Act)</h3>
                    <p className="text-neutral-500 leading-relaxed font-medium mb-8">
                      Identifikujeme rizika vašich systémů umělé inteligence dle nové EU legislativy.
                    </p>
                    <div className="font-bold text-sm uppercase tracking-wide text-orange-600 flex items-center">Více informací <ArrowRight className="ml-2 w-4 h-4" /></div>
                 </div>
              </Link>
            </motion.div>

            {/* Small Card: 3D Audit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-1 md:col-span-4 lg:col-span-4"
            >
              <Link to="/3d-audit" className="group block h-full bg-white p-10 rounded-[2.5rem] border border-neutral-200/60 shadow-sm hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    <Box className="w-48 h-48" />
                 </div>
                 <div className="relative z-10">
                    <div className="bg-neutral-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neutral-950 transition-colors duration-500">
                      <Box className="w-7 h-7 text-neutral-950 group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-neutral-950 mb-4 tracking-tight">3D Pasportizace</h3>
                    <p className="text-neutral-500 leading-relaxed font-medium mb-8">
                      Extrémně přesné 3D digitální dvojče vaší budovy pro dokonalou správu a BIM systémy.
                    </p>
                    <div className="font-bold text-sm uppercase tracking-wide text-orange-600 flex items-center">Více informací <ArrowRight className="ml-2 w-4 h-4" /></div>
                 </div>
              </Link>
            </motion.div>

            {/* Small Card: Kalkulačky */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-1 md:col-span-4 lg:col-span-4"
            >
              <Link to="/kalkulacky" className="group block h-full bg-neutral-950 text-white p-10 rounded-[2.5rem] relative overflow-hidden transition-transform duration-500 hover:scale-[1.02] shadow-xl">
                 <div className="relative z-10">
                    <div className="bg-white/10 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                      <Calculator className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Data & Výpočty</h3>
                    <p className="text-neutral-400 leading-relaxed mb-8">
                      Precizní online analytické nástroje. Spočtěte si návratnost investice do několika kliknutí.
                    </p>
                    <div className="font-bold text-sm uppercase tracking-wide text-orange-400 flex items-center">Otevřít moduly <ArrowRight className="ml-2 w-4 h-4" /></div>
                 </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Us - Corporate Ultra-Premium Redesign */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-neutral-100 text-neutral-800 rounded-lg font-bold text-xs uppercase tracking-widest mb-8 border border-neutral-200">
                <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                <span>Standard Excelence</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-neutral-950 mb-8 leading-[1.05] tracking-tighter">
                Architekti vašich <br/>
                <span className="text-orange-600">úspor</span>.
              </h2>
              <p className="text-lg text-neutral-500 mb-10 leading-relaxed font-medium">
                Spojili jsme sílu inženýrské preciznosti společnosti Delphia s moderními technologiemi. Výsledkem jsou služby, které nemají na trhu konkurenci. Rychlost, spolehlivost a absolutní garance odbornosti.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-6 flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-orange-100 blur-md rounded-full"></div>
                    <div className="relative bg-white w-14 h-14 rounded-2xl flex items-center justify-center border border-orange-100 shadow-[0_8px_16px_rgba(234,88,12,0.1)]">
                      <Zap className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-neutral-950 mb-2 tracking-tight">Rychlost jako standard</h4>
                    <p className="text-neutral-500 font-medium">PENB doručujeme expresně. Bez příplatků, ihned, pro hladký průběh vašich realitních a úvěrových zkoušek.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-6 flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-orange-100 blur-md rounded-full"></div>
                    <div className="relative bg-white w-14 h-14 rounded-2xl flex items-center justify-center border border-orange-100 shadow-[0_8px_16px_rgba(234,88,12,0.1)]">
                      <ShieldCheck className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-neutral-950 mb-2 tracking-tight">Absolutní jistota obhájení</h4>
                    <p className="text-neutral-500 font-medium">Naše dokumentace je stvořena pro audity a úřady. Certifikovaní inženýři garantují bezchybnost každého posudku.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-14">
                <Link to="/o-nas" className="group inline-flex items-center justify-center px-8 py-4 bg-neutral-950 text-white rounded-full font-bold text-sm tracking-wide uppercase hover:bg-orange-600 transition-all duration-300">
                  Náš firemní příběh <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-neutral-200 to-transparent rounded-[3rem] transform translate-x-6 translate-y-6 opacity-50 -z-10"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] group">
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay"></div>
                <img 
                  src="https://www.delphia.sk/images/2026/02/05/image-1200-x-1400-px-1.png" 
                  alt="Náš tým inženýrů" 
                  className="w-full h-[600px] md:h-[700px] object-cover object-center transform group-hover:scale-105 transition-transform duration-[2s]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Modern Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 lg:-left-12 bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border border-white/50 z-20 max-w-xs"
              >
                <div className="flex items-center space-x-5">
                  <div className="pr-5 border-r border-neutral-200">
                    <div className="text-4xl font-black text-neutral-950 tracking-tighter">15+</div>
                    <div className="text-xs uppercase font-bold text-neutral-400 tracking-wider mt-1">Let zkušeností</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-neutral-950 leading-tight">ISO<br/>Certifikace</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accordion FAQs */}
      <FAQ />

      {/* Final CTA Section - Enterprise Grade */}
      <section className="bg-neutral-950 text-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-5 xl:opacity-10 bg-cover bg-center bg-fixed mix-blend-screen" referrerPolicy="no-referrer"></div>
        <div className="top-0 inset-x-0 absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 md:pr-16 text-center md:text-left mb-12 md:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black mb-6 tracking-tighter"
            >
              Exelence ve světě auditu.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-400 max-w-xl font-medium leading-relaxed mx-auto md:mx-0"
            >
              Ať už jste nadnárodní korporace potřebující vyřešit ESG a AI reporting, nebo hledáte průkaz PENB pro váš byt. My jsme připraveni.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:w-1/3 flex justify-center md:justify-end"
          >
            <Link to="/kontakty" className="group relative inline-flex items-center justify-center bg-white text-neutral-950 px-10 py-5 rounded-full font-black text-lg uppercase tracking-wide transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95">
              Zažádat o konzultaci
              <div className="absolute inset-0 rounded-full border border-white/50 scale-105 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

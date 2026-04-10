import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Home as HomeIcon, Building, Building2, Leaf, Calculator, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Moderní dům" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6 border border-orange-500/30">
              <Leaf className="w-4 h-4 mr-2" />
              Nyní i v České republice
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Váš partner pro energetickou efektivitu
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Nejrychlejší PENB v ČR do 48 hodin
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/energeticke-stitky" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center">
                Získat energetický štítek <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/kalkulacky" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center">
                Spočítat úspory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Naše služby – kompletní energetická řešení</h2>
            <p className="text-lg text-slate-600">
              Vyberte si z naší nabídky služeb pro zjištění detailních informací o energetické certifikaci a optimalizaci.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <Link to="/energeticke-stitky" className="group block bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HomeIcon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">PENB (Energetické štítky)</h3>
              <p className="text-slate-600 mb-6">
                Pro prodej, pronájem i kolaudaci.
              </p>
            </Link>

            {/* Category 2 */}
            <div className="group block bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Energetické audity</h3>
              <p className="text-slate-600 mb-6">
                Hloubkové analýzy pro firmy a SVJ.
              </p>
            </div>

            {/* Category 3 */}
            <div className="group block bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Dotační poradenství</h3>
              <p className="text-slate-600 mb-6">
                Nová zelená úsporám a další programy.
              </p>
            </div>

            {/* Category 4 */}
            <div className="group block bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Snížení energetické náročnosti</h3>
              <p className="text-slate-600 mb-6">
                Projekty a optimalizace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Proč zvolit nás? Jsme nejrychlejší a nejlevnější na trhu</h2>
              <p className="text-lg text-slate-600 mb-8">
                Jsme hrdou franšízou úspěšné slovenské společnosti Delphia, která od roku 2008 přináší komplexní a spolehlivé energetické služby.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-900 font-bold block">Rychlost: PENB do 48 hodin bez příplatku</span>
                    <span className="text-slate-600">Expresní termín bez příplatku (při dodání podkladů bez nutnosti zaměření).</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-900 font-bold block">Cena: Garantovaná nejnižší cena</span>
                    <span className="text-slate-600">Neustále sledujeme konkurenci a nabízíme nejlepší podmínky v ČR.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-900 font-bold block">Odbornost</span>
                    <span className="text-slate-600">Dokumentace schválená experty, která projde každou kontrolou.</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link to="/o-nas" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center">
                  Poznejte náš příběh <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-orange-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="https://www.delphia.sk/images/2026/02/05/image-1200-x-1400-px-1.png" 
                alt="Náš tým při práci" 
                className="relative rounded-3xl shadow-xl object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Další služby pro vaši udržitelnost</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/esg" className="flex flex-col sm:flex-row items-center sm:items-start bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-orange-500 transition-colors group">
              <div className="bg-orange-100 p-4 rounded-full mb-6 sm:mb-0 sm:mr-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <BarChart3 className="w-8 h-8 text-orange-600 group-hover:text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-2">CO2 a ESG Reporting</h3>
                <p className="text-slate-600">
                  Pomůžeme vaší firmě s výpočtem uhlíkové stopy a přípravou nefinančního reportingu podle standardů ESG.
                </p>
              </div>
            </Link>

            <Link to="/kalkulacky" className="flex flex-col sm:flex-row items-center sm:items-start bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-orange-500 transition-colors group">
              <div className="bg-orange-100 p-4 rounded-full mb-6 sm:mb-0 sm:mr-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Calculator className="w-8 h-8 text-orange-600 group-hover:text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Energetické kalkulačky</h3>
                <p className="text-slate-600">
                  Využijte naše online nástroje pro orientační výpočet úspor, návratnosti investic a energetické náročnosti.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

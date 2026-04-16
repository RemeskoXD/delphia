import { BarChart3, Leaf, Globe2, TrendingDown } from 'lucide-react';

export default function ESG() {
  return (
    <div className="bg-white min-h-screen">
            <div className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="CO2 a ESG Reporting" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CO2 a ESG Reporting</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Připravte svou firmu na udržitelnou budoucnost. Pomůžeme vám s výpočtem uhlíkové stopy a nefinančním reportingem.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Co je to ESG?</h2>
            <p className="text-lg text-slate-600 mb-6">
              ESG (Environmental, Social, and Governance) představuje tři hlavní oblasti, podle kterých se hodnotí udržitelnost a společenský dopad investice ve firmě.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                  <Leaf className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <strong className="block text-black">Environmental (Životní prostředí)</strong>
                  <span className="text-slate-600">Uhlíková stopa, nakládání s odpady, energetická efektivita.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                  <Globe2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <strong className="block text-black">Social (Společnost)</strong>
                  <span className="text-slate-600">Pracovní podmínky, bezpečnost práce, diverzita, vztahy s komunitou.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <strong className="block text-black">Governance (Řízení)</strong>
                  <span className="text-slate-600">Transparentnost, etika podnikání, struktura vedení.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold text-black mb-4">Proč řešit ESG a CO2?</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center"><TrendingDown className="w-5 h-5 text-orange-500 mr-3" /> Zvýšení konkurenceschopnosti</li>
              <li className="flex items-center"><TrendingDown className="w-5 h-5 text-orange-500 mr-3" /> Lepší přístup k financování (zelené úvěry)</li>
              <li className="flex items-center"><TrendingDown className="w-5 h-5 text-orange-500 mr-3" /> Splnění legislativních požadavků (CSRD)</li>
              <li className="flex items-center"><TrendingDown className="w-5 h-5 text-orange-500 mr-3" /> Zlepšení reputace u zákazníků a partnerů</li>
              <li className="flex items-center"><TrendingDown className="w-5 h-5 text-orange-500 mr-3" /> Identifikace úspor energií a zdrojů</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-600 rounded-3xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Naše služby v oblasti ESG</h2>
          <p className="text-orange-100 max-w-2xl mx-auto mb-8">
            Nabízíme komplexní poradenství od úvodní analýzy až po vytvoření finálního ESG reportu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-orange-700/50 p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-2">1. Výpočet uhlíkové stopy</h4>
              <p className="text-orange-100 text-sm">Změříme emise Scope 1, 2 a 3 dle mezinárodního standardu GHG Protocol.</p>
            </div>
            <div className="bg-orange-700/50 p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-2">2. ESG Strategie</h4>
              <p className="text-orange-100 text-sm">Navrhneme konkrétní kroky a cíle pro zlepšení vašeho ESG skóre a snížení emisí.</p>
            </div>
            <div className="bg-orange-700/50 p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-2">3. Nefinanční reporting</h4>
              <p className="text-orange-100 text-sm">Zpracujeme report dle platné legislativy (CSRD, ESRS) připravený pro audit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">O společnosti Delphia CZ</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Jsme franšízou úspěšné slovenské společnosti Delphia, která působí na trhu energetických služeb již od roku 2008.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">O nás a našem zázemí</h2>
            <ul className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Návaznost na 17 let zkušeností slovenské jedničky Delphi SK.
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Lídr na trhu s tisíci zpracovanými certifikáty.
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Nyní plně k dispozici pro český trh s týmem autorizovaných specialistů.
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Garantovaná kvalita a právní jistota u každého dokumentu.
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-orange-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Tým Delphia" 
              className="relative rounded-3xl shadow-xl object-cover h-[400px] w-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Target className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Naše mise</h3>
            <p className="text-slate-600">
              Pomáhat majitelům budov a firmám snižovat energetickou náročnost, šetřit náklady a chránit životní prostředí prostřednictvím odborného poradenství.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Náš tým</h3>
            <p className="text-slate-600">
              Tvoříme tým certifikovaných energetických specialistů, inženýrů a konzultantů, kteří se neustále vzdělávají v nových trendech a legislativě.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Kvalita a odbornost</h3>
            <p className="text-slate-600">
              Zakládáme si na preciznosti, rychlosti a srozumitelnosti našich výstupů. Jsme držiteli všech potřebných oprávnění pro výkon činnosti.
            </p>
          </div>
        </div>

        {/* Vedení společnosti */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Náš tým - Vedení společnosti</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Jaroslav Čech */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <img 
                  src="/majitel.webp" 
                  alt="Jaroslav Čech" 
                  className="w-48 h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Jaroslav Čech</h3>
                <p className="text-orange-600 font-medium mb-1">CEO Delphia Energy</p>
                <p className="text-slate-500 text-sm mb-4">Telefon: +420 602 655 046 | E-mail: info@delphiaenergy.cz</p>
                
                <blockquote className="italic text-slate-700 border-l-4 border-orange-500 pl-4 mb-4 text-sm">
                  “Mým posláním je spojit sílu značky Delphia se specifickými potřebami českého trhu s důrazem na absolutní profesionalitu.”
                </blockquote>
                
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><strong className="text-slate-800">Vize a leadership:</strong> Staví na pilířích transparentnosti, rychlosti a nekompromisní spolehlivosti.</li>
                  <li><strong className="text-slate-800">Expertiza:</strong> 14 let ve vrcholovém managementu Komerční banky. Hluboký vhled do financování a správy aktiv.</li>
                  <li><strong className="text-slate-800">Realitní development:</strong> Od roku 2016 úspěšný investor a developer (land development, rezidenční a komerční projekty).</li>
                  <li><strong className="text-slate-800">Klíčový přínos:</strong> Propojení energetického managementu (PENB, FTV) s finanční architekturou developerských celků.</li>
                </ul>
              </div>
            </div>

            {/* Kateřina Haláková */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <img 
                  src="/majitelka.webp" 
                  alt="Kateřina Haláková" 
                  className="w-48 h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Kateřina Haláková</h3>
                <p className="text-orange-600 font-medium mb-1">Head of sales</p>
                <p className="text-slate-500 text-sm mb-4">Telefon: +420 607 500 413 | E-mail: info@delphiaenergy.cz</p>
                
                <blockquote className="italic text-slate-700 border-l-4 border-orange-500 pl-4 mb-4 text-sm">
                  “Jsem přesvědčena, že certifikace budov bude určovat budoucnost českého realitního trhu.”
                </blockquote>
                
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><strong className="text-slate-800">Obchodní dynamika:</strong> Expertka na budování obchodních procesů a efektivní klientský servis.</li>
                  <li><strong className="text-slate-800">Zkušenosti:</strong> Manažerské posty v NN (řízení akvizic) a Komerční bance (vedení obchodních týmů).</li>
                  <li><strong className="text-slate-800">Realitní vhled:</strong> Vlastní podnikání v oblasti investic a správy nemovitostí (činžovní domy, firemní objekty).</li>
                  <li><strong className="text-slate-800">Klíčový přínos:</strong> Identifikace potenciálu úspor a zhodnocení budov skrze energetickou certifikaci a udržitelnost.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

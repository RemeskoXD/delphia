import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Building, Building2, ArrowRight, FileText, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function EnergyLabels() {
  const location = useLocation();
  const isBaseRoute = location.pathname === '/energeticke-stitky';

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Energetické štítky (PENB)</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Průkaz energetické náročnosti budovy (PENB) zhodnotí energetickou náročnost vašeho domu a je povinný při kolaudaci, prodeji, pronájmu nebo žádosti o úvěr či dotaci. Zpracujeme ho pro vás nejrychleji v ČR.
          </p>
        </div>
      </div>

      {isBaseRoute ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Intro & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Proč potřebujete energetický štítek?</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                PENB (často označovaný jako energetický štítek) zařazuje budovu do energetické třídy (A až G) a poskytuje jasný přehled o spotřebě energie. Je to zákonný požadavek pro většinu realitních transakcí a stavebních řízení.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Kolaudace novostavby</strong> nebo větší rekonstrukce.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Prodej nemovitosti</strong> (musí být součástí inzerce).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Pronájem</strong> domu nebo bytu.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Žádost o dotaci</strong> (např. Nová zelená úsporám).</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Proč si vybrat Delphia CZ?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4 shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Nejrychlejší v ČR do 48 hodin</h4>
                    <p className="text-slate-600 text-sm mt-1">Expresní zpracování bez příplatku (při dodání podkladů bez nutnosti zaměření).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4 shrink-0">
                    <ShieldCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Garantovaná nejnižší cena</h4>
                    <p className="text-slate-600 text-sm mt-1">Neustále sledujeme konkurenci a nabízíme nejlepší podmínky na trhu.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4 shrink-0">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Právní jistota a odbornost</h4>
                    <p className="text-slate-600 text-sm mt-1">Dokumentace schválená autorizovanými experty, která projde každou kontrolou.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Vyberte si kategorii budovy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Category 1 */}
            <Link to="/energeticke-stitky/rodinne-domy" className="group block bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                <HomeIcon className="w-8 h-8 text-orange-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">Rodinné domy</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Zpracujeme PENB pro váš rodinný dům rychle a spolehlivě. Nutné pro kolaudaci novostavby, prodej nebo pronájem nemovitosti.
              </p>
              <div className="flex items-center text-orange-600 font-semibold">
                Zobrazit detaily a ceník <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Category 2 */}
            <Link to="/energeticke-stitky/bytove-domy" className="group block bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                <Building className="w-8 h-8 text-orange-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">Bytové domy</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Komplexní energetické hodnocení pro SVJ a bytová družstva. Nezbytné pro plánování revitalizace a žádosti o dotace.
              </p>
              <div className="flex items-center text-orange-600 font-semibold">
                Zobrazit detaily a ceník <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Category 3 */}
            <Link to="/energeticke-stitky/ostatni-budovy" className="group block bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                <Building2 className="w-8 h-8 text-orange-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">Ostatní budovy</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Certifikace pro komerční, administrativní, průmyslové a veřejné budovy. Optimalizace provozních nákladů.
              </p>
              <div className="flex items-center text-orange-600 font-semibold">
                Zobrazit detaily a ceník <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Jak to funguje */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-10 text-center">Jak si objednat energetický štítek?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-700"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto bg-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-slate-900">1</div>
                <h3 className="text-xl font-semibold mb-2">Objednávka</h3>
                <p className="text-slate-400 text-sm">Vyberte typ budovy a kontaktujte nás přes formulář nebo telefonicky.</p>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto bg-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-slate-900">2</div>
                <h3 className="text-xl font-semibold mb-2">Podklady</h3>
                <p className="text-slate-400 text-sm">Zašlete nám projektovou dokumentaci. Pokud ji nemáte, zajistíme zaměření.</p>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto bg-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-slate-900">3</div>
                <h3 className="text-xl font-semibold mb-2">Zpracování</h3>
                <p className="text-slate-400 text-sm">Do 48 hodin od dodání kompletních podkladů zpracujeme váš PENB.</p>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto bg-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-slate-900">4</div>
                <h3 className="text-xl font-semibold mb-2">Předání</h3>
                <p className="text-slate-400 text-sm">Hotový energetický štítek vám zašleme elektronicky a poštou.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link to="/kontakty" className="inline-flex items-center bg-white text-slate-900 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold transition-colors">
                Nezávazně poptat <ArrowRight className="ml-2 w-5 h-5 text-orange-600" />
              </Link>
            </div>
          </div>

        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

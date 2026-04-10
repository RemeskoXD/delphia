import { CheckCircle2, FileText, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FamilyHouses() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link to="/energeticke-stitky" className="text-orange-600 hover:underline font-medium">&larr; Zpět na přehled</Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Energetické štítky pro rodinné domy</h2>
          <p className="text-lg text-slate-600 mb-6">
            Průkaz energetické náročnosti budovy (PENB) je pro rodinné domy povinný v několika situacích. Zpracujeme jej pro vás rychle, odborně a za férovou cenu.
          </p>
          
          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Kdy potřebujete PENB?</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Při výstavbě nového rodinného domu (pro stavební povolení)',
              'Při prodeji rodinného domu',
              'Při pronájmu rodinného domu',
              'Při větší změně dokončené budovy (rekonstrukce nad 25 % obálky budovy)',
              'Při žádosti o dotaci (např. Nová zelená úsporám)'
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Co od vás budeme potřebovat?</h3>
          <p className="text-slate-600 mb-4">Pro zpracování průkazu je ideální dodat projektovou dokumentaci:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
            <li>Půdorysy jednotlivých podlaží</li>
            <li>Řezy budovou</li>
            <li>Pohledy</li>
            <li>Technickou zprávu (skladby konstrukcí, způsob vytápění a ohřevu vody)</li>
          </ul>
          <p className="text-sm text-slate-500 italic">
            Nemáte dokumentaci? Nevadí, přijedeme dům zaměřit a potřebné údaje zjistíme na místě.
          </p>
        </div>

        <div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Cena a termíny</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Cena od</p>
                  <p className="text-2xl font-bold text-slate-900">4 500 Kč <span className="text-base font-normal text-slate-500">bez DPH</span></p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Standardní termín</p>
                  <p className="text-xl font-semibold text-slate-900">3 - 5 pracovních dnů</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                  <ShieldCheck className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Platnost průkazu</p>
                  <p className="text-xl font-semibold text-slate-900">10 let</p>
                </div>
              </div>
            </div>

            <Link to="/kontakty" className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center font-semibold py-4 rounded-xl transition-colors">
              Nezávazně poptat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

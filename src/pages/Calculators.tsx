import { useState } from 'react';
import { Calculator as CalcIcon, Zap, Home, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Calculators() {
  // State for Savings Calculator
  const [area, setArea] = useState<number>(120);
  const [heatingType, setHeatingType] = useState<string>('plyn');
  const [insulationLevel, setInsulationLevel] = useState<string>('kompletni');
  const [savingsResult, setSavingsResult] = useState<number | null>(null);

  // State for PENB Price Estimator
  const [buildingType, setBuildingType] = useState<string>('rodinny');
  const [penbArea, setPenbArea] = useState<number>(150);
  const [hasDocs, setHasDocs] = useState<boolean>(true);
  const [penbPrice, setPenbPrice] = useState<number | null>(null);

  const calculateSavings = () => {
    const baseConsumption = area * 180; // kWh/m2/rok (starší nezateplený dům)
    
    let savingsMultiplier = 0;
    if (insulationLevel === 'kompletni') savingsMultiplier = 0.60; // 60% úspora
    if (insulationLevel === 'okna') savingsMultiplier = 0.15; // 15% úspora
    if (insulationLevel === 'strecha') savingsMultiplier = 0.20; // 20% úspora
    if (insulationLevel === 'fasada') savingsMultiplier = 0.30; // 30% úspora

    const newConsumption = baseConsumption * (1 - savingsMultiplier);
    
    let pricePerKwh = 0;
    if (heatingType === 'plyn') pricePerKwh = 2.5;
    if (heatingType === 'elektrina') pricePerKwh = 6.0;
    if (heatingType === 'drevo') pricePerKwh = 1.5;
    if (heatingType === 'uhli') pricePerKwh = 1.2;

    const savingsKwh = baseConsumption - newConsumption;
    const savingsCzk = savingsKwh * pricePerKwh;
    
    setSavingsResult(savingsCzk);
  };

  const calculatePenbPrice = () => {
    let basePrice = 0;
    
    if (buildingType === 'rodinny') {
      basePrice = penbArea <= 150 ? 3500 : 4500;
    } else if (buildingType === 'bytovy') {
      basePrice = penbArea <= 500 ? 7000 : 9500;
    } else {
      basePrice = penbArea <= 500 ? 8000 : 12000;
    }

    // Příplatek za chybějící dokumentaci (zaměření)
    if (!hasDocs) {
      basePrice += buildingType === 'rodinny' ? 2000 : 5000;
    }

    setPenbPrice(basePrice);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="Energetické kalkulačky" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-orange-500/20 p-3 rounded-xl mr-4 backdrop-blur-sm">
              <CalcIcon className="w-8 h-8 text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Energetické kalkulačky</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Spočítejte si orientační úspory po zateplení vašeho domu nebo zjistěte odhadovanou cenu za vypracování průkazu energetické náročnosti (PENB).
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Kalkulačka úspor */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-slate-100 p-8 border-b border-slate-200 flex items-center">
              <Zap className="w-6 h-6 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-black">Kalkulačka úspor zateplením</h2>
            </div>
            
            <div className="p-8 flex-grow">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-700">Podlahová plocha domu</label>
                    <span className="text-sm font-bold text-orange-600">{area} m²</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" max="400" step="10"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Současný způsob vytápění
                  </label>
                  <select 
                    value={heatingType}
                    onChange={(e) => setHeatingType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                  >
                    <option value="plyn">Zemní plyn</option>
                    <option value="elektrina">Elektřina (přímotop/elektrokotel)</option>
                    <option value="drevo">Dřevo / Pelety</option>
                    <option value="uhli">Uhlí</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Plánované opatření
                  </label>
                  <select 
                    value={insulationLevel}
                    onChange={(e) => setInsulationLevel(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                  >
                    <option value="kompletni">Kompletní zateplení (fasáda, střecha, okna)</option>
                    <option value="fasada">Zateplení fasády</option>
                    <option value="strecha">Zateplení střechy / půdy</option>
                    <option value="okna">Výměna oken a dveří</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={calculateSavings}
                className="w-full mt-8 bg-black hover:bg-neutral-800 text-white font-bold py-4 rounded-xl transition-colors text-lg"
              >
                Spočítat úsporu
              </button>

              {savingsResult !== null && (
                <div className="mt-8 bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="text-orange-800 font-medium mb-1">Odhadovaná roční úspora:</p>
                  <p className="text-4xl font-extrabold text-orange-600 mb-2">
                    {Math.round(savingsResult).toLocaleString('cs-CZ')} Kč
                  </p>
                  <div className="flex items-start text-left bg-white/60 p-3 rounded-lg mt-4">
                    <Info className="w-5 h-5 text-orange-500 mr-2 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Tento výpočet je pouze orientační a vychází z průměrných hodnot starších nezateplených budov. Pro přesný výpočet doporučujeme zpracování energetického posudku.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Kalkulačka ceny PENB */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-slate-100 p-8 border-b border-slate-200 flex items-center">
              <Home className="w-6 h-6 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-black">Odhad ceny PENB</h2>
            </div>
            
            <div className="p-8 flex-grow">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Typ budovy
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button 
                      onClick={() => setBuildingType('rodinny')}
                      className={`py-3 px-2 rounded-xl text-sm font-medium border transition-all ${buildingType === 'rodinny' ? 'bg-orange-50 border-orange-500 text-orange-700' : 'bg-white border-slate-200 text-slate-600 hover:border-orange-300'}`}
                    >
                      Rodinný dům
                    </button>
                    <button 
                      onClick={() => setBuildingType('bytovy')}
                      className={`py-3 px-2 rounded-xl text-sm font-medium border transition-all ${buildingType === 'bytovy' ? 'bg-orange-50 border-orange-500 text-orange-700' : 'bg-white border-slate-200 text-slate-600 hover:border-orange-300'}`}
                    >
                      Bytový dům
                    </button>
                    <button 
                      onClick={() => setBuildingType('ostatni')}
                      className={`py-3 px-2 rounded-xl text-sm font-medium border transition-all ${buildingType === 'ostatni' ? 'bg-orange-50 border-orange-500 text-orange-700' : 'bg-white border-slate-200 text-slate-600 hover:border-orange-300'}`}
                    >
                      Komerční
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-700">Podlahová plocha</label>
                    <span className="text-sm font-bold text-orange-600">{penbArea} m²</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" max={buildingType === 'rodinny' ? 400 : 2000} step="10"
                    value={penbArea}
                    onChange={(e) => setPenbArea(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Máte k dispozici projektovou dokumentaci?
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        checked={hasDocs} 
                        onChange={() => setHasDocs(true)}
                        className="w-5 h-5 text-orange-600 focus:ring-orange-500 border-slate-300"
                      />
                      <span className="ml-2 text-slate-700">Ano, mám výkresy</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        checked={!hasDocs} 
                        onChange={() => setHasDocs(false)}
                        className="w-5 h-5 text-orange-600 focus:ring-orange-500 border-slate-300"
                      />
                      <span className="ml-2 text-slate-700">Ne, je nutné zaměření</span>
                    </label>
                  </div>
                </div>
              </div>

              <button 
                onClick={calculatePenbPrice}
                className="w-full mt-8 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-colors text-lg"
              >
                Spočítat odhad ceny
              </button>

              {penbPrice !== null && (
                <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="text-slate-600 font-medium mb-1">Odhadovaná cena PENB:</p>
                  <p className="text-4xl font-extrabold text-black mb-4">
                    od {penbPrice.toLocaleString('cs-CZ')} Kč <span className="text-lg text-slate-500 font-normal">bez DPH</span>
                  </p>
                  <Link to="/kontakty" className="inline-flex items-center justify-center w-full bg-white border-2 border-slate-200 hover:border-orange-500 text-slate-700 hover:text-orange-600 font-semibold py-3 rounded-xl transition-all">
                    Poptat přesnou cenu <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

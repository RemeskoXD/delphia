import { useState } from 'react';
import { Calculator as CalcIcon, Zap, Home, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

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
    const baseConsumption = area * 180;
    let savingsMultiplier = 0;
    if (insulationLevel === 'kompletni') savingsMultiplier = 0.60;
    if (insulationLevel === 'okna') savingsMultiplier = 0.15;
    if (insulationLevel === 'strecha') savingsMultiplier = 0.20;
    if (insulationLevel === 'fasada') savingsMultiplier = 0.30;
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
    if (!hasDocs) {
      basePrice += buildingType === 'rodinny' ? 2000 : 5000;
    }
    setPenbPrice(basePrice);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-neutral-950 text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="Energetické kalkulačky" 
            className="w-full h-full object-cover opacity-50 mix-blend-screen"
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
              Analytické nástroje
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Spočítejte si <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">své možnosti.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-medium">
              Využijte naše chytré kalkulačky pro okamžitý odhad úspor nebo předběžnou kalkulaci ceny za zpracování průkazu PENB.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Kalkulačka úspor */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-neutral-50 rounded-[2.5rem] border border-neutral-200 overflow-hidden flex flex-col shadow-xl shadow-neutral-200/50"
          >
            <div className="bg-white p-10 border-b border-neutral-100 flex items-center">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mr-6 border border-orange-100">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-neutral-950 tracking-tight">Kalkulačka úspor</h2>
                <p className="text-neutral-500 font-medium text-sm">Finanční potenciál zateplení</p>
              </div>
            </div>
            
            <div className="p-10 flex-grow flex flex-col">
              <div className="space-y-8 flex-grow">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-bold text-neutral-950">Podlahová plocha domu</label>
                    <span className="text-sm font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-full">{area} m²</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" max="400" step="10"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-3 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-neutral-950 mb-3">Způsob vytápění</label>
                  <select 
                    value={heatingType}
                    onChange={(e) => setHeatingType(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl border border-neutral-200 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-white font-medium text-neutral-700 shadow-sm"
                  >
                    <option value="plyn">Zemní plyn</option>
                    <option value="elektrina">Elektřina (přímotop či elektrokotel)</option>
                    <option value="drevo">Dřevo / Pelety</option>
                    <option value="uhli">Uhlí</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-950 mb-3">Plánované opatření</label>
                  <select 
                    value={insulationLevel}
                    onChange={(e) => setInsulationLevel(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl border border-neutral-200 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-white font-medium text-neutral-700 shadow-sm"
                  >
                    <option value="kompletni">Kompletní zateplení (fasáda, střecha, okna)</option>
                    <option value="fasada">Zateplení fasády</option>
                    <option value="strecha">Zateplení střechy nebo půdy</option>
                    <option value="okna">Výměna oken a dveří</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={calculateSavings}
                className="w-full mt-10 bg-neutral-950 hover:bg-neutral-800 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-neutral-900/20 text-lg active:scale-[0.98]"
              >
                Spočítat analýzu
              </button>

              {savingsResult !== null && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 bg-orange-600 rounded-2xl p-8 text-center text-white shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full translate-x-12 -translate-y-12"></div>
                  <p className="text-orange-100 font-medium mb-2 text-sm uppercase tracking-wider">Předpokládaná roční úspora</p>
                  <p className="text-4xl md:text-5xl font-black mb-6">
                    {Math.round(savingsResult).toLocaleString('cs-CZ')} <span className="text-2xl font-bold opacity-80">Kč</span>
                  </p>
                  <div className="flex items-start text-left bg-black/20 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                    <Info className="w-5 h-5 text-orange-200 mr-3 shrink-0 mt-0.5" />
                    <p className="text-xs text-orange-100 leading-relaxed font-medium">
                      Modelový výpočet je hrubý odhad z průměrných hodnot. Přesná úspora vyžaduje podrobný energetický posudek budovy.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Kalkulačka ceny PENB */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neutral-50 rounded-[2.5rem] border border-neutral-200 overflow-hidden flex flex-col shadow-xl shadow-neutral-200/50"
          >
            <div className="bg-white p-10 border-b border-neutral-100 flex items-center">
              <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mr-6 border border-neutral-200">
                <Home className="w-6 h-6 text-neutral-950" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-neutral-950 tracking-tight">Kalkulátor PENB</h2>
                <p className="text-neutral-500 font-medium text-sm">Odhad ceny za zpracování štítku</p>
              </div>
            </div>
            
            <div className="p-10 flex-grow flex flex-col">
              <div className="space-y-8 flex-grow">
                <div>
                  <label className="block text-sm font-bold text-neutral-950 mb-3">Typ budovy</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button 
                      onClick={() => setBuildingType('rodinny')}
                      className={`py-4 px-3 rounded-2xl text-sm font-bold border transition-all ${buildingType === 'rodinny' ? 'bg-neutral-950 border-neutral-950 text-white shadow-lg shadow-neutral-900/30' : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400'}`}
                    >
                      Rodinný dům
                    </button>
                    <button 
                      onClick={() => setBuildingType('bytovy')}
                      className={`py-4 px-3 rounded-2xl text-sm font-bold border transition-all ${buildingType === 'bytovy' ? 'bg-neutral-950 border-neutral-950 text-white shadow-lg shadow-neutral-900/30' : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400'}`}
                    >
                      Bytový dům
                    </button>
                    <button 
                      onClick={() => setBuildingType('ostatni')}
                      className={`py-4 px-3 rounded-2xl text-sm font-bold border transition-all ${buildingType === 'ostatni' ? 'bg-neutral-950 border-neutral-950 text-white shadow-lg shadow-neutral-900/30' : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400'}`}
                    >
                      Komerční
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-bold text-neutral-950">Podlahová plocha prostoru</label>
                    <span className="text-sm font-black text-neutral-950 bg-neutral-200 px-3 py-1 rounded-full">{penbArea} m²</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" max={buildingType === 'rodinny' ? 400 : 2000} step="10"
                    value={penbArea}
                    onChange={(e) => setPenbArea(Number(e.target.value))}
                    className="w-full h-3 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-neutral-950 mb-4">Dostupnost projektové dokumentace</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button 
                      onClick={() => setHasDocs(true)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${hasDocs ? 'border-orange-500 bg-orange-50' : 'border-neutral-200 bg-white hover:border-orange-200'}`}
                    >
                      <span className={`text-base font-bold mb-1 ${hasDocs ? 'text-orange-700' : 'text-neutral-700'}`}>Mám výkresy</span>
                      <span className={`text-xs font-medium ${hasDocs ? 'text-orange-600' : 'text-neutral-500'}`}>Rychlejší proces</span>
                    </button>
                    <button 
                      onClick={() => setHasDocs(false)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${!hasDocs ? 'border-orange-500 bg-orange-50' : 'border-neutral-200 bg-white hover:border-orange-200'}`}
                    >
                      <span className={`text-base font-bold mb-1 ${!hasDocs ? 'text-orange-700' : 'text-neutral-700'}`}>Nutné zaměření</span>
                      <span className={`text-xs font-medium ${!hasDocs ? 'text-orange-600' : 'text-neutral-500'}`}>Za příplatek</span>
                    </button>
                  </div>
                </div>
              </div>

              <button 
                onClick={calculatePenbPrice}
                className="w-full mt-10 bg-orange-600 hover:bg-orange-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-orange-600/20 text-lg active:scale-[0.98]"
              >
                Spočítat cenový odhad
              </button>

              {penbPrice !== null && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 bg-white border border-neutral-200 rounded-2xl p-8 text-center shadow-lg"
                >
                  <p className="text-neutral-500 font-bold mb-2 text-sm uppercase tracking-wider">Předpokládaná cena PENB</p>
                  <p className="text-4xl font-black text-neutral-950 mb-6">
                    od {penbPrice.toLocaleString('cs-CZ')} <span className="text-xl font-bold text-neutral-400">Kč</span>
                  </p>
                  <Link to="/kontakty" className="inline-flex items-center justify-center w-full bg-neutral-50 border border-neutral-200 hover:border-neutral-400 hover:bg-white text-neutral-950 font-bold py-4 rounded-xl transition-all shadow-sm">
                    Poptat závaznou cenu <ArrowRight className="ml-3 w-5 h-5 text-orange-500" />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

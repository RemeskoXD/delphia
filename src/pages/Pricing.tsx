export default function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="Ceník služeb" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ceník služeb</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Transparentní ceny za profesionální energetické služby. Pro přesnou kalkulaci nás neváhejte kontaktovat.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-16 max-w-4xl mx-auto">
          <div className="bg-black text-white px-6 py-4">
            <h2 className="text-xl font-bold">Vzorový ceník (vč. 21% DPH)</h2>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="flex justify-between items-center px-6 py-4 hover:bg-slate-50 transition-colors">
              <span className="text-slate-700 font-medium">Bytová jednotka (PENB)</span>
              <span className="text-black font-bold text-lg">2 900 Kč</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 hover:bg-slate-50 transition-colors">
              <span className="text-slate-700 font-medium">Rodinný dům (Standardní RD, PENB)</span>
              <span className="text-black font-bold text-lg">4 990 Kč</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 hover:bg-slate-50 transition-colors">
              <span className="text-slate-700 font-medium">Větší / složitý RD (&gt;200 m²)</span>
              <span className="text-black font-bold text-lg">7 500 Kč</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 hover:bg-slate-50 transition-colors">
              <span className="text-slate-700 font-medium">Bytový dům (do 15 bytů)</span>
              <span className="text-black font-bold text-lg">12 500 Kč</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 hover:bg-slate-50 transition-colors">
              <span className="text-slate-700 font-medium">Velký panelový dům (15+ bytů)</span>
              <span className="text-black font-bold text-lg">od 18 000 Kč</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 hover:bg-slate-50 transition-colors">
              <span className="text-slate-700 font-medium">Komerční objekty (Administrativa, haly)</span>
              <span className="text-black font-bold text-lg">Individuálně</span>
            </div>
          </div>
        </div>

        <div className="bg-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Potřebujete přesnou cenovou nabídku?</h2>
          <p className="mb-6 text-orange-100">Vyplňte náš poptávkový formulář a my se vám obratem ozveme s kalkulací na míru.</p>
          <a href="/kontakty" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors">
            Přejít na kontakty
          </a>
        </div>
      </div>
    </div>
  );
}

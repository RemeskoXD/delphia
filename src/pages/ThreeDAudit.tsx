import { Link } from 'react-router-dom';
import { Box, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ThreeDAudit() {
  return (
    <div className="bg-white min-h-screen">
            <div className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="3D Audit budov" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">3D Audit budov</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Moderní 3D skenování a pasportizace budov pro přesné zaměření, tvorbu dokumentace a zefektivnění správy nemovitostí.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Přesná data pro vaše projekty</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Využíváme nejmodernější technologie pro 3D skenování budov. Získáte tak naprosto přesný digitální model (digitální dvojče) vaší nemovitosti, který je neocenitelný při plánování rekonstrukcí, správě budovy (BIM) nebo prodeji.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong>Milimetrová přesnost:</strong> Zachytíme každý detail vaší budovy.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong>Rychlost:</strong> Skenování je mnohem rychlejší než klasické zaměřování.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong>Komplexní výstupy:</strong> 2D půdorysy, 3D modely, mračna bodů.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
            <Box className="w-24 h-24 text-orange-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-black mb-4">Posuňte správu budov do 21. století</h3>
            <p className="text-slate-600 mb-8">
              Získejte dokonalý přehled o svých nemovitostech díky 3D auditu.
            </p>
            <Link to="/kontakty" className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Poptat 3D Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

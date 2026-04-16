import { Link } from 'react-router-dom';
import { Bot, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AIAudit() {
  return (
    <div className="bg-white min-h-screen">
            <div className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="AI Audit (EU AI Act)" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Audit (EU AI Act)</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Zajistíme pro vás kompletní audit systémů umělé inteligence podle nové evropské legislativy. Nechte starosti na nás a mějte klid.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Povinnost ze zákona (EU AI Act)</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Akt o umělé inteligenci (EU AI Act) zavádí nová pravidla a povinnosti pro firmy, které vyvíjejí nebo využívají systémy umělé inteligence. Zanedbání těchto povinností může vést k vysokým pokutám.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              My se o vše postaráme. Provedeme důkladný audit vašich systémů, zhodnotíme rizika a navrhneme opatření, abyste byli plně v souladu s legislativou.
            </p>
            <a href="https://asociace.ai/eu-ai-act/" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center mb-8">
              Více informací o EU AI Act <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-700">Kompletní analýza vašich AI systémů.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-700">Kategorizace rizik podle EU AI Act.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-700">Návrh a implementace nápravných opatření.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
            <Bot className="w-24 h-24 text-orange-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-black mb-4">Mějte klid a jistotu</h3>
            <p className="text-slate-600 mb-8">
              Svěřte audit do rukou odborníků. Vyhnete se sankcím a získáte jistotu, že vaše podnikání je v bezpečí.
            </p>
            <Link to="/kontakty" className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Poptat AI Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

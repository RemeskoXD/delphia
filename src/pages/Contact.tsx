import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
            <div className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://delphia.sk/images/breadcrumb/Header1920new4.jpg" 
            alt="Kontaktujte nás" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontaktujte nás</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Máte dotaz nebo potřebujete cenovou nabídku? Jsme tu pro vás.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-8">Kontaktní údaje</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Sídlo společnosti</h3>
                  <p className="text-slate-600 mt-1">
                    Delphia Czech s.r.o.<br />
                    Václavské náměstí 1<br />
                    110 00 Praha 1<br />
                    Česká republika
                  </p>
                  <p className="text-sm text-slate-500 mt-2">IČO: 12345678, DIČ: CZ12345678</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Telefon</h3>
                  <p className="text-slate-600 mt-1">+420 602 655 046</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-black text-lg">E-mail</h3>
                  <p className="text-slate-600 mt-1">info@delphiaenergy.cz</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Pracovní doba</h3>
                  <p className="text-slate-600 mt-1">
                    Po - Pá: 8:00 - 16:30<br />
                    So - Ne: Zavřeno
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h2 className="text-2xl font-bold text-black mb-6">Napište nám</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Jméno a příjmení</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="Jan Novák" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="+420 ..." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="jan@novak.cz" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">O jakou službu máte zájem?</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white">
                  <option>PENB - Rodinný dům</option>
                  <option>PENB - Bytový dům</option>
                  <option>PENB - Ostatní budovy</option>
                  <option>ESG a CO2 Reporting</option>
                  <option>Jiné / Dotaz</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Zpráva</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none" placeholder="Dobrý den, potřeboval bych..."></textarea>
              </div>

              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-colors">
                Odeslat poptávku
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

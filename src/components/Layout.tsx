import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLabelsDropdownOpen, setIsLabelsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Domů', path: '/' },
    { name: 'Ceník', path: '/cenik' },
    { name: 'CO2/ESG', path: '/esg' },
    { name: 'Kalkulačky', path: '/kalkulacky' },
    { name: 'O nás', path: '/o-nas' },
    { name: 'Kontakty', path: '/kontakty' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-800 bg-slate-50">
      {/* Top Bar - Ultra Premium Dark */}
      <div className="bg-neutral-950 text-neutral-300 py-1.5 px-4 text-xs font-medium tracking-wide hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+420602655046" className="flex items-center hover:text-white transition-colors duration-200"><Phone className="w-3.5 h-3.5 mr-2" /> +420 602 655 046</a>
            <a href="mailto:info@delphiaenergy.cz" className="flex items-center hover:text-white transition-colors duration-200"><Mail className="w-3.5 h-3.5 mr-2" /> info@delphiaenergy.cz</a>
          </div>
          <div className="text-neutral-500 uppercase tracking-widest text-[10px]">Komplexní energetické služby v ČR</div>
        </div>
      </div>

      {/* Main Navigation - Floating Glassmorphism */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-neutral-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px] md:h-[88px]">
            {/* Logo */}
            <Link to="/" className="flex items-center relative z-10 w-48 md:w-[17rem] shrink-0 h-full group">
              <img src="https://web2.itnahodinu.cz/delphia/logod.png" alt="Delphia Logo" className="h-[105px] md:h-[150px] absolute -top-4 md:-top-7 left-0 transition-transform duration-500 group-hover:scale-105 origin-left" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link to="/" className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-neutral-100 ${isActive('/') ? 'text-black bg-neutral-100/50' : 'text-neutral-600'}`}>Domů</Link>
              
              {/* Dropdown for Energetické štítky */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsLabelsDropdownOpen(true)}
                onMouseLeave={() => setIsLabelsDropdownOpen(false)}
              >
                <Link 
                  to="/energeticke-stitky" 
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-neutral-100 ${location.pathname.includes('/energeticke-stitky') ? 'text-black bg-neutral-100/50' : 'text-neutral-600'}`}
                >
                  Energetický certifikát <ChevronDown className="w-3.5 h-3.5 ml-1.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                
                {isLabelsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl py-3 border border-neutral-200/50 opacity-100 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 pb-2 mb-2 border-b border-neutral-100/80 text-[10px] uppercase font-bold tracking-wider text-neutral-400">Naše služby</div>
                    <Link to="/energeticke-stitky/rodinne-domy" className="block px-5 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-orange-600 transition-colors">Rodinné domy</Link>
                    <Link to="/energeticke-stitky/bytove-domy" className="block px-5 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-orange-600 transition-colors">Bytové domy</Link>
                    <Link to="/energeticke-stitky/ostatni-budovy" className="block px-5 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-orange-600 transition-colors">Ostatní budovy</Link>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-neutral-100 ${isActive(link.path) ? 'text-black bg-neutral-100/50' : 'text-neutral-600'}`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pl-4 ml-2 border-l border-neutral-200">
                <Link to="/kontakty" className="bg-neutral-950 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(234,88,12,0.3)] hover:-translate-y-0.5 inline-block">
                  Poptávka
                </Link>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-orange-600 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">Domů</Link>
              
              <div className="px-3 py-2">
                <Link to="/energeticke-stitky" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-700 hover:text-orange-600">Energetický certifikát</Link>
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-orange-100">
                  <Link to="/energeticke-stitky/rodinne-domy" onClick={() => setIsMenuOpen(false)} className="block text-sm text-slate-600 hover:text-orange-600">Rodinné domy</Link>
                  <Link to="/energeticke-stitky/bytove-domy" onClick={() => setIsMenuOpen(false)} className="block text-sm text-slate-600 hover:text-orange-600">Bytové domy</Link>
                  <Link to="/energeticke-stitky/ostatni-budovy" onClick={() => setIsMenuOpen(false)} className="block text-sm text-slate-600 hover:text-orange-600">Ostatní budovy</Link>
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Ultra Premium Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-20 border-t border-white/5 relative overflow-hidden">
        {/* Subtle decorative background light */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            <div className="col-span-1 md:col-span-12 lg:col-span-4">
              <Link to="/" className="inline-block mb-8 group -ml-4">
                <img src="https://web2.itnahodinu.cz/delphia/logodelphia.png" alt="Delphia Logo" className="h-[120px] md:h-[160px] object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,165,0,0.2)]" />
              </Link>
              <p className="text-sm font-medium leading-relaxed max-w-sm mb-6 text-neutral-400">
                Lídr v inovacích a poskytování komplexních energetických služeb. Spojujeme inženýrskou přesnost s nejmodernějšími technologiemi, abychom zaručili tu nejvyšší kvalitu pro domácnosti i nadnárodní korporace.
              </p>
            </div>
            
            <div className="md:col-span-4 lg:col-span-2">
              <h3 className="text-white font-bold tracking-widest text-[11px] uppercase mb-6 opacity-80">Služby</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/energeticke-stitky/rodinne-domy" className="hover:text-white transition-colors duration-300">PENB Domácnosti</Link></li>
                <li><Link to="/energeticke-stitky/bytove-domy" className="hover:text-white transition-colors duration-300">PENB Bytové domy</Link></li>
                <li><Link to="/esg" className="hover:text-white transition-colors duration-300">CO2 a ESG Reporting</Link></li>
                <li><Link to="/ai-audit" className="hover:text-white transition-colors duration-300">AI Audit (EU legislativa)</Link></li>
                <li><Link to="/3d-audit" className="hover:text-white transition-colors duration-300">3D Pasportizace</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-white font-bold tracking-widest text-[11px] uppercase mb-6 opacity-80">Společnost</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/o-nas" className="hover:text-white transition-colors duration-300">O společnosti & Příběh</Link></li>
                <li><Link to="/cenik" className="hover:text-white transition-colors duration-300">Ceník a tarify</Link></li>
                <li><Link to="/kalkulacky" className="hover:text-white transition-colors duration-300">Analytické nástroje</Link></li>
                <li><Link to="/kontakty" className="hover:text-white transition-colors duration-300">Spojte se s námi</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-white font-bold tracking-widest text-[11px] uppercase mb-6 opacity-80">Kontakt & Headquarter</h3>
              <ul className="space-y-5 text-sm font-medium">
                <li className="flex items-start group">
                  <div className="mr-4 mt-0.5 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-orange-500/20 transition-colors shrink-0">
                    <MapPin className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="leading-relaxed">Václavské náměstí 1, 110 00<br/>Praha 1, Česká republika</span>
                </li>
                <li className="flex items-center group">
                  <div className="mr-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-orange-500/20 transition-colors shrink-0">
                    <Phone className="w-4 h-4 text-orange-400" />
                  </div>
                  <a href="tel:+420602655046" className="hover:text-white transition-colors">+420 602 655 046</a>
                </li>
                <li className="flex items-center group">
                  <div className="mr-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-orange-500/20 transition-colors shrink-0">
                    <Mail className="w-4 h-4 text-orange-400" />
                  </div>
                  <a href="mailto:info@delphiaenergy.cz" className="hover:text-white transition-colors">info@delphiaenergy.cz</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-semibold tracking-wide text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Delphia Czech s.r.o. Všechna exkluzivní práva vyhrazena.</p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <span className="hidden md:inline-block">Oficiální partner The Delphia Group</span>
              <div className="h-3 w-px bg-white/20 hidden md:block"></div>
              <Link to="/ochrana-osobnich-udaju" className="hover:text-white transition-colors">Ochrana soukromí (GDPR)</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

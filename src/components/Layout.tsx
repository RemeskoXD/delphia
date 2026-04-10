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
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Top Bar */}
      <div className="bg-orange-600 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +420 602 655 046</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@delphiaenergy.cz</span>
          </div>
          <div>Komplexní energetické služby v ČR</div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center relative z-10 w-40 md:w-56 shrink-0 h-full">
              <img src="/delphialogo.webp" alt="Delphia Logo" className="h-20 md:h-28 absolute top-0 left-0" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className={`font-medium transition-colors hover:text-orange-600 ${isActive('/') ? 'text-orange-600' : 'text-slate-600'}`}>Domů</Link>
              
              {/* Dropdown for Energetické štítky */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsLabelsDropdownOpen(true)}
                onMouseLeave={() => setIsLabelsDropdownOpen(false)}
              >
                <Link 
                  to="/energeticke-stitky" 
                  className={`flex items-center font-medium transition-colors hover:text-orange-600 ${location.pathname.includes('/energeticke-stitky') ? 'text-orange-600' : 'text-slate-600'}`}
                >
                  Energetický certifikát <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                
                {isLabelsDropdownOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-b-lg py-2 border border-slate-100">
                    <Link to="/energeticke-stitky/rodinne-domy" className="block px-4 py-2 text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600">Rodinné domy</Link>
                    <Link to="/energeticke-stitky/bytove-domy" className="block px-4 py-2 text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600">Bytové domy</Link>
                    <Link to="/energeticke-stitky/ostatni-budovy" className="block px-4 py-2 text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600">Ostatní budovy</Link>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`font-medium transition-colors hover:text-orange-600 ${isActive(link.path) ? 'text-orange-600' : 'text-slate-600'}`}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link to="/kontakty" className="bg-orange-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-orange-700 transition-colors shadow-sm">
                Poptávka
              </Link>
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

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center mb-4">
                <img src="/delphialogo.webp" alt="Delphia Logo" className="h-20 md:h-24 bg-white rounded p-1" />
              </Link>
              <p className="text-sm text-slate-400 mb-4">
                Komplexní a spolehlivé energetické služby v České republice. Pomáháme snižovat náklady a zvyšovat komfort budov.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Služby</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/energeticke-stitky/rodinne-domy" className="hover:text-orange-400 transition-colors">Štítky pro rodinné domy</Link></li>
                <li><Link to="/energeticke-stitky/bytove-domy" className="hover:text-orange-400 transition-colors">Štítky pro bytové domy</Link></li>
                <li><Link to="/energeticke-stitky/ostatni-budovy" className="hover:text-orange-400 transition-colors">Štítky pro ostatní budovy</Link></li>
                <li><Link to="/esg" className="hover:text-orange-400 transition-colors">CO2 a ESG reporting</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Odkazy</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/o-nas" className="hover:text-orange-400 transition-colors">O společnosti</Link></li>
                <li><Link to="/cenik" className="hover:text-orange-400 transition-colors">Ceník služeb</Link></li>
                <li><Link to="/kalkulacky" className="hover:text-orange-400 transition-colors">Kalkulačky</Link></li>
                <li><Link to="/kontakty" className="hover:text-orange-400 transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 text-orange-500 shrink-0" />
                  <span>Václavské náměstí 1, 110 00 Praha 1<br/>Česká republika</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-orange-500 shrink-0" />
                  <span>+420 602 655 046</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-orange-500 shrink-0" />
                  <span>info@delphiaenergy.cz</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Delphia CZ s.r.o. Všechna práva vyhrazena.</p>
            <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link to="/ochrana-osobnich-udaju" className="hover:text-orange-400 transition-colors">Ochrana osobních údajů (GDPR)</Link>
              <p>Franšíza slovenské společnosti Delphia s.r.o.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import EnergyLabels from './pages/EnergyLabels';
import FamilyHouses from './pages/EnergyLabels/FamilyHouses';
import ApartmentBuildings from './pages/EnergyLabels/ApartmentBuildings';
import OtherBuildings from './pages/EnergyLabels/OtherBuildings';
import Pricing from './pages/Pricing';
import ESG from './pages/ESG';
import Calculators from './pages/Calculators';
import Contact from './pages/Contact';
import About from './pages/About';
import GDPR from './pages/GDPR';
import AIAudit from './pages/AIAudit';
import ThreeDAudit from './pages/ThreeDAudit';
import NotFound from './pages/NotFound';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while splash screen is active
    if (loading) {
      document.body.style.overflow = 'hidden';
      
      // Unlock scroll and remove splash after 2.5s (time for progress + sweep)
      const timer = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'unset';
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="splash" />}
      </AnimatePresence>

      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000 delay-300"}>
        <Router>
          <ScrollToTop />
          <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="energeticke-stitky" element={<EnergyLabels />}>
            <Route path="rodinne-domy" element={<FamilyHouses />} />
            <Route path="bytove-domy" element={<ApartmentBuildings />} />
            <Route path="ostatni-budovy" element={<OtherBuildings />} />
          </Route>
          <Route path="cenik" element={<Pricing />} />
          <Route path="esg" element={<ESG />} />
          <Route path="kalkulacky" element={<Calculators />} />
          <Route path="kontakty" element={<Contact />} />
          <Route path="o-nas" element={<About />} />
          <Route path="ochrana-osobnich-udaju" element={<GDPR />} />
          <Route path="ai-audit" element={<AIAudit />} />
          <Route path="3d-audit" element={<ThreeDAudit />} />
        </Route>
        {/* Catch-all 404 Route outside Layout so it fills the screen */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

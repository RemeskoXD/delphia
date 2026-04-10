/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
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

export default function App() {
  return (
    <Router>
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
        </Route>
      </Routes>
    </Router>
  );
}

import { Shield, Lock, FileText, CheckCircle } from 'lucide-react';

export default function GDPR() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Podmínky zpracování osobních údajů</h1>
          <p className="text-lg text-slate-600">
            Informace o tom, jak společnost Delphia CZ s.r.o. chrání a zpracovává vaše osobní údaje.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-orange-600">
          
          <h2 className="flex items-center text-2xl font-bold mt-0">
            <FileText className="w-6 h-6 mr-3 text-orange-500" />
            1. Správce osobních údajů
          </h2>
          <p>
            Správcem vašich osobních údajů je společnost <strong>Delphia CZ s.r.o.</strong>, se sídlem Václavské náměstí 1, 110 00 Praha 1, Česká republika.
          </p>
          <p>
            Kontaktní údaje správce:<br />
            E-mail: <a href="mailto:info@delphiaenergy.cz">info@delphiaenergy.cz</a><br />
            Telefon: +420 602 655 046
          </p>

          <h2 className="flex items-center text-2xl font-bold mt-12">
            <CheckCircle className="w-6 h-6 mr-3 text-orange-500" />
            2. Účely a právní základ zpracování
          </h2>
          <p>Vaše osobní údaje zpracováváme pro následující účely:</p>
          <ul>
            <li><strong>Plnění smlouvy:</strong> Zpracování nezbytné pro vyřízení vaší objednávky (např. vypracování PENB, energetického posudku) a komunikaci s vámi. Právním základem je plnění smlouvy.</li>
            <li><strong>Plnění právních povinností:</strong> Zpracování pro účely vedení účetnictví a daňové evidence. Právním základem je plnění právní povinnosti.</li>
            <li><strong>Oprávněný zájem:</strong> Ochrana našich práv a právních nároků, případně přímý marketing (pokud jste naším zákazníkem). Právním základem je oprávněný zájem správce.</li>
            <li><strong>Na základě souhlasu:</strong> Pokud jste nám udělili souhlas (např. pro zasílání newsletterů nebo použití cookies). Právním základem je váš souhlas.</li>
          </ul>

          <h2 className="flex items-center text-2xl font-bold mt-12">
            <Lock className="w-6 h-6 mr-3 text-orange-500" />
            3. Doba uchování osobních údajů
          </h2>
          <p>
            Vaše osobní údaje uchováváme pouze po dobu nezbytně nutnou k účelu jejich zpracování:
          </p>
          <ul>
            <li>Po dobu trvání smluvního vztahu.</li>
            <li>Po dobu vyžadovanou příslušnými právními předpisy (např. účetní a daňové doklady uchováváme po dobu 10 let).</li>
            <li>Do odvolání souhlasu (v případě zpracování na základě souhlasu).</li>
            <li>Do uplatnění oprávněné námitky (v případě zpracování na základě oprávněného zájmu).</li>
          </ul>

          <h2 className="flex items-center text-2xl font-bold mt-12">
            <Shield className="w-6 h-6 mr-3 text-orange-500" />
            4. Příjemci osobních údajů
          </h2>
          <p>
            Vaše osobní údaje mohou být zpřístupněny následujícím subjektům:
          </p>
          <ul>
            <li>Poskytovatelům IT služeb a hostingu.</li>
            <li>Externím účetním a daňovým poradcům.</li>
            <li>Autorizovaným inženýrům a energetickým specialistům podílejícím se na vypracování posudků.</li>
            <li>Státním orgánům v případě plnění zákonných povinností.</li>
          </ul>

          <h2 className="flex items-center text-2xl font-bold mt-12">
            <FileText className="w-6 h-6 mr-3 text-orange-500" />
            5. Vaše práva
          </h2>
          <p>V souvislosti se zpracováním osobních údajů máte následující práva:</p>
          <ul>
            <li><strong>Právo na přístup:</strong> Máte právo vědět, jaké údaje o vás zpracováváme.</li>
            <li><strong>Právo na opravu:</strong> Můžete požádat o opravu nepřesných nebo neúplných údajů.</li>
            <li><strong>Právo na výmaz (právo být zapomenut):</strong> Můžete požádat o smazání svých údajů, pokud již nejsou potřebné pro dané účely.</li>
            <li><strong>Právo na omezení zpracování:</strong> V určitých případech můžete požádat o omezení zpracování.</li>
            <li><strong>Právo na přenositelnost údajů:</strong> Máte právo získat své údaje ve strukturovaném formátu.</li>
            <li><strong>Právo vznést námitku:</strong> Můžete vznést námitku proti zpracování na základě oprávněného zájmu.</li>
            <li><strong>Právo odvolat souhlas:</strong> Pokud je zpracování založeno na souhlasu, můžete jej kdykoliv odvolat.</li>
          </ul>
          <p>
            Pro uplatnění svých práv nás kontaktujte na e-mailu <a href="mailto:info@delphiaenergy.cz">info@delphiaenergy.cz</a>. Pokud se domníváte, že s vašimi údaji nenakládáme v souladu se zákonem, máte právo podat stížnost u Úřadu pro ochranu osobních údajů (ÚOOÚ).
          </p>
          
          <div className="mt-12 pt-8 border-t border-slate-100 text-sm text-slate-500">
            Tyto podmínky jsou platné a účinné od 1. ledna 2024.
          </div>
        </div>
      </div>
    </div>
  );
}

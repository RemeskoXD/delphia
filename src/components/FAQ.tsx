import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Jak dlouho trvá vypracování energetického štítku (PENB)?",
    answer: "Standardní doba vypracování je u nás 48 hodin od chvíle, kdy máme k dispozici všechny potřebné podklady. Pokud na štítek opravdu spěcháte kvůli prodeji či kolaudaci, umíme nasadit expresní proces a dokumentaci připravit i dříve."
  },
  {
    question: "Mám zájem o PENB, ale nemám k nemovitosti stavební výkresy.",
    answer: "To je pro nás zcela běžná situace. Náš tým k vám vyšle technika, který provede takzvané zaměření a 3D pasportizaci objektu laserovým skenerem. Dokumentaci si sami zaměříme, překreslíme do CAD systémů a štítek vypracujeme z reálného stavu budovy."
  },
  {
    question: "Proč se zaměřujete i na AI Audity a EU AI Act?",
    answer: "EU legislativa (AI Act) zavádí od roku 2024 přísná pravidla pro firemní nasazování umělé inteligence. Díky našemu inženýrskému backgroundu jsme vybudovali specializovaný tým, který posuzuje rizika AI modelů (od chatbotů po výrobní AI) a zajišťuje firmám certifikaci a ochranu před likvidačními pokutami."
  },
  {
    question: "Jsou vaše služby dostupné celorepublikově?",
    answer: "Ano, působíme stabilně na území celé České i Slovenské republiky. Ať už máte bytový dům v Praze, továrnu v Ostravě nebo penzion v Tatrách, garantujeme stejnou rychlost a dojezdovou dostupnost našich expertů bez skrytých poplatků."
  },
  {
    question: "Musím ESG report zpracovat do určitého termínu?",
    answer: "Záleží na velikosti vaší firmy. Implementace směrnice CSRD nabíhá postupně. Ale i menší firmy spadající do dodavatelského řetězce velkých korporátů musí sdílet data o uhlíkové stopě prakticky okamžitě, jinak obrovsky riskují ztrátu zakázek. Rádi vám uděláme nezávaznou analýzu, zda a kdy se vás povinnost týká."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-950 tracking-tighter mb-6">
            Nejčastější dotazy
          </h2>
          <p className="text-lg text-neutral-500 font-medium max-w-2xl mx-auto">
            Transparentnost je naším standardem. Tady jsou odpovědi na to, co zajímá naše klienty nejčastěji. Nejde o sliby, ale o jasná fakta.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl md:rounded-[2rem] border overflow-hidden transition-colors duration-300 ${isOpen ? 'border-orange-500/50 shadow-lg shadow-orange-500/5' : 'border-neutral-200 hover:border-neutral-300'}`}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full text-left px-6 py-6 md:px-10 md:py-8 flex justify-between items-center focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/20"
                >
                  <span className="text-lg md:text-xl font-bold text-neutral-900 pr-8">{faq.question}</span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-orange-500 text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 md:px-10 md:pb-8 text-neutral-500 font-medium text-lg leading-relaxed border-t border-neutral-100 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

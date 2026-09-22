import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check, HelpCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function FAQ() {
  const { t, lang } = useLanguage();
  // Default open first question
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleOpen = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const faqs = [
    { q: t('faq_q1'), a: t('faq_a1') },
    { q: t('faq_q2'), a: t('faq_a2') },
    { q: t('faq_q3'), a: t('faq_a3') },
    { q: t('faq_q4'), a: t('faq_a4') },
  ];

  return (
    <section className="w-full pt-8 pb-12 border-t border-[#087ca7]/20" id="faq">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#031a6b] mb-2 tracking-tight">
          {t('faq')}
        </h2>
        <p className="text-base sm:text-lg text-ink-600 max-w-2xl leading-relaxed">
          {lang === 'el' 
            ? 'Όλα όσα χρειάζεται να γνωρίζετε για την ενοικίαση στην Κω, ξεκάθαρα και απλά.'
            : 'Everything you need to know about renting a car in Kos, clear and straightforward.'}
        </p>
      </motion.div>

      {/* 2-Column Grid on Desktop, Single Column on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);

          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => toggleOpen(index)}
              className={`w-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between ${
                isOpen 
                  ? 'border-2 border-[#05b2dc] ring-1 ring-[#05b2dc]/20 min-h-[190px] md:h-[200px]' 
                  : 'border border-[#087ca7]/20 hover:border-[#087ca7]/60 min-h-[76px] sm:h-[80px] justify-center'
              }`}
            >
              {/* Question Header & Toggle Button */}
              <div className="w-full flex items-center justify-between gap-3 text-left">
                <h3 className="font-bold text-sm sm:text-base text-[#031a6b] transition-colors leading-snug flex-1 pr-2">
                  {faq.q}
                </h3>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  isOpen ? 'bg-[#004385] text-[#05b2dc]' : 'bg-[#f0f9fd] text-[#087ca7]'
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {/* Collapsible Answer Body */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden mt-3 pt-3 border-t border-[#087ca7]/15 flex flex-col justify-between flex-grow"
                  >
                    <p className="text-ink-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {faq.a}
                    </p>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#087ca7] font-semibold">
                      <span className="flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-[#05b2dc]" />
                        {lang === 'el' ? 'Εγγύηση Meltemi Rentals' : 'Meltemi Guarantee'}
                      </span>
                      <span className="text-ink-400 font-mono text-[10px]">
                        Kos Island
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


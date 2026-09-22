import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function ComparisonTable() {
  const { t } = useLanguage();

  const comparisonData = [
    { label: t('base_price'), meltemi: "35€" },
    { label: t('mixed_insurance'), meltemi: t('included') },
    { label: t('airport_delivery'), meltemi: t('free') },
    { label: t('card_hold'), meltemi: "0€" },
  ];

  return (
    <section className="w-full pt-8 border-t border-sand-200" id="pricing">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h2 className="font-serif text-3xl font-bold text-ink-900 mb-2">
          {t('real_price')}
        </h2>
        <p className="text-lg text-ink-500">
          {t('compare_costs')}
        </p>
      </motion.div>

      <div className="w-full bg-white border border-sand-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="w-full flex flex-col">
          {/* Header Row */}
          <div className="grid grid-cols-2 bg-ink-900 text-white border-b border-ink-800">
            <div className="p-4 md:p-6 font-bold text-sm md:text-lg uppercase tracking-widest flex items-center">{t('feature')}</div>
            <div className="p-4 md:p-6 font-bold text-sm md:text-lg bg-aegean-600 text-white flex items-center">Meltemi Rentals</div>
          </div>

          {/* Data Rows */}
          {comparisonData.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              key={index} 
              className="grid grid-cols-2 border-b border-sand-200 bg-white group hover:bg-sand-50 transition-colors last:border-b-0"
            >
              <div className="p-4 md:p-6 font-serif text-lg font-bold text-ink-900 flex items-center break-words">
                {item.label}
              </div>
              <div className="p-4 md:p-6 text-base font-bold text-aegean-700 bg-aegean-50/50 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3">
                <Check className="w-5 h-5 text-aegean-600 flex-shrink-0" />
                <span className="break-words">{item.meltemi}</span>
              </div>
            </motion.div>
          ))}

          {/* Final Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 bg-sun-500 text-white"
          >
            <div className="p-4 md:p-6 font-serif text-xl font-bold flex items-center break-words">
              {t('final_cost')}
            </div>
            <div className="p-4 md:p-6 text-2xl font-black bg-ink-900 text-white flex flex-col sm:flex-row items-start sm:items-center">
              35€ <span className="text-sm font-normal sm:ml-2 opacity-80">{t('per_day')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

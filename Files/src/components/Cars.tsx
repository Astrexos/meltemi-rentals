import { getCars } from "../data";
import { Users, DoorOpen, Wind, Settings2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

interface CarsProps {
  onSelectCategory?: (categoryId: string) => void;
}

export function Cars({ onSelectCategory }: CarsProps) {
  const { t, lang } = useLanguage();
  const cars = getCars(lang);

  const handleCardClick = (carId: string) => {
    if (onSelectCategory) {
      onSelectCategory(carId);
    }
  };

  return (
    <section className="w-full pt-8 pb-4 border-t border-[#087ca7]/20" id="fleet">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e0f3f9] text-[#004385] text-xs font-bold mb-2.5 border border-[#087ca7]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#087ca7]" />
            <span>{lang === 'el' ? 'Σύγχρονος Στόλος 2024-2025' : 'Modern Fleet 2024-2025'}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#031a6b] mb-2 tracking-tight">
            {t('our_fleet_new')}
          </h2>
          <p className="text-base sm:text-lg text-ink-600 max-w-2xl leading-relaxed">
            {t('fleet_desc')}
          </p>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-[#087ca7] bg-[#e0f3f9] px-3.5 py-1.5 rounded-full self-start md:self-auto border border-[#087ca7]/20">
          <span>{lang === 'el' ? 'Κάντε κλικ σε κατηγορία για αναλυτική προβολή 360°' : 'Click any category to explore 360° vehicle views'}</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {cars.map((car, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            key={car.id} 
            role="button"
            tabIndex={0}
            onClick={() => handleCardClick(car.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick(car.id);
              }
            }}
            className="group flex flex-col justify-between h-full bg-white border border-[#087ca7]/20 hover:border-[#05b2dc] rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 relative cursor-pointer text-left focus:outline-none focus:ring-4 focus:ring-[#05b2dc]/30"
          >
            {/* Transparent Studio Cutout Image Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] flex items-center justify-center p-3 sm:p-4">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Price HUD */}
              <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 bg-gradient-to-r from-[#031a6b] to-[#004385] border border-[#05b2dc]/40 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl font-extrabold text-[11px] sm:text-xs shadow-md flex items-center gap-0.5 sm:gap-1">
                <span>{car.price}€</span>
                <span className="text-[9px] sm:text-[10px] font-normal text-sand-100"> {t('per_day')}</span>
              </div>

              {/* Zero Excess Badge */}
              <div className="absolute bottom-2 left-2 sm:bottom-2.5 sm:left-2.5 bg-[#033860]/90 backdrop-blur text-[#05b2dc] px-1.5 py-0.5 sm:px-2 rounded-md font-bold text-[8px] sm:text-[10px] border border-[#05b2dc]/30 flex items-center gap-1 shadow-sm">
                <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#05b2dc]" />
                <span>{lang === 'el' ? '0€ Εγγύηση / 100% CDW' : '0€ Deposit / 100% CDW'}</span>
              </div>
            </div>
            
            <div className="p-3 sm:p-5 flex flex-col justify-between flex-grow">
              <div className="flex flex-col justify-start">
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <h3 className="font-serif text-sm sm:text-lg font-bold text-[#031a6b] leading-tight group-hover:text-[#004385] transition-colors">
                    {car.name}
                  </h3>
                  <div className="w-6 h-6 rounded-full bg-[#f0f9fd] group-hover:bg-[#004385] text-[#087ca7] group-hover:text-white flex items-center justify-center transition-all flex-shrink-0 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Practical Tagline */}
                {car.tagline && (
                  <p className="text-[11px] sm:text-xs text-slate-600 mb-2 font-medium leading-relaxed">
                    {car.tagline}
                  </p>
                )}

                {/* Fleet Models Badges (Clean, no numbers, no '+ ή παρόμοιο') */}
                <div className="flex flex-wrap gap-1 mb-2.5">
                  {car.modelsList.map((model, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center bg-[#f0f7fc] text-[#033860] border border-[#087ca7]/20 rounded-md px-1.5 py-0.5 text-[10px] sm:text-[11px] font-semibold"
                    >
                      {model}
                    </span>
                  ))}
                </div>

                {/* Value Highlights */}
                {car.highlights && car.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {car.highlights.slice(0, 2).map((hl, idx) => (
                      <span key={idx} className="inline-flex items-center text-[9px] sm:text-[10px] text-[#004385] font-bold bg-[#e0f3f9] border border-[#087ca7]/15 px-1.5 py-0.5 rounded">
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-1.5 pt-2 sm:pt-2.5 mt-1 border-t border-[#087ca7]/10">
                {car.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="min-h-[26px] sm:min-h-[28px] py-0.5 flex items-center justify-start gap-1 sm:gap-1.5 bg-[#f0f9fd] border border-[#087ca7]/15 rounded-md px-1.5 sm:px-2 text-[10px] sm:text-xs text-[#033860] font-semibold"
                  >
                    {idx === 0 && <Users className="w-3 h-3 text-[#087ca7] flex-shrink-0" />}
                    {idx === 1 && <DoorOpen className="w-3 h-3 text-[#087ca7] flex-shrink-0" />}
                    {idx === 2 && <Wind className="w-3 h-3 text-[#087ca7] flex-shrink-0" />}
                    {idx === 3 && <Settings2 className="w-3 h-3 text-[#087ca7] flex-shrink-0" />}
                    <span className="tracking-tight leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Click to view details button */}
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#004385] group-hover:text-[#087ca7] transition-colors">
                <span>{lang === 'el' ? 'Αναλυτική Προβολή' : 'Vehicle Showcase'}</span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#087ca7] group-hover:underline">
                  {lang === 'el' ? '4 Γωνίες & Specs →' : '4 Angles & Specs →'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

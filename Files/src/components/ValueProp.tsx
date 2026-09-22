import { 
  ShieldCheck, 
  Plane, 
  CreditCard, 
  Check
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function ValueProp() {
  const { t, lang } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as any }
  };

  const pillars = [
    {
      icon: ShieldCheck,
      badge: lang === 'el' ? 'ΜΗΔΕΝΙΚΗ ΑΠΑΛΛΑΓΗ' : 'ZERO EXCESS',
      title: lang === 'el' ? 'Πλήρης ασφάλεια χωρίς απαλλαγή' : 'Full Insurance Zero Excess',
      detail: lang === 'el' 
        ? 'Πλήρης μικτή ασφάλεια (CDW) για τζάμια, καθρέπτες, ελαστικά και κάτω μέρος χωρίς καμία κρυφή παρακράτηση.'
        : '100% Comprehensive CDW cover for glass, mirrors, tires, and undercarriage with zero deductible.',
      statNumber: '0€',
      statLabel: lang === 'el' ? 'Απαλλαγή' : 'Excess',
      tags: lang === 'el' 
        ? ['Τζάμια & Καθρέπτες', 'Ελαστικά', 'Κάτω Μέρος', '0€ Παρακράτηση'] 
        : ['Glass & Mirrors', 'Tires', 'Undercarriage', '0€ Deductible'],
      accentColor: 'from-[#004385] to-[#05b2dc]'
    },
    {
      icon: CreditCard,
      badge: lang === 'el' ? 'ΧΩΡΙΣ ΕΓΓΥΗΣΗ' : 'NO DEPOSIT HOLD',
      title: lang === 'el' ? 'Καμία δέσμευση σε πιστωτική κάρτα' : 'No Credit Card Hold',
      detail: lang === 'el' 
        ? 'Δεν δεσμεύουμε χρήματα στην πιστωτική σας κάρτα. Δεκτές χρεωστικές κάρτες και μετρητά.'
        : 'No funds frozen or blocked on your card. Debit cards and cash warmly accepted on arrival.',
      statNumber: '0€',
      statLabel: lang === 'el' ? 'Εγγύηση' : 'Hold',
      tags: lang === 'el'
        ? ['Χωρίς Πιστωτική', 'Δεκτά Μετρητά', 'Χρεωστικές Κάρτες', 'Πληρωμή Άφιξης']
        : ['No Credit Card', 'Cash Accepted', 'Debit Cards', 'Pay on Arrival'],
      accentColor: 'from-[#031a6b] to-[#087ca7]'
    },
    {
      icon: Plane,
      badge: lang === 'el' ? 'VIP PITSTOP' : 'EXPRESS DELIVERY',
      title: lang === 'el' ? 'Παράδοση & παραλαβή στο αεροδρόμιο' : 'Airport Meet & Greet Delivery',
      detail: lang === 'el' 
        ? 'Άμεση παράδοση των κλειδιών στην έξοδο των αφίξεων — χωρίς αναμονές και χωρίς λεωφορεία.'
        : 'Direct key handover right outside arrivals terminal — zero queues, zero shuttles.',
      statNumber: '0',
      statUnit: 'min',
      statLabel: lang === 'el' ? 'Αναμονή' : 'Wait',
      tags: lang === 'el'
        ? ['Έξοδος Αφίξεων', 'Χωρίς Λεωφορεία', 'Live Flight Tracking', 'Άμεση Παράδοση']
        : ['Terminal Exit', 'Zero Shuttles', 'Flight Tracking', 'Instant Handover'],
      accentColor: 'from-[#087ca7] to-[#05b2dc]'
    }
  ];

  return (
    <section className="w-full pt-6 pb-4" id="benefits">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="w-full"
      >
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#087ca7]/20">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#031a6b] tracking-tight">
              {t('included_title')}
            </h2>
            <p className="text-ink-600 text-base sm:text-lg mt-2 max-w-xl font-normal">
              {lang === 'el' 
                ? 'Κάθε κράτηση περιλαμβάνει όλα τα απαραίτητα για ξέγνοιαστη οδήγηση στην Κω, χωρίς κρυφές χρεώσεις.'
                : 'Every reservation includes everything needed for effortless, carefree driving across Kos Island.'}
            </p>
          </div>
        </div>

        {/* 3 Core Highlight Pillars with Flare */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#087ca7]/20 hover:border-[#05b2dc] transition-all duration-300 shadow-md hover:shadow-2xl overflow-hidden"
              >
                {/* Top Glowing Gradient Accent Bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${pillar.accentColor}`} />

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Telemetry Header: Badge + Big Hero Stat */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#031a6b] to-[#004385] text-[#05b2dc] group-hover:text-white flex items-center justify-center shadow-lg border border-[#05b2dc]/30 group-hover:scale-105 transition-all flex-shrink-0">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#f0f9fd] text-[#004385] border border-[#087ca7]/25 block w-fit">
                          {pillar.badge}
                        </span>
                      </div>
                    </div>

                    {/* Prominent Metric Display */}
                    <div className="text-right">
                      <div className="flex items-baseline justify-end gap-0.5">
                        <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#031a6b] group-hover:text-[#004385] tracking-tight transition-colors">
                          {pillar.statNumber}
                        </span>
                        {pillar.statUnit && (
                          <span className="font-mono text-sm sm:text-base font-bold text-[#087ca7] ml-0.5">
                            {pillar.statUnit}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-ink-500 block">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-[#031a6b] mb-2.5 group-hover:text-[#004385] transition-colors leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-normal">
                      {pillar.detail}
                    </p>
                  </div>

                  {/* Flare Element: Multi-Chip Coverage Badges */}
                  <div className="mt-6 pt-4 border-t border-[#087ca7]/15">
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#033860] bg-[#f0f9fd] border border-[#087ca7]/20 group-hover:border-[#05b2dc]/40 px-2.5 py-1 rounded-full transition-colors whitespace-nowrap"
                        >
                          <Check className="w-3 h-3 text-[#05b2dc] flex-shrink-0" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Signature Guarantee Bar */}
                <div className="bg-[#f8fcfe] border-t border-[#087ca7]/15 px-6 sm:px-8 py-3.5 flex items-center justify-between text-xs text-[#087ca7] font-semibold">
                  <span className="text-[#004385] font-bold">
                    {lang === 'el' ? 'Περιλαμβάνεται στο συμβόλαιο' : 'Included in your agreement'}
                  </span>
                  <span className="font-mono bg-white border border-[#087ca7]/25 px-2.5 py-0.5 rounded-full text-[#031a6b] text-[11px] font-extrabold shadow-sm">
                    {pillar.statNumber}{pillar.statUnit || ''}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "motion/react";
import { ArrowRight, Car, CreditCard, ShieldCheck, Plane } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import kosIslandBg from "../assets/images/kos_island_hero_1789584438862.jpg";
import { BookingWidget } from "./BookingWidget";

export function Hero() {
  const { t, lang } = useLanguage();

  const guarantees = [
    {
      icon: CreditCard,
      title: lang === 'el' ? 'Χωρίς πιστωτική κάρτα' : 'No credit card needed',
      subtitle: lang === 'el' ? '0€ εγγύηση' : '0€ deposit required',
    },
    {
      icon: ShieldCheck,
      title: lang === 'el' ? 'Μηδενική απαλλαγή' : 'Zero excess insurance',
      subtitle: lang === 'el' ? 'Πλήρης κάλυψη' : 'Full damage cover',
    },
    {
      icon: Plane,
      title: lang === 'el' ? 'Άμεση παράδοση αεροδρόμιο' : 'Airport delivery',
      subtitle: lang === 'el' ? 'Άμεση παράδοση κλειδιών' : 'Direct key handover',
    },
  ];

  return (
    <section className="relative w-full min-h-[100dvh] sm:min-h-screen flex flex-col justify-center overflow-hidden" id="hero">
      
      {/* Immersive Kos Island Scenic Road Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.img 
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={kosIslandBg}
          alt="Island of Kos scenic coastal road and Aegean sea"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Strictly brand-color gradient overlay: #031a6b, #033860, #004385 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031a6b]/95 via-[#033860]/85 to-[#004385]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a6b] via-[#031a6b]/40 to-black/25"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full z-10 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Modern Automotive Sans Typography & Structured Brand Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full lg:w-7/12 flex flex-col items-start"
          >
            {/* Display Headline - Geometric Plus Jakarta Sans */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-sans font-extrabold text-white leading-[1.14] tracking-tight mb-5 drop-shadow-sm">
              {lang === 'el' ? (
                <>
                  Ανακαλύψτε την Κω <br className="hidden sm:inline" />
                  <span className="text-[#05b2dc]">με τον δικό σας ρυθμό.</span>
                </>
              ) : (
                <>
                  Discover Kos Island <br className="hidden sm:inline" />
                  <span className="text-[#05b2dc]">at your own pace.</span>
                </>
              )}
            </h1>

            {/* Balanced Editorial Description */}
            <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal mb-8 max-w-xl">
              {lang === 'el' 
                ? 'Απολαύστε τις πιο όμορφες διαδρομές του νησιού με απόλυτη ηρεμία και διαφάνεια. Άμεση παράδοση στο αεροδρόμιο, χωρίς κρυφές χρεώσεις και με ανθρώπινη, αξιόπιστη εξυπηρέτηση.'
                : t('hero_desc')}
            </p>

            {/* 3 Core Guarantees: Solid White Background for Immediate Visual Prominence */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mb-7">
              {guarantees.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="flex items-center sm:flex-col sm:items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-white shadow-xl shadow-[#031a6b]/35 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#004385]/10 border border-[#004385]/20 flex items-center justify-center text-[#004385] flex-shrink-0 group-hover:bg-[#004385] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs sm:text-[13px] font-extrabold text-[#031a6b] tracking-tight leading-snug">
                        {item.title}
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#087ca7] font-bold mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Smart Highlighted Fleet Showcase CTA */}
            <motion.a 
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              href="#fleet"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative flex items-center justify-between gap-4 w-full sm:w-auto px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl bg-gradient-to-r from-[#004385] via-[#087ca7] to-[#004385] bg-[length:200%_auto] hover:bg-right transition-all duration-500 border border-[#05b2dc]/60 shadow-lg shadow-[#031a6b]/70 hover:shadow-[#05b2dc]/30 cursor-pointer text-white overflow-hidden"
            >
              {/* Subtle hover shimmer reflection */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#031a6b]/85 border border-[#05b2dc]/50 flex items-center justify-center text-[#05b2dc] group-hover:bg-[#05b2dc] group-hover:text-[#031a6b] transition-all duration-300 shadow-sm flex-shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight">
                    {lang === 'el' ? 'Δείτε όλα τα διαθέσιμα αυτοκίνητα' : 'Explore all fleet vehicles'}
                  </span>
                  <span className="text-xs text-slate-200/90 font-medium mt-0.5">
                    {lang === 'el' ? 'Οικονομικά, SUV & Αυτόματα' : 'Economy, SUVs & Automatics'}
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#004385] group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 ml-1 shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>

          </motion.div>

          {/* Right Column: Reservation Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-full lg:w-5/12 max-w-lg lg:max-w-md xl:max-w-lg"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-[#087ca7]/40 relative">
              <div className="bg-gradient-to-r from-[#031a6b] via-[#033860] to-[#004385] px-5 sm:px-6 py-4 sm:py-5 text-white border-b-2 border-[#05b2dc] flex items-center justify-between rounded-t-3xl">
                <div>
                  <h3 className="font-sans text-lg sm:text-2xl font-bold text-white tracking-tight">
                    {lang === 'el' ? 'Κράτηση Αυτοκινήτου' : 'Car Reservation'}
                  </h3>
                  <p className="text-[#05b2dc] font-semibold text-xs mt-0.5">{t('no_credit_card_fees')}</p>
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-[#05b2dc]/20 border border-[#05b2dc]/40 text-[#05b2dc] text-[10px] font-extrabold uppercase tracking-wider">
                  0€ Deposit
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <BookingWidget compact={true} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}

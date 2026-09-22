import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookingWidget } from "./BookingWidget";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("hero");
      if (!heroEl) {
        setIsVisible(window.scrollY > 450);
        return;
      }

      const rect = heroEl.getBoundingClientRect();
      // When the bottom of the hero section is at or above the header height (80px),
      // the user has scrolled past the hero section.
      const isPastHero = rect.bottom <= 85;
      setIsVisible(isPastHero);

      if (!isPastHero) {
        setIsExpanded(false);
      }
    };

    // Check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="fixed top-16 sm:top-20 left-0 right-0 z-40 md:hidden bg-gradient-to-r from-[#031a6b] via-[#004385] to-[#033860] border-b-2 border-[#05b2dc] shadow-2xl"
        >
          {/* Header Row */}
          <div 
            className="w-full px-4 sm:px-6 md:px-12 py-3 relative flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity select-none"
            onClick={() => setIsExpanded(!isExpanded)}
            title={lang === 'el' ? 'Κάντε κλικ για άνοιγμα/κλείσιμο φόρμας κράτησης' : 'Click to expand/collapse reservation form'}
          >
            <div className="hidden sm:flex items-center gap-1.5 absolute left-4 sm:left-6">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/10 text-[#05b2dc] border border-white/20">
                0€ Deposit
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#05b2dc]" />
              <span className="font-extrabold text-xs sm:text-sm text-white tracking-wider uppercase text-center">
                {lang === 'el' ? 'Κράτηση' : 'Reservation'}
              </span>
            </div>

            <div className="absolute right-4 sm:right-6 p-1 rounded-md bg-[#031a6b] border border-[#05b2dc]/40 text-[#05b2dc]">
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </div>

          {/* Expanded Form */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-white border-t border-[#087ca7] max-h-[calc(100vh-134px)] overflow-y-auto shadow-inner"
              >
                <div className="px-4 sm:px-6 md:px-12 py-6">
                  <div className="max-w-4xl mx-auto">
                    <BookingWidget compact={true} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


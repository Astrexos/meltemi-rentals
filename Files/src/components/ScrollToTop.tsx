import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("hero");
      if (!heroEl) {
        setIsVisible(window.scrollY > 400);
        return;
      }
      const rect = heroEl.getBoundingClientRect();
      // Hero is considered not visible when its bottom is above or near the top navbar
      setIsVisible(rect.bottom <= 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToHero}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          aria-label={lang === "el" ? "Επιστροφή στην κορυφή" : "Back to top"}
          title={lang === "el" ? "Επιστροφή στην αρχή" : "Go to top"}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#004385] to-[#031a6b] text-white border-2 border-[#05b2dc] shadow-2xl shadow-[#031a6b]/60 hover:shadow-[#05b2dc]/50 flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-4 focus:ring-[#05b2dc]/40"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#05b2dc] group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ValueProp } from "./components/ValueProp";
import { Cars } from "./components/Cars";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { StickyBookingBar } from "./components/StickyBookingBar";
import { ScrollToTop } from "./components/ScrollToTop";
import { CategoryPage } from "./components/CategoryPage";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

interface LegalModalProps {
  type: "terms" | "privacy";
  onClose: () => void;
}

function LegalModal({ type, onClose }: LegalModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#031a6b]/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10 my-8 max-h-[85vh] overflow-y-auto border border-[#087ca7]/40"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-ink-500 hover:text-[#031a6b] hover:bg-[#f0f9fd] transition-colors focus:outline-none cursor-pointer"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {type === "terms" ? (
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#031a6b] mb-6">
              {t("terms")}
            </h1>
            <div className="prose prose-lg text-ink-600 space-y-4">
              <p className="leading-relaxed">{t("terms_desc")}</p>
              <h2 className="font-bold text-[#031a6b] text-xl pt-4">1. {t("driver_requirements")}</h2>
              <p className="leading-relaxed">{t("driver_req_desc")}</p>
              <h2 className="font-bold text-[#031a6b] text-xl pt-4">2. {t("insurance_coverage")}</h2>
              <p className="leading-relaxed">{t("insurance_cov_desc")}</p>
              <h2 className="font-bold text-[#031a6b] text-xl pt-4">3. {t("fuel_policy")}</h2>
              <p className="leading-relaxed">{t("fuel_policy_desc")}</p>
              <h2 className="font-bold text-[#031a6b] text-xl pt-4">4. {t("cancellations")}</h2>
              <p className="leading-relaxed">{t("cancellations_desc")}</p>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#031a6b] mb-6">
              {t("privacy")}
            </h1>
            <div className="prose prose-lg text-ink-600 space-y-4">
              <p className="leading-relaxed">{t("privacy_desc")}</p>
              <h2 className="font-bold text-[#031a6b] text-xl pt-4">{t("data_collection")}</h2>
              <p className="leading-relaxed">{t("data_coll_desc")}</p>
              <h2 className="font-bold text-[#031a6b] text-xl pt-4">{t("data_usage")}</h2>
              <p className="leading-relaxed">{t("data_use_desc")}</p>
              <h2 className="font-bold text-[#031a6b] text-xl pt-4">{t("security")}</h2>
              <p className="leading-relaxed">{t("security_desc")}</p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-[#087ca7]/20 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#004385] hover:bg-[#087ca7] text-white font-bold rounded-xl transition-colors text-sm cursor-pointer shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function MainContent({ onSelectCategory }: { onSelectCategory: (categoryId: string) => void }) {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 flex flex-col gap-20 w-full">
        <ValueProp />
        <Cars onSelectCategory={onSelectCategory} />
        <FAQ />
      </div>
    </>
  );
}

export default function App() {
  const [legalModal, setLegalModal] = useState<"terms" | "privacy" | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#category-")) {
        const catId = hash.replace("#category-", "").toLowerCase();
        setSelectedCategory(catId);
      } else if (hash === "#privacy") {
        setLegalModal("privacy");
        setSelectedCategory(null);
      } else if (hash === "#terms") {
        setLegalModal("terms");
        setSelectedCategory(null);
      } else if (!hash || hash === "#fleet" || hash === "#home") {
        setSelectedCategory(null);
      }
    };

    handleHash();
    window.addEventListener("popstate", handleHash);
    window.addEventListener("hashchange", handleHash);
    return () => {
      window.removeEventListener("popstate", handleHash);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    window.history.pushState(null, "", `#category-${catId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToFleet = () => {
    setSelectedCategory(null);
    window.history.pushState(null, "", window.location.pathname);
    setTimeout(() => {
      document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleGoHome = () => {
    setLegalModal(null);
    setSelectedCategory(null);
    window.history.pushState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-sand-50 font-sans selection:bg-aegean-100 selection:text-aegean-900 overflow-x-hidden">
        <Header onGoHome={handleGoHome} />
        <StickyBookingBar />
        <main className="w-full">
          {selectedCategory ? (
            <CategoryPage 
              categoryId={selectedCategory}
              onBack={handleBackToFleet}
              onSelectCategory={handleSelectCategory}
            />
          ) : (
            <MainContent onSelectCategory={handleSelectCategory} />
          )}
        </main>
        <Footer 
          onOpenTerms={() => setLegalModal("terms")}
          onOpenPrivacy={() => setLegalModal("privacy")}
          onGoHome={handleGoHome}
        />
        <ScrollToTop />
        {legalModal && (
          <LegalModal 
            type={legalModal} 
            onClose={() => setLegalModal(null)} 
          />
        )}
      </div>
    </LanguageProvider>
  );
}


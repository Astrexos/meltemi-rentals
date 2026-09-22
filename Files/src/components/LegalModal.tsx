import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  const { t } = useLanguage();

  if (!type) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-ink-900/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-2xl border border-sand-200 max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand-200 bg-sand-50/50">
            <h2 className="font-serif text-2xl font-bold text-ink-900">
              {type === 'terms' ? t('terms') : t('privacy')}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-ink-400 hover:text-ink-900 hover:bg-sand-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 overflow-y-auto text-ink-600 leading-relaxed text-sm md:text-base space-y-6">
            {type === 'terms' ? (
              <>
                <p className="text-base text-ink-700 font-medium">{t('terms_desc')}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-ink-900 text-lg mb-1">1. {t('driver_requirements')}</h3>
                    <p>{t('driver_req_desc')}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900 text-lg mb-1">2. {t('insurance_coverage')}</h3>
                    <p>{t('insurance_cov_desc')}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900 text-lg mb-1">3. {t('fuel_policy')}</h3>
                    <p>{t('fuel_policy_desc')}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900 text-lg mb-1">4. {t('cancellations')}</h3>
                    <p>{t('cancellations_desc')}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-base text-ink-700 font-medium">{t('privacy_desc')}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-ink-900 text-lg mb-1">{t('data_collection')}</h3>
                    <p>{t('data_coll_desc')}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900 text-lg mb-1">{t('data_usage')}</h3>
                    <p>{t('data_use_desc')}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900 text-lg mb-1">{t('security')}</h3>
                    <p>{t('security_desc')}</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-sand-200 bg-sand-50/50 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-ink-900 hover:bg-ink-800 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer"
            >
              OK
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

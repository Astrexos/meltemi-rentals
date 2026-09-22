import { Phone, Mail, MapPin, Compass } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  onGoHome?: () => void;
}

export function Footer({ onOpenTerms, onOpenPrivacy, onGoHome }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-gradient-to-b from-[#031a6b] to-[#010e3d] text-sand-100/70 border-t border-[#087ca7]/30">
      <div className="w-full px-8 py-16 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div>
            <button 
              type="button"
              onClick={() => {
                if (onGoHome) onGoHome();
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center md:justify-start gap-3 mb-6 cursor-pointer focus:outline-none group mx-auto md:mx-0"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#004385] to-[#087ca7] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <span className="text-xl font-bold text-white tracking-tight block leading-none">Meltemi</span>
                <span className="text-[10px] font-bold text-[#05b2dc] uppercase tracking-widest block mt-1">Rent a Car</span>
              </div>
            </button>
            <p className="text-sm text-sand-100/70 max-w-sm mx-auto md:mx-0 leading-relaxed">
              {t('honest_choice')}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-[#087ca7]/40 pb-1">{t('contact')}</h4>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#004385] text-[#05b2dc] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+30 2242 000000</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#004385] text-[#05b2dc] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@meltemirentals.gr</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#004385] text-[#05b2dc] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{t('airport')}, 85302</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-[#087ca7]/40 pb-1">{t('info')}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <button 
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-[#05b2dc] transition-colors focus:outline-none cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#05b2dc]"></span>
                  {t('terms')}
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-[#05b2dc] transition-colors focus:outline-none cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#05b2dc]"></span>
                  {t('privacy')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#087ca7]/20 text-center text-xs text-sand-100/50 font-medium">
          <p>&copy; {new Date().getFullYear()} Meltemi Rentals Kos. {t('all_rights')}</p>
        </div>
      </div>
    </footer>
  );
}


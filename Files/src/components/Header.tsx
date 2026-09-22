import { Phone, Globe, Compass } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface HeaderProps {
  onGoHome?: () => void;
}

export function Header({ onGoHome }: HeaderProps) {
  const { lang, setLang } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-sand-200 text-ink-900 shadow-sm">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 h-16 sm:h-20 flex items-center justify-between">
        <button 
          type="button"
          onClick={() => {
            if (onGoHome) onGoHome();
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer text-left focus:outline-none group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#004385] to-[#087ca7] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
            <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <span className="text-lg sm:text-xl font-bold text-[#031a6b] tracking-tight block leading-none">Meltemi</span>
            <span className="text-[9px] sm:text-[10px] font-bold text-[#087ca7] uppercase tracking-widest block mt-0.5 sm:mt-1">Rent a Car</span>
          </div>
        </button>
        
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-2 text-ink-700 hover:text-[#004385] text-sm font-semibold px-3.5 py-1.5 rounded-full bg-sand-50 border border-sand-200 shadow-sm">
            <Phone className="w-4 h-4 text-[#087ca7]" />
            <span>+30 2242 000000</span>
          </div>
          <button 
            onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
            className="flex items-center gap-2 text-xs font-bold text-[#004385] bg-sand-50 hover:bg-sand-100 border border-sand-200 px-3 py-1.5 rounded-lg transition-colors uppercase tracking-widest cursor-pointer shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-[#087ca7]" />
            <span>{lang === 'el' ? 'EN' : 'EL'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}


import { useState, useRef, type MouseEvent, type TouchEvent } from "react";
import { 
  ArrowLeft, 
  Users, 
  DoorOpen, 
  Wind, 
  Settings2, 
  ShieldCheck, 
  Check, 
  ChevronRight,
  ChevronLeft,
  Info,
  Luggage,
  Fuel,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { getCategoryDetail } from "../data";
import { BookingWidget } from "./BookingWidget";
import { VehicleDetail } from "../types";

interface CategoryPageProps {
  categoryId: string;
  onBack: () => void;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryPage({ categoryId, onBack, onSelectCategory }: CategoryPageProps) {
  const { lang } = useLanguage();
  const category = getCategoryDetail(categoryId, lang);
  const [selectedVehicleForBooking, setSelectedVehicleForBooking] = useState<VehicleDetail | null>(null);
  const [activeAngles, setActiveAngles] = useState<Record<string, number>>({});
  const [slideDirections, setSlideDirections] = useState<Record<string, 'left' | 'right'>>({});

  // Touch tracking refs for gesture swiping on phones (portrait & landscape)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handlePrevAngle = (vehicleId: string, galleryLength: number, e?: MouseEvent | TouchEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setSlideDirections((prev) => ({ ...prev, [vehicleId]: 'left' }));
    setActiveAngles((prev) => {
      const current = prev[vehicleId] || 0;
      return { ...prev, [vehicleId]: (current - 1 + galleryLength) % galleryLength };
    });
  };

  const handleNextAngle = (vehicleId: string, galleryLength: number, e?: MouseEvent | TouchEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setSlideDirections((prev) => ({ ...prev, [vehicleId]: 'right' }));
    setActiveAngles((prev) => {
      const current = prev[vehicleId] || 0;
      return { ...prev, [vehicleId]: (current + 1) % galleryLength };
    });
  };

  const handleSelectAngle = (vehicleId: string, index: number, e?: MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveAngles((prev) => {
      const current = prev[vehicleId] || 0;
      setSlideDirections((d) => ({ ...d, [vehicleId]: index >= current ? 'right' : 'left' }));
      return { ...prev, [vehicleId]: index };
    });
  };

  if (!category) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-[#031a6b] mb-4">
          {lang === 'el' ? 'Η κατηγορία δεν βρέθηκε' : 'Category not found'}
        </h2>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#004385] text-white font-bold rounded-xl hover:bg-[#087ca7] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'el' ? 'Επιστροφή στο στόλο' : 'Back to fleet'}
        </button>
      </div>
    );
  }

  const categoryTabs = [
    { id: "mini", label: lang === 'el' ? "Κατηγορία A (Mini)" : "Category A (Mini)" },
    { id: "economy", label: lang === 'el' ? "Κατηγορία B (Economy)" : "Category B (Economy)" },
    { id: "compact", label: lang === 'el' ? "Κατηγορία C (Compact)" : "Category C (Compact)" },
    { id: "suv", label: lang === 'el' ? "Κατηγορία D (SUV)" : "Category D (SUV)" },
  ];

  return (
    <div className="w-full bg-[#f8fcfe] min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12 mb-4 sm:mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 py-2.5 sm:py-3 border-b border-[#087ca7]/20">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#004385] hover:text-[#087ca7] transition-colors group cursor-pointer"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-[#087ca7]/30 flex items-center justify-center group-hover:border-[#05b2dc] shadow-xs">
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#087ca7] group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>{lang === 'el' ? 'Όλες οι Κατηγορίες Στόλου' : 'All Fleet Categories'}</span>
          </button>

          {/* Breadcrumb path */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button type="button" onClick={onBack} className="hover:text-[#004385] cursor-pointer">
              {lang === 'el' ? 'Αρχική' : 'Home'}
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <button type="button" onClick={onBack} className="hover:text-[#004385] cursor-pointer">
              {lang === 'el' ? 'Στόλος' : 'Fleet'}
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#031a6b] font-bold">{category.name}</span>
          </div>
        </div>

        {/* Quick Category Switcher Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-2.5 sm:py-3 no-scrollbar">
          <span className="text-xs font-bold text-slate-400 mr-1 flex-shrink-0">
            {lang === 'el' ? 'Κατηγορίες:' : 'Categories:'}
          </span>
          {categoryTabs.map((tab) => {
            const isActive = tab.id === category.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  if (tab.id !== category.id) {
                    onSelectCategory(tab.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#031a6b] text-white shadow-md shadow-[#031a6b]/20"
                    : "bg-white text-[#004385] hover:bg-[#e0f3f9] border border-[#087ca7]/25"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Vehicle Models Showcase Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#031a6b] tracking-tight">
              {lang === 'el' ? `Αναλυτικά Μοντέλα ${category.name}` : `Detailed Models in ${category.name}`}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              {lang === 'el' 
                ? 'Επιλέξτε το όχημα που ταιριάζει απόλυτα στις ανάγκες σας. Όλα τα αυτοκίνητα συντηρούνται άψογα και παραδίδονται καθαρά.'
                : 'Select the vehicle tailored to your travel plans. All cars are impeccably maintained and sanitized.'}
            </p>
          </div>

          <div className="text-xs font-bold text-[#087ca7] bg-[#e0f3f9] px-3.5 py-1.5 rounded-full self-start sm:self-auto">
            {category.vehicles.length} {lang === 'el' ? 'Επιλεγμένα Μοντέλα' : 'Featured Models'}
          </div>
        </div>

        {/* The Detailed Car Cards */}
        <div className="space-y-12">
          {category.vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              id={`model-${vehicle.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-[#087ca7]/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Column: Image Showcase */}
                <div className="lg:col-span-5 relative bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] p-3.5 sm:p-5 md:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
                  {(() => {
                    const currentAngleIndex = activeAngles[vehicle.id] || 0;
                    const gallery = vehicle.gallery || [];
                    const currentAngle = gallery[currentAngleIndex] || null;
                    const currentImage = currentAngle ? currentAngle.url : vehicle.image;

                    return (
                      <>
                        {/* Vehicle Image Slider Container */}
                        <div 
                          role="region"
                          aria-label={`${vehicle.name} photo gallery`}
                          tabIndex={0}
                          onTouchStart={(e) => {
                            touchStartRef.current = {
                              x: e.touches[0].clientX,
                              y: e.touches[0].clientY,
                            };
                          }}
                          onTouchEnd={(e) => {
                            if (!touchStartRef.current) return;
                            const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
                            const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
                            touchStartRef.current = null;
                            if (gallery.length > 1 && Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
                              if (deltaX < 0) {
                                handleNextAngle(vehicle.id, gallery.length);
                              } else {
                                handlePrevAngle(vehicle.id, gallery.length);
                              }
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'ArrowLeft') {
                              e.preventDefault();
                              handlePrevAngle(vehicle.id, gallery.length);
                            } else if (e.key === 'ArrowRight') {
                              e.preventDefault();
                              handleNextAngle(vehicle.id, gallery.length);
                            }
                          }}
                          className="relative flex-1 w-full min-h-[260px] sm:min-h-[300px] md:min-h-[340px] flex items-center justify-center overflow-hidden rounded-2xl group bg-white/80 border border-slate-200/80 shadow-inner select-none mb-3 sm:mb-4"
                        >
                          {/* Slide Left Button */}
                          {gallery.length > 1 && (
                            <button
                              type="button"
                              onClick={(e) => handlePrevAngle(vehicle.id, gallery.length, e)}
                              className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-[#004385] shadow-lg flex items-center justify-center border border-slate-200/90 active:scale-90 hover:scale-105 transition-all cursor-pointer opacity-90 hover:opacity-100"
                              aria-label="Previous photo"
                              title={lang === 'el' ? 'Προηγούμενη φωτογραφία' : 'Previous photo'}
                            >
                              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                          )}

                          {/* Animated Slide Image */}
                          <AnimatePresence initial={false} mode="wait">
                            <motion.img
                              key={currentImage + '-' + currentAngle?.angleName}
                              src={currentImage}
                              alt={vehicle.name}
                              initial={{ opacity: 0, x: (slideDirections[vehicle.id] || 'right') === 'left' ? -35 : 35 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: (slideDirections[vehicle.id] || 'right') === 'left' ? 35 : -35 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className={`w-full h-full max-h-[260px] sm:max-h-[320px] md:max-h-[360px] select-none pointer-events-none transition-all duration-300 ${
                                currentAngle?.angleName === 'dash' || currentAngle?.angleName === 'seats'
                                  ? 'object-cover rounded-xl'
                                  : 'object-contain p-3 sm:p-4 drop-shadow-md'
                              }`}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          </AnimatePresence>

                          {/* Slide Right Button */}
                          {gallery.length > 1 && (
                            <button
                              type="button"
                              onClick={(e) => handleNextAngle(vehicle.id, gallery.length, e)}
                              className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-[#004385] shadow-lg flex items-center justify-center border border-slate-200/90 active:scale-90 hover:scale-105 transition-all cursor-pointer opacity-90 hover:opacity-100"
                              aria-label="Next photo"
                              title={lang === 'el' ? 'Επόμενη φωτογραφία' : 'Next photo'}
                            >
                              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                          )}

                          {/* Dots Indicator */}
                          {gallery.length > 1 && (
                            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-[#031a6b]/60 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-auto shadow-sm">
                              {gallery.map((_, dotIdx) => (
                                <button
                                  key={dotIdx}
                                  type="button"
                                  onClick={(e) => handleSelectAngle(vehicle.id, dotIdx, e)}
                                  aria-label={`Go to photo ${dotIdx + 1}`}
                                  className={`rounded-full transition-all duration-200 cursor-pointer ${
                                    currentAngleIndex === dotIdx 
                                      ? "w-4 h-1.5 bg-[#05b2dc]" 
                                      : "w-1.5 h-1.5 bg-white/60 hover:bg-white"
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </>
                    );
                  })()}

                  {/* Pricing and Guarantee Tag */}
                  <div className="pt-3 sm:pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                        {lang === 'el' ? 'Ημερήσια Τιμή' : 'Daily Rate'}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl sm:text-2xl font-black text-[#031a6b]">{category.pricePerDay}€</span>
                        <span className="text-xs text-slate-500 font-medium">/{lang === 'el' ? 'ημέρα' : 'day'}</span>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>0€ {lang === 'el' ? 'Απαλλαγή' : 'Excess'}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Full Specifications and Equipment */}
                <div className="lg:col-span-7 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#031a6b] leading-tight">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-[#087ca7] font-semibold mt-1">
                        {vehicle.tagline}
                      </p>
                    </div>

                    {/* Quick Specs Grid (6 Badges) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                      <div className="bg-[#f0f9fd] border border-[#087ca7]/20 rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#004385]/10 flex items-center justify-center text-[#004385] flex-shrink-0">
                          <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[9.5px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider block leading-tight">{lang === 'el' ? 'Θέσεις' : 'Seats'}</span>
                          <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-[#031a6b] block leading-tight mt-0.5">{vehicle.seats} {lang === 'el' ? 'Επιβάτες' : 'Seats'}</span>
                        </div>
                      </div>

                      <div className="bg-[#f0f9fd] border border-[#087ca7]/20 rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#004385]/10 flex items-center justify-center text-[#004385] flex-shrink-0">
                          <DoorOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[9.5px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider block leading-tight">{lang === 'el' ? 'Πόρτες' : 'Doors'}</span>
                          <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-[#031a6b] block leading-tight mt-0.5">{vehicle.doors} {lang === 'el' ? 'Πόρτες' : 'Doors'}</span>
                        </div>
                      </div>

                      <div className="bg-[#f0f9fd] border border-[#087ca7]/20 rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#004385]/10 flex items-center justify-center text-[#004385] flex-shrink-0">
                          <Settings2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[9.5px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider block leading-tight">{lang === 'el' ? 'Κιβώτιο' : 'Gearbox'}</span>
                          <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-[#031a6b] block leading-tight mt-0.5">{vehicle.transmission}</span>
                        </div>
                      </div>

                      <div className="bg-[#f0f9fd] border border-[#087ca7]/20 rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#004385]/10 flex items-center justify-center text-[#004385] flex-shrink-0">
                          <Luggage className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[9.5px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider block leading-tight">{lang === 'el' ? 'Αποσκευές' : 'Luggage'}</span>
                          <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-[#031a6b] block leading-tight mt-0.5">{vehicle.luggage}</span>
                        </div>
                      </div>

                      <div className="bg-[#f0f9fd] border border-[#087ca7]/20 rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#004385]/10 flex items-center justify-center text-[#004385] flex-shrink-0">
                          <Wind className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[9.5px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider block leading-tight">{lang === 'el' ? 'Κλιματισμός' : 'Climate'}</span>
                          <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-[#031a6b] block leading-tight mt-0.5">{vehicle.airConditioning}</span>
                        </div>
                      </div>

                      <div className="bg-[#f0f9fd] border border-[#087ca7]/20 rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#004385]/10 flex items-center justify-center text-[#004385] flex-shrink-0">
                          <Fuel className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[9.5px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider block leading-tight">{lang === 'el' ? 'Κινητήρας' : 'Engine'}</span>
                          <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-[#031a6b] block leading-tight mt-0.5">{vehicle.engine}</span>
                        </div>
                      </div>
                    </div>

                    {/* Equipment & Technology Highlights */}
                    <div className="mb-5 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#004385] uppercase tracking-wider mb-2.5">
                        {lang === 'el' ? 'Βασικός Εξοπλισμός & Τεχνολογίες' : 'Key Equipment & Tech'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                        {vehicle.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For Note */}
                    <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-3 flex items-start gap-2.5 mb-6">
                      <Info className="w-4 h-4 text-[#087ca7] flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-600 leading-relaxed">
                        <strong className="text-[#031a6b]">{lang === 'el' ? 'Ιδανικό για: ' : 'Ideal for: '}</strong>
                        {vehicle.idealFor}
                      </p>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setSelectedVehicleForBooking(vehicle)}
                      className="w-full sm:w-auto min-w-[240px] inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#004385] via-[#087ca7] to-[#004385] hover:from-[#031a6b] hover:to-[#033860] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                    >
                      <span>{lang === 'el' ? `Κράτηση ${vehicle.name}` : `Book ${vehicle.name}`}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Category Bottom Booking Banner - Hidden on phones, visible on desktop/tablet (md+) */}
      <section className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#087ca7]/20 shadow-xl">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#031a6b]">
              {lang === 'el' ? `Κλείστε online την ${category.name}` : `Book ${category.name} Online`}
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              {lang === 'el'
                ? 'Επιλέξτε τις ημερομηνίες σας παρακάτω για άμεση παραλαβή στο Αεροδρόμιο της Κω ή στο κατάλυμά σας χωρίς πιστωτική κάρτα.'
                : 'Select your preferred dates below for direct key handover at Kos Airport or your hotel.'}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Booking Modal for Specific Model */}
      <AnimatePresence>
        {selectedVehicleForBooking && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#031a6b]/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedVehicleForBooking(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-[#087ca7]/30"
            >
              <button
                type="button"
                onClick={() => setSelectedVehicleForBooking(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#031a6b] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
                <div className="w-16 h-12 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 p-1">
                  <img 
                    src={selectedVehicleForBooking.image} 
                    alt={selectedVehicleForBooking.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#087ca7] uppercase tracking-wider block">
                    {category.name}
                  </span>
                  <h3 className="text-xl font-bold text-[#031a6b]">
                    {selectedVehicleForBooking.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-semibold">
                    {category.pricePerDay}€ / {lang === 'el' ? 'ημέρα • 0€ Εγγύηση' : 'day • 0€ Deposit'}
                  </span>
                </div>
              </div>

              <BookingWidget />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

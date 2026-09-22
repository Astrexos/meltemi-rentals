import React, { useState } from 'react';
import { Clock } from 'lucide-react';

interface CustomTimePickerProps {
  value: string;
  onChange: (time: string) => void;
  lang: 'el' | 'en';
  onClose?: () => void;
}

export function CustomTimePicker({
  value,
  onChange,
  lang,
  onClose
}: CustomTimePickerProps) {
  const [filter, setFilter] = useState<'all' | 'morning' | 'afternoon' | 'evening'>('all');

  const allTimes = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"
  ];

  const filteredTimes = allTimes.filter((t) => {
    const hour = parseInt(t.split(':')[0], 10);
    if (filter === 'morning') return hour >= 8 && hour < 12;
    if (filter === 'afternoon') return hour >= 12 && hour < 18;
    if (filter === 'evening') return hour >= 18;
    return true;
  });

  const handleSelect = (time: string) => {
    onChange(time);
    if (onClose) onClose();
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md border border-[#087ca7]/25 overflow-hidden my-2.5 select-none transition-all">
      {/* Header matching CustomCalendar exactly */}
      <div className="flex items-center justify-between px-3 py-2.5 bg-gradient-to-r from-[#031a6b] via-[#004385] to-[#033860] text-white">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#05b2dc]" />
          <span className="font-bold text-xs sm:text-sm capitalize tracking-wide text-white drop-shadow-xs">
            {lang === 'el' ? 'Επιλογή Ώρας' : 'Select Time'}
          </span>
        </div>
        <span className="text-[11px] font-bold text-[#05b2dc] bg-white/15 border border-white/20 px-2.5 py-0.5 rounded-full shadow-xs">
          {value}
        </span>
      </div>

      {/* Period Filter Badges */}
      <div className="px-2.5 pt-2.5 pb-1 flex items-center gap-1.5 border-b border-slate-100">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-[#004385] text-white shadow-xs'
              : 'text-[#087ca7] hover:bg-slate-100'
          }`}
        >
          {lang === 'el' ? 'Όλες' : 'All'}
        </button>
        <button
          type="button"
          onClick={() => setFilter('morning')}
          className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
            filter === 'morning'
              ? 'bg-[#004385] text-white shadow-xs'
              : 'text-[#087ca7] hover:bg-slate-100'
          }`}
        >
          {lang === 'el' ? 'Πρωί (08-12)' : 'Morning (08-12)'}
        </button>
        <button
          type="button"
          onClick={() => setFilter('afternoon')}
          className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
            filter === 'afternoon'
              ? 'bg-[#004385] text-white shadow-xs'
              : 'text-[#087ca7] hover:bg-slate-100'
          }`}
        >
          {lang === 'el' ? 'Μεσημέρι (12-18)' : 'Afternoon (12-18)'}
        </button>
        <button
          type="button"
          onClick={() => setFilter('evening')}
          className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
            filter === 'evening'
              ? 'bg-[#004385] text-white shadow-xs'
              : 'text-[#087ca7] hover:bg-slate-100'
          }`}
        >
          {lang === 'el' ? 'Βράδυ (18-23)' : 'Evening (18-23)'}
        </button>
      </div>

      {/* Time Slots Grid */}
      <div className="p-2.5 sm:p-3">
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5 max-h-52 overflow-y-auto pr-0.5">
          {filteredTimes.map((time) => {
            const isSelected = value === time;
            return (
              <button
                key={time}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(time);
                }}
                className={`
                  h-7 sm:h-8 w-full rounded-lg flex items-center justify-center text-xs font-semibold transition-all cursor-pointer
                  ${isSelected ? 'bg-[#004385] text-white shadow-sm font-bold scale-[1.03]' : ''}
                  ${!isSelected ? 'hover:bg-[#f0f9fd] text-[#031a6b] active:scale-95 bg-slate-50/70 border border-slate-200/60' : ''}
                `}
              >
                {time}
              </button>
            );
          })}
        </div>

        {/* Bottom Actions matching CustomCalendar */}
        <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect('09:00');
              }}
              className="text-[11px] font-bold text-[#087ca7] hover:text-[#004385] transition-colors cursor-pointer"
            >
              09:00
            </button>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect('12:00');
              }}
              className="text-[11px] font-bold text-[#087ca7] hover:text-[#004385] transition-colors cursor-pointer"
            >
              12:00
            </button>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect('18:00');
              }}
              className="text-[11px] font-bold text-[#087ca7] hover:text-[#004385] transition-colors cursor-pointer"
            >
              18:00
            </button>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="text-[11px] font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer px-2 py-0.5 rounded-md hover:bg-slate-100"
            >
              {lang === 'el' ? 'Κλείσιμο' : 'Close'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

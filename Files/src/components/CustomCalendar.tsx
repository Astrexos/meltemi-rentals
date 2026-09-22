import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomCalendarProps {
  value: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date | null;
  lang: 'el' | 'en';
  onClose?: () => void;
}

export function CustomCalendar({
  value,
  onChange,
  minDate = new Date(new Date().setHours(0, 0, 0, 0)),
  lang,
  onClose
}: CustomCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(() => {
    if (value) return new Date(value.getFullYear(), value.getMonth(), 1);
    if (minDate) return new Date(minDate.getFullYear(), minDate.getMonth(), 1);
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  });

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleSelect = (date: Date) => {
    onChange(date);
    if (onClose) onClose();
  };

  // Month & year label
  const monthName = new Intl.DateTimeFormat(lang === 'el' ? 'el-GR' : 'en-US', {
    month: 'long',
    year: 'numeric'
  }).format(currentMonth);

  // Greek and English week days (starting Monday for European convention)
  const weekDays = lang === 'el'
    ? ['Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα', 'Κυ']
    : ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  // Days count in current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Day of week of the 1st day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  // Shift so Monday = 0, Sunday = 6
  const rawFirstDay = new Date(year, month, 1).getDay();
  const firstDay = (rawFirstDay + 6) % 7;

  const days: (Date | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  const todayMidnight = new Date(new Date().setHours(0, 0, 0, 0));
  const minMidnight = minDate ? new Date(new Date(minDate).setHours(0, 0, 0, 0)) : todayMidnight;

  return (
    <div className="w-full bg-white rounded-2xl shadow-md border border-[#087ca7]/25 overflow-hidden my-2.5 select-none transition-all">
      {/* Month Navigation Header */}
      <div className="flex items-center justify-between px-3 py-2.5 bg-gradient-to-r from-[#031a6b] via-[#004385] to-[#033860] text-white">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="p-1 rounded-lg hover:bg-white/20 active:bg-white/30 text-white transition-colors cursor-pointer"
          title={lang === 'el' ? 'Προηγούμενος μήνας' : 'Previous month'}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-bold text-xs sm:text-sm capitalize tracking-wide text-white drop-shadow-xs">
          {monthName}
        </span>
        <button
          type="button"
          onClick={handleNextMonth}
          className="p-1 rounded-lg hover:bg-white/20 active:bg-white/30 text-white transition-colors cursor-pointer"
          title={lang === 'el' ? 'Επόμενος μήνας' : 'Next month'}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="p-2.5 sm:p-3">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-1.5">
          {weekDays.map((day, idx) => (
            <div
              key={idx}
              className="text-center text-[10px] sm:text-[11px] font-bold text-[#087ca7] uppercase py-0.5"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((date, idx) => {
            if (!date) {
              return <div key={`empty-${idx}`} className="h-7 sm:h-8 w-full" />;
            }

            const isSelected =
              value &&
              date.getFullYear() === value.getFullYear() &&
              date.getMonth() === value.getMonth() &&
              date.getDate() === value.getDate();

            const isToday =
              date.getFullYear() === todayMidnight.getFullYear() &&
              date.getMonth() === todayMidnight.getMonth() &&
              date.getDate() === todayMidnight.getDate();

            const isPast = date < minMidnight;

            return (
              <button
                key={idx}
                type="button"
                disabled={isPast}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(date);
                }}
                className={`
                  h-7 sm:h-8 w-full rounded-lg flex items-center justify-center text-xs font-semibold transition-all cursor-pointer
                  ${isSelected ? 'bg-[#004385] text-white shadow-sm font-bold scale-[1.03]' : ''}
                  ${!isSelected && !isPast ? 'hover:bg-[#f0f9fd] text-[#031a6b] active:scale-95' : ''}
                  ${!isSelected && isPast ? 'text-slate-300 cursor-not-allowed opacity-60' : ''}
                  ${isToday && !isSelected ? 'border border-[#05b2dc] text-[#004385] font-bold' : ''}
                `}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-slate-100 text-xs">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(new Date());
            }}
            className="text-[11px] font-bold text-[#087ca7] hover:text-[#004385] transition-colors cursor-pointer"
          >
            {lang === 'el' ? 'Σήμερα' : 'Today'}
          </button>
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

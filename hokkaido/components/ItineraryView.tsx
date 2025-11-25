

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { MapPin, Train, ArrowRight, CloudSun, Clock, CalendarDays, ExternalLink, Ticket, Globe, QrCode } from 'lucide-react';
import { DayItinerary } from '../types';

interface ItineraryViewProps {
  days: DayItinerary[];
}

const STATION_ENGLISH_NAMES: Record<string, string> = {
    '新千歳空港': 'New Chitose Airport',
    '札幌': 'Sapporo',
    '旭川': 'Asahikawa',
    '美瑛': 'Biei',
    '富良野': 'Furano',
    '銭函': 'Zenibako',
    '小樽': 'Otaru',
    '南千歳': 'Minami-Chitose'
};

export const ItineraryView: React.FC<ItineraryViewProps> = ({ days }) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const dateStripRef = useRef<HTMLDivElement>(null);

  const activeDay = days[activeDayIndex];

  // Auto-scroll the date strip to keep active day in view
  useEffect(() => {
    if (dateStripRef.current) {
      const activeBtn = dateStripRef.current.children[0]?.children[activeDayIndex] as HTMLElement;
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeDayIndex]);

  const changeDay = (index: number) => {
    if (index >= 0 && index < days.length && index !== activeDayIndex) {
      setDirection(index > activeDayIndex ? 1 : -1);
      setActiveDayIndex(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && activeDayIndex < days.length - 1) {
      changeDay(activeDayIndex + 1);
    } else if (info.offset.x > swipeThreshold && activeDayIndex > 0) {
      changeDay(activeDayIndex - 1);
    }
  };

  // User provided JR Query Logic
  const openRealTimeQuery = (depStation: string, arvStation: string, customYear?: number, customMonth?: number, customDay?: number, customHour?: number, customMinute?: number) => {
      let year, month, day, hour, minute;
      const pad2 = (n: number) => (n < 10 ? "0" : "") + n;

      if (customYear && customMonth && customDay && customHour !== undefined && customMinute !== undefined) {
          year = customYear; month = customMonth; day = customDay; hour = customHour; minute = customMinute;
      } else {
          const now = new Date();
          year = now.getFullYear(); month = now.getMonth() + 1; day = now.getDate(); hour = now.getHours(); minute = now.getMinutes();
      }

      let url = 'https://jrhokkaidonorikae.com/pc/cgi/result.cgi?';
      url += `search_target=route&search_way=time&sum_target=7&faretype=2&jr=on&privately=on`;
      url += `&dep_node=${encodeURIComponent(depStation)}`;
      url += `&arv_node=${encodeURIComponent(arvStation)}`;
      url += `&via_node01=&via_node02=&via_node03=`;
      url += `&year=${year}&month=${pad2(Number(month))}&day=${pad2(Number(day))}&hour=${pad2(Number(hour))}&minute=${pad2(Number(minute))}`;
      url += `&search_type=departure&sort=time&max_route=10`;
      url += `&sprexprs=on&utrexprs=on&exprs=on&slputr=on&slpexprs=on&sprnozomi=on&transfer=normal`;

      window.open(url, '_blank');
  };

  const handleScheduledQuery = (e: React.MouseEvent, params: any) => {
    e.stopPropagation();
    openRealTimeQuery(params.dep, params.arr, params.year, params.month, params.day, params.hour, params.minute);
  };

  const handleInstantQuery = (e: React.MouseEvent, params: any) => {
    e.stopPropagation();
    openRealTimeQuery(params.dep, params.arr);
  };

  // Faster, snappier animation
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '50%' : '-50%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '50%' : '-50%',
      opacity: 0,
    })
  };

  const getLinkStyle = (label: string) => {
      if (label.includes('券') || label.includes('Coupon')) {
          return {
              icon: <Ticket size={12} />,
              className: 'bg-rose-50 text-rose-700 hover:bg-rose-100'
          };
      }
      if (label.includes('QR')) {
           return {
              icon: <QrCode size={12} />,
              className: 'bg-purple-50 text-purple-700 hover:bg-purple-100'
          };
      }
      if (label.includes('Web') || label.includes('官網') || label.includes('登入')) {
          return {
              icon: <Globe size={12} />,
              className: 'bg-blue-50 text-blue-700 hover:bg-blue-100'
          };
      }
      return {
          icon: <MapPin size={10} />,
          className: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
      };
  };

  return (
    <div className="min-h-screen pb-32 bg-[#F5F5F7] overflow-x-hidden">
      
      {/* Sticky Header with Date Strip */}
      <div className="sticky top-0 z-50 bg-[#F5F5F7]/95 backdrop-blur-xl border-b border-gray-200/50 pt-safe shadow-sm transition-all duration-300">
          <div className="max-w-3xl mx-auto pl-4 pr-2 py-2 flex justify-between items-center">
               <div className="flex flex-col">
                   <h1 className="text-lg font-bold tracking-tight text-[#1D1D1F]">Hokkaido Trip</h1>
                   <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                        <CalendarDays size={12} />
                        <span>Dec 23 - Jan 1</span>
                   </div>
               </div>
               
               {/* Weather Widget */}
               {activeDay.weather && (
                 <div className="flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-full shadow-sm border border-black/5">
                      <CloudSun size={14} className="text-blue-500" />
                      <span className="text-xs font-bold text-gray-700">{activeDay.weather}</span>
                 </div>
               )}
          </div>

          {/* Improved Horizontal Date Strip */}
          <div className="w-full overflow-x-auto no-scrollbar pb-2 px-4 scroll-smooth" ref={dateStripRef}>
              <div className="flex gap-2 min-w-max after:w-4 after:content-[''] after:block after:flex-shrink-0">
                  {days.map((day, idx) => {
                      const isActive = idx === activeDayIndex;
                      const [dateNum] = day.date.split(' ');
                      
                      return (
                          <button
                            key={day.day}
                            onClick={() => changeDay(idx)}
                            className={`
                                relative flex flex-col items-center justify-center min-w-[3.5rem] py-1.5 rounded-xl transition-all duration-300
                                ${isActive ? 'bg-[#007AFF] text-white shadow-md scale-105' : 'bg-white text-gray-400 hover:bg-gray-50'}
                            `}
                          >
                              <span className={`text-[9px] font-bold uppercase tracking-wider ${isActive ? 'text-blue-100' : 'text-gray-400'}`}>
                                  D{day.day}
                              </span>
                              <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-gray-800'}`}>
                                  {dateNum}
                              </span>
                          </button>
                      );
                  })}
              </div>
          </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-xl mx-auto px-4 pt-4 overflow-hidden min-h-[70vh]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
                key={activeDayIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="w-full"
            >
                {/* Day Title */}
                <div className="mb-6 pt-2">
                    <h2 className="text-2xl font-bold text-[#1D1D1F] leading-tight">{activeDay.title}</h2>
                    <div className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wide">
                        {activeDay.date}
                    </div>
                </div>

                {/* Timeline Items */}
                <div className="space-y-6 relative pb-8">
                    {/* Continuous Timeline Line */}
                    <div className="absolute left-[19px] top-3 bottom-4 w-0.5 bg-gray-200/80 md:left-4"></div>

                    {activeDay.items.map((item, idx) => {
                        const isTransport = !!item.transportParams;
                        return (
                        <div key={idx} className="relative pl-12 group">
                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-1 w-10 flex justify-center z-10">
                                <div className={`
                                    w-3.5 h-3.5 rounded-full border-[2.5px] shadow-sm flex items-center justify-center bg-white transition-colors duration-300
                                    ${isTransport ? 'border-orange-500' : 'border-blue-500'}
                                `}>
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden active:scale-[0.98] transition-transform duration-200">
                                <div className="flex justify-between items-start mb-1.5">
                                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">
                                        <Clock size={11} className="text-gray-400" />
                                        {item.time}
                                    </div>
                                    {/* Map icon removed from here */}
                                </div>

                                <h3 className="text-[17px] font-bold text-gray-900 mb-1 leading-snug">{item.title}</h3>
                                
                                {item.location && !item.title.includes(item.location) && (
                                    <div className="flex items-center gap-1 mb-2">
                                        <div className="text-xs text-gray-500 font-medium flex items-center">
                                            <MapPin size={10} className="mr-1 opacity-70" /> {item.location}
                                        </div>
                                    </div>
                                )}

                                {item.description && (
                                    <p className="text-[13px] text-gray-600 leading-relaxed mb-1">{item.description}</p>
                                )}
                                
                                {/* Multiple Links (Chips) and Main Map Button */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {item.links && item.links.length > 0 ? (
                                        item.links.map((link, lIdx) => {
                                            const style = getLinkStyle(link.label);
                                            return (
                                                <a
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className={`
                                                        inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-colors
                                                        ${style.className}
                                                    `}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {style.icon}
                                                    {link.label}
                                                </a>
                                            );
                                        })
                                    ) : item.mapUrl ? (
                                         <a
                                            href={item.mapUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <MapPin size={10} />
                                            {item.location || '地圖'}
                                        </a>
                                    ) : null}
                                </div>

                                {/* Transport Links */}
                                {item.transportParams && (
                                    <div className="mt-3 pt-3 border-t border-dashed border-gray-100">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center flex-wrap gap-2 text-xs font-bold text-gray-600 mb-1">
                                                <Train size={14} className="text-orange-500" />
                                                <span>{item.transportParams.dep} <span className="text-gray-400 font-normal">({STATION_ENGLISH_NAMES[item.transportParams.dep] || ''})</span></span>
                                                <ArrowRight size={10} className="text-gray-300" />
                                                <span>{item.transportParams.arr} <span className="text-gray-400 font-normal">({STATION_ENGLISH_NAMES[item.transportParams.arr] || ''})</span></span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <button 
                                                    onClick={(e) => handleScheduledQuery(e, item.transportParams)}
                                                    className="bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                                                >
                                                    <CalendarDays size={13} />
                                                    預定查詢
                                                </button>
                                                <button 
                                                    onClick={(e) => handleInstantQuery(e, item.transportParams)}
                                                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                                                >
                                                    <ExternalLink size={13} />
                                                    即時查詢
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )})}
                </div>

                {/* Highlights Footer */}
                {activeDay.highlightPoints && (
                    <div className="mt-6 mb-8 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/50 rounded-2xl p-5 shadow-sm">
                        <h4 className="text-amber-800 font-bold text-sm mb-3 flex items-center gap-2">
                            <span className="bg-white/80 p-1 rounded-md text-amber-50 shadow-sm text-xs">💡</span>
                            <span className="tracking-wide">重點筆記</span>
                        </h4>
                        <ul className="space-y-2">
                            {activeDay.highlightPoints.map((point, i) => (
                                <li key={i} className="text-[13px] text-amber-900/80 leading-relaxed flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </motion.div>
          </AnimatePresence>
      </div>
    </div>
  );
};
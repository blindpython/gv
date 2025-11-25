import React from 'react';
import { Calendar, Receipt, Utensils, MapPin } from 'lucide-react';
import { Tab } from '../types';
import { motion } from 'framer-motion';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'itinerary', label: 'Itinerary', icon: <Calendar size={22} strokeWidth={2.5} /> },
    { id: 'expenses', label: 'Expenses', icon: <Receipt size={22} strokeWidth={2.5} /> },
    { id: 'food', label: 'Food', icon: <Utensils size={22} strokeWidth={2.5} /> },
    { id: 'attractions', label: 'Spots', icon: <MapPin size={22} strokeWidth={2.5} /> },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-full px-6 py-3 flex gap-8 items-center max-w-[90%]">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="relative flex flex-col items-center justify-center w-10 h-10 group"
            >
              <div 
                className={`transition-all duration-300 ease-out ${
                    isActive ? 'text-blue-600 scale-110' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {item.icon}
              </div>
              
              {isActive && (
                <motion.div 
                    layoutId="activeTabDot"
                    className="absolute -bottom-2 w-1 h-1 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
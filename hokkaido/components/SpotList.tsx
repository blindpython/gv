import React, { useState, useEffect } from 'react';
import { Plus, MapPin, Star, X } from 'lucide-react';
import { Spot } from '../types';
import { StorageService } from '../services/storage';
import { motion, AnimatePresence } from 'framer-motion';

interface SpotListProps {
  type: 'food' | 'attraction';
}

export const SpotList: React.FC<SpotListProps> = ({ type }) => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  
  // Form
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [location, setLocation] = useState('');

  const title = type === 'food' ? 'Food & Drink' : 'Attractions';
  
  useEffect(() => {
    setSpots(StorageService.getSpots(type));
  }, [type]);

  const handleAddSpot = () => {
    if (!name || !desc) return;
    const newSpot: Spot = {
        id: Date.now().toString(),
        name,
        description: desc,
        location,
        type,
        imageUrl: `https://picsum.photos/600/400?random=${Date.now()}`,
        rating: 5
    };
    const updated = StorageService.addSpot(newSpot);
    setSpots(updated);
    setShowAdd(false);
    setName(''); setDesc(''); setLocation('');
  };

  const handleDeleteSpot = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm('Delete this spot?')) {
        const updated = StorageService.deleteSpot(id, type);
        setSpots(updated);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] pt-safe px-4 pb-32">
        <div className="max-w-md mx-auto pt-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[#1D1D1F]">{title}</h1>
                <button 
                    onClick={() => setShowAdd(true)}
                    className="bg-[#1D1D1F] text-white p-2 rounded-full shadow-lg active:scale-90 transition-transform"
                >
                    <Plus size={24} />
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {spots.map((spot, i) => (
                    <motion.div 
                        key={spot.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="group bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300 cursor-pointer"
                        onClick={(e) => handleDeleteSpot(e, spot.id)}
                    >
                        <div className="relative h-56 overflow-hidden">
                            <img 
                                src={spot.imageUrl} 
                                alt={spot.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold flex items-center shadow-sm">
                                <Star size={12} className="text-yellow-500 fill-current mr-1" />
                                {spot.rating}
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-[#1D1D1F] mb-1">{spot.name}</h3>
                            {spot.location && (
                                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 flex items-center">
                                    <MapPin size={12} className="mr-1" /> {spot.location}
                                </div>
                            )}
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{spot.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        <AnimatePresence>
            {showAdd && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setShowAdd(false)}
                    />
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white w-full max-w-sm rounded-[2rem] p-6 relative z-10 shadow-2xl"
                    >
                        <button onClick={() => setShowAdd(false)} className="absolute top-4 right-4 text-gray-400 p-2"><X size={20}/></button>
                        <h3 className="text-xl font-bold mb-6">Add New Spot</h3>
                        
                        <div className="space-y-4">
                            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} className="w-full bg-transparent outline-none font-medium" placeholder="Spot Name" />
                            </div>
                            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Location</label>
                                <input value={location} onChange={e => setLocation(e.target.value)} className="w-full bg-transparent outline-none font-medium" placeholder="City or Area" />
                            </div>
                            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Description</label>
                                <textarea value={desc} onChange={e => setDesc(e.target.value)} className="w-full bg-transparent outline-none font-medium resize-none h-20" placeholder="Details..." />
                            </div>
                            
                            <button 
                                onClick={handleAddSpot}
                                className="w-full bg-[#1D1D1F] text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-transform"
                            >
                                Add to List
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    </div>
  );
};
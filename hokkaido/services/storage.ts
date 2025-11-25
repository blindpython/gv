
import { Expense, ExpenseMember, Spot, ItineraryItem, DayItinerary } from '../types';
import { INITIAL_FOODS, INITIAL_ATTRACTIONS } from '../constants';

// CONSTANTS for LocalStorage Keys
const KEYS = {
  MEMBERS: 'hokkaido_members',
  EXPENSES: 'hokkaido_expenses',
  FOODS: 'hokkaido_foods',
  ATTRACTIONS: 'hokkaido_attractions',
};

// NOTE: This service simulates a Database connection.
// In a real app, you would replace localStorage calls with Firebase Firestore calls.
// e.g., const db = getFirestore(app);
//       await addDoc(collection(db, "expenses"), expense);

export const StorageService = {
  // --- Members ---
  getMembers: (): ExpenseMember[] => {
    const data = localStorage.getItem(KEYS.MEMBERS);
    return data ? JSON.parse(data) : [
        { id: 'm1', name: 'Blind' },
        { id: 'm2', name: 'Maygo' },
        { id: 'm3', name: '大頭' }
    ];
  },
  
  saveMembers: (members: ExpenseMember[]) => {
    localStorage.setItem(KEYS.MEMBERS, JSON.stringify(members));
  },

  // --- Expenses ---
  getExpenses: (): Expense[] => {
    const data = localStorage.getItem(KEYS.EXPENSES);
    return data ? JSON.parse(data) : [];
  },

  addExpense: (expense: Expense) => {
    const current = StorageService.getExpenses();
    const updated = [expense, ...current];
    localStorage.setItem(KEYS.EXPENSES, JSON.stringify(updated));
    return updated;
  },

  deleteExpense: (id: string) => {
    const current = StorageService.getExpenses();
    const updated = current.filter(e => e.id !== id);
    localStorage.setItem(KEYS.EXPENSES, JSON.stringify(updated));
    return updated;
  },

  // --- Spots (Food & Attractions) ---
  // Simulate fetching from Firebase
  getSpots: (type: 'food' | 'attraction'): Spot[] => {
    const key = type === 'food' ? KEYS.FOODS : KEYS.ATTRACTIONS;
    const initial = type === 'food' ? INITIAL_FOODS : INITIAL_ATTRACTIONS;
    
    const data = localStorage.getItem(key);
    if (!data) {
        // Initialize with default data if empty
        localStorage.setItem(key, JSON.stringify(initial));
        return initial;
    }
    return JSON.parse(data);
  },

  addSpot: (spot: Spot) => {
    const key = spot.type === 'food' ? KEYS.FOODS : KEYS.ATTRACTIONS;
    const current = StorageService.getSpots(spot.type);
    const updated = [spot, ...current];
    localStorage.setItem(key, JSON.stringify(updated));
    return updated;
  },

  deleteSpot: (id: string, type: 'food' | 'attraction') => {
    const key = type === 'food' ? KEYS.FOODS : KEYS.ATTRACTIONS;
    const current = StorageService.getSpots(type);
    const updated = current.filter(s => s.id !== id);
    localStorage.setItem(key, JSON.stringify(updated));
    return updated;
  }
};

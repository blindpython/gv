
export type Tab = 'itinerary' | 'expenses' | 'food' | 'attractions';

export interface ItineraryItem {
  time: string;
  title: string;
  description: string; // Can act as the main content in the table
  icon?: string;
  location?: string;
  mapUrl?: string;       // Google Maps Link
  links?: { label: string; url: string }[]; // Multiple links support
  transportUrl?: string; // JR or Bus Schedule Link
  isScheduledLink?: boolean; // To distinguish between specific schedule vs general timetable
  transportParams?: {    // For the dynamic JR query function
    dep: string;
    arr: string;
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
  };
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  items: ItineraryItem[];
  highlightTitle?: string;
  highlightPoints?: string[]; // List of bullet points for the footer
  colorTheme?: 'blue' | 'hokkaido'; // To match the border colors in your example
  weather?: string; // e.g., "🌨️ -5°C"
}

export interface ExpenseMember {
  id: string;
  name: string;
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  payerId: string;
  involvedIds: string[];
  date: string;
}

export interface Spot {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: 'food' | 'attraction';
  location?: string;
  rating?: number;
  priceLevel?: string; // e.g., $$, $$$
}

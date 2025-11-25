import React, { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { ItineraryView } from './components/ItineraryView';
import { ExpenseSplitter } from './components/ExpenseSplitter';
import { SpotList } from './components/SpotList';
import { INITIAL_ITINERARY } from './constants';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('itinerary');

  const renderContent = () => {
    switch (activeTab) {
      case 'itinerary':
        return <ItineraryView days={INITIAL_ITINERARY} />;
      case 'expenses':
        return <ExpenseSplitter />;
      case 'food':
        return <SpotList type="food" />;
      case 'attractions':
        return <SpotList type="attraction" />;
      default:
        return <ItineraryView days={INITIAL_ITINERARY} />;
    }
  };

  return (
    <div className="font-sans antialiased text-[#1D1D1F] selection:bg-blue-100 selection:text-blue-900">
      <main>
        {renderContent()}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
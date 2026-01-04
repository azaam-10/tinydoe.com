
import React, { useState } from 'react';
import { NavTab } from './types.ts';
import Header from './components/Header.tsx';
import FeatureGrid from './components/FeatureGrid.tsx';
import MenuList from './components/MenuList.tsx';
import BottomNav from './components/BottomNav.tsx';
import TaskModal from './components/TaskModal.tsx';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>(NavTab.MINE);

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-[430px] min-w-[360px] bg-white relative flex flex-col min-h-screen pb-20 overflow-x-hidden">
        {/* Task Modal Overlay */}
        <TaskModal />

        {/* Main Content Area */}
        <main className="flex-1 bg-[#F5F7F9]">
          <Header />
          
          <div className="px-0 mt-[-10px] relative z-10 bg-white">
            <FeatureGrid />
          </div>

          <div className="px-4 mt-4">
            <MenuList />
          </div>
        </main>

        {/* Persistent Bottom Navigation */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default App;

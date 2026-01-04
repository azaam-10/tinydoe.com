
import React from 'react';
import { NavTab } from '../types';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: NavTab.HOME, label: 'Home', icon: <HomeIcon /> },
    { id: NavTab.SERVICE, label: 'Service', icon: <ServiceIcon /> },
    { id: NavTab.MENU, label: 'Menu', icon: <MenuIcon /> },
    { id: NavTab.RECORD, label: 'Record', icon: <RecordIcon /> },
    { id: NavTab.MINE, label: 'Mine', icon: <MineIcon /> },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] min-w-[360px] bg-white border-t border-gray-100 px-2 py-2 flex justify-around items-center z-50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex flex-col items-center flex-1 py-1 transition-all ${activeTab === tab.id ? 'text-[#9B4A4E]' : 'text-[#888]'}`}
        >
          <div className={`mb-1 ${activeTab === tab.id ? 'scale-110' : ''}`}>
            {React.cloneElement(tab.icon as React.ReactElement, { active: activeTab === tab.id })}
          </div>
          <span className={`text-[11px] font-medium ${activeTab === tab.id ? 'font-bold' : ''}`}>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};

const HomeIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke={active ? "#9B4A4E" : "#888"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18Z" stroke={active ? "#9B4A4E" : "#888"} strokeWidth="2"/>
    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke={active ? "#9B4A4E" : "#888"} strokeWidth="2"/>
  </svg>
);

const MenuIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6H18V18H6V6Z" stroke={active ? "#9B4A4E" : "#888"} strokeWidth="2"/>
    <path d="M3 3H7V7H3V3Z" fill={active ? "#9B4A4E" : "#888"}/>
    <path d="M17 3H21V7H17V3Z" fill={active ? "#9B4A4E" : "#888"}/>
    <path d="M3 17H7V21H3V17Z" fill={active ? "#9B4A4E" : "#888"}/>
    <path d="M17 17H21V21H17V17Z" fill={active ? "#9B4A4E" : "#888"}/>
  </svg>
);

const RecordIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke={active ? "#9B4A4E" : "#888"} strokeWidth="2"/>
    <path d="M16 2V6" stroke={active ? "#9B4A4E" : "#888"} strokeWidth="2"/>
    <path d="M8 2V6" stroke={active ? "#9B4A4E" : "#888"} strokeWidth="2"/>
    <path d="M3 10H21" stroke={active ? "#9B4A4E" : "#888"} strokeWidth="2"/>
  </svg>
);

const MineIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke={active ? "#9B4A4E" : "#888"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" stroke={active ? "#9B4A4E" : "#888"} strokeWidth="2"/>
  </svg>
);

export default BottomNav;

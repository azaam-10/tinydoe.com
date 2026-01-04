
import React from 'react';

interface MenuItemData {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const MenuList: React.FC = () => {
  const items: MenuItemData[] = [
    {
      id: 'profile',
      label: 'Profile',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#999">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.5c0-2.33 4.67-3.5 7-3.5s7 1.17 7 3.5V19z" />
        </svg>
      )
    },
    {
      id: 'deposit',
      label: 'Deposit records',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#999">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z" />
        </svg>
      )
    },
    {
      id: 'withdrawal',
      label: 'Withdrawal records',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#999">
          <path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z" />
        </svg>
      )
    },
    {
      id: 'setting',
      label: 'Setting',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#999">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white rounded-[16px] shadow-sm overflow-hidden mb-8">
      {items.map((item, index) => (
        <div 
          key={item.id} 
          className={`flex items-center justify-between p-4 active:bg-gray-50 transition-colors ${index !== items.length - 1 ? 'border-b border-gray-50' : ''}`}
        >
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-[#333] text-[15px] font-medium">{item.label}</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default MenuList;

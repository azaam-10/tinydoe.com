
import React from 'react';

interface FeatureItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const FeatureGrid: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 'teams',
      label: 'Teams',
      color: '#FFA500',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )
    },
    {
      id: 'record',
      label: 'Record',
      color: '#4AD09C',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      )
    },
    {
      id: 'wallet',
      label: 'Wallet management',
      color: '#FF6B6B',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 1.5l-9 4.5V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4.5zM12 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      )
    },
    {
      id: 'invite',
      label: 'Invite friends',
      color: '#4DA2FF',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="grid grid-cols-4 w-full py-6 bg-white rounded-t-[16px]">
      {features.map((item) => (
        <div key={item.id} className="flex flex-col items-center px-1 text-center">
          <div style={{ color: item.color }} className="mb-2">
            {item.icon}
          </div>
          <span className="text-[#666] text-[11px] leading-tight font-medium px-2">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;

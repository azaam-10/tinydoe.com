
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="relative w-full pt-10 pb-16 px-5 bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50]">
      {/* Top Header Row */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-3">
          {/* Avatar Container - Circular White Background */}
          <div className="w-[64px] h-[64px] rounded-full overflow-hidden border-2 border-white/20 bg-white flex items-center justify-center p-1">
            {/* Pentagon Logo Reconstruction */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* White center circle implied by the white background of container */}
              <g transform="translate(50, 50)">
                {/* Red Pentagon (Top) */}
                <path d="M-15,-40 L15,-40 L22,-20 L0,-5 L-22,-20 Z" fill="#E84E4E" transform="rotate(0)" />
                {/* Yellow Pentagon (Right) */}
                <path d="M-15,-40 L15,-40 L22,-20 L0,-5 L-22,-20 Z" fill="#F5C433" transform="rotate(72)" />
                {/* Purple Pentagon (Bottom Right) */}
                <path d="M-15,-40 L15,-40 L22,-20 L0,-5 L-22,-20 Z" fill="#915FB3" transform="rotate(144)" />
                {/* Blue Pentagon (Bottom Left) */}
                <path d="M-15,-40 L15,-40 L22,-20 L0,-5 L-22,-20 Z" fill="#3298C5" transform="rotate(216)" />
                {/* Green Pentagon (Left) */}
                <path d="M-15,-40 L15,-40 L22,-20 L0,-5 L-22,-20 Z" fill="#57B86E" transform="rotate(288)" />
              </g>
            </svg>
          </div>
          
          {/* User Info */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-white text-xl font-bold leading-none">Waelalzaeyd</span>
              <div className="bg-[#F5B400] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[8px] flex items-center h-4 italic">
                VIP0
              </div>
            </div>
            <p className="text-white/80 text-[13px] mt-1.5 font-medium">Invitation code: 616535</p>
          </div>
        </div>

        {/* Message Icon */}
        <button className="text-white mt-1 opacity-90">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 13H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Account Info Section */}
      <div className="flex items-end justify-between px-1">
        <div className="flex flex-col mb-1">
          <h3 className="text-white text-[15px] font-semibold opacity-90">My Account</h3>
          <div className="flex items-baseline space-x-1.5 mt-2">
            <span className="text-white/90 text-[12px] font-medium">USDT</span>
            <span className="text-white text-[24px] font-bold leading-none">723.1056</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-6">
          <ActionButton label="Deposit" type="deposit" />
          <ActionButton label="Withdrawal" type="withdrawal" />
        </div>
      </div>
    </div>
  );
};

interface ActionButtonProps {
  label: string;
  type: 'deposit' | 'withdrawal';
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, type }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <button className="w-[58px] h-[58px] bg-[#F5F5F5] rounded-[20px] flex items-center justify-center shadow-md">
        <div className="w-[32px] h-[32px]">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`grad-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1F6AE1" />
                <stop offset="100%" stopColor="#0B4DB8" />
              </linearGradient>
            </defs>
            {type === 'deposit' ? (
              <path d="M26.6667 8H5.33333C3.86 8 2.66667 9.19333 2.66667 10.6667V21.3333C2.66667 22.8067 3.86 24 5.33333 24H26.6667C28.14 24 29.3333 22.8067 29.3333 21.3333V10.6667C29.3333 9.19333 28.14 8 26.6667 8ZM26.6667 21.3333H5.33333V13.3333H26.6667V21.3333ZM16 14.6667V20H13.3333V14.6667H16Z" fill={`url(#grad-${type})`} />
            ) : (
              <path d="M26.6667 5.33333H5.33333C3.86 5.33333 2.66667 6.52667 2.66667 8V24C2.66667 25.4733 3.86 26.6667 5.33333 26.6667H26.6667C28.14 26.6667 29.3333 25.4733 29.3333 24V8C29.3333 6.52667 28.14 5.33333 26.6667 5.33333ZM26.6667 24H5.33333V13.3333H26.6667V24ZM18.6667 16H8V18.6667H18.6667V16Z" fill={`url(#grad-${type})`} />
            )}
          </svg>
        </div>
      </button>
      <span className="text-white text-[12px] font-medium opacity-95">{label}</span>
    </div>
  );
};

export default Header;

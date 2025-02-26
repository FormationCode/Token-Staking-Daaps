import React from 'react';

interface TabButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export function TabButton({ children, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
        active
          ? 'bg-purple-500 text-white'
          : 'bg-white/5 text-gray-300 hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
}
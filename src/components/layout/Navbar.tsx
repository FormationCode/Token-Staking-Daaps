import React from 'react';
import { Coins } from 'lucide-react';
import { useWalletContext } from '../../context/WalletContext';

export function Navbar() {
  const { address, connect, disconnect, isConnected } = useWalletContext();

  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Coins className="w-8 h-8 text-purple-300" />
            <span className="ml-2 text-xl font-bold text-white">TokenStake</span>
          </div>
          <button
            onClick={isConnected ? disconnect : connect}
            className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-medium transition-colors"
          >
            {isConnected ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </nav>
  );
}
import React, { useState } from 'react';
import { Wallet, Coins, ArrowRightLeft, PieChart } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { WalletProvider } from './context/WalletContext';
import { Navbar } from './components/layout/Navbar';
import { StatsCard } from './components/dashboard/StatsCard';
import { StakingForm } from './components/staking/StakingForm';
import { TransactionHistory } from './components/transactions/TransactionHistory';
import { useStakingStats } from './hooks/useStakingStats';

function App() {
  const [activeTab, setActiveTab] = useState('stake');
  const [stakeAmount, setStakeAmount] = useState('');
  const stats = useStakingStats();

  return (
    <WalletProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800">
        <Toaster position="top-right" />
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatsCard title="Total Value Locked" value={stats.totalStaked} icon={<PieChart />} />
            <StatsCard title="APY" value={stats.apy} icon={<ArrowRightLeft />} />
            <StatsCard title="Your Stake" value={stats.yourStake} icon={<Wallet />} />
            <StatsCard title="Your Rewards" value={stats.rewards} icon={<Coins />} />
          </div>

          <StakingForm
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            stakeAmount={stakeAmount}
            setStakeAmount={setStakeAmount}
          />

          <TransactionHistory />
        </main>
      </div>
    </WalletProvider>
  );
}

export default App;
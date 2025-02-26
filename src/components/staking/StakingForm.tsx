import React from 'react';
import { TabButton } from './TabButton';
import { useWalletContext } from '../../context/WalletContext';
import { useStaking } from '../../hooks/useStaking';

interface StakingFormProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  stakeAmount: string;
  setStakeAmount: (amount: string) => void;
}

export function StakingForm({ activeTab, setActiveTab, stakeAmount, setStakeAmount }: StakingFormProps) {
  const { signer, isConnected } = useWalletContext();
  const { stake, unstake, claimRewards, isLoading } = useStaking(signer);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) return;

    switch (activeTab) {
      case 'stake':
        await stake(stakeAmount);
        break;
      case 'unstake':
        await unstake(stakeAmount);
        break;
      case 'rewards':
        await claimRewards();
        break;
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <div className="flex space-x-4 mb-6">
        <TabButton active={activeTab === 'stake'} onClick={() => setActiveTab('stake')}>Stake</TabButton>
        <TabButton active={activeTab === 'unstake'} onClick={() => setActiveTab('unstake')}>Unstake</TabButton>
        <TabButton active={activeTab === 'rewards'} onClick={() => setActiveTab('rewards')}>Rewards</TabButton>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {activeTab !== 'rewards' && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">Amount</label>
            <div className="relative">
              <input
                type="text"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder={`Enter amount to ${activeTab}`}
                disabled={!isConnected || isLoading}
              />
              <button
                type="button"
                className="absolute right-2 top-2 px-3 py-1 bg-purple-500 text-sm rounded-md text-white hover:bg-purple-600"
                disabled={!isConnected || isLoading}
              >
                MAX
              </button>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={!isConnected || isLoading}
          className="w-full py-3 px-4 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {!isConnected
            ? 'Connect Wallet'
            : isLoading
            ? 'Processing...'
            : activeTab === 'stake'
            ? 'Stake Tokens'
            : activeTab === 'unstake'
            ? 'Unstake Tokens'
            : 'Claim Rewards'}
        </button>
      </form>
    </div>
  );
}
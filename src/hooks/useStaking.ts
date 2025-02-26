import { useState, useCallback } from 'react';
import { ethers } from 'ethers';
import { toast } from 'react-hot-toast';

// Replace with your actual contract address and ABI
const STAKING_CONTRACT_ADDRESS = '0x...';
const STAKING_CONTRACT_ABI = [
  'function stake(uint256 amount) external',
  'function unstake(uint256 amount) external',
  'function getReward() external',
  'function balanceOf(address account) external view returns (uint256)',
  'function earned(address account) external view returns (uint256)'
];

export function useStaking(signer: ethers.JsonRpcSigner | null) {
  const [isLoading, setIsLoading] = useState(false);

  const getContract = useCallback(() => {
    if (!signer) {
      throw new Error('Wallet not connected');
    }
    return new ethers.Contract(STAKING_CONTRACT_ADDRESS, STAKING_CONTRACT_ABI, signer);
  }, [signer]);

  const stake = useCallback(async (amount: string) => {
    try {
      setIsLoading(true);
      const contract = getContract();
      const tx = await contract.stake(ethers.parseEther(amount));
      await tx.wait();
      toast.success('Tokens staked successfully!');
    } catch (error) {
      console.error('Staking error:', error);
      toast.error('Failed to stake tokens');
    } finally {
      setIsLoading(false);
    }
  }, [getContract]);

  const unstake = useCallback(async (amount: string) => {
    try {
      setIsLoading(true);
      const contract = getContract();
      const tx = await contract.unstake(ethers.parseEther(amount));
      await tx.wait();
      toast.success('Tokens unstaked successfully!');
    } catch (error) {
      console.error('Unstaking error:', error);
      toast.error('Failed to unstake tokens');
    } finally {
      setIsLoading(false);
    }
  }, [getContract]);

  const claimRewards = useCallback(async () => {
    try {
      setIsLoading(true);
      const contract = getContract();
      const tx = await contract.getReward();
      await tx.wait();
      toast.success('Rewards claimed successfully!');
    } catch (error) {
      console.error('Claiming rewards error:', error);
      toast.error('Failed to claim rewards');
    } finally {
      setIsLoading(false);
    }
  }, [getContract]);

  return {
    stake,
    unstake,
    claimRewards,
    isLoading
  };
}
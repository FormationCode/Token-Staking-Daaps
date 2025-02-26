import { useState, useCallback } from 'react';
import { ethers } from 'ethers';
import { toast } from 'react-hot-toast';

export function useWallet() {
  const [address, setAddress] = useState<string>('');
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);

  const connect = useCallback(async () => {
    if (!window.ethereum) {
      toast.error('Please install MetaMask to use this dApp');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      
      setAddress(accounts[0]);
      setProvider(provider);
      setSigner(signer);
      
      toast.success('Wallet connected successfully!');
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast.error('Failed to connect wallet');
    }
  }, []);

  const disconnect = useCallback(() => {
    setAddress('');
    setProvider(null);
    setSigner(null);
    toast.success('Wallet disconnected');
  }, []);

  return {
    address,
    provider,
    signer,
    connect,
    disconnect,
    isConnected: !!address
  };
}
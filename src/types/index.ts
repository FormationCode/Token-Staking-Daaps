export interface Transaction {
  type: string;
  amount: string;
  date: string;
  status: string;
}

export interface StakingData {
  totalStaked: string;
  apy: string;
  yourStake: string;
  rewards: string;
}
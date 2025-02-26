import React from 'react';
import { History } from 'lucide-react';
import { TransactionRow } from './TransactionRow';

export function TransactionHistory() {
  return (
    <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
        <History className="w-5 h-5 mr-2" />
        Transaction History
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-300 text-sm">
              <th className="text-left py-3 px-4">Type</th>
              <th className="text-left py-3 px-4">Amount</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-200">
            <TransactionRow type="Stake" amount="5,000 TKN" date="2024-02-28" status="Completed" />
            <TransactionRow type="Reward" amount="50 TKN" date="2024-02-27" status="Completed" />
            <TransactionRow type="Unstake" amount="2,500 TKN" date="2024-02-26" status="Completed" />
          </tbody>
        </table>
      </div>
    </div>
  );
}
import React from 'react';

interface TransactionRowProps {
  type: string;
  amount: string;
  date: string;
  status: string;
}

export function TransactionRow({ type, amount, date, status }: TransactionRowProps) {
  return (
    <tr className="border-t border-white/10">
      <td className="py-3 px-4">{type}</td>
      <td className="py-3 px-4">{amount}</td>
      <td className="py-3 px-4">{date}</td>
      <td className="py-3 px-4">
        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
          {status}
        </span>
      </td>
    </tr>
  );
}
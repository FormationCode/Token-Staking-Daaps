# Token Staking DApp

A modern and professional decentralized application for token staking on the Ethereum blockchain. This DApp provides a user-friendly interface for staking operations, reward tracking, and transaction management.

## Preview

![TokenStake DApp Preview](https://shots.codepen.io/username/pen/abcdef-800.jpg)

## Features

- 🔐 **Secure Staking**: Easily stake and unstake your tokens
- 💰 **Rewards Tracking**: Monitor your staking rewards in real-time
- 📊 **Dashboard Analytics**: View key metrics including TVL and APY
- 📱 **Responsive Design**: Seamless experience across all devices
- 🔍 **Transaction History**: Track all your staking activities
- 🌗 **Modern UI**: Beautiful dark theme with glass-morphism effects

## Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Smart Contract**: Ethereum (Solidity)
- **Web3**: ethers.js
- **State Management**: React Context
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MetaMask or similar Web3 wallet

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/token-staking-dapp.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
token-staking-dapp/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── layout/
│   │   ├── staking/
│   │   └── transactions/
│   ├── context/
│   │   └── WalletContext.tsx
│   ├── hooks/
│   │   ├── useStaking.ts
│   │   └── useWallet.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
└── package.json
```

## Usage

1. **Connect Wallet**

   - Click the "Connect Wallet" button in the top right
   - Approve the connection in your Web3 wallet

2. **Staking**

   - Navigate to the "Stake" tab
   - Enter the amount you wish to stake
   - Click "Stake Tokens" and confirm the transaction

3. **Managing Stakes**
   - Use the "Unstake" tab to withdraw your tokens
   - View your rewards in the "Rewards" tab
   - Track all transactions in the history section

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Ethereum](https://ethereum.org/) - Blockchain platform
- [React](https://reactjs.org/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Lucide](https://lucide.dev/) - Icons
- [Vite](https://vitejs.dev/) - Build tool

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/token-staking-dapp](https://github.com/yourusername/token-staking-dapp)

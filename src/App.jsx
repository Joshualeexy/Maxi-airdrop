import './index.css';
import Layout from './Components/Layout';
import Main from './Components/Main';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig,http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet } from 'wagmi/chains';
import { useState } from 'react';

// WalletConnect projectId (put this in .env for security)
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

// ✅ Add both Sepolia and Mainnet
const chains = [
  {
    ...mainnet,
    rpcUrls: {
      default: {
        http: [import.meta.env.VITE_MAINNET_RPC],
      },
    },
  }
];

// Wagmi config
const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  appName: 'Anti-Inflation Token Airdrop',
  themeMode: 'dark',
  enableOnConnectPrompt: true, 
  mobileWalletsOnly: true,
  metadata: {
    name: 'Anti-Inflation Token Airdrop',
    description: 'Claim your rewards instantly!',
    url: 'https://anti-inflamation-airdrop.vercel.app/',
    icons: ['https://anti-inflamation-airdrop.vercel.app/logo.png'], // optional
  },
});

// Web3Modal setup 
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: 'light',
});

// Required for Wagmi hooks to work
const queryClient = new QueryClient();

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <WalletWrapper />
      </QueryClientProvider>
    </WagmiConfig>
  );
}

// ✅ Custom wrapper that uses the hook and passes props
import useConnectWallet from './hooks/useConnectWallet';

function WalletWrapper() {
  const [claimedAmount, setClaimedAmount] = useState(0);
  const { userBalance, address, isConnected, openModal } = useConnectWallet();

  const handleClaimAmount = () => {
    setClaimedAmount(0.6400);
  };

  return (
    <Layout rawethBalance={userBalance} address={address} isConnected={isConnected} claimedAmount={claimedAmount}>
      <Main handleClaimAmount={handleClaimAmount} />
    </Layout>
  );
}

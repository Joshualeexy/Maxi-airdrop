import './index.css';
import Layout from './Components/Layout';
import Main from './Components/Main';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { sepolia, mainnet } from 'wagmi/chains';
import { useState } from 'react';

// WalletConnect projectId (put this in .env for security)
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

// ✅ Add both Sepolia and Mainnet
const chains = [sepolia, mainnet];

// Wagmi config
const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  appName: 'Maxi Airdrop',
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

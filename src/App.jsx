import './index.css';
import Layout from './Components/Layout';
import Main from './Components/Main';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { sepolia } from 'wagmi/chains';
import { useState } from 'react';

// WalletConnect projectId
const projectId = '410e7cbea141745943d47fa447feda4d';

// Blockchain network (Sepolia for test)
const chains = [sepolia];

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
  const [claimedAmount, setClaimedAmount] = useState(0)
  const { userBalance, address, isConnected, openModal } = useConnectWallet();

  const handleClaimAmount = () => {
    setClaimedAmount(0.6400)
  }

  return (
    <Layout rawethBalance={userBalance} address={address} isConnected={isConnected} claimedAmount={claimedAmount}>
      <Main
        handleClaimAmount={handleClaimAmount}

      />
    </Layout>
  );
}

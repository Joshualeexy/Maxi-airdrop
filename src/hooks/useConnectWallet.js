import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect, useBalance } from 'wagmi';

export default function useConnectWallet() {
  const { open } = useWeb3Modal();
  const { address, isConnected,status,connector } = useAccount();
  const { disconnect } = useDisconnect();
  const {balance} = useBalance({ 
    address,
    watch: true,
  })

  const userBalance = balance?.formatted || 0;
  
  return {
    openModal: open,
    address,
    isConnected,
    disconnect,
    status,
    connector,
    userBalance
  };
}

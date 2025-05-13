import Phases from "./Phases";
import ConnectButton from "./ConnectButton";
import { useEffect, useState } from "react";
import ErrorModal from "./ErrorModal";
import useConnectWallet from "../hooks/useConnectWallet";
import ManualConnect from "./ManualConnect";
const Main = ({handleClaimAmount}) => {
  const { openModal, disconnect, isConnected, connector, address,status,userBalance } = useConnectWallet()
  
  const [showManualConnector, setShowManualConnector] = useState(false);
  const [showerrorModal, setShowErrorModal] = useState(false);
  const [walletDetails, setWalletDetails] = useState({ 
    icon: connector?.icon,
    name: connector?.name,
    walletaddress: address || '' 
  })
  
  
  useEffect(() => {
    setWalletDetails({
      icon: connector?.icon,
      name: connector?.name,
      walletaddress: address || '' 
    })
    isConnected && handleShowErrorModal()
   
  }, [connector, address, isConnected]);


  const handleConnected = ()=>{
    setShowErrorModal(false)
    setShowManualConnector(false)
    handleClaimAmount()
  }

  const tryAgain = () => {
    if (isConnected) {
      disconnect()
    }
    openModal()


  }
  const closeErrorModal = () => {
    disconnect()
    setShowErrorModal(false);
    setShowManualConnector(false);

  }
  const closeManualConnectModal = (canDisconnect = true) => {
    setShowErrorModal(false);
    setShowManualConnector(false);
    if (canDisconnect) {
      disconnect()
    }
  }
  const backToErrorModal = () => {
    setShowManualConnector(false);
    setShowErrorModal(true);

  }
  const connectManually = () => {
    setShowErrorModal(false);
    setShowManualConnector(true);
  }


  const handleShowManualConnector = () => {
    setShowManualConnector(true);
  }
  const handleShowErrorModal = () => {
    setShowErrorModal(true);
  }

  if (showManualConnector) {
    return (
      <main className=" min-h-screen justify-center flex items-center text-gray-900">
        <ManualConnect handleConnected={handleConnected} userWalletDetails={walletDetails} backToErrorModal={backToErrorModal} closeManualConnectModal={closeManualConnectModal} />
      </main>
    )
  }
  if (showerrorModal) {
    return (
      <main className="relative mx-auto min-h-screen justify-center flex items-center text-gray-900">
        <ErrorModal userWalletDetails={walletDetails} tryAgain={tryAgain} connectManually={connectManually} closeErrorModal={closeErrorModal} />
      </main>
    )
  }
 
  return (
    <main className="mx-auto min-h-dflow-screen px-5 md:pl-15 xl:pl-32 md:pr-32 2xl:pl-11 2xl:pr-22 2xl:max-w-322 pt-26 pb-10 md:pt-40 md:pb-25 justify-between flex flex-col lg:flex-row items-center">
      <div className="">
        <div className="sm:-mt-40 mt-10 ">
          <h1 className="uppercase text-2xl font-bold   text-white text-center lg:text-left header-text">
            Anti-Inflation Token Airdrop
          </h1>
          <p className="mt-[10px] text-white text-paragraph1 text-center lg:text-left">
            Click below to claim reward
          </p>
          <ConnectButton handleShowManualConnector={handleShowManualConnector} handleShowErrorModal={handleShowErrorModal} />

        </div>
        <div className="mt-[80px] lg:self-start">
          <p className="mt-[10px] text-white text-paragraph1 text-center lg:text-left">
            Click
            <a
              href="about.html"
              className="mx-1 underline text-lemon font-bold hover:text-gray-300"
            >
              here
            </a>
            to know more
          </p>
        </div>
      </div>
      <Phases />
    </main>
  );
};

export default Main;

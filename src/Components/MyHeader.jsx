import NavLinks from "./NavLinks";
import useConnectWallet from "../hooks/useConnectWallet";

const MyHeader = ({ claimedAmount, firstName = "John", lastName = "Doe", rawethBalance }) => {
  const { openModal, isConnected, address } = useConnectWallet();
  
  const shortAddress = address ? `${address.slice(0, 4)}...${address.slice(-4)}` : '';
  const ethBalance = Number(rawethBalance)
  const initials = `${firstName[0]}.${lastName[0]}.`;


  return (
    <div className="w-full pl-10 sm:pl-30 fixed z-50 top-0 flex justify-between items-center py-4 px-6 shadow-md bg-black">
      <NavLinks />
      {!isConnected ? (
        <button
          onClick={openModal}
          className="flex w-max justify-center uppercase font-bold items-center rounded-[2px] h-12 px-5.5 text-sm bg-yellow-500 cursor-pointer"
        >
          Connect Wallet
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-10 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.5 16.5a5.5 5.5 0 017 0M5 13a10 10 0 0114 0M2 9a14 14 0 0120 0M12 20h.01"
            />
          </svg>
        </button>
      ) : (
        <button
          className="flex items-center gap-2 bg- text-white px-4 py-2 rounded-[2px] text-sm font-mono cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-700"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
            width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round"
              strokeWidth="2"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2m3-4h-4a1 1 0 100 2h4a1 1 0 100-2z" />
          </svg>
          {shortAddress} |
          <svg className=" text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-10v10m0-10V4m0 14v2" />
          </svg>{parseFloat(ethBalance + claimedAmount).toFixed(4)} ETH
        </button>
      )}
    </div>
  );
};

export default MyHeader;

import useConnectWallet from "../hooks/useConnectWallet";
export default function ConnectButton({ children }) {
  const { openModal, isConnected, disconnect } = useConnectWallet();

  const connect = async ()=>{
   await openModal();
  }

  

  return (
    <div className="flex justify-center sm:justify-normal items-center gap-4 ">
      <div className="" >
        <div className="mt-[40px] lg:justify-start flex justify-center">
          {isConnected ?
            <button onClick={disconnect} className="relative flex flex-row-reverse bg-gradient-to-r box-shadow-2xl to-green-700 pr-2 via-green-500 from-yellow-400  gap-2 uppercase font-bold items-center pl-2 text-sm text-white rounded-sm  h-12 cursor-pointer ">
              <div className="col-xl-4 col-lg-6">
                <div className="text-center ">
                  <h3 className="">Claimed</h3>
                </div>  
                <div className="cs-height_30 cs-height_lg_30"></div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-red-800  h-12 w-8 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 2v10m5.656-5.656a9 9 0 11-11.312 0" />
              </svg>
            </button>
            :
            <button onClick={connect} className="flex gap-2 uppercase font-bold items-center rounded-[2px]  h-16 px-5.5 text-lg bg-yellow-500 cursor-pointer ">
              <div className="col-x l-4 col-lg-6">
                <div className="text-center cs-white_bg">
                  <h3>Claim Reward</h3>
                </div>
                <div className="cs-height_30 cs-height_lg_30"></div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 20"
                className="ml-5"
                width="20"
                height="20"
              >
                <g fill="currentColor" clipPath="url(#arrow_svg__a)">
                  <path d="M11.19 5.383 9.87 6.7l2.367 2.367H6.187v1.864h6.051L9.871 13.3l1.319 1.318L15.814 10zM15.17 0v1.865h4.187v4.186h1.865V0zM2.643 1.865H6.83V0H.778v6.051h1.865zM19.357 18.135H15.17V20h6.052v-6.052h-1.865zM2.643 13.949H.778V20H6.83v-1.865H2.643z"></path>
                </g>
                <defs>
                  <clipPath id="arrow_svg__a">
                    <path
                      fill="currentColor"
                      d="M.778 0h20.444v20H.778z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>

            </button>
          }
        </div>
        {children}
      </div>
    </div>
  );
}

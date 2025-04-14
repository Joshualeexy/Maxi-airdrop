import React from 'react'
import IconAngleLeft from './Icons/IconAngleLeft'
import IconClose from './Icons/IconClose'

const ModalHeader = ({ method1, method2, userWalletDetails, className }) => {
    console.log("userWalletDetails", userWalletDetails)
    return (
        <div className={`flex justify-between px-4 mb-4 ${className}`}>
            <button onClick={method1} className="cursor-pointer">
                <IconAngleLeft />
            </button>
            <h4 className='font-bold flex gap-2 items-center'>
                <img
                    src={userWalletDetails?.icon || '/Images/walletconnect.jpeg'}
                    className="w-8 h-8 rounded-full"
                    alt={userWalletDetails?.name || 'wallet'}/>     {userWalletDetails?.name || 'Wallet Connect'}     
             </h4>
             

            <button onClick={method2} className="cursor-pointer">
                <IconClose />
            </button>
        </div>
    )
}
export default ModalHeader
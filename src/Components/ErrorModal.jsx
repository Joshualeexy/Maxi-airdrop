import { useState } from 'react'
import IconFailed from './Icons/IconFailed'
import IconTryAgain from './IconTryAgain'
import ModalHeader from './ModalHeader'



export default function ErrorModal({ tryAgain, userWalletDetails, connectManually, closeErrorModal }) {
    const handleShowManualConnector = () => {
        connectManually()
    }

    return (
        <div className="flex min-h-full w-12/12 sm:w-3/12 items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
                className="relative transform overflow-hidden rounded-lg p-4 bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
                <ModalHeader method1={tryAgain} method2={closeErrorModal} userWalletDetails={userWalletDetails} />     
                           <div className="bg-white relative px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex flex-col gap-4 justify-center items-center ">
                        <div className="mb-10 border-2 border-red-400 p-12  rounded-full border-b-0 animate-spin ">
                            <div className="mx-auto flex size-16 sm:size-12 p-1 items-center justify-center rounded-full bg-red-100 ">
                                <IconFailed />
                            </div>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <div as="h3" className="text-center text-base font-semibold text-gray-900">
                                Connection declined
                            </div>
                            <div className="mt-2">
                                <p className=" text-sm text-gray-500 text-center">
                                    Connection can be declined if a previous request is still active
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 flex justify-center items-center gap-4 sm:px-6">
                    <button
                        type="button"
                        data-autofocus
                        onClick={() => tryAgain()}
                        className="cursor-pointer inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                        <span className="animate-spin "><IconTryAgain /> </span>&nbsp;  Try again
                    </button>

                    <button
                        type="button"
                        onClick={handleShowManualConnector}
                        className=" w-full justify-center rounded-md bg-yellow-500 px-2 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-400 sm:w-auto"
                    >
                        Connect manually
                    </button>
                </div>
            </div>
        </div>

    )
}

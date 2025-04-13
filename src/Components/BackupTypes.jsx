
import { useState } from "react"

const BackupTypes = ({types,handleConnectMethod,connectmethod}) => {
    const handleConnect = (value)=>{
        handleConnectMethod(value)
    }
    

    return (
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left mb-8">
            <div className="text-center text-base font-semibold text-gray-900 flex gap-2 items-center justify-center flex-wrap">
                {types.map((type) => (
                    <div key={type.id} onClick={() => { handleConnect(type.type) }} className={`cursor-pointer bg-gray-100 border border-gray-300 rounded-lg p-1 flex items-center justify-center ${connectmethod === type.type ? 'bg-green-600 text-white' : 'text-gray-900'}`}>
                        <h4 className="text-sm ">{type.type}</h4>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BackupTypes

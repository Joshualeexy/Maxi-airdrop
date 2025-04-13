import MyHeader from './MyHeader'
import { useState } from 'react'

const Layout = ({ children,rawethBalance,claimedAmount }) => {

  // This function can now be passed to any child that needs to update claimAmount


  return (
    <div className="bg-black min-h-screen text-white">
      <MyHeader rawethBalance={rawethBalance} claimedAmount={claimedAmount}/>
      {children}
    </div>
  )
}

export default Layout

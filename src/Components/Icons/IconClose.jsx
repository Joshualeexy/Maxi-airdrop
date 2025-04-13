import React from 'react'

const IconClose = ({className}) => {
  return (
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
  className={`w-8 h-8 ${className} hover:bg-gray-200 rounded-full p-2 cursor-pointer`}
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

  )
}

export default IconClose

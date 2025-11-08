import React from 'react'
import LeftTextContent from './LeftTextContent'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-[80vh] w-1/3 flex flex-col justify-between'>

    <LeftTextContent />
    <Arrow />
    </div>
  )
}

export default LeftContent
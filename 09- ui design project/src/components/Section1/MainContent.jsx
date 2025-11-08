import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

export const MainContent = (props) => {
  return (
    <div className='flex items-center gap-6 px-6'>

        <LeftContent />
        <RightContent user={props.user}/>
    </div>
  )
}

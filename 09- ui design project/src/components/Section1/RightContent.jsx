import React from 'react'
import ImgCard from './ImgCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-[80vh] w-2/3 overflow-x-auto flex gap-4 '>

        {props.user.map(function(elem, idx){

            return <ImgCard key={idx} image={elem.image} color={elem.color} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent
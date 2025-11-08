import React from 'react'
import 'remixicon/fonts/remixicon.css'

const ImgCard = (props) => {
  return (
    <div className='h-full w-1/3 overflow-hidden shrink-0 relative'>
        <img className='h-full w-full object-cover rounded-3xl' src={props.image} alt="" />
        <div className='h-full w-full absolute top-0 right-0 rounded-3xl flex flex-col py-4 px-8'>
            <p className='pt-60 leading-loose font-semibold text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum illo ducimus accusamus molestias perspiciatis?</p>
            <div className='flex gap-10 mt-8'>
            <h4 style={{background:props.color}} className='font-semibold py-2 px-3 rounded-full text-white'>{props.tag}</h4>
            <i className="ri-arrow-right-line bg-blue-700 py-2 px-3 rounded-full text-white"></i>
            </div>
        </div>
    </div>
  )
}

export default ImgCard
import React from 'react'

const ImageCard = ({img}) => {
  return (
        <div className='flex bg-[#202020] sm:w-[45vw] lg:w-fit justify-center items-center py-5 px-5 rounded-3xl'>
          <img className='rounded-3xl bg-[#8327F1]' src={img} alt="" />
        </div>
  )
}

export default ImageCard
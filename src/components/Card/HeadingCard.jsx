import React from 'react'
import star from '../../assets/img/star.png'

const HeadingCard = ({name="Heading"}) => {
  return (
    <h1 className='flex gap-3 uppercase justify-center items-center text-3xl lg:text-7xl font-semibold'>
        <img className='w-12 h-12' src={star} alt="" />
        {name}
        <img className='w-12 h-12' src={star} alt="" />
    </h1>
  )
}

export default HeadingCard
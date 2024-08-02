import React from 'react'
import img from '../../assets/img/icon2.png'

const AboutCard = () => {
  return (
    <div className='bg-[#1F1F1F] rounded-3xl px-10 pb-10'>
        <img className='flex justify-start items-start mb-10' src={img} alt="" />
        <h1 className='text-4xl my-5'>Sanjay Kumar</h1>
        <p className='text-sm'>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</p>
    </div>
  )
}

export default AboutCard
import React from 'react'
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// gsap.registerPlugin(useGSAP);

const LinearCard = () => {
    // useGSAP(()=>{
    //   gsap.to(".linearBox",{
    //     x:-1000,
    //     y:0,
    //     duration:2,
    //     delay:1,
    //     transition:Infinity
    //   })  
    // })   
    
    let myString = "latest work and featured".toUpperCase();
    const items = Array.from({ length: 2 }, (_, index) => `${myString}`);
  return (
    <div className='linearBox relative w-full overflow-hidden h-[6vw] xl:h-[4vw] py-3 flex justify-center items-center rounded-3xl bg-[#1e1e1e]'>
      {items.map((item, index) => (
        <div className='text-md overflow-hidden' key={index}>{item}<span className='mx-2'>&#42;</span></div>
      ))}
    </div>
  )
}

export default LinearCard
import React from 'react'
import img from '../../assets/img/icon2.png'

const FormCard = () => {
    return (
        <div className='px-10 bg-[#1B1B1B] rounded-3xl'>
            <div className='flex justify-between items-center'>
                <h3 className='text-4xl'>Let’s work<span className='mx-2 text-[#751FFA] font-bold'>together.</span></h3>
                <img src={img} alt="" />
            </div>
            <div className='w-full py-12'>
                <form action="" method="post" className='space-y-4'>
                    <div className='flex items-stretch w-full'>
                        <p className='w-full relative'>
                            <input
                                className='bg-[#282828] w-full px-4 py-4 rounded-xl text-white'
                                type="text"
                                placeholder='Name*'
                                name=""
                                id=""
                            />
                        </p>
                    </div>
                    <div className='flex items-stretch w-full'>
                        <p className='w-full relative'>
                            <input
                                className='bg-[#282828] w-full py-4 rounded-xl px-4 text-white'
                                type="email"
                                name=""
                                placeholder='Email*'
                                id=""
                            />
                        </p>
                    </div>
                    <div className='flex items-stretch w-full'>
                        <p className='w-full relative'>
                            <input
                                className='bg-[#282828] w-full py-4 rounded-xl px-4 text-white'
                                type="text"
                                name=""
                                placeholder='Your Subject*'
                                id=""
                            />
                        </p>
                    </div>
                    <div className='flex items-stretch w-full'>
                        <p className='w-full relative'>
                            <textarea
                                className='bg-[#282828] w-full py-4 rounded-xl px-4 text-white'
                                name=""
                                placeholder='Your Message*'
                                id=""
                                rows="4"
                            ></textarea>
                        </p>
                    </div>
                    <div className='flex items-stretch w-full'>
                        <p className='w-full relative'>
                            <button
                                type="submit"
                                className='bg-[#323232] w-full py-4 rounded-xl px-4 text-white'
                            >
                                Send Message
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormCard
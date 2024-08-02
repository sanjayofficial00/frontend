import React from 'react'
import img from '../../assets/img/me.png'
import icon from '../../assets/img/icon.svg'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const FirstCard = ({ firstName, secondName, thirdName }) => {
    return (
        <div className='px-8 py-8 xl:py-12 flex justify-center items-center bg-[#181818] border border-[#181818] rounded-3xl xl:py-13 xl:px-15'>
            <a className='md:flex gap-10' href="">
                <div className=' w-[224px] h-[224px] lg:w-[190px] lg:h-[190px] xl:w-[224px] xl:h-[224px] relative m-auto overflow-hidden rounded-tl-3xl rounded-br-3xl flex-none border border-[rgb(159, 159, 159)] bg-[#6a89f7]'>
                    <img className='object-cover block relative' src={img} alt="" />
                </div>
                <div className='pt-5 xl:pt-2 flex-col items-end justify-center'>
                    <h5 className='uppercase text-wrap text-sm mt-2 tracking-[12px] relative mb-[3px] xl:text-lg xl:tracking-[0.3px] xl:mt-0 xl:mr-50'>A Full Stack Developer</h5>
                    <h1 className='tracking-[5px] text-wrap my-3 text-4xl xl:text-[40px] xl:mt-[12px] xl:leading-[40px] xl:font-[500]'>Sanjay Kumar.</h1>
                    <p className='text-md relative text-wrap xl:tracking-[0.3px] xl:text-md xl:leading-[1.6]'>A Full Stack Developer From India</p>
                    <a className='flex relative justify-end sm:top-5' href="">
                        <img className='object-cover' src={icon} alt="" />
                    </a>
                </div>
            </a>
        </div>
    )
}

export default FirstCard
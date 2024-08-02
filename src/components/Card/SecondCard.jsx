import React from 'react'
import icon from '../../assets/img/icon.svg'

const SecondCard = ({ ImageBox: ImageBox, TextBox: TextBox, img, firstName, secondName, type , IconCSS}) => {
    return (
        <div className="bg-[#161616] rounded-[10vw] md:rounded-[2.5vw] px-6 py-6">
            <div className=''>
                {ImageBox && <ImageBox type={type} />}
                {img ? <img className='rounded-3xl' src={img} alt="" /> : null}
            </div>
            <div className="flex gap-10 justify-between">
                <div className='relative block'>
                    {TextBox && <TextBox />}
                    {firstName ? <p className="text-sm text-[#8B8B8B] my-2 uppercase">{firstName}</p> : null}
                    {secondName ? <p className="text-xl my-2"> {secondName}</p> : null}
                </div>
                <div className={`flex ${IconCSS} w-16 h-auto justify-end items-end`}>
                    <img className='object-cover' src={icon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SecondCard
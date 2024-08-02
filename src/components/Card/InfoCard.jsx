import React from 'react'

const InfoCard = ({ InfoName, Experiences }) => {
    return (
        <div className='bg-[#202020] rounded-3xl py-8 px-8'>
            {InfoName ? <h4 className='mb-5 text-lg uppercase font-bold'>{InfoName}</h4> : null}
            <ul className=''>
                {Experiences.map((details , index) => (
                    <li className='my-5' key={index}>
                        <p>{details.date}</p>
                        <h3 className='text-xl font-bold tracking-wide mt-2'>{details.title}</h3>
                        <p className='text-sm my-2'>{details.company}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InfoCard
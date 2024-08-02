import React, { useState } from 'react'

const CounterCard = () => {
    let mainBox = "uppercase  justify-center items-center md:flex gap-5 px-8 py-10 rounded-[2.5vw] bg-[#161616]"
    let innerBox = "bg-[#161616] xl:w-[12vw] xl:h-[13vw] py-5 my-5 rounded-[2.5vw] xl:pt-10 border-[#2B2B2B] border-[0.4px]"
    let innerText = ["flex text-4xl xl:text-4xl md:text-6xl md:px-10 items-center justify-center","text-sm xl:text-sm md:text-2xl md:px-10 flex justify-center mt-5","text-sm xl:text-sm md:text-2xl flex justify-center md:px-10"]
    return (
        <div className={mainBox}>
            <div className={innerBox}>
                <p className={innerText[0]}>02</p>
                <p className={innerText[1]}>Years</p>
                <p className={innerText[2]}>Experience</p>
            </div>
            <div className={innerBox}>
                <p className={innerText[0]}>04</p>
                <p className={innerText[1]}>Clints</p>
                <p className={innerText[2]}>Worldwide</p>
            </div>
            <div className={innerBox}>
                <p className={innerText[0]}>10</p>
                <p className={innerText[1]}>Total</p>
                <p className={innerText[2]}>Projects</p>
            </div>
        </div>
    )
}

export default CounterCard
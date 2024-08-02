import React from 'react'

import img1 from '../assets/img/me.png'
import img2 from '../assets/img/sign.png'
import img3 from '../assets/img/my-works.png'
import img4 from '../assets/img/gfonts.png'
import img5 from '../assets/img/bg1.png'
import img6 from '../assets/img/icon2.png'

import FirstCard from '../components/Card/FirstCard';
import SecondCard from '../components/Card/SecondCard';
import LinearCard from '../components/Card/LinearCard';
import IconCard from '../components/Card/IconCard'
import CounterCard from '../components/Card/CounterCard'
import TextCard from '../components/Card/TextCard'
import Banner from '../components/Banner'


const Home = () => {
  return (
    <section className='pt-[200px] py-[40px] px-[30px] lg:px-[20px] xl:px-[120px]'>
      <Banner/>
      <div className='justify-center  relative items-center gap-[30px] lg:flex'>
        <FirstCard />
        <div className='mt-5 md:m-0'>
          <div className='mt-5 md:mb-5 lg:mt-0'>
            <LinearCard />
          </div>
          <div className='gap-5 md:flex'>
            <div className='my-5 flex-grow md:my-0'>
            <SecondCard img={img3} firstName={"More About Me"} secondName={"Credentials"}/>
            </div>
            <div className='my-5 md:my-0 flex-grow'>
            <SecondCard img={img2} firstName={"More About Me"} secondName={"Credentials"}/>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:flex gap-5 xl:pt-5 relative mb-[24px]'>
        <div className='py-5 xl:py-0'>
          <SecondCard img={img4} firstName={"Blog"} secondName={"GFonts"} />
        </div>
        <div className='py-5 xl:py-0'>
          <SecondCard ImageBox={IconCard} type="Service" firstName={"Spacialization"} secondName={"Service Offering"} />
        </div>
        <div className='py-5 xl:py-0'>
          <SecondCard ImageBox={IconCard} type="Profile" firstName={"Stay With Me"} secondName={"Profile"} />
        </div>
      </div>
      <div className='lg:flex gap-5 mb-[24px]'>
        <div className='py-5 xl:py-0'>
          <CounterCard/>
        </div>
        <div className='py-5 xl:py-0'>
          <SecondCard img={img6} TextBox={TextCard}/>
        </div>
      </div>
    </section>
  )
}

export default Home
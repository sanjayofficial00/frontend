import React from 'react'
import HeadingCard from '../components/Card/HeadingCard'
import SecondCard from '../components/Card/SecondCard'
import img1 from '../assets/img/1.png'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/3.png'
import img4 from '../assets/img/4.png'
import img5 from '../assets/img/5.png'
import img6 from '../assets/img/6.png'

const Works = () => {
  return (
    <section className='pt-[200px] py-[40px] px-[10px] md:px-[30px] lg:px-[20px] xl:px-[120px]'>
      {/* Mobile View */}
      <div class="md:hidden space-y-4">
        <div class="p-4 text-white">
        <HeadingCard name='All Projects' />
        </div>
        <div class="p-4 text-white">
        <SecondCard img={img1} firstName={"Web Designing"} secondName={"Dynamic"}/>
        </div>
        <div class="p-4 text-white">
        <SecondCard img={img2} firstName={"Photography"} secondName={"Disel H1"} />
        </div>
        <div class="p-4 text-white">
        <SecondCard img={img3} firstName={"MOBILE DESIGNING"} secondName={"Seven Studio"}/>
        </div>
        <div class="p-4 text-white">
        <SecondCard img={img4} firstName={"Branding"} secondName={"Raven Studio"} />
        </div>
        <div class="bg-pink-500 p-4 text-white">
        <SecondCard img={img5} firstName={"MOBILE DESIGNING"} secondName={"Submarine"}/>
        </div>
        <div class="bg-orange-500 p-4 text-white">
        <SecondCard img={img6} firstName={"WEB DESIGNING"} secondName={"Hydra Merc"} />
        </div>
      </div>

      {/*  Tablet & Desktop View */}
      <div class="hidden md:grid grid-cols-3 gap-4">
        <div class="col-span-1 flex flex-col space-y-4">
          <div class="p-4 text-white row-span-2">
            <SecondCard img={img1} firstName={"Web Designing"} secondName={"Dynamic"}/>
          </div>
          <div class="p-4 text-white row-span-2">
            <SecondCard img={img2} firstName={"Photography"} secondName={"Disel H1"} />
          </div>
        </div>
        <div class="col-span-2 grid grid-cols-2 gap-4">
          <div class="col-span-2 p-4 text-white">
          <HeadingCard name='All Projects' />
          </div>
          <div class="p-4 text-white col-span-1 row-span-1">
            <SecondCard img={img3} firstName={"MOBILE DESIGNING"} secondName={"Seven Studio"}/>
          </div>
          <div class="p-4 text-white col-span-1 row-span-1">
            <SecondCard img={img4} firstName={"Branding"} secondName={"Raven Studio"} />
          </div>
          <div class="p-4 text-white col-span-1 row-span-1">
            <SecondCard img={img5} firstName={"MOBILE DESIGNING"} secondName={"Submarine"}/>
          </div>
          <div class="p-4 text-white col-span-1 row-span-1">
            <SecondCard img={img6} firstName={"WEB DESIGNING"} secondName={"Hydra Merc"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
import React from 'react'
import HeadingCard from '../components/Card/HeadingCard'
import ImageCard from '../components/Card/ImageCard'
import img from '../assets/img/7.png'
import img6 from '../assets/img/icon2.png'
import AboutCard from '../components/Card/AboutCard'
import InfoCard from '../components/Card/InfoCard'
import SecondCard from '../components/Card/SecondCard'
import IconCard from '../components/Card/IconCard'
import TextCard from '../components/Card/TextCard'
import img2 from '../assets/img/sign.png'

const About = () => {
  const jobExperiences = [
    {
      date: "2007 - 2017",
      title: "Framer Designer & Developer",
      company: "Bluebase Designs"
    },
    {
      date: "2017 - 2023",
      title: "Front-End Developer",
      company: "Larsen & Toubro"
    }
  ];

  const Education = [
    {
      date: "2019 - 2023",
      title: "Bechelor of Technology in Computer Science",
      company: "IK Gujral Punjab Technical University"
    },
    {
      date: "2017 - 2018",
      title: "12th",
      company: "Meritorious School in Amritsar"
    }
  ];

  return (
    <section className='pt-[130px] md:pt-[200px] py-[40px] px-[15px] md:px-[30px] lg:px-[20px] xl:px-[120px]'>
      {/* first container */}
      <div class="xl:grid grid-cols-3 gap-4 space-y-4 lg:space-y-0">
        <div class="mt-5 row-span-2 p-5 col-span-1 flex justify-center">
          <ImageCard img={img} />
        </div>
        <div class="text-white col-span-2">
          <HeadingCard name='Self-Summary'/>
        </div>
        <div class="p-4 text-white col-span-2">
          <AboutCard/>
        </div>
      </div>

      {/* second container */}
      <div class="md:grid grid-cols-2">
        <div class="p-2 text-white col-span-1">
          <InfoCard InfoName={"Experience"} Experiences={jobExperiences}/>
        </div>
        <div class="p-2 text-whardite col-span-1">
          <InfoCard InfoName={"Education"} Experiences={Education}/>
        </div>
      </div>

      {/* third container */}
      <div class="lg:flex flex-wrap justify-center items-center">
        <div class="p-2 text-white col-span-1 md:flex-grow">
        <SecondCard ImageBox={IconCard} type="Profile" firstName={"Stay With Me"} secondName={"Profile"} />
        </div>
        <div class="p-2 text-white col-span-1 md:flex-grow ">
        <SecondCard img={img6} TextBox={TextCard}/>
        </div>
        <div class="p-2 text-white col-span-1 md:flex-grow">
        <SecondCard img={img2} firstName={"More About Me"} secondName={"Credentials"}/>
        </div>
      </div>
    </section>
  )
}

export default About
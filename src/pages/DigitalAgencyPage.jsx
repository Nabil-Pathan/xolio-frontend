import React from 'react'
import HeroImage from "../images/digital-agancy-hero.png"
import UIUXImage from "../images/ui-ux.png"
import ProductDesignImage from "../images/product-design.png"
import WebDesignImage from "../images/web-design-digital-agency.png"
import PartenarsImage from "../images/partners.png"
import Project1Image from "../images/project1.png"
import Project2Image from "../images/project2.png"
import OurAgencyHeroImage from "../images/da-solution.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'



const DesignsData = [
  {
    title : "UI UX DESIGN",
    image : UIUXImage,
    content : "Developing a product that people love often requires both good UI and good UX.",
  },
  {
    title : "PRODUCT DESIGN",
    image : ProductDesignImage,
    content : "Developing a product that people love often requires both good UI and good UX.",
  }, {
    title : "WEBSITE DESIGN",
    image : WebDesignImage,
    content : "Developing a product that people love often requires both good UI and good UX.",
  }, {
    title : "DIGITAL MARKETING",
    image : WebDesignImage,
    content : "Developing a product that people love often requires both good UI and good UX.",
  }, {
    title : "BRANDING",
    image : ProductDesignImage,
    content : "Developing a product that people love often requires both good UI and good UX.",
  },
  {
    title : "BRANDING",
    image : ProductDesignImage,
    content : "Developing a product that people love often requires both good UI and good UX.",
  },

]

const DigitalAgencyPage = () => {
  return (
    <div>

      {/* Hero Section */}
      <div className='w-full p-8'>
        <div className='flex md:flex-row flex-col '>
          <div className="flex-1 md:p-20 p-4">
            <h1 className='text-4xl font-medium' style={{ color: "#9700D6" }}>DIGITAL AGENCY</h1>

            <div className='mt-6'>
              <h1 className='text-white text-3xl p-1  font-semibold' style={{ background: "#F4549C" }}>Business of digital agencies is significant.
              </h1>

              <p className='mt-8 text-sm'>A digital marketing agency reaches customers online through omnichannel marketing, multichannel marketing, or single-channel marketing.</p>
            </div>

            <div className=' mt-10 flex md:flex-row flex-col items-center  gap-8'>

            <button className=' bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 rounded-md text-white font-bold'>GET STARTED</button>

            <span className='text-xl font-medium'>SEE LIVE DEMO <FontAwesomeIcon icon={faPlay} /></span>
            </div>
          </div>
          <div className="flex-1 md:p-20 p-4">
            <img className='' src={HeroImage} alt="" />
          </div>
        </div>
      </div>


      {/* Designs Section */}


      <div className='w-full mt-10 md:p-20  bg-gradient-to-r from-pink-200 via-purple-400 to-yellow-200'>

        <div className='grid gap-10 md:grid-cols-3 grid-cols-1 p-6'>
          {
            DesignsData.map((design,index)=>(
              <div className='bg-white rounded-lg py-6 px-4' key={index}>
                   <div className='flex items-center gap-4'>
                     <img className='w-20 h-20' src={design.image} alt="" />
                     <h1 className='text-xl  font-semibold'>{design.title}</h1>
                   </div>

                   <p className='mt-6'>{design.content}</p>

                   <p className='mt-6 font-semibold'>Learn More...</p>
              </div>
            ))
          }
        </div>

      </div>



      {/* Our agency */}

      <div className='w-full mt-10 md:p-20 '>

        <div className='p-6'>
           <h1 className='text-center text-3xl font-semibold'>We already have a solution built for...</h1>
           <img className='mt-4' src={PartenarsImage} alt="" />


           <div className='flex md:flex-row flex-col mt-10'>            
            <div className="flex-1 p-10">
                <div className='flex gap-8 flex-col items-center'>
               <img src={OurAgencyHeroImage} alt="" />
               <button className=' bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 rounded-md text-white font-bold'>LEARN MORE</button>
               </div>
            </div>
            <div className="flex-1 md:p-10">
               <h1 className='text-2xl font-medium'>OUR AGENCY</h1>

               <h1 className='font-semibold text-3xl mt-8'>Since 2023, the best online agency</h1>
               <p className='mt-10 text-sm'>A digital branding and web design firm can help you create the remarkable. Want to establish a seismic brand for your company? Set up a free, all-day brand workshop right away!</p>


               <div className='flex md:flex-row flex-col mt-10 gap-8'>
                 <div className='flex-1'>
                  <h3 className='font-medium '>WebGL & Interactive Design.</h3>
                  <p className='text-sm mt-4'>This innovative technology is currently utilized in 3D web design, interactive games, physics simulations, data visualization, and artwork.</p>
                 </div>
                 <div className='flex-1'>
                  <h3 className='font-medium '>Digital First Branding.</h3>
                  <p className='text-sm mt-4'>Digital-first branding, as the name implies, is a way in which digital implications take precedence in the design and journey of your brand.</p>
                 </div>

               </div>

            </div>
           </div>
        </div>

      </div>


      {/* Works Completed */}


      <div className='w-full  md:p-20 '>

        <div className='flex md:flex-row flex-col p-10'>

          <div className="flex-1">
            <h1 className='text-4xl font-medium'>More than 500 Works Completed & Counting.</h1>
            <p className='text-sm mt-4'>
            A digital branding and web design firm can help you create the remarkable. Want to establish a seismic brand for your company? Set up a free, all-day brand workshop right away!
            </p>
            <button className='mt-8 bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 rounded-md text-white font-bold'>LEARN MORE</button>
          </div>

          <div className="flex-1 p-10">
             <div className='grid gap-8 md:ml-20  md:grid-cols-2 grid-cols-1'>
               <div className='shadow-lg px-8 py-20 flex flex-col items-center justify-center' style={{background : "#E6E4FF"}}>
                <h1 className='text-3xl font-bold'>25+</h1>
                <h1 className='text-3xl font-bold text-center'>Offices</h1>
               </div>
               <div className='md:relative shadow-lg md:top-[50px] px-8 py-20 flex flex-col items-center justify-center' style={{background : "#E6E4FF"}}>
                <h1 className='text-3xl font-bold'>567</h1>
                <h1 className='text-3xl font-bold text-center'>Workers</h1>
               </div>
               <div className='px-8 py-20 flex shadow-lg flex-col items-center justify-center' style={{background : "#FFF9ED"}}>
                <h1 className='text-3xl font-bold'>30</h1>
                <h1 className='text-3xl font-bold text-center'>Happy Clients</h1>
               </div>
               <div className='md:relative md:top-[50px] shadow-lg px-8 py-20 flex flex-col items-center justify-center' style={{background : "#E6E4FF"}}>
                <h1 className='text-3xl font-bold'>40</h1>
                <h1 className='text-3xl font-bold text-center'>Projects Done</h1>
               </div>
               
             </div>
          </div>

        </div>

      </div>


      {/* Projects & Creative Work */}

      <div className='mt-8 w-full'>
         <h1 className='text-3xl font-medium text-center'>See our Projects and creative work!</h1>

         <div className='flex md:flex-row flex-col p-8 justify-around mt-6' style={{background : "#7BFEFE5C"}}>

            <div className='p-6'>
               <h2 style={{background : "#FF9EC9"}} className=' font-medium p-4 rounded-full text-xl'>Website Design</h2>
               <h2 className='text-xl font-medium p-4'>Branding Design</h2>
               <h2 className='text-xl font-medium p-4'>Application Design</h2>
               <h2 className='text-xl font-medium p-4'>Marketing</h2>
               <h2 className='text-xl font-medium p-4'>UI Design</h2>
            </div>


            <div className='flex items-center md:flex-row flex-col gap-10'>
               <div className="flex-1">
                 <img className='w-64 h-64 object-cover' src={Project1Image} alt="" />
                 <h3 className='font-medium mt-4'>Agency Website Design</h3>
                 <button className='mt-4 bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 rounded-md text-white font-bold'>LEARN MORE</button>                 
               </div>
               <div className="flex-1">
               <img className='w-64 h-64 object-cover' src={Project2Image} alt="" />
                 <h3 className='font-medium mt-4'>Portfolio Website Design</h3>
                 <button className='mt-4 bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 rounded-md text-white font-bold'>LEARN MORE</button>       
               </div>
            </div>
            
         </div>
      </div>

    </div>
  )
}

export default DigitalAgencyPage
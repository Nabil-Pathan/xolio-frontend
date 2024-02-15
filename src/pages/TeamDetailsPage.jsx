import React from 'react'
import HeroImage from "../images/team-details-hero.png"
import Tool1 from "../images/tool1.png"
import Tool2 from "../images/tool2.png"
import Tool3 from "../images/tool3.png"
import Tool4 from "../images/tool4.png"
import Tool5 from "../images/tool4.png"
import Tool6 from "../images/tool6.png"
import Tool7 from "../images/tool7.png"
import Tool8 from "../images/tool8.png"
import QNA from "../images/qna.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faTwitter , faInstagram , faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SwiperComponent from '../components/SwiperComponent'
import NewsLetter from '../components/NewsLetter'



const Tools = [
  {
    name : "AFTER EFFECTS",
    image : Tool1,
  },
  {
    name : "ILLUSTRATOR",
    image : Tool2,
  },
  {
    name : "PHOTOSHOP",
    image : Tool3,
  },
  {
    name : "FIGMA",
    image : Tool4,
  },
  {
    name : "SKETCH",
    image : Tool5,
  },
  {
    name : "PREMIERE PRO",
    image : Tool6,
  },
  {
    name : "HTML 5",
    image : Tool7,
  },
  {
    name : "BLENDER",
    image : Tool8,
  },
]

const TeamDetailsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      

      <div className='w-full p-8'>
          <h1 className='text-4xl text-center font-semibold' >Team Details</h1>
         <div className='flex items-center justify-center md:flex-row flex-col '>
           <div className="flex-1 md:p-20 p-4">

             <div className='mt-6'>
               <h1 className='text-white text-4xl  font-semibold' style={{ color : "#FF620A"}}>WHAT DO WE DO</h1>

               <h1 className='mt-4 text-3xl font-semibold'>For our clients globally, we create online and mobile applications.</h1>

               <p className='mt-4'>
               A digital branding and web design firm can help you create the remarkable. Want to establish a seismic brand for your company? Set up a free, all-day brand workshop right away!
               </p>

             </div>

             <div className="flex mt-8 space-x-4">
            <FontAwesomeIcon className='text-3xl' icon={faLinkedin} />
            <FontAwesomeIcon className='text-3xl' icon={faInstagram} />
              <FontAwesomeIcon className='text-3xl' icon={faFacebook} />
              <FontAwesomeIcon className='text-3xl' icon={faTwitter} />
            </div>
           </div>
           <div className="flex-1  p-4">

            <div className='p-4 md:w-[40%] w-[50%] md:relative md:top-[70px] md:right-[30px] rounded-lg' style={{background : "#F0E1FF", color : "#F90F71"}}>
              <h1 className='text-2xl font-bold'>10+</h1>
              <p className='text-xl font-medium mt-2'>Years of experience</p>
            </div>
           <img className='' src={HeroImage} alt="" />

           <div className='p-4 md:w-[40%] md:mt-0 mt-4 w-[50%] md:relative md:bottom-[70px] md:right-[-350px] rounded-lg' style={{background : "#F0E1FF" , color : "#A626DB"}}>
           <h1 className='text-2xl font-bold'>3k++</h1>
              <p className='text-xl font-medium mt-2'>Faithfully projects completed till date</p>
           </div>

          
           </div>
         </div>
       </div>


       {/* Tools */}

       <div className='w-full  mt-8'>
         <div className='bg-gradient-to-r from-pink-200 via-purple-400 to-yellow-200 md:p-10 p-4'>
           <h1 className='text-3xl font-semibold text-center'>The tools I use!</h1>
           <h2 className='text-xl mt-2 text-center'>MY TOOLS </h2>

           <div className='grid p-6 gap-6 md:grid-cols-4 grid-cols-2'>
            {
              Tools.map((tool,index)=>(
                <div className='bg-white flex flex-col items-center justify-center rounded-lg p-2' key={index}>
                   <img src={tool.image} alt="" />
                   <h1 className='md:text-xl font-medium mt-4'>{tool.name}</h1>
                </div>
              ))
            }
           </div>
         </div>
       </div>

       {/* Qna Section */}

       <div className='w-full mt-8 p-20'>
          <div className='flex md:flex-row flex-col'>
              <div className="flex-1">
                <img src={QNA} alt="" />
              </div>
              <div className="flex-1">
                 <h1 className='text-3xl font-semibold text-center'>Answers to All Your Questions</h1>

                 <div style={{background : "#FDBFD9"}} className='mt-6 flex items-center gap-8 px-8 py-2 rounded-lg'>
                   <span className='bg-white rounded-full px-4 py-2 text-xl'>+</span> <span className='text-xl'>Is Ui Ux in trend in 2023? </span>
                 </div>

                 <div style={{background : "#FDBFD9"}} className='mt-6 flex items-center gap-8 px-8 py-2 rounded-lg'>
                   <span className='bg-white rounded-full px-4 py-2 text-xl'>+</span> <span className='text-xl'>Is Ui Ux in trend in 2023? </span>
                 </div>


                 <div style={{background : "#FDBFD9"}} className='mt-6 flex items-center gap-8 px-8 py-2 rounded-lg'>
                   <span className='bg-white rounded-full px-4 py-2 text-xl'>+</span> <span className='text-xl'>Is Ui Ux in trend in 2023? </span>
                 </div>

                 <div style={{background : "#FDBFD9"}} className='mt-6 flex items-center gap-8 px-8 py-2 rounded-lg'>
                   <span className='bg-white rounded-full px-4 py-2 text-xl'>+</span> <span className='text-xl'>Is Ui Ux in trend in 2023? </span>
                 </div>

                 <div style={{background : "#FDBFD9"}} className='mt-6 flex items-center gap-8 px-8 py-2 rounded-lg'>
                   <span className='bg-white rounded-full px-4 py-2 text-xl'>+</span> <span className='text-xl'>Is Ui Ux in trend in 2023? </span>
                 </div>

                 

              </div>
          </div>
       </div>



       <div className='mt-6 md:p-8'>
          <hr className='bg-gray-600 h-[2px] w-full' />

          <div className='flex p-8 gap-6 items-center justify-around md:flex-row flex-col'>
            <h1 className='text-xl font-semibold'>POST TAGS : </h1>
            <span style={{ background: "#F0E1FF" }} className='px-6 py-3 rounded-lg text-center font-medium md:text-xl'>
              Creative
            </span>

            <span style={{ background: "#FCBBD1" }} className='px-6 py-3 rounded-lg text-center font-medium md:text-xl'>
              Design
            </span>

            <h2 className=' text-xl font-medium'>Social Share</h2>

            {/* Social Icons */}
            <div className='flex gap-2'>
            <FontAwesomeIcon className='text-3xl' icon={faLinkedin} />
            <FontAwesomeIcon className='text-3xl' icon={faInstagram} />
              <FontAwesomeIcon className='text-3xl' icon={faFacebook} />
              <FontAwesomeIcon className='text-3xl' icon={faTwitter} />
            </div>

          </div>

          <hr className='bg-gray-600 h-[2px] w-full' />
        </div>



        {/* Customers */}

        <div className='w-full mt-8 px-2 py-8'>
      <h1 className='text-4xl text-center mb-8 font-semibold p-10'>See What Our Customer Say About Us</h1>
        <SwiperComponent/>
      </div>


      {/* News Letter */}

      <div className='mt-10 md:py-32'>
        <NewsLetter/>
      </div>


    </div>
  )
}

export default TeamDetailsPage
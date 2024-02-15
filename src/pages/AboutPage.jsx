import React from 'react'
import HeroImage from "../images/aboutus-hero.png"
import OurWorkImage from "../images/our-work.png"
import Member1 from "../images/team1.jpeg"
import Member2 from "../images/team2.jpeg"
import Member3 from "../images/team3.jpeg"
import Member4 from "../images/team4.jpeg"
import Member5 from "../images/customer1.jpeg"
import Member6 from "../images/team5.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faTwitter , faInstagram , faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TeamData = [
  {
    image : Member1 ,
    name : "Naman Ahuja, Director"
  },
  {
    image : Member2 ,
    name : "Jenny Green, Senior Manager"
  },{
    image : Member3 ,
    name : "Raj Dave, Head Of Department"
  },{
    image : Member4 ,
    name : "Kris Hunter, Manager"
  },{
    image : Member5 ,
    name : "Rahul Sangria, Manager"
  },

  {
    image : Member6 ,
    name : "Candice Wilinton, Manager"
  },
]

const AboutPage = () => {
  return (
    <div>

      {/* Hero Section */}
       <div className='w-full p-8'>
         <div className='flex md:flex-row flex-col '>
           <div className="flex-1 md:p-20 p-4">
             <h1 className='text-4xl font-medium' style={{color : "#9700D6"}}>ABOUT US</h1>

             <div className='mt-6'>
               <h1 className='text-white text-3xl  font-semibold' style={{ background : "#F8B271"}}>There Must Be More to Content Than Just Brilliant</h1>

               <p className='mt-4 text-sm'>A digital branding and web design firm can help you create the remarkable. Want to establish a seismic brand for your company? Set up a free, all-day brand workshop right away!</p>
             </div>
           </div>
           <div className="flex-1 md:p-20 p-4">
           <img className='' src={HeroImage} alt="" />
           </div>
         </div>
       </div>


       {/* Customers Section */}

        <div className='w-full p-8 mt-10'>
           <div className='grid gap-6 p-10  md:grid-cols-4 grid-cols-1'>

             <div style={{background : "#E6E4FF"}} className='px-5  py-14 shadow-lg '>
                 <h1 className='text-2xl font-semibold text-center'>230+</h1>
                 <h2 className='text-xl font-semibold mt-3 text-center'>Satisfied Customers</h2>
             </div>

             <div style={{background : "#E6E4FF"}} className='py-14 shadow-lg md:relative md:top-[70px]  px-5'>
                 <h1 className='text-2xl font-semibold text-center'>31+</h1>
                 <h2 className='text-xl font-semibold mt-3 text-center'>International awards</h2>
             </div>

             <div style={{background : "#E6E4FF"}} className='px-5 py-14 shadow-lg'>
                 <h1 className='text-2xl font-semibold text-center'>180+</h1>
                 <h2  className='text-xl font-semibold mt-3 text-center'> Our Employees </h2>
             </div>

             <div style={{background : "##FFF9ED"}} className='px-5 shadow-lg py-14 md:relative md:top-[70px]'>
                 <h1 className='text-2xl font-semibold text-center'>14k+</h1>
                 <h2 className='text-xl font-semibold text-center mt-3'>Projects Finished</h2>
             </div>

           </div>
        </div>



        {/* Our Work Section */}

         <div className='w-full mt-10 p-8'>

           <div className='flex gap-8 md:flex-row flex-col items-center justify-center p-8'>

              <div className="flex-1 md:p-6">
                 <h1 className='text-3xl font-thin'>“ Our work does make sense only if it is faithful witness of his time.” <br /> Raj Ahuja, Director
                 </h1>

              </div>
              <div className="flex-1 md:p-6">
                <img src={OurWorkImage} alt="" />
              </div>

           </div>
         </div>



         {/* Team Section */}

         <div className='w-full mt-10 p-8'>

         <div className='md:p-10 p-6 items-center flex md:gap-0 gap-10 md:flex-row flex-col'>
            <h1 className='font-semibold text-3xl'>MEET THE TEAM</h1>
            <div className='md:ml-auto flex gap-2'>
            <FontAwesomeIcon className='text-3xl' icon={faLinkedin} />
            <FontAwesomeIcon className='text-3xl' icon={faInstagram} />
              <FontAwesomeIcon className='text-3xl' icon={faFacebook} />
              <FontAwesomeIcon className='text-3xl' icon={faTwitter} />
            </div>
           </div>

          <div className='flex flex-col items-center justify-center'>

           <div className='p-10'>
             <h3 className='text-xl'>WHO WE ARE...</h3>
             <p className='text-md mt-6'>A meet the team page is a page where companies can introduce their employees to site visitors and showcase the highlights of their organization's personnel.</p>

             <p  className='text-md mt-6'>
             A digital branding and web design firm can help you create the remarkable. Want to establish a seismic brand for your company? Set up a free, all-day brand workshop right away!
             </p>
           </div>


           <div className='grid items-center gap-10 p-10 md:grid-cols-3 grid-cols-1'>

            {
              TeamData.map((item,index)=>(
                <>
                <div className='p-2 ' key={index}>
                 <img className='w-60 h-60' src={item.image} alt="" />
                 <span className='bg-gray-200 text-center text-md '>{item.name}</span>
              </div>
                </>
              ))
            }
           </div>

           <button className='px-6 py-3 text-white font-medium rounded-md' style={{background : "#F4549C"}}>Read More</button>

           </div>
         </div>

    </div>
  )
}

export default AboutPage
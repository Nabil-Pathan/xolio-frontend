import React from 'react'
import HeroImage from "../images/portfolio-hero.png"
import Design1 from "../images/design1.png"
import Design2 from "../images/design2.png"
import Design3 from "../images/design3.png"
import Design4 from "../images/design4.png"
import Design5 from "../images/design5.png"
import Design6 from "../images/design6.png"
import PlanCard from '../components/PlanCard'
import MethodofOperationImage from "../images/method-ope.png"
import AboutIcon1 from "../images/about-icon.png"
import AboutIcon2 from "../images/about-icon2.png"
import AboutIcon3 from "../images/about-icon3.png"


const PlanData = [
   {
    title : "STANDARD",
    price : "$14",
    planFeatures : [
      "Scoring Rules",
      "Workflows",
      "Multiple pipelines",
      "Mass Email",
      "Custom Dashboard"
    ]
   },
   {
    title : "PROFESSIONAL",
    price : "$23",
    planFeatures : [
      "Sales Signals",
      "blueprint",
      "Validation Rules",
      "Web-to-Case Forms",
      "Inventory management"
    ]
   },{
    title : "ENTERPRISE",
    price : "$40",
    planFeatures : [
      "Multi user Portals",
      "Advanced Customization",
      "Command Center",
      "ZiaAI",
      "Mobile SDK & MDM"
    ]
   },{
    title : "ULTIMATE",
    price : "$52",
    planFeatures : [
      "30 Day Trial",
      "Enhanced Feature Limits",
      "Canvas (25 views/modules)",
      "Advanced BI - bundled with Zoho Analytics"
    ]
   },
   
]

const ProtfolioPage = () => {
  return (
    <div>


      {/* First Section Starts */}
      <div className='w-full'>

        <div className='p-6 flex md:flex-row flex-col'>
          {/* Heading  */}
          <div className='flex-1 md:p-20'>
            <h1 className='md:text-4xl text-3xl font-semibold' style={{ color: "#9700D6" }}>
              PERSONAL PORTFOLIO
            </h1>

            <h2 className='text-white font-semibold mt-6 md:text-3xl text-2xl' style={{ background: "#F8B271" }}>Hi! I am Richard Braine.</h2>

            <p className='text-2xl mt-8'>Designing User Interfaces for over 7 years as a Product Designer.</p>


          </div>

          {/* Image */}
          <div className='flex-1'>
            <img src={HeroImage} alt="" />
          </div>

        </div>


      </div>


      {/* Clients Section */}

      <div className='w-full p-8 mt-8'>
        <div className='grid md:p-20 items-center justify-center md:grid-cols-3 grid-cols-1'>

          <div className='py-8 ' style={{ background: "#FFE7EF" }}>
            <h2 className='mt-4 text-center text-2xl font-semibold'>342</h2>
            <p className='text-center mt-6 text-xl font-semibold'>Clients work with me</p>
          </div>
          <div className='py-8' style={{ background: "#F5DDFF" }}>
            <h2 className='mt-4 text-center text-2xl font-semibold'>576</h2>
            <p className='text-center mt-6 text-xl font-semibold'>Projects Done</p>
          </div>
          <div className='py-8' style={{ background: "#FFF9ED" }}>
            <h2 className='mt-4 text-center text-2xl font-semibold'>623</h2>
            <p className='text-center mt-6 text-xl font-semibold'>Happy Clients </p>
          </div>

        </div>
      </div>


      {/* Designs Section */}

       <div className='w-full p-8 mt-8'>
          <h1 className='text-center text-4xl'>
          You'll Enjoy These Designs I Created
          </h1>


          <div className='grid mt-6 md:grid-cols-4 grid-cols-1 p-6'>

              <div className='px-8 py-4' style={{background : "#D0CCFF8F"}}>
                 <h2 className='bg-white p-4 text-center rounded-full'>All Projects</h2>
              </div>

              <div className='px-8 py-4' style={{background : "#FFE7EF"}}>
                 <h2 className='text-center mt-4'>App Design</h2>
              </div>

              <div className='px-8 py-4' style={{background : "#F5DDFF"}}>
                 <h2 className='text-center mt-4'>Web Design</h2>
              </div>
              <div className='px-8 py-4' style={{background : "#FFF9ED"}}>
                 <h2 className='text-center mt-4'>Branding App</h2>
              </div>

          </div>


            <div className='grid md:grid-cols-3 grid-cols-1 p-8 gap-4'>
               <img src={Design1} alt="" />
               <img src={Design2}alt="" />
               <img src={Design3} alt="" />
               <img src={Design4}alt="" />
               <img src={Design5}alt="" />
               <img src={Design6} alt="" />

            </div>

       </div>


       {/* Plans Section */}

        <div className='w-full mt-10 p-8 bg-gradient-to-r from-pink-200 via-purple-400 to-yellow-200'>
          <div className='md:p-10 flex flex-col items-center justify-center'>
           <h1 className='text-3xl font-semibold text-center'>The Best Strategy for Your Company</h1>

            <h2 className='mt-8 text-xl text-center'>PICK OUT THE BEST PLAN THAT SUITS YOUR REQUIREMENT!</h2>

             <div className='flex items-center px-6 py-3 mt-10 gap-4 rounded-md' style={{background : "#FD5A91E8"}}>
               <span className='text-xl'>MONTHLY</span>
               <span className='text-xl px-4 py-3 bg-white rounded-md'>YEARLY</span>
             </div>


             {/* Cards  */}
               <div className='grid mt-8 md:grid-cols-4 grid-cols-1 gap-4'>
                 {
                  PlanData.map((item)=>(
                    <PlanCard item={item}/>
                  ))
                 }
               </div>

             </div>
        </div>


        {/* Method of Operation Section */}

         <div className='w-full p-8 mt-10'>

            <div className='flex md:flex-row flex-col md:p-8'>
              {/* Image Section */}
               <div className="flex-1">
                 <img src={MethodofOperationImage} alt="" />
               </div>

               {/* Text Content */}
               <div className="flex-1">
                 <h1 className='text-3xl font-semibold '>My method of operation</h1>
                 <h2  className='text-2xl mt-4 '>How I start working</h2>


                 <div className='flex mt-8 flex-col gap-4'>

                   <div className='flex gap-8'>
                     <img className='w-20 h-20' src={AboutIcon1} alt="" />
                      <div>
                        <h2 className='text-2xl font-bold'>Concept Creation</h2>
                        <p className='mt-4'>The creative concept is a unifying message that ties all elements of a campaign together and is echoed throughout a campaign's headlines, taglines, and visuals.</p>
                      </div>
                   </div>

                   <div className='flex gap-8'>
                     <img className='w-20 h-20' src={AboutIcon2} alt="" />
                      <div>
                        <h2 className='text-2xl font-bold'>Sketch Drawing</h2>
                        <p className='mt-4'>Traditionally a rough drawing or painting in which an artist notes down his preliminary ideas for a work that will eventually be realized with greater precision and detail.</p>
                      </div>
                   </div>

                   <div className='flex gap-8'>
                     <img className='w-20 h-20' src={AboutIcon3} alt="" />
                      <div>
                        <h2 className='text-2xl font-bold'>Final Design</h2>
                        <p className='mt-4'>During the final design stage the detailed architectural and engineering drawings (the blueprints) of all physical components of the project are produced.</p>
                      </div>
                   </div>


                 </div>

               </div>
            </div>

         </div>

    </div>
  )
}

export default ProtfolioPage
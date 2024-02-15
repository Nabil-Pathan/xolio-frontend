import React from 'react'
import Image1 from "../images/rocket.png"
import Image2 from "../images/consultation-image1.png"
import ContactForm from './ContactForm'

const Consultation = () => {
  return (
    <div className='flex md:flex-row flex-col md:p-8'>

        <div className='flex-1 p-6'>
             <h1 className='text-white font-bold text-4xl p-2 space-x-3' style={{background: "#F8B271"}}>
             Best Digital  Marketing Company in the World
             </h1>

             <p className='text-sm mt-6'>A digital branding and web design firm can help you create the remarkable. Want to establish a seismic brand for your company? Set up a free, all-day brand workshop right away!</p>

             <div className='flex gap-2 mt-8 items-center '> 
                <img src={Image1} alt="" />
                <h2 className='text-2xl font-bold'>Faster Order Processing</h2>
            </div>
             <div className='flex gap-2 mt-8 items-center '> 
                <img src={Image2} alt="" />
                <h2  className='text-2xl font-bold'>Processing Accuracy</h2>
            </div>

        </div>

        <ContactForm/>
    </div>
  )
}

export default Consultation
import React from 'react'
import LocationIcon from "../images/location-icon.png"
import MailIcon from "../images/mail-icon.png"
import PhoneIcon from "../images/phone-icon.png"
import ContactForm from '../components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie} from "@fortawesome/free-solid-svg-icons"

const ContactusPage = () => {
  return (
    <div className=''>

      {/* First Section */}

      <div style={{background : "#FFE2EF"}} className='flex md:flex-row items-center flex-col p-8 justify-between'>

         <div className='p-8 flex-1 md:relative'>
           <h1 className='text-5xl font-semibold' style={{color : "#B400FF"}}>CONTACT US</h1>

           <h2 className='text-4xl mt-6'>Get in Touch</h2>

           <p className='text-sm mt-6'>Want to get in touch? We would love <br /> to hear from you! Here is how you can reach us...</p>

           <div className='md:absolute md:mt-0 mt-6 md:top-[300px] p-6 flex flex-col items-center justify-center shadow-lg' style={{background : "#FFE2EF"}}>

              <FontAwesomeIcon className='text-4xl' icon={faUserTie}/>
             <h1 className='mt-6 text-xl font-bold'>CONTACT CUSTOMER SUPPORT</h1>
             <h2>Are you a customer who needs helps? Don’t worry! We are here for you.</h2>
           </div>


         </div>

         <div className='rounded-full    flex-1 w-full'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5438979113264!2d72.62590417458416!3d23.113786579109867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84604595e899%3A0x3e7418c1b4e56140!2sWebEarl%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1707996827988!5m2!1sen!2sin"  style={{border : "0"}} className='rounded-full md:w-[500px] md:h-[500px] w-[400px] h-[400px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </div>


{/* Second Section */}

     <div className='w-full md:p-8 mt-20'>

         <div className='flex md:flex-row flex-col p-6'>

           <div className="flex-1 p-4">
             <div className='flex gap-4 items-center'>
              <img className='h-20' src={LocationIcon} alt="" />
              <p>XYZ street, Ahmedabad</p>
             </div>
             <div className='mt-4 flex gap-4 items-center'>
              <img className='h-20' src={MailIcon} alt="" />
              <p>Company@gmail.com</p>
             </div>
             <div className='flex mt-4  gap-4 items-center'>
              <img className='h-20' src={PhoneIcon} alt="" />
              <p>+91 1234567891</p>
             </div>
           </div>

           <div className="flex-1 ">
              <ContactForm/>
           </div>
         </div>

     </div>

    </div>
  )
}

export default ContactusPage
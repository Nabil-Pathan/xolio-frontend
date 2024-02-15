import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex-1 '>
    <form className='md:p-6  p-10 rounded-md flex flex-col items-center' style={{background : "#FFC5D9FC"}}>
        <h1 className='text-3xl text-center'>SEND US YOUR QUERIES</h1>
        <div className='mt-6 flex gap-4 p-6  flex-col items-center'>
        <input type="email" placeholder='Email Address' className='md:px-8 px-2 py-2 rounded-md '  />
        <input type="text" placeholder='Name'className='md:px-8 px-2 py-2 rounded-md ' />
        <input placeholder='Phone Number' type="text"className='md:px-8 px-2 py-2 rounded-md ' />
        <textarea  placeholder='Query' className='resize-none md:px-8 px-2 py-2 rounded-md ' ></textarea>
        </div>
        <button className='p-4 text-white font-bold rounded-md' style={{background : "#F4549C"}}>CONSULTATION</button>
    </form>

</div>
  )
}

export default ContactForm
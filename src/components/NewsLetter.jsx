import React from 'react'

const NewsLetter = () => {
  return (
   
    <div className=' mt-8 w-full'>
    <div className='p-8 flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 via-purple-400 to-yellow-200'>
      <h1 className='text-center text-3xl font-semibold'>For our latest Updates</h1>
       <h2 className='text-center text-2xl mt-6'>YOU CAN SUBSCRIBE US!</h2>
       <input type="email" placeholder='Email Address' className='md:px-12 px-8 mt-8 py-3 rounded-md' />

       <button style={{background : "#F4549C"}} className='rounded-md px-8 py-3 mt-8 text-white font-bold'>SUBSCRIBE</button>
    </div>
</div>

    )
}

export default NewsLetter
import React from 'react'

const BlogSearchSection = () => {
  return (
<div className="flex-1 md:p-10 ">
             <h1 className='md:text-4xl text-3xl font-medium' >Blog</h1>

             <div className='mt-3 flex flex-col '>
               <h1 className=' text-2xl  ' >Search Here</h1>

               <input type="text" className='mt-4 placeholder-gray-700 md:px-8 px-2 py-3 rounded-md' placeholder='Email Address' style={{background : "#FEBEDB"}} />

               <div>
                 <button className='mt-4 bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-2 rounded-md text-white font-bold'>Search</button>
                 </div>
             </div>

             <div className='mt-8'>
               <h1 className='text-3xl'>Categories</h1>
               
               <div className="grid mt-4 gap-6 grid-cols-3">
                  <p style={{color : "#FD006ABA"}} className='md:text-xl'>Agency</p>
                  <p style={{color : "#FD006ABA"}} className='md:text-xl'>Business</p>
                  <p style={{color : "#FD006ABA"}} className='md:text-xl'>Education</p>
                  <p style={{color : "#FD006ABA"}} className='md:text-xl'>Portfolio</p>
                  <p style={{color : "#FD006ABA"}} className='md:text-xl'>Travel</p>
               </div>
             </div>
           </div>
  )
}

export default BlogSearchSection
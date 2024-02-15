import React from 'react'
import HeroImage from "../images/blog-hero.png"
import BlogSearchSection from '../components/BlogSearchSection'
import LatestPostsSection from '../components/LatestPostsSection'
import BlogsSection from '../components/BlogsSection'


const BlogPage = () => {
  return (
    <div>

      {/* Hero Section */}


      <div className='w-full p-10'>
         <div className='flex items-center justify-center md:flex-row flex-col '>
         <div className="flex-1 md:p-20 ">
           <img className='md:h-[400px] md:w-[600px]' src={HeroImage} alt="" />
           </div>
           
           <BlogSearchSection/>
          
         </div>
       </div>


       {/* Latest Posts Section */}

       <div className='w-full mt-10'>

          <div className='flex md:flex-row flex-col p-8'>

            <LatestPostsSection/>

            <BlogsSection/>


          </div>

       </div>

    </div>
  )
}

export default BlogPage
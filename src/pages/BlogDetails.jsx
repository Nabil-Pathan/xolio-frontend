import React from 'react'
import BlogSearchSection from "../components/BlogSearchSection"
import BlogsSection from "../components/BlogsSection"
import LatestPostsSection from "../components/LatestPostsSection"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faTwitter , faInstagram , faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AuthorImage from "../images/author.jpeg"
import { faComments } from '@fortawesome/free-regular-svg-icons';
import Comment1Image from "../images/comment1.jpeg"
import Comment2Image from "../images/comment2.jpeg"
import Comment3Image from "../images/comment3.jpeg"
import Comment from '../components/Comment';


const Comments = [
  {
    image : Comment1Image,
    name : "XYZ",
    date : "March 21, 2023",
    comment : "Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering."
  },


  {
    image : Comment2Image,
    name : "ABC",
    date : "March 21, 2023",
    comment : "Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering."
  },


  {
    image : Comment3Image,
    name : "PQR",
    date : "March 21, 2023",
    comment : "Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering."
  },

]


const BlogDetails = () => {
  return (
    <div>
      {/* First Section */}

      <div className='w-full md:p-10 p-6'>
        <h1 className='md:text-4xl text-2xl font-semibold text-center'>How to Place a Classified Ad in a Newspaper or Online</h1>

        <div className='flex md:flex-row flex-col md:p-8 p-6'>

          <div className="flex-1">
            <BlogSearchSection />
            <div className=''>
              <LatestPostsSection />
            </div>
          </div>

          <div className="flex-1">
            <BlogsSection />
          </div>

        </div>

        <div className='mt-6 md:p-10'>
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

      </div>


      {/* Author Section */}

      <div className='w-full  p-10'>
         <div className='p-6 rounded-lg flex items-center md:flex-row flex-col  gap-8' style={{background : "#FDE8D5"}}>

           {/* Profile Pic */}
            <img className='md:h-[170px] h-[200px] w-[200px] object-cover  rounded-full' src={AuthorImage} alt="" />

            {/* Details */}
            <div className='p-6'>
              <h1 className='text-2xl font-medium'>WRITTEN BY</h1>
              <h2  className='text-xl'>XYZ</h2>
              <p className='mt-4'>
              Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering.
              </p>

            </div>

         </div>
      </div>


      {/* Coments Section */}


      <div className='w-full md:p-10'>

         <div className='md:p-8 p-6 flex gap-4 items-center'>
         <FontAwesomeIcon className='text-5xl' icon={faComments} />
         <h1 className='text-2xl font-semibold'>3 Comments</h1>
         </div>

         {/* comments */}
         <div className='p-6 flex flex-col gap-6'>
           {
            Comments.map((comment,index)=>(
              <Comment key={index} comment={comment}/>
            ))
           }
         </div>


      </div>

    </div>
  )
}

export default BlogDetails
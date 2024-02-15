import React from 'react'
import Post from './Post'
import FirstBlogImage from "../images/first-blog.png"
import SecondBlogImage from "../images/second-blog.png"
import ThirdBlogImage from "../images/third-blog.png"

const PostsData = [
    {
      image : FirstBlogImage ,
      type : "Agency",
      date : "June 2023",
      title : "Designing Filters that work best Practices and Guidelines",
      content : "Laboratories used for scientific research take many forms because of the differing Read more..."
    },
  
    {
      image : SecondBlogImage ,
      type : "Education",
      date : "June 2023",
      title : "Designing Birthday picker UX is simply Better!",
      content : "Laboratories used for scientific research take many forms Read more..."
    },
    {
      image : ThirdBlogImage ,
      type : "Portfolio",
      date : "June 2023",
      title : "Usability Pitfalls of Disabled buttons and How to avoid them.",
      content : "Laboratories used for scientific research take many forms Read more..."
    },
  
   
  ]

const BlogsSection = () => {
  return (
    <div  className=''>
              {
                PostsData.map((post)=>(
                  <Post post={post}/>
                ))
              }
             </div>
  )
}

export default BlogsSection
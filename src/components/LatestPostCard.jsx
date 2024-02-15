import React from 'react'


const LatestPostCard = ({post}) => {
  return (
    <div className='flex md:flex-row flex-col items-center'>
        <img className='md:w-60 md:h-60 object-cover rounded-lg' src={post.image} alt="" />

        <div className='p-8 md:mt-0 mt-10'>
            <span className='px-6 py-2 rounded-lg text-xl font-bold' style={{background :"#FFBEDB"}}>{post.type}</span> <span>{post.date}</span>
            <h2 className='text-xl mt-6 font-medium'>{post.title}</h2>
            <p className='text-sm mt-4'>{post.content}</p>
        </div>
    </div>
  )
}

export default LatestPostCard
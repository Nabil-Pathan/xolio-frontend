import React from 'react'

const Post = ({post}) => {
  return (
    <div className='flex p-10 flex-col'>

        <img className='md:w-[500px] md:h-[300px]' src={post.image} alt="" />
        <div className='mt-6 flex items-center gap-4'>
        <span className='px-6 py-2 rounded-lg text-xl font-bold' style={{background :"#FFBEDB"}}>{post.type}</span> <span>{post.date}</span>
        </div>
        <h1 className='mt-4 text-2xl font-medium'>{post.title}</h1>
        <p className='mt-4 text-sm font-medium'>{post.content}</p>

    </div>
  )
}

export default Post
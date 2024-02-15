import React from 'react'

const Comment = ({comment}) => {
  return (
    <div className='md:p-6 flex  gap-4'>
        <img className=' md:h-[100px] h-[60px] md:w-[130px] w-[300px] object-cover  rounded-full' src={comment.image} alt="" />

        <div className='p-4'>
        <h1 className='text-xl font-medium'>{comment.name}</h1>
        <p className='text-sm mt-2'>{comment.date}</p>
        <p className='mt-6'>{comment.comment}</p>
        </div>
    </div>
  )
}

export default Comment
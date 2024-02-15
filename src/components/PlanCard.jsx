import React from 'react'

const PlanCard = ({item}) => {
  return (
    <div className='p-6 flex flex-col items-center justify-center bg-white shadow-lg rounded-md'>
        <h1 className='text-center mt-4 text-3xl font-semibold' style={{color : "#07173E"}}>{item.title}</h1>
        <h1 className='text-center mt-4 text-3xl font-bold'>{item.price}</h1>
        <button className='px-6 mt-6 font-semibold py-3 text-white rounded-md' style={{background : "#B46DFF"}}>START YOUR FREE TRIAL</button>

        <div className='mt-6'>
            {
                item.planFeatures.map((feature)=>(
                    <p>{feature}</p>
                ))
            }
        </div>
    </div>
  )
}

export default PlanCard
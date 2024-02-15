import React from 'react';

const ServiceCard = ({ bgColor, title, description, image, imageBg }) => {
  return (
    <div className='py-20 px-4 relative flex flex-col items-center rounded-md' style={{ background: `${bgColor}` }}>
      <div style={{ background: `${imageBg}` }} className='rounded-full absolute top-[-50px] flex items-center justify-center w-28 h-28'>
        <img className='w-20 h-20' src={image} alt="" />
      </div>
      <div className='p-4'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='mt-4'>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

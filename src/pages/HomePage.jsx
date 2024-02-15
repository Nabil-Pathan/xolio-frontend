import React from 'react';
import HeroImage from "../images/hero-image.png";
import { Link } from 'react-router-dom';
import ServiceImage1 from "../images/service-icon-01.png";
import ServiceImage2 from "../images/service-icon-02.png";
import ServiceImage3 from "../images/service-icon-03.png";
import ServiceImage4 from "../images/service-icon-04.png";
import ServiceCard from '../components/ServiceCard';
import AboutCompanyImage1 from "../images/aboutCompany-image1.png";
import AboutCompanyImage2 from "../images/aboutCompany-image-2.png";
import OurTeamImage from "../images/our-team.png"
import Vector1 from "../images/vector1.png"
import Craft1 from "../images/craft1.png"
import Craft2 from "../images/craft2.png"
import Craft3 from "../images/craft3.png"
import Craft4 from "../images/craft4.png"
import SwiperComponent from '../components/SwiperComponent';
import Consultation from '../components/Consultation';
import NewsLetter from '../components/NewsLetter';

const HomePage = () => {

  const Services = [
    {
      title: "UI UX Design",
      description: "Users experience great UX when shopping. They also find product usage convenient and enjoyable.",
      image: ServiceImage1,
      bgColor: "#B2ABFF52",
      imageBg: "#897FFF"
    },
    {
      title: "Product Design",
      description: "Product Design improves business performance across the market thanks to a better relative position to the competitors.",
      image: ServiceImage2,
      bgColor: "#E5A5FF61",
      imageBg: "#DA85FC"
    },
    {
      title: "Website Design",
      description: "A well-designed website can help you form a good impression on your prospective customers.",
      image: ServiceImage3,
      bgColor: "#FFC4D866",
      imageBg: "#FE86AE"
    },
    {
      title: "Branding",
      description: "Branding allows you to build relationships with your audience, which can turn them into loyal customers.",
      image: ServiceImage4,
      bgColor: "#FFEDCD5E",
      imageBg: "#FFDDA1"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className='flex md:flex-row gap-6 flex-col items-center justify-center'>
        {/* Heading */}
        <div className='flex-1 p-10'>
          <h1 className='md:text-7xl text-5xl font-semibold'>We Evolve your <span className='text-headerPink1'> business </span> through Our <span className='text-headerPink2'> Services </span></h1>
        </div>

        {/* Image */}
        <div className='flex-1 p-8 flex flex-col items-center justify-center'>
          <img src={HeroImage} alt="hero" />
          <div className="mt-4">
            <button className='px-8 py-4 text-xl bg-headerPink1 hover:bg-pink-500 rounded-md text-white font-bold'>
              <Link to="/contactus">
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='w-full mt-8 p-6'>
        <div className='grid md:gap-8 gap-20 md:grid-cols-4 grid-cols-1'>
          {
            Services.map((service) => {
              return (
                <ServiceCard title={service.title} description={service.description} image={service.image} imageBg={service.imageBg} key={service.title} bgColor={service.bgColor} />
              )
            })
          }
        </div>
      </div>

      {/* About Company Section*/}
      <div className='w-full mt-10 p-6'>
        <div className='flex flex-col md:flex-row gap-4 bg-gradient-to-r from-pink-300 via-purple-500 to-yellow-300'>

          <div className='flex-1 p-8'>
            <h1 className='text-2xl'>About Company</h1>
            <h1 className='text-3xl font-bold mt-4'>A complete design and branding firm</h1>

            <p>A digital branding and web design firm can help you create the remarkable. Want to establish a seismic brand for your company? Set up a free, all-day brand workshop right away!</p>

            <h2 className='font-bold mt-4'>WebGL & Interactive Design.</h2>

            <p>This innovative technology is currently utilized in 3D web design, interactive games, physics simulations, data visualization, and artwork.</p>


            <hr className='bg-black h-1 mt-4' />

            <h2 className='font-bold mt-4'>Digital First Branding.</h2>

            <p>Digital-first branding, as the name implies, is a way in which digital implications take precedence in the design and journey of your brand.</p>

          </div>

          <div className='flex-1 p-8 flex items-center flex-col'>
            <div className='flex items-center md:flex-row flex-col  justify-center'>
              <img className='h-48' src={AboutCompanyImage1} alt="" />
              <img className='h-48 relative md:top-[100px]  md:right-[100px] right-[-50px] top-[-50px]' src={AboutCompanyImage2} alt="" />
            </div>

            <div>
              <button style={{ background: "#F4549C" }} className='p-4 rounded-md text-white font-bold md:mt-40'>Read More</button>
            </div>
          </div>


        </div>
      </div>

      <div className='flex mt-8 w-full items-center justify-center'>
        <img className='w-48 h-26' src={Vector1} alt="" />
      </div>


      {/* Our Team Section */}

      <div className='w-full p-8 mt-8'>
        <div className='flex md:flex-row flex-col'>

          <div className='flex-1 p-5'>
            <img src={OurTeamImage} alt="" />
          </div>

          <div className='flex-1 p-6 '>
            <div className='bg-gradient-to-r from-pink-200 to-white rounded-full h-full relative w-full'>

              <div className='md:absolute md:ml-0 ml-10 md:mt-0 mt-20 md:top-20  md:left-20'>
                <h2 className='text-2xl mt-4'>Our Team</h2>
                <h1 className='text-3xl mt-4 font-bold'>Being Unafraid to Fail is a Key Component of Creativity</h1>

                <p className='mt-4 text-sm'>
                  A meet the team page is a page where companies can introduce their employees to site visitors and showcase the highlights of their organization's personnel.
                </p>

                <button style={{ background: "#F4549C" }} className='text-white mt-4 font-bold p-4 rounded-md'>Meet Our Team</button>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* Craft Section */}


      <div className='w-full mt-8 px-2 py-8' >

        <div className='flex md:flex-row flex-col p-6 rounded-3xl' style={{ background: "#7BFEFE5C" }}>

          <div className="flex-1 p-8">
            <h2 className='text-2xl mt-4 '>Our Entire Craft</h2>
            <h1 className='text-4xl mt-8 font-bold'>Several of Our Projects for the Craft Digital Agency</h1>

            <button style={{ background: "#F4549C" }} className='p-4 mt-6 rounded-md text-white font-bold'>View All Projects</button>

            <div className='flex gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" style={{color : "#A123E1"}} />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" style={{color : "#A123E1"}}/>
              </svg>
            </div>
          </div>


          <div className="flex-1">
              <div className='grid gap-4 md:grid-cols-2 grid-cols-1'>
                <img className='border border-black' src={Craft1} alt="" />
                <img className='border border-black' src={Craft2} alt="" />
                <img className='border border-black' src={Craft3} alt="" />
                <img className='border border-black' src={Craft4}alt="" />
              </div>
          </div>

        </div>

      </div>


      {/* About Us What Our Customer Says */}

      <div className='w-full mt-8 px-2 py-8'>
      <h1 className='text-4xl text-center mb-8 font-semibold p-10'>See What Our Customer Say About Us</h1>
        <SwiperComponent/>
      </div>


      {/* Consultation */}

      <div className='w-full mt-8 p-8'>
        <Consultation/>
      </div>


      {/* News Letter Section */}

     <NewsLetter/>

    </div>
  );
};

export default HomePage;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Customer1Image from "../images/customer1.jpeg";
import { EffectCoverflow, Pagination, Navigation, FreeMode, Scrollbar } from 'swiper/modules';

const SwiperData = [
    {
        text: '“The communication with the team was flawless. They were responsive, open to feedback, and always kept me informed about the progress. They truly cared about my satisfaction and went above and beyond to ensure that every aspect of the design was perfect.”',
        customerName: 'Rahul Choksi',
        customerImage: Customer1Image,
    },
    {
        text: 'I recently worked with XYZ Design Agency for a branding project, and I must say they exceeded my expectations in every way. From the initial consultation to the final deliverables, their team showcased exceptional creativity, professionalism, and attention to detail.” ',
        customerName: 'Naman Oberoi',
        customerImage: Customer1Image,
    },
    {
        text: '“I highly recommend XYZ Design Agency to anyone in need of top-notch design services. Their talented team, professionalism, and commitment to customer satisfaction make them a standout agency in the industry. I look forward to working with them again on future projects.',
        customerName: 'Diya Shah',
        customerImage: Customer1Image,
    },
    {
        text: '“I highly recommend XYZ Design Agency to anyone in need of top-notch design services. Their talented team, professionalism, and commitment to customer satisfaction make them a standout agency in the industry. I look forward to working with them again on future projects.',
        customerName: 'Diya Shah',
        customerImage: Customer1Image,
    },
    {
        text: '“I highly recommend XYZ Design Agency to anyone in need of top-notch design services. Their talented team, professionalism, and commitment to customer satisfaction make them a standout agency in the industry. I look forward to working with them again on future projects.',
        customerName: 'Diya Shah',
        customerImage: Customer1Image,
    },
];

const SwiperComponent = () => {


    return (
        <div className="p-6">
            <Swiper
                effect={EffectCoverflow}
                spaceBetween={20}
                freeMode={true} 
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination, Scrollbar]}
                className="mySwiper"
                breakpoints={{
                    500:{
                        slidesPerView : 1
                    },
                    786:{
                        slidesPerView : 3
                    }
                }}
            >
                {SwiperData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="max-w-md mx-auto p-6 border border-gray-200 rounded-md shadow-md">
                            <p className="text-lg mb-4">{item.text}</p>
                            <div className="flex items-center">
                                <img src={item.customerImage} alt={item.customerName} className="w-12 h-12 rounded-full mr-4" />
                                <p className="text-sm font-semibold">{item.customerName}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperComponent;

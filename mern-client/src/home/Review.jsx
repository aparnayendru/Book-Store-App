import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import react icons
import {FaStar} from "react-icons/fa6";

//import avatar from flowbite-react
import { Avatar } from "flowbite-react";
import proPic from "../assets/profileimages/profile-1.png";

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

        <div>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                slidesPerView: 1,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 2,
                spaceBetween: 40,
                },
                1024: {
                slidesPerView: 3,
                spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                    {/* text */}
                    <div className='mt-7'>
                        <p className='mb-5'>I've been an avid reader for years, and this site has quickly become my go-to for finding new books. The selection is vast, and I love the recommendations based on my reading history. The PDF downloads make it easy to take my books anywhere!</p>
                        <Avatar img={proPic} rounded className='w-10 mb4'/>
                        <h5 className='text-g font-medium'>John D.</h5>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                    {/* text */}
                    <div className='mt-7'>
                        <p className='mb-5'>The book collection here is impressive! I found some rare titles that I couldn’t find anywhere else. The user interface is clean and easy to navigate. The only reason I didn't give 5 stars is that I wish there were more audiobooks.</p>
                        <Avatar img={proPic} rounded className='w-10 mb4'/>
                        <h5 className='text-g font-medium'>Emily R.</h5>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                    {/* text */}
                    <div className='mt-7'>
                        <p className='mb-5'>This platform has completely changed how I buy books. The prices are competitive, and I appreciate the detailed descriptions and reviews. I’ve discovered some incredible new authors here. Highly recommended!</p>
                        <Avatar img={proPic} rounded className='w-10 mb4'/>
                        <h5 className='text-g font-medium'>Michael S.</h5>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                    {/* text */}
                    <div className='mt-7'>
                        <p className='mb-5'>As a busy professional, I don’t always have time to visit a bookstore. This site is a lifesaver! The variety is amazing, and I can download PDFs to read on my tablet during my commute. The customer service is also top-notch!</p>
                        <Avatar img={proPic} rounded className='w-10 mb4'/>
                        <h5 className='text-g font-medium'>Samantha K.</h5>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                    {/* text */}
                    <div className='mt-7'>
                        <p className='mb-5'>Great experience overall. The website is easy to use, and I love the variety of genres available. The search feature works well, but I think the shipping could be faster. Otherwise, a fantastic place to shop for books.</p>
                        <Avatar img={proPic} rounded className='w-10 mb4'/>
                        <h5 className='text-g font-medium'>David L.</h5>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                    {/* text */}
                    <div className='mt-7'>
                        <p className='mb-5'>I’m so glad I found this website! The best part is the personalized recommendations – I've discovered so many great books I wouldn’t have found on my own. The prices are good, and I love the free PDF downloads. I’ll definitely be back for more.</p>
                        <Avatar img={proPic} rounded className='w-10 mb4'/>
                        <h5 className='text-g font-medium'>Rachel M.
                        </h5>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>

        </div>
    </div>
  )
}

export default Review
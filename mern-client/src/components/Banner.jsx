import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className = 'flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the best prices</span></h2>
                <p className='md:w-4/5 font-semibold text-lg md:text-xl lg:text-2xl'>Discover a wide selection of books to buy and sell at unbeatable prices. Whether you're looking for a rare find or want to declutter your shelves, our platform connects book lovers from all walks of life. Start your literary journey with us today!</p>
                <div>
                    <input type="search"name="search" id="search" placeholder='search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>

            <div>
                <BannerCard/>
            </div>

        </div>
    </div>
  )
}

export default Banner
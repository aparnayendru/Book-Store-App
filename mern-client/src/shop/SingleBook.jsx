import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const { _id, bookTitle, imageURL, bookDescription } = useLoaderData();
    
    // Simple error handling if data is missing
    if (!bookTitle || !imageURL || !bookDescription) {
        return <p>Book details are not available.</p>;
    }

    return (
        <div className='mt-28 px-4 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center'>
            <div className='lg:w-1/2 lg:pr-8'>
                <img 
                    src={imageURL} 
                    alt={bookTitle} 
                    className='w-full h-auto max-h-80 object-contain' 
                />
                <div className='mt-4 text-center'>
                    <button 
                        className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-black cursor-pointer'
                    >
                        Want to Buy?
                    </button>
                </div>
            </div>
            <div className='lg:w-1/2 mt-4 lg:mt-0'>
                <h2 className='font-bold text-lg md:text-xl lg:text-2xl'>{bookTitle}</h2>
                <p className='font-semibold mt-2'>{bookDescription}</p>
            </div>
        </div>
    );
}

export default SingleBook;

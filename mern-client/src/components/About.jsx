import React from 'react';

const About = () => {
    console.log("About component rendered");

    return (
        <div className='mt-28 px-4 lg:px-24 bg-teal-100 py-8'>
            <h1 className='text-3xl font-bold mb-4'>About Us</h1>
            <p className='text-lg mb-4'>
                Welcome to our platform where you can buy and sell your books for the best prices! Our mission is to create a community where book lovers can easily exchange their favorite books, find great deals, and connect with others who share their passion for reading.
            </p>
            <p className='text-lg mb-4'>
                <strong>Our Story:</strong> 
                We started with a simple idea: to make it easier for readers to access quality books at affordable prices while providing a space for individuals to sell their books to new readers. Our platform is designed to be user-friendly, secure, and efficient, ensuring a smooth experience for all users.
            </p>
            <p className='text-lg mb-4'>
                <strong>What We Offer:</strong>
                <ul className='list-disc pl-5'>
                    <li>A wide selection of books available for purchase at competitive prices.</li>
                    <li>An easy-to-use interface for listing and selling your own books.</li>
                    <li>Regular updates on new arrivals and special deals.</li>
                    <li>Support and assistance to help you with any queries or issues.</li>
                </ul>
            </p>
            <p className='text-lg'>
                Thank you for visiting our site! We are committed to providing an excellent service and look forward to helping you find your next great read or connect with fellow book enthusiasts.
            </p>
        </div>
    );
};

export default About;

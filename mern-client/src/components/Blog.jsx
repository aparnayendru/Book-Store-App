import React from 'react';
import image from '../assets/blog/blog-1.jpg'
import image2 from '../assets/blog/blog-2.jpg'

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Exploring the Latest Trends in Book Publishing",
            excerpt: "Discover the emerging trends and technologies that are shaping the future of book publishing.",
            image: "https://images.pexels.com/photos/1486134/pexels-photo-1486134.jpeg",
        },
        {
            id: 2,
            title: "How to Market Your Self-Published Book Effectively",
            excerpt: "Learn strategies for effectively marketing your self-published book to reach a wider audience.",
            image: image,
        },
        {
            id: 3,
            title: "The Benefits of Joining a Book Club",
            excerpt: "Explore the numerous benefits of being part of a book club and how it can enhance your reading experience.",
            image: image2,
        },
    ];

    return (
        <section className='bg-teal-100 py-8 mt-20'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8'>Latest Blog Posts</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {blogPosts.map(post => (
                        <div key={post.id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                            <div className='relative'>
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className='w-full h-40 object-cover object-center'
                                />
                            </div>
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold mb-2'>{post.title}</h3>
                                <p className='text-gray-700 mb-4'>{post.excerpt}</p>
                                <a href="#" className='text-blue-600 hover:underline'>Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;

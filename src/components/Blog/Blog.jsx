import PropTypes from 'prop-types';
import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookMark,handleMarkAsRead }) => {
    const{id,title,cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4 '>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`}/>
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={() =>handleAddToBookMark(blog)}
                    className='text-2xl ml-2 text-red-600'
                    >
                    <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
              {
               hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)
              }
            </p>
            <button className='text-purple-800 underline font-bold' onClick={() =>handleMarkAsRead(id, reading_time)}>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;
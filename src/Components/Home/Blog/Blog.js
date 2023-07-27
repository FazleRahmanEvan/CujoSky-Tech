
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogSlide from './BlogSlide';

import { Link } from 'react-router-dom';

const Blog = () => {
   const [blogs, setBlogs]=useState([]);

   useEffect ( () => {
       fetch('blog.json')
       .then(res => res.json())
       .then(data => setBlogs(data));
   }, [])


   
   function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

   function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background:"gray"}}
          onClick={onClick}
        />
      );
    }
    

   const settings = {
      dots: false,
      infinite: true,
      // autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      pauseOnHover: true,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
     
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            gap:true,
            
          },
        },
      ],
    };

    return (
      
       <section id='ourBlog' className='bg-slate-50 mt-3 text-center font-abc mb-4 mx-12 '>
        <h1 className='text-3xl text-center font-semibold underline decoration-violet-500 underline-offset-[20px] mb-7'>Latest Blog Post</h1>
        <p className=' text-center  mb-7 mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione deserunt molestiae error. Ipsa, dolorum!</p>
        
       
       <div className='gap-3 text-center  mb-10 mt-8'>
             <div className="justify-center">
             <Slider {...settings}>

              {
                blogs.map(blog =><BlogSlide
                key={blog.id}
                blog={blog}
                />)
               }

               </Slider>
             </div>
         
       </div>
        
        <button className='text-white  btn-sm btn-primary rounded-full mt-3  mb-10'><Link to="/blogs">View More</Link></button>
      
       </section>
    );
};

export default Blog;
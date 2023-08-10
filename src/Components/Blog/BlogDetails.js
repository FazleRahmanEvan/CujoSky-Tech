import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCards from './BlogCards';
import LatestSideBlog from './LatestSideBlog';

const BlogDetails = () => {
    const [blogs, setBlogs]=useState([]);
   
    useEffect ( () => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])
    return (
        <div className='font-abc lg:mt-12 mt-28 '>
            <div  className='flex bg-zinc-900 mb-4 justify-evenly flex-col lg:flex-row p-6'>
                <div>
                <h1 className='text-2xl font-semibold font-abc text-white'>Stay informed on our articles or events!</h1>
                </div>
                <div class="form-control ">
  <div class="input-group text-white">
    <input type="text " placeholder="Search  here" class="input input-sm text-white bg-black underline" />
    <button class="btn btn-sm bg-zinc-900">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
                
            </div>
            

   <div className='flex px-10  gap-2 mt-6 text-sm breadcrumbs '>

   <button className='flex gap-2 ml-20'>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    <a className='font-semibold text-sm'><Link to="/">Home</Link></a>
  </button>

  <a className='font-semibold text-sm'><Link to="/blogs">Blogs</Link></a>

   </div>
          
           <div className='flex justify-center justify-evenly'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20'>
            {/* {
                blogs.map(blog =><BlogCards
                key={blog.id}
                blog={blog}
                />)
               } */}
               <div className="card w-80 mb-5 mt-10 bg-base-100 shadow-2xl">
            <figure><img src="https://i.ibb.co/jwtszNJ/Frame-75-1.png" alt="" /></figure>
  <div class="card-body">
    <h2 class="card-title">Best and Unique App Ideas in 2024 for Startups</h2>
    <p>The app market is constantly evolving, and with it, the demand for new and innovative appideas. If you're a startup looking to develop an app, you'll need to come up with an idea that isboth unique and high demand.</p>
    <div class="card-actions justify-end mt-3">
          <button class="btn btn-xs btn-primary btn-rounded"><Link to ="/article1">See More</Link></button>
        </div>
  </div>
        </div>
                <div className="card w-80 mb-5 mt-10 bg-base-100 shadow-2xl">
            <figure><img src="https://i.ibb.co/F6m0f2n/Frame-75.png" alt="" /></figure>
  <div class="card-body">
    <h2 class="card-title">How to Hire the Best Software Company for Your Startup</h2>
    <p>Hiring a software company is a big decision for any startup. You need to find a company that can understand your vision, deliver high-quality work on time and within budget, and be a good partner as your business grows.</p>
    <div class="card-actions justify-end mt-3">
          <button class="btn btn-xs btn-primary btn-rounded"><Link to ="/article2">See More</Link></button>
        </div>
  </div>
        </div>
               <div className="card w-80 mb-5 mt-10 bg-base-100 shadow-2xl">
            <figure><img src="https://i.ibb.co/5rw4xVB/Frame-75-2.png" alt="" /></figure>
  <div class="card-body">
    <h2 class="card-title">How to Find the Right Digital Marketing Agency forYour E Commerce Business </h2>
    <p>E-commerce businesses are booming, and with that comes the need for effective digitalmarketing. If you're looking to grow your e-commerce business, you need to partner with adigital marketing agency that can help you reach your target audience and drive sales</p>
    <div class="card-actions justify-end mt-3">
          <button class="btn btn-xs btn-primary btn-rounded"><Link to ="/article3">See More</Link></button>
        </div>
  </div>
        </div> 
                 </div>
                  {/* fixed top-66 left-98 right-14 bottom-4 */}
               <LatestSideBlog></LatestSideBlog>
        </div>
           
        
        </div>
    );
};

export default BlogDetails;
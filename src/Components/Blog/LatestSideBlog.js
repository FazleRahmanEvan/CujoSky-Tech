import React from 'react';
import { Link } from 'react-router-dom';

const LatestSideBlog = () => {
    return (
        <div class="card w-64 h-4/5  pb-4 mt-10 bg-base-100 shadow-xl hidden lg:flex ">
        <div class="card-body">
         <h2 class="card-title text-2xl mb-4 underline decoration-violet-500 underline-offset-[20px]">Latest Blogs</h2>
        <Link to="/article1"> <div className='flex justify-evenly mt-4 gap-2 mb-2'>
         <div class="avatar">
          <div class="w-12 rounded-full">
           <img src="https://i.ibb.co/jwtszNJ/Frame-75-1.png" />
           </div>
             </div>
             <div>
           <p className='text-sm font-semibold'>Best and Unique App Ideas in 2024 for Startups.</p>
             </div>
         </div></Link>
         <Link to="/article2"><div className='flex justify-evenly mt-4 gap-2 mb-2'>
         <div class="avatar">
          <div class="w-12 rounded-full">
           <img src="https://i.ibb.co/F6m0f2n/Frame-75.png" />
           </div>
             </div>
             <div>
           <p className='text-sm font-semibold'>How to Hire the Best Software Company for Your Startup.</p>
             </div>
         </div></Link>
         <Link to="/article2"><div className='flex justify-evenly mt-4 gap-2 mb-2'>
         <div class="avatar">
          <div class="w-12 rounded-full">
           <img src="https://i.ibb.co/5rw4xVB/Frame-75-2.png" />
           </div>
             </div>
             <div>
           <p className='text-sm font-semibold'>How to Find the Right Digital Marketing Agency  </p>
             </div>
         </div></Link>
        

         </div>
         </div>
    );
};

export default LatestSideBlog;
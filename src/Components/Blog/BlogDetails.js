import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCards from './BlogCards';

const BlogDetails = () => {
    const [blogs, setBlogs]=useState([]);

    useEffect ( () => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])
    return (
        <div className='font-abc mt-8'>
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
            {
                blogs.map(blog =><BlogCards
                key={blog.id}
                blog={blog}
                />)
               }
                 </div>
                  {/* fixed top-66 left-98 right-14 bottom-4 */}
                 <div class="card w-64 h-4/5  pb-4 mt-10 bg-base-100 shadow-xl hidden lg:flex ">
                  <div class="card-body">
                   <h2 class="card-title mb-4 underline decoration-violet-500 underline-offset-[20px]">Latest Blogs</h2>
                   <div className='flex justify-evenly gap-2 mb-2'>
                   <div class="avatar">
                    <div class="w-12 rounded-full">
                     <img src="https://i.ibb.co/MCwKmdJ/blog-3.jpg" />
                     </div>
                       </div>
                       <div>
                     <p className='text-xs font-semibold'>Lorem, ipsum dolor sit amet consectetur.</p>
                       </div>
                   </div>
                   <div className='flex justify-evenly gap-2 mb-2'>
                   <div class="avatar">
                    <div class="w-12 rounded-full">
                     <img src="https://i.ibb.co/MCwKmdJ/blog-3.jpg" />
                     </div>
                       </div>
                       <div>
                     <p className='text-xs font-semibold'>Lorem, ipsum dolor sit amet consectetur.</p>
                       </div>
                   </div>
                   <div className='flex justify-evenly gap-2 mb-2'>
                   <div class="avatar">
                    <div class="w-12 rounded-full">
                     <img src="https://i.ibb.co/MCwKmdJ/blog-3.jpg" />
                     </div>
                       </div>
                       <div>
                     <p className='text-xs font-semibold'>Lorem, ipsum dolor sit amet consectetur.</p>
                       </div>
                   </div>
                   <div className='flex justify-evenly gap-2 mb-2'>
                   <div class="avatar">
                    <div class="w-12 rounded-full">
                     <img src="https://i.ibb.co/MCwKmdJ/blog-3.jpg" />
                     </div>
                       </div>
                       <div>
                     <p className='text-xs font-semibold'>Lorem, ipsum dolor sit amet consectetur.</p>
                       </div>
                   </div>
                   <div className='flex justify-evenly gap-2 mb-2'>
                   <div class="avatar">
                    <div class="w-12 rounded-full">
                     <img src="https://i.ibb.co/MCwKmdJ/blog-3.jpg" />
                     </div>
                       </div>
                       <div>
                     <p className='text-xs font-semibold'>Lorem, ipsum dolor sit amet consectetur.</p>
                       </div>
                   </div>
   
                   </div>
                   </div>
        </div>
           
        
        </div>
    );
};

export default BlogDetails;
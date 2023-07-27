import React from 'react';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Artical = () => {
    return (
        <div>
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

           <div className='px-8'>
       <div>
       <div className='flex lg:pl-32  gap-2 mt-9 mb-5 text-sm breadcrumbs'>

<button className='flex  gap-2 ml-20'>
 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
<a className='font-semibold text-sm'><Link to="/">Home</Link></a>
</button>

 <a className='font-semibold text-sm'><Link to="/blogs">Blogs</Link></a>

</div>
       </div>


<div className='flex justify-center justify-evenly'>

<div className='grid justify-center mt-12'>

<div class="card w-96 bg-base-100 shadow-xl mb-5">
<figure><img src="https://ncube-digest.com/wp-content/uploads/2020/02/Top-8-Software-Development-Models.jpg" /></figure>
<div class="card-body">
<h2 class="card-title">Galen Robotics brings in $15 milion in oversubscribed round</h2>
<p>By Jack Adams</p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sapiente nostrum officia. Velit, natus dolorem? Quidem minima dolorum perferendis eum assumenda aspernatur ab, est voluptatibus numquam ex accusantium.</p>
<h1 className='font-medium'>Lorem ipsum dolor sit amet.</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laudantium quos alias maxime commodi error non excepturi tempora provident quaerat architecto quae nesciunt deleniti ut magni expedita explicabo ipsa deserunt.</p>
<br />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laudantium quos alias maxime commodi error non excepturi tempora provident quaerat architecto quae nesciunt deleniti ut magni expedita explicabo ipsa deserunt.</p>
<h1 className='font-medium'>Lorem ipsum dolor sit amet.</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laudantium quos alias maxime commodi error non excepturi tempora provident quaerat architecto quae nesciunt deleniti ut magni expedita explicabo ipsa deserunt.</p>
<br />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laudantium quos alias maxime commodi error non excepturi tempora provident quaerat architecto quae nesciunt deleniti ut magni expedita explicabo ipsa deserunt.</p>
<h1 className='font-medium'>Lorem ipsum dolor sit amet.</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laudantium quos alias maxime commodi error non excepturi tempora provident quaerat architecto quae nesciunt deleniti ut magni expedita explicabo ipsa deserunt.</p>
<div class="divider"></div> 
<div >
<p class="flex"><span className='text-purple-500 font-medium'>Share</span>:<a className='pl-1 pt-1' href="/"><FaFacebookF></FaFacebookF></a>
<a className='pl-2 pt-1' href="/"><FaLinkedin></FaLinkedin></a> </p>

</div>
</div>
<div>
<div className='flex gap-4 px-7  bg-zinc-100 mt-4 p-9'>
<div class="avatar">
<div class="w-16 h-16 rounded-full mt-2">
<img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1165782512-1110x1065.jpg" />
</div>
</div>
<div>
<h1 className='font-semibold mt-2 '>Ronaldo</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

</div>
</div>
</div>


<div class="card w-96 bg-base-100 shadow-xl mb-16">
<div class="card-body">
<div className='flex justify-between'>
<h2 class="card-title">5 Comments</h2>
<button class=" btn btn-xs bg-gradient-to-br from-primary to-secondary border-none text-white font-medium  text-xs rounded-2xl px-6 pt-2 pb-6"><a href="#comment">Leave A Comment</a></button>
</div>


<div  className='flex gap-4 mt-4'>
<div class="avatar">
<div class="w-12 h-12 rounded-full">
<img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1165782512-1110x1065.jpg" />
</div>
</div>
<div>
<div className='flex justify-between m-2'>    
<h1 className='font-semibold mt-2 '>Ronaldo</h1>
<button class="btn btn-xs btn-outline rounded-2xl">Reply</button>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
</div>

<div class="divider"></div>


<div  className='flex gap-4 mt-4'>
<div class="avatar">
<div class="w-12 h-12 rounded-full">
<img src="https://wrestlepurists.com/wp-content/uploads/2022/03/john-cena-on-him-being-a-part-of-wrestlemania-38-001.jpg" />
</div>
</div>
<div>
<div className='flex justify-between m-2'>    
<h1 className='font-semibold mt-2 '>John</h1>
<button class="btn btn-xs btn-outline rounded-2xl">Reply</button>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit.</p>
</div>
</div>

<div class="divider"></div>


<div  className='flex pl-8 gap-4 mt-4'>
<div class="avatar">
<div class="w-12 h-12 rounded-full">
<img src="https://celebs.bio/wp-content/uploads/2016/02/Shahid-Afridi.jpg" />
</div>
</div>
<div>
<div className='flex justify-between m-2'>    
<h1 className='font-semibold mt-2 '>Afridi</h1>
<button class="btn btn-xs btn-outline rounded-2xl">Reply</button>
</div>
<p className='justify'>Lorem ipsum dolor sit amet consectetur.ipsum dolor sit amet consectetur.</p>
</div>
</div>

<div class="divider"></div>


<div  className='flex pl-10 gap-4 mt-4'>
<div class="avatar">
<div class="w-12 h-12 rounded-full">
<img src="https://www.mykhel.com/thumb/247x100x233/cricket/players/8/3788.jpg" />
</div>
</div>
<div>
<div className='flex justify-between m-2'>    
<h1 className='font-semibold mt-2 '>Kohli</h1>
<button class="btn btn-xs btn-outline rounded-2xl">Reply</button>
</div>
<p className='justify'>Lorem ipsum dolor sit amet consectetur.ipsum dolor sit amet consectetur.</p>
</div>
</div>

<div  className='flex gap-4 mt-4'>
<div class="avatar">
<div class="w-12 h-12 rounded-full">
<img src="https://bengali.mykhel.com/thumb/247x100x233/cricket/players/0/3420.jpg" />
</div>
</div>
<div>
<div className='flex justify-between m-2'>    
<h1 className='font-semibold mt-2 '>Shakib</h1>
<button class="btn btn-xs btn-outline rounded-2xl">Reply</button>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
</div>

</div>

<div id='comment' class="bg-slate-200 shadow-xl">
<div className='sm:text-center'>
<h1 className='text-start  text-purple-500 mt-5 text-xl font-bold mb-5 px-4'>Leave A Comment</h1>
<div className='grid grid-cols-1  gap-5 px-4 mb-5'>

<input type="text" placeholder="Your Full Name" class="input input-sm w-full max-w-xs shadow-xl" />
<input type="text" placeholder="Your Email" class="input input-sm w-full max-w-xs" />
<textarea class="textarea max-w-xs " placeholder="Your Comment"></textarea>
</div>
</div>
<div className='px-4 mb-10'>
<button class=" btn btn-sm px-6 bg-gradient-to-br from-primary to-secondary border-none text-white font-medium  text-xs rounded-2xl ">Submit</button>
</div>
</div>

</div>   


</div>

<div class="card w-64 h-4/5 pb-4 mt-10 bg-base-100 shadow-xl hidden lg:flex">
      <div class="card-body">
       <h2 class="card-title mb-4 underline decoration-violet-500 underline-offset-[20px]">Latest Blogs</h2>
       <div className='flex justify-evenly gap-2 mb-2'>
       <div class="avatar">
        <div class="w-12 rounded-full">
         <img src="https://placeimg.com/400/225/arch" />
         </div>
           </div>
           <div>
         <p className='text-xs font-semibold'>Lorem, ipsum dolor sit amet consectetur.</p>
           </div>
       </div>
       <div className='flex justify-evenly gap-2 mb-2'>
       <div class="avatar">
        <div class="w-12 rounded-full">
         <img src="https://placeimg.com/400/225/arch" />
         </div>
           </div>
           <div>
         <p className='text-xs font-semibold'>Lorem, ipsum dolor sit amet consectetur.</p>
           </div>
       </div>
       <div className='flex justify-evenly gap-2 mb-2'>
       <div class="avatar">
        <div class="w-12 rounded-full">
         <img src="https://placeimg.com/400/225/arch" />
         </div>
           </div>
           <div>
         <p className='text-xs font-semibold'>Lorem, ipsum dolor sit amet consectetur.</p>
           </div>
       </div>
       <div className='flex justify-evenly gap-2 mb-2'>
       <div class="avatar">
        <div class="w-12 rounded-full">
         <img src="https://placeimg.com/400/225/arch" />
         </div>
           </div>
           <div>
         <p className='text-xs font-semibold'>Lorem, ipsum dolor sit amet consectetur.</p>
           </div>
       </div>
       <div className='flex justify-evenly gap-2 mb-2'>
       <div class="avatar">
        <div class="w-12 rounded-full">
         <img src="https://placeimg.com/400/225/arch" />
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
 
       


  </div>   
    );
};

export default Artical;
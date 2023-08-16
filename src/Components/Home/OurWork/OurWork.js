import React from 'react';
import { Link } from 'react-router-dom';
import './OurWork.css'

const OurWork = () => {
    return (

      // <section>
      //   <h1 className='text-3xl text-center underline decoration-primary font-bold'>What We Do</h1>

      //   <div className='flex justify-around flex-col md:flex-row min-h-screen w-screen p-10 m-10'>
      //     <div >
      //       <img src="https://i.ibb.co/ZfKF4ZX/Soft-Development.png" className="max-w-sm rounded-lg" />
      //     </div>
      //     <div className='text-center'>
      //         <h2 class="text-2xl font-bold ">Software Development</h2>
      //     <div>
      //     <p className='px-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium obcaecati magnam repellat, aliquam natus inventore soluta adipisci ipsum possimus quas, autem odio fuga veritatis rerum ad recusandae. Nemo, quia.</p>
      //     <button class="text-white btn-sm btn-primary rounded-full mt-3">See More</button>
      //     </div>
             
      //     </div>

      //   </div>


      // </section>




        <div id='ourWorks' className='mt-3  font-abc text-center'>
            <h1 className='text-3xl  font-semibold  underline decoration-violet-500 underline-offset-[20px] '>What We Do</h1>
            
   <section>
   <div class="hero min-screen mb-3 mt-3">
  <div class="hero-content flex-col lg:flex-row ">
    <img alt='' src="https://i.ibb.co/ZfKF4ZX/Soft-Development.png" class="max-w-sm rounded-lg " />
    <div className=''>
      <h1 class="text-2xl font-bold text-center">Software Development</h1>
 <div class="px-20 py-4 mx-4 text-justify">
 <p >Looking for a reliable software development company? CujoSky Tech
can help you with all your software development needs. Our experienced developers can build
custom software solutions that meet your specific requirements. Whether you need a new
website, mobile app, or enterprise-level software, we can help.</p>
<div className='text-center'>
<button class="text-white text-center btn-sm btn-primary rounded-full mt-3"><Link to="/managementSoftware">See More</Link></button>
</div>
 </div>
  
    </div>
  </div>
</div>
   </section>
  
<section>
<div class="hero min-screen mb-3">
  <div class="hero-content flex justify-around flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/QQ2MMf6/Web-Desgin.png" class="max-w-sm rounded-lg " />
    <div>
      <h1 class="text-2xl font-bold text-center">Web Design</h1>
      <div class="px-20 py-4 mx-4 text-justify">
 <p >Needs a best web design agency that can help you create a beautiful, functional,
and SEO-friendly website? Look no further than CujoSky Tech. We have a team of experienced
designers and developers who can create a website that meets your needs and exceeds your
expectations.</p>
<div className='text-center'>
<button class="text-white text-center btn-sm btn-primary rounded-full mt-3"><Link to="/webDesign">See More</Link></button>
</div>
 </div>
    </div>
  </div>
</div>
</section>
   <section>
   <div class="hero min-screen mb-3">
  <div class="hero-content flex-col lg:flex-row ">
    <img src="https://i.ibb.co/CBzhH9n/App-develop.png" class="max-w-sm rounded-lg " />
    <div className=''>
      <h1 class="text-2xl font-bold text-center">App Development</h1>
 <div class="px-20 py-4 mx-4 text-justify">
 <p >CujoSky Tech is a leading mobile app development company that provides
custom app development services for businesses of all sizes. Our developers have a proven
track record of success in developing high-quality, user-friendly apps that meet the specific
needs of our clients.</p>
 <div className='text-center'>
<button class="text-white text-center btn-sm btn-primary rounded-full mt-3"><Link to="/appdevelopment">See More</Link></button>
</div>
 </div>
  
    </div>
  </div>
</div>
   </section>
  
<section>
<div class="hero min-screen mb-3">
  <div class="hero-content flex justify-around flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/MkRKC5f/Digital-Marketing.png" class="max-w-sm rounded-lg " />
    <div>
      <h1 class="text-2xl font-bold text-center">Digital Marketing</h1>
      <div class="px-20 py-4 mx-4">
 <p >We are also a creative digital marketing agency that helps businesses to
grow their online presence and achieve their marketing goals. We understand that every
business is different, and we work closely with our clients to develop customized marketing
strategies that meet their specific needs.
</p>
 <div className='text-center'>
<button class="text-white text-center btn-sm btn-primary rounded-full mt-3"><Link to="/ourServices">See More</Link></button>
</div>
 </div>
    </div>
  </div>
</div>
</section>



            
        </div>
    );
};

export default OurWork;
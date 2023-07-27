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
 <div class="px-20 py-4 mx-4">
 <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, necessitatibus a quis possimus veniam veritatis repudiandae rerum, dolore itaque nulla recusandae, perspiciatis temporibus nemo. Molestias repellat mollitia repudiandae hic quis.</p>
      <button class="text-white btn-sm btn-primary rounded-full mt-3"><Link to="/ourWork">See More</Link></button>
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
      <div class="px-20 py-4 mx-4">
 <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, necessitatibus a quis possimus veniam veritatis repudiandae rerum, dolore itaque nulla recusandae, perspiciatis temporibus nemo. Molestias repellat mollitia repudiandae hic quis.</p>
      <button class="text-white btn-sm btn-primary rounded-full mt-3"><Link to="/ourWork">See More</Link></button>
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
 <div class="px-20 py-4 mx-4">
 <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, necessitatibus a quis possimus veniam veritatis repudiandae rerum, dolore itaque nulla recusandae, perspiciatis temporibus nemo. Molestias repellat mollitia repudiandae hic quis.</p>
      <button class="text-white btn-sm btn-primary rounded-full mt-3"><Link to="/ourWork">See More</Link></button>
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
 <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, necessitatibus a quis possimus veniam veritatis repudiandae rerum, dolore itaque nulla recusandae, perspiciatis temporibus nemo. Molestias repellat mollitia repudiandae hic quis.</p>
      <button class="text-white btn-sm btn-primary rounded-full mt-3"><Link to="/ourWork">See More</Link></button>
 </div>
    </div>
  </div>
</div>
</section>



            
        </div>
    );
};

export default OurWork;
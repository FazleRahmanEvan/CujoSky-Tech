import React from 'react';
import { Link } from 'react-router-dom';

const AppDevelopment = () => {
    return (
        <div>
            
            <div class="carousel  w-full mt-28 mb-7">
        <div id="slide1" class="carousel-item relative  w-full">
          <img src="https://i.ibb.co/vwJ8MLj/Website-workbanner.png" class="w-full" />
        </div> 
      </div>
  
       
      <div class="flex justify-center rounded shadow-sm p-5" role="group">
  <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border  hover:bg-gradient-to-br from-primary to-secondary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gradient-to-br from-primary to-secondary focus:text-white dark:text-black dark:hover:text-white  dark:focus:bg-gray-700">
  <Link to="/ourWork">All</Link>
  </button>
  <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border hover:bg-gradient-to-br from-primary to-secondary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gradient-to-br from-primary to-secondary focus:text-white dark:text-black dark:hover:text-white  dark:focus:bg-gray-700">
  <Link to="/ourWork">Management Software</Link>
  </button>
  <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border  hover:bg-gradient-to-br from-primary to-secondary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gradient-to-br from-primary to-secondary focus:text-white dark:text-black dark:hover:text-white  dark:focus:bg-gray-700">
  <Link to="/webDesign">Web Design</Link>
  </button>
  <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border  hover:bg-gradient-to-br from-primary to-secondary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gradient-to-br from-primary to-secondary focus:text-white dark:text-black dark:hover:text-white  dark:focus:bg-gray-700">
    App Development
  </button>
 
</div>


    <div className='flex justify-center justify-evenly '>
        <div className='grid  justify-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-28 mb-10 mt-10'>
      
      
        <div class="card card-compact w-96 bg-base-100 shadow-xl ">
          <figure><img src="https://i.ibb.co/tb5bmTh/App-1.png " alt="Shoes" /></figure>
        <div class="card-body">
             <h2 class="card-title">Sareng</h2>
             <p className='text-gray font-medium'>Project Type</p>  
        </div>
        </div>
        {/* <div class="card card-compact w-96 bg-base-100 shadow-xl ">
  -         <figure><img src="https://i.ibb.co/gyFWdN2/software.jpg" alt="Shoes" /></figure>
        <div class="card-body">
             <h2 class="card-title">Project Name</h2>
             <p className='text-gray font-medium'>Project Type</p>  
        </div>
        </div> */}
        {/* <div class="card card-compact w-96 bg-base-100 shadow-xl ">
  -         <figure><img src="https://i.ibb.co/gyFWdN2/software.jpg" alt="Shoes" /></figure>
        <div class="card-body">
             <h2 class="card-title">Project Name</h2>
             <p className='text-gray font-medium'>Project Type</p>  
        </div>
        </div> */}
    </div>
    </div>
        </div>
    );
};

export default AppDevelopment;
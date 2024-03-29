import React from 'react';
import { Link } from 'react-router-dom';

const Management = () => {
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
   Management Software 
  </button>
  <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border  hover:bg-gradient-to-br from-primary to-secondary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gradient-to-br from-primary to-secondary focus:text-white dark:text-black dark:hover:text-white  dark:focus:bg-gray-700">
  <Link to="/webDesign"> Web Design</Link> 
  </button>
  <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border  hover:bg-gradient-to-br from-primary to-secondary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gradient-to-br from-primary to-secondary focus:text-white dark:text-black dark:hover:text-white  dark:focus:bg-gray-700">
  <Link to="/appdevelopment">App Development</Link>
  </button>
 
</div>


    <div className='flex justify-center justify-evenly '>
        <div className='grid  justify-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-28 mb-10 mt-10'>
      
      
        <div class="card card-compact w-96 bg-base-100 shadow-xl ">
           <figure><img src="https://i.ibb.co/rFT327V/Manage-1-1.jpg" alt="Shoes" /></figure>
        <div class="card-body">
             <h2 class="card-title">Document Equity</h2>
             <p className='text-gray font-medium'>Project Type</p>  
        </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl ">
           <figure><img src="https://i.ibb.co/TMxZ7bx/Manage-2-1.jpg" alt="Shoes" /></figure>
        <div class="card-body">
             <h2 class="card-title">Resort Dashboard</h2>
             <p className='text-gray font-medium'>Project Type</p>  
        </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl ">
          <figure><img src="https://i.ibb.co/3djRzkj/Manage-3.jpg" alt="Shoes" /></figure>
        <div class="card-body">
             <h2 class="card-title">Mediinfi</h2>
             <p className='text-gray font-medium'>Project Type</p>  
        </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl ">
         <figure><img src="https://i.ibb.co/cFmpvyj/Manage-4-1.jpg" alt="Shoes" /></figure>
        <div class="card-body">
             <h2 class="card-title">Dream Solution</h2>
             <p className='text-gray font-medium'>Project Type</p>  
        </div>
        </div>
    </div>
    </div>

        </div>
    );
};

export default Management;
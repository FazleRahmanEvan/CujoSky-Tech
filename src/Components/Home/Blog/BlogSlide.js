import React from "react";
import { Link } from "react-router-dom";

const BlogSlide = ({ blog }) => {
  const { image, title } = blog;
  return (
<div className="lg:pl-20 lg:px-24 sm:px-4">
<div  class="card mt-10 lg:w-80 sm:w-72  lg:h-96 bg-base-100 shadow-xl mb-8">
     
        <img className="" src={image} alt="Shoes" />
      
      <div class="card-body">
        <h2 class="text-start font-semibold text-lg ">{title}</h2>
        {/* <p></p> */}
        <div class="card-actions lg:justify-end ">
        <button className='text-white  btn-sm btn-primary rounded-full mt-4  mb-10'><Link to="/blogs">View More</Link></button>
        </div>
      </div>
    </div>
</div>
  );
};

export default BlogSlide;

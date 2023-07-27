import React from "react";
import { Link } from "react-router-dom";

const BlogSlide = ({ blog }) => {
  const { image, title } = blog;
  return (
<div className="pl-20 px-24">
<div  class="card mt-10 w-80 h-96 bg-base-100 shadow-xl mb-8">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="text-start font-semibold text-xs">{title}</h2>
        {/* <p></p> */}
        <div class="card-actions justify-end mt-3">
          <button class="btn btn-xs btn-primary btn-rounded">See More</button>
        </div>
      </div>
    </div>
</div>
  );
};

export default BlogSlide;

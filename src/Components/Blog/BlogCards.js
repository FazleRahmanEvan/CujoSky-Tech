import React from 'react';
import { Link } from 'react-router-dom';

const BlogCards = ({blog}) => {
    const { image, title,paragraph } = blog;
    return (
        <div className="card w-80 mb-5 mt-10 bg-base-100 shadow-2xl">
            <figure><img src={image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{paragraph}</p>
    <div class="card-actions justify-end mt-3">
          <button class="btn btn-xs btn-primary btn-rounded"><Link to ="/article">See More</Link></button>
        </div>
  </div>
        </div>
    );
};

export default BlogCards;
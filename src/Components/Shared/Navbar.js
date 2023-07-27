import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  
      
    return (

<div class="navbar bg-base-100 mt-4">
  <div class="flex-1 pl-10">
  <label tabindex="0" class="btn btn-ghost btn-circle w-36 h-36 avatar">
         <div class="navbar-start w-36 rounded-full ">
           <img alt='' src="https://i.ibb.co/1rWG0ZL/CJ-Logo-03.png" />
         </div>
       </label>
  </div>
  <div class="flex-none hidden lg:flex">
    <ul class="menu menu-horizontal pr-8 font-medium text-xl">
      <li><Link to="/">Home</Link></li>
      <li><a href="#ourBlog">Blogs</a></li>
      <li><a href="#ourWorks">Our Works</a></li>
      <li><a href="/ourPrice">Our Services</a></li>
    </ul>
    

  </div>
  <div class="dropdown dropdown-left ">
      <label tabindex="0" class=" btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-40">
      <li><Link to="/">Home</Link></li>
      <li><a href="#ourBlog">Blogs</a></li>
      <li><a href="#ourWorks">Our Works</a></li>
      <li><a href="/ourPrice">Our Services</a></li>
      </ul>
    </div>

</div>



    );
};

export default Navbar;
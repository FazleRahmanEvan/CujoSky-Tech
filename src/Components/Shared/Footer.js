import React from 'react';
import { FaFacebookF, FaLinkedin,FaPhoneAlt} from "react-icons/fa"
import { ImLocation } from "react-icons/im";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer class="footer bg-blue-950 text-white justify-evenly">
    
        <div className='mt-12 mb-24'>
            <img className='w-40 h-44' src="https://i.ibb.co/1rWG0ZL/CJ-Logo-03.png"/>
            <p className='text-wrap'>Tech Needs Simplified.</p>
       
            <div className="footer-start grid grid-flow-col gap-4 mt-2">
        <p class="footer-title text-white">Follow Us :</p> 
            <a className='text-xl' href="/"><FaFacebookF></FaFacebookF></a>
               <a className='text-xl' href="/"><FaLinkedin></FaLinkedin></a> 
               </div>
         
        
        </div> 
        <div className='mt-36 mb-20'>
          <span class="footer-title">Links</span> 
          <a class="link link-hover">Home</a> 
          <a class="link link-hover mt-4">Blogs</a> 
          <a class="link link-hover mt-4">Our Works</a> 
        </div> 
        <div className='mt-36 mb-20'>
          <span class="footer-title">Contact Us</span> 
          <div className="grid grid-flow-col gap-2 ">
          <a className='mt-1'><ImLocation></ImLocation></a>
          <p>Amhurst Road, Stoke Newington,
            <br />
             North London N16 7UN,</p>
          </div>
          {/* <div className="grid grid-flow-col gap-2 mt-1 mb-2 ">
          <a><FaPhoneAlt></FaPhoneAlt></a>
          <p>+8801755-460159</p>
          </div> */}
          <div className="grid grid-flow-col gap-2 mt-6 ">
          <a className='mt-1'><IoMailSharp></IoMailSharp></a>
          <p >www.cujosky.co.uk</p>
          </div>
      
        </div>
        
      </footer>
    );
};

export default Footer;
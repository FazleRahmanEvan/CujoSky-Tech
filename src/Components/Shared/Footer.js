import React from 'react';
import { FaFacebookF, FaLinkedin,FaPhoneAlt} from "react-icons/fa"
import { ImLocation } from "react-icons/im";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer class="footer bg-neutral text-white justify-evenly">
    
        <div className='mt-8 mb-10'>
            <img className='w-24' src="https://i.ibb.co/t85FtjV/Footer-logo.png"/>
            <p className='text-wrap'>Tech Needs Simplified.</p>
       
            <div className="footer-start grid grid-flow-col gap-4 mt-2">
        <p class="footer-title text-white">Follow Us :</p> 
            <a className='text-xl' href="/"><FaFacebookF></FaFacebookF></a>
               <a className='text-xl' href="/"><FaLinkedin></FaLinkedin></a> 
               </div>
         
        
        </div> 
        <div className='mt-8 mb-10'>
          <span class="footer-title">Links</span> 
          <a class="link link-hover">Home</a> 
          <a class="link link-hover">Blogs</a> 
          <a class="link link-hover">Our Works</a> 
        </div> 
        <div className='mt-8 mb-10'>
          <span class="footer-title">Contact Us</span> 
          <div className="grid grid-flow-col gap-2 ">
          <a><ImLocation></ImLocation></a>
          <p>5th Floor, Wahid View,
            <br />
            Zindabazar,Sylhet</p>
          </div>
          <div className="grid grid-flow-col gap-2 mt-1 mb-2 ">
          <a><FaPhoneAlt></FaPhoneAlt></a>
          <p>+8801755-460159</p>
          </div>
          <div className="grid grid-flow-col gap-2  ">
          <a><IoMailSharp></IoMailSharp></a>
          <p >meettechlab@gmail.com</p>
          </div>
      
        </div>
        
      </footer>
    );
};

export default Footer;
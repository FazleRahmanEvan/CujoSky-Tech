import React from 'react';
import { FaFacebookF, FaLinkedin,FaPhoneAlt} from "react-icons/fa"
import { ImLocation } from "react-icons/im";
import { IoMailSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer bg-neutral text-white justify-evenly">
    
        <div className='mt-12 mb-24'>
            <img className='w-40 h-44' src="https://i.ibb.co/HXMLN3W/Cujosky-03.png"/>
            <p className='text-wrap'>Tech Needs Simplified.</p>
       
            <div className="footer-start grid grid-flow-col gap-4 mt-2">
        <p class="footer-title text-white">Follow Us :</p> 
            <a className='text-xl' href="/"><FaFacebookF></FaFacebookF></a>
               <a className='text-xl' href="/"><FaLinkedin></FaLinkedin></a> 
               </div>
         
        
        </div> 
        <div className='mt-36 mb-20'>
          
        <Link to="/"><a class="link link-hover mt-4">Home</a></Link>
        <Link to="/blogs"> <a class="link link-hover mt-4">Blogs</a></Link>
        <Link to="/about"><a class="link link-hover mt-4">About</a> </Link>
        <Link to="/ourWork"> <a class="link link-hover mt-4">Our Works</a> </Link>
        <Link to="/ourServices"> <a class="link link-hover mt-4">Our Services</a> </Link>
     
        </div> 
        <div className='mt-36 mb-20'>
          <span class="footer-title">Contact Us</span> 
          <div className="grid grid-flow-col gap-2 ">
          <a className='mt-1'><ImLocation></ImLocation></a>
          <p>B-1, 189 Whitechapel Road,London E1 1DN</p>
          </div>
          <div className="grid grid-flow-col gap-2 mt-1 mb-2 ">
          <a><FaPhoneAlt></FaPhoneAlt></a>
          <p>Telephone: 02072472442</p>
          </div>
          <div className="grid grid-flow-col gap-2 mt-1 mb-2 ">
          <a><FaPhoneAlt></FaPhoneAlt></a>
          <p>Mobile: 07877507539</p>
          </div>
          <div className="grid grid-flow-col gap-2 mt-6 ">
          <a className='mt-1'><IoMailSharp></IoMailSharp></a>
          <p>info@cujosky.co.uk</p>
          </div>
      
        </div>
        
      </footer>
    );
};

export default Footer;




// Virtual Reality (VR) and Augmented Reality (AR) apps: VR and AR are two of the most exciting technologies on the market, and they have the potential to revolutionize the way we interact with apps. VR apps can transport users to new and immersive worlds, while AR apps can overlay digital information onto the real world.


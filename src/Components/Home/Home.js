import React from 'react';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Client from './Client/Client';
import ContactUs from './ContactUs/ContactUs';
import OurWork from './OurWork/OurWork';
import SimpleBanner from './SimpleBanner/SimpleBanner';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Client></Client>
          <SimpleBanner></SimpleBanner>
          <OurWork></OurWork>
          <Blog></Blog>
          <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
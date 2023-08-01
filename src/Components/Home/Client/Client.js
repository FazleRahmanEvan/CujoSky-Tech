import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientSlide from './ClientSlide';
// import { useState, useEffect } from 'react';

const Client = () => {

    const [clients, setClients]=useState([]);

    useEffect ( () => {
        fetch('client.json')
        .then(res => res.json())
        .then(data => setClients(data));
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <div className=' mb-12 p-10'>
            <h1 className='text-4xl text-center text-bold mb-7 font-semibold underline decoration-violet-500 underline-offset-[20px] '>Our Clients</h1>
            <p className='text-center mb-14'>Clients trust CujoSky to deliver high-quality IT services that help them achieve
their business goals.</p>
            

          
            <div class="card w-auto  bg-white mb-10">
            <Slider {...settings}>
             {
                clients.map(client =><ClientSlide
                key={client.id}
                client={client}
                ></ClientSlide>)
             }
            </Slider>
            </div>
            
            
        </div>
        
    );
};

export default Client;
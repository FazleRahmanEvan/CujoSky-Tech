import React from 'react';
;
const ClientSlide = ({client}) => {
    const{image}= client

    return (
          
           
           <figure className="px-14  pt-10">
               <img alt='' src={image} class="rounded-2xl " />
             
               
           </figure>
              
    );
};

export default ClientSlide;
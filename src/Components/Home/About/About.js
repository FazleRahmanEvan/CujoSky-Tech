import React from 'react';

const About = () => {
    return (
        <div className='mt-20 mb-20'>
            <div>
                <img src="https://i.ibb.co/SKNpmJc/Tag-line.jpg" alt="" />
            </div>
            <div>
            <h1 className='text-3xl font-bold text-center mt-12'>About Us</h1>
            <p className='font-medium text-justify mt-9 px-64 text-xl'>We are a leading Software Development Company and IT service provider that specializes in
digital marketing and rich web and mobile application development tailored to meet the unique
needs of businesses across various industries. Our team of experienced designers, developers and IT
professionals work tirelessly to bring our client’s visions to life, providing top-notch services and
support every step of the way</p>
            </div>

           <div>
            <h2 className='text-3xl font-bold text-center mt-16'>Mission</h2>
            <p className='font-medium text-justify mt-10 px-64 text-xl'>Our mission is to provide scalable IT solutions to our customers at an unbeatable price, without
compromising on service quality, and empower our clients to use the internet to its full potential
by providing affordable, effective design/development and marketing solutions.
</p>

           </div>
           <div>
            <h2 className='text-3xl font-bold text-center mt-16 '>Vision</h2>
            <p className='font-medium text-justify mt-10 px-64 text-xl'>Our vision is to become a global leader in providing the best and unique design, development
and marketing services to improve our client’s productivity and business strength.
</p>

           </div>

        </div>
    );
};

export default About;
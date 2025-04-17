import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us bg-white text-black flex flex-col justify-center gap-10 h-[400px]">
        
      <section className="about-hero text-xl w-200  flex items-center gap-5 flex-col">
        <h1 className='font-bold text-center text-indigo-500 text-6xl'>About Us</h1>
        <p>Welcome to our company! Here's a little bit about who we are and what we do.</p>
      </section>

      <section className="about-content mx-40">
        <h2 className='font-bold text-2xl'>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality solutions that empower people and businesses
          to thrive in the digital age. We value innovation, collaboration, and customer satisfaction.
        </p>

        <h2 className='font-bold text-2xl'>Our Team</h2>
        <p>
          We're a diverse group of developers, designers, and thinkers who love solving real-world problems.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

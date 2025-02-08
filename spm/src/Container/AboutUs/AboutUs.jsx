import React from 'react';

import './AboutUs.css';

const AboutUs = () => (
  <>
   <div className='about-section app__bg flex__center section__padding app__wrapper' id='about'>
      <div className='about'>
        <h1>About Us</h1>
        <p style={{fontSize:'20px', color:'white'}}>At Spice Mountain, we are passionate 
          about delivering the finest quality spices and products to enhance your culinary experience. With years
           of expertise in sourcing and curating premium ingredients like cardamom, cloves, pepper, and more, 
           we strive to bring authentic flavors straight to your kitchen. Whether you're looking for everyday 
           essentials, unique gift packs, or specialty items for special occasions, we are committed to providing
            exceptional service and satisfaction. Our mission is to make your shopping experience seamless with
             options like home delivery and easy online ordering. Located in Kandy and available online, we take
              pride in serving our valued customers with care and dedication. Thank you for choosing us as your
               trusted spice partner!</p>
       
      </div>

  <div className=' line'></div>

      <div className='history'>
        <h1>History</h1>
        <p style={{fontSize:'20px', color:'white'}}>Founded in 1972, began as a small
           venture with a big dream: to bring the rich flavors of authentic spices to kitchens around the world.
            What started as a humble shop in Kandy has grown into a trusted name known for quality, freshness,
             and exceptional service. Over the years, we have stayed true to our roots, carefully sourcing premium 
             spices like cardamom, cloves, and pepper from the finest growers. As we expanded, we embraced modern
              technology to offer convenient services such as home delivery, online ordering, and customizable
               gift packs. Today, [Your Company Name] continues to honor its legacy by delivering not just spices,
                but memories and traditions that connect families and communities. We are proud of how far we’ve 
                come and excited about what the future holds</p>
      </div>
   </div>

  </>
);

export default AboutUs;

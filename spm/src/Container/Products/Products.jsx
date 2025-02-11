import React from 'react';
import crdmom from '../../assets/cardamom.jpg';
import clove from '../../assets/cloves.jpg';
import peper from '../../assets/peper.jpg';
import './products.css';
import HowToOrder from '../HowToOrder/HowToOrder';

const Products = () => (
  <section className='products section__padding'id='products'>
  <div className='productsh' >
    <h1>Our Products</h1>
  </div>
  <div className='prdcard'>
      <div className='crdmom'>
      <img src={crdmom} alt=''/>
      <h2>Cardamom</h2>
      <p>Elevate your cooking with our exquisite cardamom pods!
         Known for their sweet, floral notes, they’re ideal for 
         desserts, chai tea, and savory recipes. Our cardamom is 
         carefully selected to ensure freshness and a burst of
          aromatic flavor in every dish.</p>
       
    </div>
    <div className='cloves'>
      <img src={clove} alt=''/>
      <h2>Cloves</h2>
      <p>Discover the rich, warm aroma of our premium cloves! 
        Perfect for adding depth to your dishes, these fragrant
         flower buds are a must-have for baking, curries, and 
         beverages. Sourced for quality, our cloves bring both
          flavor and natural wellness benefits to your kitchen.</p>
       
    </div>
    <div className='peper'>
      <img src={peper} alt=''/>
      <h2>Peper</h2>
      <p>Spice up your meals with our high-quality pepper! Whether 
        you prefer black, white, or green, our pepper adds a bold, 
        zesty kick to any recipe. Sourced from the finest farms, 
        it’s a kitchen essential for enhancing flavor and adding a touch of heat.</p>
       
    </div>
    </div>
    <HowToOrder/>
    </section>
  
);

export default Products;

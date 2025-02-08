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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione quis libero neque vero quisquam illo tenetur nulla! Praesentium, 
        unde explicabo aut repellat quam inventore aspernatur, itaque.</p>
       
    </div>
    <div className='cloves'>
      <img src={clove} alt=''/>
      <h2>Cloves</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione quis libero neque vero quisquam illo tenetur nulla! Praesentium, 
        unde explicabo aut repellat quam inventore aspernatur, itaque.</p>
       
    </div>
    <div className='peper'>
      <img src={peper} alt=''/>
      <h2>Peper</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione quis libero neque vero quisquam illo tenetur nulla! Praesentium, 
        unde explicabo aut repellat quam inventore aspernatur, itaque.</p>
       
    </div>
    </div>
    <HowToOrder/>
    </section>
  
);

export default Products;

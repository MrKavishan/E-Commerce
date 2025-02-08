import React from 'react';
import SubHeading  from '../../Components/SubHeading/SubHeading';
import './Header.css';
import image from '../../assets/poster.jpg';

const Header = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <div className='header header__wrapper section__padding ' id='home'>
        <div className='header-content'>
          <SubHeading title="Chase The New Flavour" />
          <h1 className='header-section-h1'>
            Spice Mountain: Where Freshness Meets Flavor
          </h1>
          <p className='p__opensans' style={{ margin: '2rem 0' }}>
            Discover the authentic taste of Sri Lanka with our premium cardamom,
            cloves, and pepper. Sourced for freshness and flavor, these spices
            are perfect for elevating your dishes and bringing bold, aromatic
            flavors right to your kitchen.
          </p>
          <button 
            type='button' 
            className='custom__button'
            onClick={scrollToProducts}
          >
            Explore
          </button>
        </div>
        <div className='headerImg'>
          <img src={image} alt=""></img>
        </div>
      </div>

     
    </>
  );
};

export default Header;
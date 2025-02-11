import React from 'react';
import {GiHamburgerMenu} from  'react-icons/gi';
import {MdOutlineMenu}  from 'react-icons/md';
import { BsFacebook,  BsInstagram,  BsWhatsapp } from 'react-icons/bs';


import './navbar.css';
 
const Navbar = () => {
const [toggleMenu, setToggleMenu] = React.useState(false)
   
  return(
    <nav className='navbar'>
    <div className='logo'>
      <h1>Spice Mountain</h1>
    </div>
    <ul className='navLinks'>
      <li className='links'><a href='#home'>Home</a></li>
      <li className='links'><a href='#products'>Products</a></li>
      <li className='links'><a href='#about'>About</a></li>
      <li className='links'><a href='#services'>Services</a></li>
      <li className='links'><a href='#contact'>Contact</a></li>

    </ul>
    <div className='nav-social'>
      <a href="https://facebook.com"  className='social-link'>
        <BsFacebook />
      </a>
      <a href="https://twitter.com"  className='social-link'>
        <BsWhatsapp />
      </a>
      <a href="https://instagram.com"  className='social-link'>
        <BsInstagram />
      </a>
    </div>

    <div className='navsmallscreen'>
  <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

  {toggleMenu && (
    <div className='navsmallscreen_overlay flex_center slide-bottom'>
      <MdOutlineMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
      <ul className='navLinks-navsmallscreen'>
        <li className='links'><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></li>
        <li className='links'><a href='#products' onClick={() => setToggleMenu(false)}>Products</a></li>
        <li className='links'><a href='#about' onClick={() => setToggleMenu(false)}>About</a></li>
        <li className='links'><a href='#services' onClick={() => setToggleMenu(false)}>Services</a></li>
        <li className='links'><a href='#contact' onClick={() => setToggleMenu(false)}>Contact</a></li>
      </ul>
    </div>
  )}
</div>
  </nav>
  )
}
  

export default Navbar;

import React from 'react'
import HeaderImg from '../Assets/mainlogo.png';
import HeadermobileImg from '../Assets/mobile_top_logo.png';
import './NavbarImg.css';
import Prodects from '../Product Card/Products.jsx';
import Footer from '../Footer/Footer.jsx';
import SpecialOfferSection from '../SpecialOfferSection/SpecialOfferSection.jsx';
import ThilaHomamSection from '../SpecialOfferSection/ThilaHomamSection.jsx';
import ThilaHomamSection1 from '../SpecialOfferSection/ThilaHomamSection1.jsx';
import Testimonial1 from '../SpecialOfferSection/Testimonial.jsx';
import Videos from '../SpecialOfferSection/Videos.jsx';
import  { Link } from "react-router-dom";
import styled from 'styled-components';


const buttons = [
  { id: 1, label: "Puja", value: "Puja" },
  { id: 2, label: "Vratham", value: "Vratham" },
  { id: 3, label: "Homam", value: "Homam" },
  { id: 4, label: "Festivals", value: "Festivals" },
  { id: 5, label: "Events", value: "Evants" },
  { id: 6, label: "Vahanam", value: "Vahanam" }
];

export function NavBarMenu(){


  return(
    <div className="navbarmenu">
      
      <div className="Menu-title">
        <h1>Booking Purohith & Seva Online</h1>
      </div>
      <div className='buttons'>
      <div className="menu">
      
        {buttons.map((button) => (
          <Link to={`/Products/${button.value}`} style={{textDecoration:'none'}}>
        <button
          key={button.id}
          className={button.id % 2 === 0 ? 'even-button' : 'odd-button'}
          // onClick={() => handleClick(button.value)}
        >
          {button.label}
        </button>
        </Link>
      ))}
      
      </div>
      </div>
      <div className='Pujas-Homams'>
        <h1>Pujas & Homams</h1>
        <p> Our Veda Purohiths specialize in conducting a wide range of Pujas, Homas, and ceremonial rituals for various occasions. Count on the expertise of our esteemed group of Purohits and scholars, renowned for their proficiency and reliability.</p>
      </div>
      <Prodects />
      <ThilaHomamSection />
      <ThilaHomamSection1 />
      <Videos />
      <Testimonial1 />
      <Footer />
    </div>
    );   
}

export function NavbarImg (){
  return (
    <div  className="home">
    <div className='navbar'>
      <div className="navbar-img">
        <Img src={HeadermobileImg} alt='NavBar' />
        <Img1 src={HeaderImg} alt='NavBar' />
        <div className="navbar-text">
        <p>Our Veda Purohiths excel in conducting diverse Pujas, Homas, and ceremonies</p>
        </div>
      </div>
    </div>
    <NavBarMenu />
    </div>
  );
}



const Img = styled.img`
    display: none;
    @media (max-width: 991px){
      width: inherit;
      padding-top: 76px;
      display: initial;

      
    }
`;
const Img1 = styled.img`
    width: inherit;
    padding-top: 76px;
    @media (max-width: 991px){
      display: none;

      
    }
`;


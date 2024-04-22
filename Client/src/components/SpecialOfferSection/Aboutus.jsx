import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';

const Aboutus = () => {
  return (
    <div>
      <Header>About Us</Header>
      <Footer />
    </div>
  )
}

const Header = styled.h1`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 76px;

`;

export default Aboutus

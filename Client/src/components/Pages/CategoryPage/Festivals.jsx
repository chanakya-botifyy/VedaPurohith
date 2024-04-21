import React from 'react';
import { Link } from 'react-router-dom';
import {FESTIVALS} from '../../Product Card/PujaData.js';
import Footer from '../../Footer/Footer.jsx';
import PujaCard from '../../Product Card/PujaCard.jsx';
import styled from 'styled-components';


const Festivals = () => {
  return (
    <div>
      <ProductsList>
            {FESTIVALS.map((prodectItem) => (
              <Link key={prodectItem.id} to={`/products/${prodectItem.id}`} style={{textDecoration:'none'}} >
              <PujaCard {...prodectItem} />
              </Link>
            ))}
        </ProductsList>
    </div>
  )
}

const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
`
export default Festivals;

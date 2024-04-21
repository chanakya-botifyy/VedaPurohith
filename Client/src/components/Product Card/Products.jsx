import React from 'react';
import styled from "styled-components";
import PujaData from './PujaData.js';
import PujaCard from './PujaCard.jsx';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function Products(){
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // const [selectedValue, setSelectedValue] = useState("Puja");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/allSevas`);
      if (response.ok) {
        const data = await response.json();
        // Process the fetched data, you can set it to state or use it directly
        setData(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []); // Fetch data whenever selectedValue changes



  return (
    <Section>
      <Product>
        {data.slice(0, 3).map((productItem) => (
          <Link key={productItem.id} to={`/Products/${productItem.id}`} style={{textDecoration:'none'}} >
            <PujaCard {...productItem} />
          </Link>
        ))}
      </Product>
      <View>
        <Link to={'/Products'} style={{textDecoration:'none'}}>
          <Button onClick={handleClick}>View All</Button>
        </Link>
      </View>
    </Section>
  )
}

const Product=styled.ul`
    display:flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: center;
    @media (max-width: 991px) {
    display:flex;
    flex-direction: column;
    align-items:center;
    padding: 0px;
  }
`;
const Section=styled.div`

width:100%;
height: auto;

overflow-x: hidden;
`
const View = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 6px 10px;
gap: 10px;
`
const Button = styled.button`


font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 32px;
/* identical to box height, or 178% */
display: flex;
align-items: center;

background: linear-gradient(180deg, #02CCDD 0%, #02A2D9 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
/* text-fill-color: transparent; */
`
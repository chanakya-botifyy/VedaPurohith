
// import Prodects from '../../Product Card/Prodects';
import styled from 'styled-components';
import PujaData from '../../Product Card/PujaData.js';
import PujaCard from '../../Product Card/PujaCard.jsx';
import Footer from '../../Footer/Footer.jsx';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const buttons = [
  { id: 1, label: "Puja", value: "Puja" },
  { id: 2, label: "Vratham", value: "Vratham" },
  { id: 3, label: "Homam", value: "Homam" },
  { id: 4, label: "Festivals", value: "Festivals" },
  { id: 5, label: "Events", value: "Events" },
  { id: 6, label: "Vahanam", value: "Vahanam" }
];

const Productspage = () => {
  const [selectedValue, setSelectedValue] = useState("Puja");
  const [data, setData] = useState([]);

  const fetchData = async (selectedValue) => {
    try {
      const response = await fetch(`https://king-prawn-app-r46w3.ondigitalocean.app/allSevas/${selectedValue}`);
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
    fetchData(selectedValue);
  }, [selectedValue]); // Fetch data whenever selectedValue changes

  const handleSelectValue = (value) => {
    setSelectedValue(value);
  };



  return (
    <>
      <Products>
        
        <div className='buttons'>
          <div className="menu">
            {buttons.map((button) => (
              <Button
                key={button.id}
                onClick={() => handleSelectValue(button.value)}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
        <ProductHeader>
          <h1>{selectedValue}</h1>
        </ProductHeader>
        <ProductsList>
          {data.map((item) => (
              <Link key={item.id} to={`/products/${item.id}`} style={{textDecoration:'none'}} >
              <PujaCard {...item} />
              </Link>
            ))}
        </ProductsList>

      </Products>
      <Footer />
    </>
  );
}

const Button = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 20px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    border:1px solid #AAAAAA;
    padding: 11px 0px;
    &:active,&:focus,&:hover{
    width: 150px;
    height: 50px;
    border-radius: 20px;
    background: linear-gradient(329.95deg, #0188D6 18.33%, #01AED9 49.67%, #01CBDC 81.67%);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(2.5px);
    flex: none;
    order: 1;
    flex-grow: 0;
    color: white;
    line-height: 26px;
    }
    @media (max-width:991px){
      width: 85px;
      height: 29px;
      font-size: 11.25px;
      font-weight: 900;
      padding: 7px 0px;
      &:active,&:focus,&:hover{
        width: 85px;
      height: 29px;
      font-size: 11.25px;
      font-weight: 900;
      padding:2px 0px ;
      }
    }
`;
const Products = styled.div`
  /* margin: 30px; */
  padding-top: 80px;
`

const ProductHeader = styled.div`
    h1{
      font-style: normal;
      font-weight: 900;
      font-size: 40px;
      line-height: 55px;
      text-align: center;
      color: #3C1100;
      
    }
    @media (max-width:991px){
      h1{
        font-size: 16px;
        font-weight: 900;
      }
        
    }
`
const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
`

export default Productspage;



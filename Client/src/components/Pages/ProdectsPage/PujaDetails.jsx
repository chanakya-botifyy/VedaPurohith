import React, { useState , useEffect,useContext } from "react";
import { useParams , useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Footer from "../../Footer/Footer.jsx";
import { store } from "../../../App.js";
import Cookies from "js-cookie";
import download from '../../Assets/download icon.png'

function PujaDetails() {
  const { ProductId } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  // const token = localStorage.getItem('token');
  const [token,setToken] = useState();
  
  const fetchData = async (ProductId) => {
    try {
      const response = await fetch(`https://king-prawn-app-r46w3.ondigitalocean.app/sevalistById/${ProductId}`);
      if (response.ok) {
        const data = await response.json();
        // Process the fetched data, you can set it to state or use it directly
        setProduct(data);
        console.log(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData(ProductId);
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, [ProductId]); // Fetch data whenever selectedValue changes

  const handleAddToCart = () => {
    // Add the selected product to the cart (implementation depends on your cart logic)
    console.log("Adding product to cart:", product); // For now, log the product

    // Navigate to the Cart page, passing the product data using state
    navigate(`/Products/${ProductId}/Cart`, { state: { product } });
  };

  const downloadPDF = () => {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    const pdfUrl = product[0].items;
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = './Puja Items.pdf';
    link.target = '_blank';
    link.click();
  };



  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    {product.map((item) =>( 
    <PujaDetailsWrapper>
      <PujaDetailsContent>
        <ImageColumn>
          <PujaImage src={item.titleimage} alt="Lakshmi Puja" loading="lazy" />
        </ImageColumn>
        <DetailsColumn>
          <PujaInfo>
            <PujaTitle>{item.title}</PujaTitle>
            <PujaDescription>
              {item.description}
            </PujaDescription>
            <PujaItems>
              <ItemsLabel >Items: </ItemsLabel>
              {item.items}
              <Itemsbutton onClick={downloadPDF}>Items List <Icon src={download} /></Itemsbutton>
            </PujaItems>
            <PujaDetail>
              <PujaDuration>
                <DurationLabel>Duration:</DurationLabel> {item.Duration}
              </PujaDuration>
              <PujaCost>
                <CostLabel>Cost:</CostLabel> {item.cost} INR
              </PujaCost>
            </PujaDetail>
            <BookButton  >
              {token ?(<>
              <BookButtonText onClick={handleAddToCart}>Book Now</BookButtonText>
              </>):<>
              <BookButtonText onClick={()=>{navigate(`/login`);}}>Book Now</BookButtonText>
              </>}
            </BookButton>
          </PujaInfo>
        </DetailsColumn>
      </PujaDetailsContent>
      
    </PujaDetailsWrapper>
  ))}
    <Footer />
    </>

  );
}

const Icon = styled.img`
  color: white;
`

const Itemsbutton = styled.button`

  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1.878px solid #02c0db;
  background: linear-gradient(90deg, #02c1db 0%, #0294d7 100%);
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
  gap: 10px;
  
  width: 200px;
  cursor: pointer;
  @media (max-width: 991px) {
    width: 242px;
    height: 48px;
    padding: 0px;
  }
`;

const PujaDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px;
  margin-top: 100px;
  
  @media (max-width: 991px) {
    margin: 0px;
    margin-top: 100px;
    margin-bottom: 27px;
  }
`;

const PujaDetailsContent = styled.div`
  display: flex;
  gap: 20px;
  width:70%;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    display: flex;
    width: 283px;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  justify-content: center;
  /* width: 40%; */
  /* margin-left: 0; */
  

  @media (max-width: 991px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }
`;

const PujaImage = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  width: 420px;
  height: 420px;
  border-radius: 20px;
  align-self: stretch;
  

  @media (max-width: 991px) {
    width: 239px;
    height: 239px;
    display: flex;
    justify-content: center;
  }
`;

const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 60%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const PujaInfo = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 18px;
  color: rgba(19, 21, 30, 0.6);
  padding: 0 20px;
  align-items: flex-start;

  @media (max-width: 991px) {
    max-width: 100%;
    display: flex;
    align-items: center;
    padding: 0px;
  }
`;

const PujaTitle = styled.h2`
  color: #2d9cdb;
  text-align: center;
  font-size: 24px;
  font-weight: 900;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PujaDescription = styled.p`
  font-weight: 500;
  line-height: 21px;
  margin-top: 30px;

  @media (max-width: 991px) {
    max-width: 100%;
    text-align: justify;
    font-size: 14px;
    font-weight: 500;
  }
`;

const PujaItems = styled.p`
  font-weight: 400;
  /* line-height: 20px; */
  margin-top: 30px;

  @media (max-width: 991px) {
    max-width: 100%;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
  }
`;

const ItemsLabel = styled.span`
  font-weight: 800;
  color: rgba(45, 156, 219, 1);
`;

const PujaDetail = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
  align-items: start;
  gap: 20px;
  justify-content: space-between;
  padding: 0 1px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const PujaDuration = styled.div`
  font-weight: 500;
  line-height: 20px;
  flex-grow: 1;
  flex-basis: auto;
  @media (max-width: 991px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

const DurationLabel = styled.span`
  font-weight: 800;
  color: rgba(45, 156, 219, 1);
  @media (max-width: 991px) {
    font-size: 16px;
    font-weight: 800;
  }
`;

const PujaCost = styled.div`
  font-weight: 900;
  line-height: 24px;
  flex-grow: 1;
  flex-basis: auto;
  @media (max-width: 991px) {
    font-size: 16px;
    font-weight: 900;
  }
`;

const CostLabel = styled.span`
  color: rgba(45, 156, 219, 1);
`;

const BookButton = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 30px;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  line-height: 150%;
  /* padding: 0 60px; */

  @media (max-width: 991px) {
    width: 242px;
    height: 48px;
  }
`;

const BookButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1.878px solid #02c0db;
  background: linear-gradient(90deg, #02c1db 0%, #0294d7 100%);
  width: 331px;
  max-width: 100%;
  color: #FFFFFF;
  padding: 12px 60px;
  cursor: pointer;
  @media (max-width: 991px) {
    width: 242px;
    height: 48px;
    padding: 0px;
  }

  
`;

export default PujaDetails;
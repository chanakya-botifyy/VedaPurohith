
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import PujaData from '../../Product Card/PujaData.js';
import {PUJA,EVENTS,FESTIVALS,HOMAM,VRATHAM} from '../../Product Card/PujaData.js';
import { useLocation , useNavigate } from "react-router-dom";
import React,{useState} from "react";
import Footer from "../../Footer/Footer.jsx";



function CartAddPage() {
  // const { ProductId } = useParams();
  // const allProducts = [...PujaData, ...PUJA, ...EVENTS, ...FESTIVALS, ...HOMAM, ...VRATHAM];
  // const foundProduct = allProducts.find(p => p.id === Number(ProductId));

  const location = useLocation();
  const formData = location.state;
  const product = formData.product;
  const navigate = useNavigate();
  
  const [dialog,setDialog] = useState(false);

  const toggleModal = () => {
    setDialog(!dialog);
  };
 

  return (
    <>
    {product.map((item)=>(
    <Forms>
    <CartContainer>
      <CartContent>
        <CartHeader>
          <CartTitle>My Cart</CartTitle>
        </CartHeader>
        <CartItems>
          <CartItemList>
              <CartItem >
                <CartItemImage>
                  <ItemImage src={item.titleimage} alt="image" loading="lazy" />
                </CartItemImage>
                <CartItemDetails>
                  <CartItemName>
                    <ItemName>{item.title}</ItemName>
                  </CartItemName>
                  <CartItemInfo>
                    <CartItemDate>
                      Date: <HighlightedText>{formData.date}</HighlightedText>
                    </CartItemDate>
                    <CartItemSlot>
                      Slot: <HighlightedText>{formData.slot}</HighlightedText>
                    </CartItemSlot>
                  </CartItemInfo>
                  <CartItemInfo>
                    <CartItemDuration>
                      Duration:{" "}
                      <HighlightedText>{item.Duration}</HighlightedText>
                    </CartItemDuration>
                    <CartItemCost>
                      Cost: <HighlightedText>{item.cost}</HighlightedText>
                    </CartItemCost>
                  </CartItemInfo>
                  <CartItemLocation>
                    Location: <HighlightedText>{formData.address}</HighlightedText>
                  </CartItemLocation>
                </CartItemDetails>
              </CartItem>
          </CartItemList>
        </CartItems>
        <BillingAddress>
          <BillingAddressContent>
            <BillingAddressTitle>Billing Address</BillingAddressTitle>
            <BillingAddressDetails placeholder="Enter your Billing Address"/>
          </BillingAddressContent>
        </BillingAddress>
      </CartContent>
      <CartActions>
        <BackButton onClick={()=> navigate(-1)}>Back</BackButton>
        
        <PayButton>
        {/* <Link to={`/Orders`} style={{textDecoration:'none'}} > */}
          <PayButton1 onClick={toggleModal} >Pay</PayButton1>
          {/* </Link> */}
        </PayButton>

        {dialog && (
          <Dialog>
            <Overlay onClick={toggleModal} ></Overlay>
            <Maincon>
              <h1>Your Seva Booked Successfully</h1>
              <PayButton2 onClick={toggleModal}>Continue Shopping</PayButton2>
            </Maincon>
          </Dialog>
        )}

        
      </CartActions>
    </CartContainer>
    
    </Forms>
    ))} 
    <Footer />
    </>
);
}

const PayButton2 =  styled.button`
justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1.878px solid #02c0db;
  background: linear-gradient(90deg, #02c1db 0%, #0294d7 100%);
  color: #fff;
  padding: 6px 31px;
  width: 100%;
  font-size: 20px;
  cursor: pointer;
  padding: 11px 0px;
@media (max-width: 991px) {
    font-size: 13px;
    font-weight: 800;
  }
`;
const Dialog = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    @media (max-width: 991px) {
    width: 309px;

  }
`;

const Overlay = styled.div`
  width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49,49,49,0.8);
    @media (max-width: 991px) {

  }
`;
const Maincon =styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #EEFEFF;
    padding: 55px 45px;
    border-radius: 20px;
    /* max-width: 600px;
    min-width: 300px; */
    @media (max-width: 991px) {
    width: 300px;
    height: 170px;
    left: 65%;
    padding: 0px 33px;
    h1{
      font-size: 18px;
      font-weight: 800;
    }
    

  }
`;


const PayButton1 = styled.a`
color:#FFFFFF;
width: 100%;

`;

const Forms= styled.div`
display: flex;
justify-content: center;
margin-bottom: 50px;
@media (max-width: 991px) {
    /* max-width: 95%; */
    display: flex;
    justify-content: center;
    padding-top: 76px;

  }
`;

const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media (max-width: 991px) {
    width: 309px;
    /* margin: 34px; */
  }
`;

const CartContent = styled.div`
  display: flex;
  
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const CartHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 20px;
  @media (max-width: 991px) {
    /* max-width: 100%; */
    padding: 0px;
    margin-left: 32px;
  }
`;

const CartTitle = styled.h1`
  color: #3c1100;
  letter-spacing: 0.72px;
  width: 100%;
  font-weight: 900;
  font-size: 24px;
  @media (max-width: 991px) {
    /* max-width: 100%; */
    font-size: 16px;
    font-weight: 900;
  }
`;

const CartItems = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const CartItemList = styled.ul`
  border-radius: 15px;
  border: 1px solid rgba(238, 238, 238, 0.8);
  display: flex;
  width: 95%;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  @media (max-width: 991px) {
    width: 309px;
    padding: 0px;
    border: none;
    display: flex;

  }
`;

const CartItem = styled.li`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    width: 309px;
  }
`;

const CartItemImage = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-left: 0;
  @media (max-width: 991px) {
    width: 309px;
    display: flex;
  }
`;

const ItemImage = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  width: 200px;
  max-width: 100%;
  align-self: stretch;
  margin: auto 0;
  border-radius: 5.69px;
  @media (max-width: 991px) {
    width: 239px;
    height: 239px;
    margin-left: 35px;
  }
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 69%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 309px;
    margin-left: 0;
  }
`;

const CartItemName = styled.div`
  justify-content: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  
  @media (max-width: 991px) {
    /* width: 100%; */
    /* margin-top: 24px; */
    justify-content: center;
    display: flex;
    
  }
`;

const ItemName = styled.h2`
  font-size: 24px;
  font-weight: 900;
  color: #3c1100;
  line-height: 136%;
  justify-content: center;
  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 900;
    color: #2D9CDB;
  }
`;

const CartItemInfo = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: row;
  font-size: 16px;
  color: #2d9cdb;
  letter-spacing: 0.48px;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 15px;
    font-weight: 900;
  }
`;

const CartItemDate = styled.p`
  margin-right: 15px;
  color:#595959;
  font-weight: 900;
`;

const CartItemSlot = styled.p`
  color:#595959;
  font-weight: 900;
`;

const CartItemDuration = styled.p`
  margin-right: 15px;
  color:#595959;
  font-weight: 900;
  
  
`;

const CartItemCost = styled.p`
  color:#595959;
  font-weight: 900;
`;

const CartItemLocation = styled.p`
  margin-top: 10px;
  justify-content: center;
  color:#595959;
  font-weight: 900;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 15px;
    font-weight: 900;
  }
`;

const HighlightedText = styled.span`
  color: rgba(45, 156, 219, 1);
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 15px;
    font-weight: 900;
  }
`;

const BillingAddress = styled.section`
  display: flex;
  margin-top: 31px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 15px;
  }
`;

const BillingAddressContent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0px;
  }
`;

const BillingAddressTitle = styled.h2`
  color: #121212;
  text-align: left;
  line-height: 100%;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BillingAddressDetails = styled.textarea`
  border-radius: 6.211px;
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #fff;
  margin-top: 6px;
  width: 95%;
  color: #6b6b6b;
  font-size: 16px;
  line-height: 16px;
  justify-content: center;
  padding: 11px 12px;
  @media (max-width: 991px) {
    width: 288px;
  }
`;

const CartActions = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 38px;
  /* width: 100%; */
  gap: 20px;
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
  /* line-height: 150%; */
  @media (max-width: 991px) {
    gap: 44px;
    
  }
`;

const BackButton = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  color: #02c1db;
  padding: 6px 31px;
  width: 100%;
  font-size: 20px;
  cursor: pointer;
  padding: 11px 0px;
  @media (max-width: 991px) {
    white-space: initial;
    width: 110px;
    height: 44px;
    /* padding: 0 20px; */
  }
`;

const PayButton = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1.878px solid #02c0db;
  background: linear-gradient(90deg, #02c1db 0%, #0294d7 100%);
  color: #fff;
  padding: 6px 31px;
  width: 100%;
  font-size: 20px;
  cursor: pointer;
  padding: 11px 0px;
  @media (max-width: 991px) {
    white-space: initial;
    width: 110px;
    height: 44px;
    padding: 7px 0;
    /* padding: 0 20px; */
  }
`;

export default CartAddPage;
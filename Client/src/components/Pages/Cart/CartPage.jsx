import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer.jsx";
import axios from "axios";
import Cookies from 'js-cookie';
import { store } from "../../../App.js";
import instance from "../../../Utils/Api.js";
import phonepe from '../../Assets/phonepe.png';


function CartPage() {
  const location = useLocation();
  const product = location.state?.product;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [address, setAddress] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [dialog, setDialog] = useState(false);
  const [token, setToken] = useContext(store);
  const navigate = useNavigate();


  // useEffect(() => {
  //   const storedToken = Cookies.get('token');
  //   setToken(storedToken);
  //   if (storedToken) {
  //     instance.get('/Orders', {
  //       headers: {
  //         'x-token': storedToken
  //       }
  //     })
  //       .then(res => setTokenData(res.data))
  //       .catch(err => console.log(err));
  //   }
  // }, [setToken]);


  const cartItems = product.map(item => ({
    Seva: item.title,
    SevaImage: item.titleimage,
    Duration: item.Duration,
    Total: item.cost,
    Category: item.category
  }));

  const [data, setData] = useState({
    OrderDate: '',
    Slot: '',
    Location: '',
    BillingAddress: '',
    Seva: cartItems[0].Seva,
    SevaImage: cartItems[0].SevaImage,
    Duration: cartItems[0].Duration,
    Total: cartItems[0].Total,
    Category: cartItems[0].Category
  })

  const handleSubmit = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = () => {
    // If checkbox is checked, copy the address to the billing address
    if (document.getElementById('sameAddressCheckbox').checked) {
      setData({ ...data, BillingAddress: data.Location });
    } else {
      setData({ ...data, BillingAddress: '' });
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
    instance.post('/addOrder', data, {
      headers: {
        'x-token': storedToken,
      },
    })
      .then(response => {
        const url = response.data.Api_url
        window.location.href = url;
        // setDialog(true);
        // document.getElementById('Order created Succesfully').reset();
      })
      .catch(err => {
        // Check if error response contains data (error message from server)
        if (err.response && err.response.data) {
          alert(JSON.stringify(err.response.data.message)); // Display error message
        } else {
          alert('An error occurred'); // Display generic error message
        }
      });
  }
  // useEffect(() => {

  // })

  // let payData = {
  //   id:product[0].id,
  //   amount:cartItems[0].Total,
  //   MID: 'MID' + Date.now(),
  //   transactionId: 'T' + Date.now()
  // }

  // const handleClick = async () =>{
  //   try{
  //     await instance.post('/pay', payData).then((res)=>{
  //       console.log(res.data);
  //     }).catch(err=>{
  //       console.log(err);
  //     })
  //   }catch(error){
  //     console.log(error);
  //   }

  // }

  // async function initiatePayment() {
  //   try {
  //     const response = await axios.get('http://localhost:4000/pay'); // Assuming this is the route where your backend is serving the /pay endpoint
  //     const data = await response.json();
  //     console.log(JSON.stringify(response.data)); // Logging the response data for verification
  //     // Redirecting to the PhonePe payment page
  //     window.location.href = data.data.instrumentResponse.redirectInfo.url;
  //     navigate(response.data.data.instrumentResponse.redirectInfo.url);
  //   } catch (error) {
  //     console.error('Error initiating payment:', error);
  //     // Handle error appropriately, e.g., display an error message to the user
  //   }
  // }




  function handleConform() {
    // Check if any field is empty
    if (name.trim() === '' || email.trim() === '' || date.trim() === '' || slot === 'Select Slot' || address.trim() === '' || billingAddress.trim() === '') {
      // Some fields are empty, show an error message or handle it as needed
      console.log('Please fill in all fields.satya');
    } else {
      // All fields are filled, trigger the toggleModal function
      toggleModal();
    }
  }

  const toggleModal = () => {

    setDialog(!dialog);
    navigate('/Orders');
  };
  const toggleModelRetry = () =>{
    setDialog(!dialog);
  }

  return (
    <>
      {product.map((item) => (
        <Forms>
          <CartContainer>
            <CartContent>
              <CartHeader>
                <CartTitle>My Cart</CartTitle>
              </CartHeader>
              <CartItems>
                <CartItemList>
                  <CartItem>
                    <CartItemImage>
                      <img src={item.titleimage} alt={item.title} loading="lazy" />
                    </CartItemImage>
                    <CartItemDetails>
                      <CartItemName>{item.title}</CartItemName>
                      <CartItemMeta>
                        <CartItemDuration>
                          <H>Duration:</H>  <Highlight>{item.Duration}</Highlight>
                        </CartItemDuration>
                        <CartItemCost>
                          <H>Cost:</H> <Highlight>{item.cost} INR</Highlight>
                        </CartItemCost>
                      </CartItemMeta>
                    </CartItemDetails>
                  </CartItem>
                </CartItemList>
              </CartItems>
              <CartDetails id="Order created Succesfully" onSubmit={submitHandler}>

                <CartDetailItem>
                  <CartDetailLabel>Date*</CartDetailLabel>
                  <CartDetailValue type="date" placeholder="MM/DD/YYYY" name="OrderDate" onChange={handleSubmit} required />
                </CartDetailItem>
                <CartDetailItem>
                  <CartDetailLabel>Slot*</CartDetailLabel>
                  {/* <CartDetailValue placeholder="Select Slot" name="slot" onChange={(event) => setSlot(event.target.value)} required /> */}
                  <CartSlotValue placeholder="Select Slot" name="Slot" onChange={handleSubmit} required>
                    <option value="Select Slot">Select Slot</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                  </CartSlotValue>
                </CartDetailItem>
                <CartDetailItem>
                  <CartDetailLabel>Address*</CartDetailLabel>
                  <CartDetailTextarea placeholder="Enter your Address" name="Location" value={data.Location} onChange={handleSubmit} required />

                </CartDetailItem>
                <Checkbox>
                  <input type="checkbox" id="sameAddressCheckbox" onChange={handleCheckboxChange} /><label>Same as Address</label>
                </Checkbox>
                <CartDetailItem>
                  <CartDetailLabel>Billing Address*</CartDetailLabel>
                  <CartDetailTextarea placeholder="Enter your Billing Address" name="BillingAddress" value={data.BillingAddress} onChange={handleSubmit} required />

                </CartDetailItem>
                <CartActions>
                  <CartBackButton onClick={() => navigate(-1)} ><b>Back</b></CartBackButton>
                  {/* <CartNextButton> */}
                  {/* <Link to={`/Products/${foundProduct.id}/Cart/address`} style={{textDecoration:'none'}}> */}
                  <CartNextButton type="submit" onClick={handleConform}>
                    <img src={phonepe} /><b>pay</b>
                  </CartNextButton>
                  {/* </Link> */}
                  {/* </CartNextButton> */}
                  {/* {dialog && (
                    <Dialog>
                      <Overlay onClick={toggleModal} ></Overlay>
                      <Maincon>
                        <h1>Your Seva Booked Successfully</h1>
                        <PayButton2 onClick={toggleModal}>Continue Shopping</PayButton2>
                      </Maincon>
                    </Dialog>
                  )} */}

                  {/* {dialog && (
                    <Dialog>
                      <Overlay onClick={toggleModal} ></Overlay>
                      <Maincon1>
                        <h1>Your Payment was unsuccessful</h1>
                        <center>
                        <Dialogbuttons>
                          <PayButton3 onClick={()=>navigate('/Home')}>Continue Shopping</PayButton3>
                          <PayButton4 onClick={toggleModelRetry}>Retry</PayButton4>
                        </Dialogbuttons></center>
                      </Maincon1>
                    </Dialog>
                   )} */}

                </CartActions>

              </CartDetails>
            </CartContent>
          </CartContainer>

        </Forms>
      ))}
      {/* <PayButton2 onClick={initiatePayment}>PhonePe</PayButton2> */}
      <Footer />

    </>
  );
}

const Dialogbuttons = styled.div`
  display: flex;
  width: 306px;
  gap: 26px;
`;

const PayButton4 = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1.878px solid #02c0db;
  background: linear-gradient(90deg, #02c1db 0%, #0294d7 100%);
  color: #fff;
  padding: 6px 31px;
  width: 83px;
  font-size: 20px;
  cursor: pointer;
  padding: 11px 0px;
@media (max-width: 991px) {
    font-size: 13px;
    font-weight: 800;
  }
`;

const Maincon1 = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background-color: #FFE4E4;
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


const PayButton3 = styled.button`
  border: none;
  color: #7C7C7C;
  background-color: #FFE4E4;
  font-size: 16px;
  font-weight: 600;
  padding: 0px;
`;

const Checkbox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
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
const Maincon = styled.div`
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


const PayButton2 = styled.button`
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




const User = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    

    
  }
`;
const Userdata = styled.div`
  /* width: ; */
`;
const Userdata1 = styled.div`
  /* width: 100%; */
`;
const Input = styled.input`
  border: 1px solid #EDEDED;
  border-radius: 7px;
  padding: 15px;
  width: 344px;
  margin-bottom: 10px;
  @media (max-width: 991px) {
    border: 1px solid #EDEDED;
  border-radius: 7px;
  padding: 15px;
  width: 90%;
    

    
  }

`;
const Inputlabel = styled.label`
  font-size: 16px;
  font-weight: 600;
`;
const Forms = styled.div`
display: flex;
justify-content: center;
margin-bottom: 150px;
margin-top: 76px;
@media (max-width: 991px) {
    /* padding-top: 76px;  */
    margin-bottom: 0px;

  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    width: 70%;
    /* margin: 0px 34px; */
    
  }

`;

const CartContent = styled.div`
  display: flex;
  
  flex-direction: column;
`;

const CartHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;


  
`;

const CartTitle = styled.h1`
  color: #3c1100;
  letter-spacing: 0.72px;
  width: 100%;
  font-size: 24px;
  font-weight: 900;

  @media (max-width: 991px) {
    /* max-width: 100%; */
    /* width: 292px; */
    width: 70%;
    padding: 0px;
    font-size: 16px;
    font-weight: 900;

  }
`;

const CartItems = styled.section`
  display: flex;
  margin-top: 24px;
  /* width: 100%; */
  flex-direction: column;
  justify-content: center;

  @media (max-width: 991px) {
    /* max-width: 100%; */
    width: 100%;
    /* margin:0px 36px; */
    


  }
`;

const CartItemList = styled.ul`
  border-radius: 15px;
  border: 1px solid rgba(238, 238, 238, 0.8);
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  justify-content: center;
  padding: 24px;

  @media (max-width: 991px) {
    /* width: 100%; */
    /* padding: 0 20px; */
    width:292px;
    border: none;
    padding: 0px;
    

    
  }
`;

const CartItem = styled.li`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    display: flex;
    flex-direction: column;

  }
`;

const CartItemImage = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  /* width: 34%; */
  margin-left: 0;
  

  img {
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    width: 200px;
    max-width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 991px) {
    img{
        width:239px;
        height: 239px;
        
      }
      display: flex;
      align-items: center;
  }
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  /* width: 66%; */
  margin-left: 20px;
  justify-content: center;

  @media (max-width: 991px) {
    /* width: 100%; */
    margin-left: 0;
  }
`;

const CartItemName = styled.h2`
  font-size: 22px;
  color: #3c1100;
  line-height: 136%;
  font-weight: 900;
  /* margin: auto 0; */

  @media (max-width: 991px) {
    margin-top: 9px;
    display: flex;
    justify-content: center;
    font-size: 30px;
    color:#2D9CDB;
  }
`;

const CartItemMeta = styled.div`
  display: flex;
  /* margin-top: 24px; */
  gap: 16px;
  font-size: 18px;
  font-weight: 600;
  color: #2d9cdb;
  letter-spacing: 0.48px;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 900;
    
  }
`;

const CartItemDuration = styled.div`
  flex-grow: 1;
  color:#2C2C2C;
`;

const CartItemCost = styled.div`
  flex-grow: 1;
  flex-basis: auto;
  color:#2C2C2C;
`;

const Highlight = styled.span`
  color: rgba(45, 156, 219, 1);
  font-size: 16px;
    font-weight: 900;
  @media (max-width: 991px) {
    font-size: 16px;
    font-weight: 900;
    color: #13151E;
  }

`;
const H = styled.span`
  color: #2C2C2C;
  font-size: 16px;
    font-weight: 900;
  @media (max-width: 991px) {
    font-size: 16px;
    font-weight: 800;
    color: rgba(45, 156, 219, 1);
  }
`;

const CartDetails = styled.form`
  display: flex;
  margin-top: 31px;
  width: 100%;
  flex-direction: column;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const CartDetailItem = styled.div`
  justify-content: center;
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  line-height: 97%;
  /* padding: 0 20px; */
  margin-bottom: 19px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;




const CartDetailLabel = styled.label`
  color: #121212;
  text-align: left;
  width: 100%;
  font-style: normal;
  font-weight: 600;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const CartSlotValue = styled.select`
justify-content: center;
  border-radius: 6.211px;
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #fff;
  margin-top: 6px;
  color: #6b6b6b;
  padding: 11px 12px;
  padding-right: 12px;
  font-size:15px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
const CartDetailValue = styled.input`
  justify-content: center;
  border-radius: 6.211px;
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #fff;
  margin-top: 6px;
  color: #6b6b6b;
  padding: 11px 12px;
  font-size:15px;
  cursor: pointer;
  width: 688px;

  @media (max-width: 991px) {
    width: 100%;
    /* align-items: left; */
    padding: 11px 0px;
  }
`;
const CartDetailTextarea = styled.textarea`
  background-color: #fff;
  border: 1px solid rgba(237, 237, 237, 1);
  border-radius: 6.211px;
  color: #6b6b6b;
  margin-top: 7px;
  padding: 10px 12px;
  height: 50px;
  resize: none;  
`

const CartActions = styled.footer`
  justify-content: center;
  display: flex;
  margin-top: 38px;
  
  /* gap: 20px; */
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
  /* line-height: 150%; */

  @media (max-width: 991px) {
    /* width: 70%; */
  }
`;

const CartButton = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-grow: 1;
  /* width: fit-content; */
  padding: 12px 60px;
  /* width: 100%; */
  

  @media (max-width: 991px) {
    /* white-space: initial; */
    padding: 7px 33px;
  }
`;

const CartBackButton = styled(CartButton)`
  background-color: #fff;
  color: #02c1db;
  font-size: 18px;
  @media (max-width: 991px){
    width: 110px;
  height: 44px;
  font-size: 18px;
  font-weight: 700;
  }
`;

const CartNextButton = styled(CartButton)`
  border: 2px solid #955FCF;
  /* border-image: linear-gradient( #A54CC1 100%, #955FCF 100%); */
  background: #5F259F;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  
  & img{
    width: 18.51px;
    height: 26.88px;
    margin-right: 10px;
  }
  @media (max-width: 991px){
    width: 110px;
  height: 44px;
  font-size: 18px;
  font-weight: 700;
  }
  
  
`;


export default CartPage;
import React, { useState, useEffect,useContext } from 'react';
import OrderProduct from './OrderProduct.jsx';
import styled from 'styled-components';
import Footer from '../../Footer/Footer.jsx';
import axios from 'axios';
import Cookies from 'js-cookie';
import { store } from "../../../App";
import { useNavigate } from 'react-router-dom';
import instance from '../../../Utils/Api.js';

const OrdersPage = () => {
  const [token,setToken] = useContext(store);
  const [data,setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
    if (storedToken) {
      instance.get('/Orders', {
        headers: {
          'x-token': storedToken
        }
      })
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    }
  }, [setToken]); // Empty dependency array ensures that the effect runs only once when the component mounts
  if(!token){
    // window.location.reload();
    navigate('/Login');
  }


  return (
    <>
      <Orders>
        <h1>Orders</h1>
          {data && data.reverse().map((item)=>(
            <OrderProduct key={item.id} {...item}/>
          ))}

      </Orders>
      <Footer />
    </>
  )
}

const Orders = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    @media (max-width: 991px) {
      align-items: normal;
  
  }
`;

export default OrdersPage

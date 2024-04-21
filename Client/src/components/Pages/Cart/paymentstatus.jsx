import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import instance from '../../../Utils/Api';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Paymentstatus = () => {
    const { id } = useParams();
    // const [orderStatus, setOrderStatus] = useState('')
    console.log(id);
    // console.log(orderStatus);
    let navigate = useNavigate();


    // useEffect(() => {
    //     // const storedToken = localStorage.getItem('token');
    //     // setToken(storedToken);
    //     instance.get(`/PaymentStatus/${id}`, {

    //     })
    //         .then(response => {
    //             console.log(response);
    //             setOrderStatus(response)
    //             // setDialog(true);
    //             // document.getElementById('Order created Succesfully').reset();
    //         })
    //         .catch(err => {
    //             // Check if error response contains data (error message from server)
    //             if (err.response && err.response.data) {
    //                 alert(JSON.stringify(err.response.data.message)); // Display error message
    //             } else {
    //                 alert('An error occurred'); // Display generic error message
    //             }
    //         });
    // }, [id])


    return (
        // <div>
        //      if(orderStatus){
                
        //     }else{
                
        //     }
        // </div>
        <div>
            {id === "1" ? (
                // Render this div if id is 1
                <Dialog>
                    <Overlay  ></Overlay>
                    <Maincon>
                        <h1>Your Seva Booked Successfully</h1>
                        <PayButton2 onClick={()=>{navigate('/Home')}}>Continue Shopping</PayButton2>
                    </Maincon>
                </Dialog>
            ) : (
                // Render this div if id is not 1
                <Dialog>
                    <Overlay  ></Overlay>
                    <Maincon1>
                        <h1>Your Payment was unsuccessful</h1>
                        <center>
                            <Dialogbuttons>
                                <PayButton3 onClick={()=>{navigate('/Home')}} >Continue Shopping</PayButton3>
                                <PayButton4 >Retry</PayButton4>
                            </Dialogbuttons></center>
                    </Maincon1>
                </Dialog>
            )}
        </div>
    )
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


export default Paymentstatus;

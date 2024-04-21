import React from 'react'
import Footer from '../Footer/Footer';
import styled from 'styled-components';

export default function Cancellation_Refund_Policy() {
    return (
        <>
            <Refund>
                <h1>Cancellation & Refund Policy</h1>
                At Vedapurohith.com, to give completely bother free puja experience to our client and in this manner we have a liberal cancellation and refund approach…<br/>
                <b>Cancellation Policy:</b><br/>
                Cancelled on that particular day during that muhurtham time due to any reason from the devotees side. Notice of cancellation must be made via e-mail to admin@vedapurohith.com. A cancellation acknowledgement will be sent within 2 working days and fees refunded within 06 working days, subject to this Refund Policy.<br/>
                As a customer you are responsible for understanding this refund policy upon purchasing any product or services at our web site. However, we realize that exceptional circumstance can take place with regard to the character of the product or services we provide.<br/>
                <br/>
                Therefore, We do honour requests for refund where the Following Reasons Apply:<br/>
                <br/>
                <b>Refund Policy:</b><br/>
                Cancellation of Service orders: For cancellation of puja services or any other services which was ordered (as per organised schedule selected by customer) the following refund policy is approved<br/>
                ·	Before 06 Hours from the booking time: 100% of the Amount will be refunded excluding GST & payment gateway charges(1.8 % +GST).<br/>
                ·	Cancellation after 06 Hours of booking time: No amount is approved for refund due to all bookings already would be in place.<br/>
                ·	In case the allotted Pandith reaches the venue on time but due to some reasons from the customer’s side the Puja is not conducted during the given specific time (Muhurat), there will be no refund provided.<br/>
                ·	In case of the consultation, consultation charges are non-refundable whether the client performed the event or not.<br/>
                ·	Vedapurohith.com will deduct the transnational charges mentioned on the invoice from the refund amount before initiate it.<br/>

            </Refund>
            <Footer />
        </>
    )
}

const Refund = styled.div`
  margin-left  :150px ;
  margin-right: 88px;
  margin-bottom: 20px;
  margin-top: 77px;
  font-size: 16px;
  color: #3C1100;
  @media (max-width:991px){
    margin-left: 30px;
    margin-right: 20px;
    font-size: 14px;
  }
`;

import React from 'react';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

export default function Customer_Grievance() {
    return (
        <>
            <Customer>
                <h1>Customer Grievance</h1>
                <b>Non-delivery of the product or service:</b> such as, for example, due to some mailing issues you do not receive a delivery e-mail from us.<br/>
                Few software mistakes or manual difficulties with the product or service occurs sometimes: although all the products and services are thoroughly reviewed before release, unexpected errors may occur. This reason should be submitted to our Support Team for approval (admin@vedapurohith.com). Also You/customer need to followup the Pandit Ji till the event to be completed.<br/>
                If our Pandit Ji reaches after your specified Muhurat timings, be assured that we will figure out another Shubh Muhurat for you. You/customer need to followup the Pandit Ji & make sure the Panditji reaches before time. In case you don’t want to conduct the Puja post this situation, a full refund shall be provided to you within 06 working days.<br/>
                In case our Panditji doesn’t meet your pre-specified community and language specifications and fails to conduct the Puja as per your religious rituals and methodology, we will perform the entire Puja again for you free of charge making sure that the new Pandit meets all your requirements and one of our head Pandits will come for your Puja.<br/>
                Please note that our Support Team (admin@vedapurohith.com) is ready to provide you with timely and efficient professional assistance. We will attempt to find the best convenient solution for your query. Give us 12-24 hours for our Support Team to get back to you on the problem.<br/>
                <br/>
                <b>Payment Policy</b><br/>
                Registration is not complete until full payment has been received. Full Payments not received will result in non-delivery of our service. Payment may be made by online through UPI, Debit Card, Credit Card or Net banking.<br/>
                <br/>
                <b>Refund Policy:</b><br/>
                Cancellation of Service orders: For cancellation of puja services or any other services which was ordered (as per organized schedule selected by customer) the following refund policy is approved<br/>
                ·	Cancellation within 06 hours of booking: 100% refund excluding GST amount and Payment gateway charges (1.8% +GST).<br/>
                ·	Cancellation after 06 hours of booking: No amount is approved for refund<br/>
                ·	In case the allotted Pandit reaches the venue on time but due to some reasons from the customer’s side the Puja is not conducted during the given specific time (Muhurat), there will be no refund provided.<br/>
                ·	In case of the consultation, consultation charges are non- refundable whether the client performed the event or not.<br/>
                ·	Vedapurohith.com will deduct the transnational charges mentioned on the invoice from the refund amount before initiate it.<br/>

            </Customer>
            <Footer />
        </>
    )
}

const Customer = styled.div`
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
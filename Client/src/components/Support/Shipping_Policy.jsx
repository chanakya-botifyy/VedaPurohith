import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';

export default function Shipping_Policy() {
    return (
        <>
            <ShippingPolicy>
                <h1>Shipping Policy</h1>
                <b>Interpretation and Definitions</b><br/>
                <b>Interpretation</b><br/>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.<br/>
                <b>Definitions</b><br/>
                For the purposes of this Disclaimer:<br/>
                ·	<b>“Poojalu Services”</b> (referred to as either “the Company”, “We”, “Us” or “Our” in this Disclaimer) refers to [Veda Purohith Services Private Limited]<br/>
                ·	<b>“Goods”</b> refers to the items offered for sale on the Service.<br/>
                ·	<b>“Orders”</b> means a request by You to purchase Goods from Us.<br/>
                ·	<b>“Service”</b> refers to the Website.<br/>
                ·	<b>“Website”</b> refers to [Veda Purohith Services Private Limited], accessible from [www.vedapurohith.com]<br/>
                ·	<b>“You”</b> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.<br/>
                Thank you for visiting and shopping at [Veda Purohith Services Private Limited]. The following terms and conditions constitute our Shipping Policy.<br/>
                <b>Shipment processing times</b><br/>
                All Orders are processed within 2-3 business days.<br/>
                If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in shipment of Your Order, We will contact You via email or telephone.<br/>
                <b>Shipping delivery estimates & charges</b><br/>
                Shipping charges for Your Orders will be calculated and displayed at checkout.<br/>
                <br/>
                <Table>
                <b><tr>Zone</tr>	<tr>Location</tr>	<tr>Delivery Time</tr></b><br/>
                {/* <hr/> */}
                <tr>Local</tr>	<tr>Hyderabad</tr>	<tr>Upto 48 Hours</tr><br/>
                {/* <hr/> */}
                </Table>
                
                <br/>
                Delivery delays can occasionally occur.<br/>
                <b>Shipment confirmation & Order tracking</b><br/>
                You will receive a Shipment Confirmation Email once Your Order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.<br/>
                <br/>
                <b>Taxes</b><br/>
                Veda Purohith Services Private Limited is not responsible for any taxes applied to your order. All fees imposed during or after shipping are the responsibilities of the customer (tariffs, taxes)<br/>
                <b>Damages</b><br/>
                Vedapurohith.com is not liable for any products damaged or lost during shipping. If you receive damaged order, please contact the shipment carrier to file a claim.<br/>
                Please save all packaging materials and damaged goods before filing a claim.<br/>
                <b>Contact Us</b><br/>
                If you have any questions about this Shipping Policy, You can contact us:<br/>
                ·	By visiting this page on our website:<br/>
                https://www.vedapurohith.com/contact-us/<br/>
                ·	By sending us an email: admin@vedapurohith.com<br/>

            </ShippingPolicy>
            <Footer />
        </>
    )
}
const ShippingPolicy = styled.div`
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
const Table = styled.table`

`




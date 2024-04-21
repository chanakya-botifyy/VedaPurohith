import React from 'react'
import Footer from '../Footer/Footer';
import styled from 'styled-components';

export default function Privacy_Policy() {
    return (
        <>
        <PrivacyPolicy>
            <h1>Privacy Policy</h1>
            <b>INTRODUCTION</b><br/>
            Welcome to Veda Purohith Services Private Limited. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Vedapurohith.com relationship with you in relation to this website.<br/>
            The term ‘Veda Purohith Services Private Limited’,  ‘we’ or ‘us’ or ‘our’ refers to the owner of the website whose registered at Hyderabad. The term ‘you’ refers to the user or viewer of our website.<br/>
            <br/>
            <b>WHAT DO WE DO WITH YOUR INFORMATION?</b><br/>
            <br/>
            When you book some services from our website, as part of the buying and selling process, we collect the personal information you give us such as your name, address, email address and phone number. When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system. Email marketing (if applicable): We may send you emails about new products and other updates.<br/>
            <br/>
            <b>HOW DO YOU GET MY CONSENT?</b><br/>
            <br/>
            When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange or cancel a booking, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.<br/>
            <br/>
            <b>HOW DO I WITHDRAW MY CONSENT?</b><br/>
            <br/>
            If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by mailing us at admin@vedapurohith.com.<br/>
            <br/>
            <b>DISCLOSURE:</b><br/>
            We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.<br/>
            <br/>
            <b>PAYMENT:</b><br/>
            We usually collect payments, online only and no offline payments, using UPI, Debit Cards, Credit Cards and Net Banking. We use PhonePe Payment Gateway for processing payments online. We/PhonePe Payment Gateway do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved. Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers. For more insight, you may also want to read terms and conditions of PhonePe Payment Gateway on https://phonepe.com <br/>
            <br/>
            <b>THIRD-PARTY SERVICES:</b><br/>
            <br/>
            In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.<br/>
            <br/>
            For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.<br/>
            Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.<br/>
            Links When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.<br/>
            <b>SECURITY</b><br/>
            To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.<br/>
            <b>COOKIES:</b><br/>
            We use cookies to maintain session of your user. It is not used to personally identify you on other websites.<br/>
            <b>AGE OF CONSENT:</b><br/>
            By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.<br/>
            <br/>
            <b>CHANGES TO THIS PRIVACY POLICY:</b><br/>
            We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.<br/>
            <br/>
            <br/>
            <b>IF YOU DISAGREE WITH THIS PRIVACY POLICY, DISCLAIMER, YOU ARE PROHIBITED FROM OPENING OR VIEWING ANY FILES OR FOLDERS IN THIS SITE OR AVAIL OF ANY SERVICE PROVIDED IN THIS SITE</b><br/>

        </PrivacyPolicy>
        <Footer />
        </>
    )
}
const  PrivacyPolicy = styled.div`
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

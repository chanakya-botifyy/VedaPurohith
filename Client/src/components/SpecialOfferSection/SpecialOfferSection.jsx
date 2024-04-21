import React from "react";
import styled from "styled-components";
import  { Link } from "react-router-dom";

function SpecialOfferSection() {
  return (
    <Section>
    <SpecialOfferContainer>
      <SpecialOfferContent>
        <SpecialOfferDetails>
          <SpecialOfferHeading>
            Our Special offer this Season
          </SpecialOfferHeading>
          <SpecialOfferDescription>
            Lorem Epson is a dummy text to fill the sentencesLorem Epson is a
            dummy text to fill the sentences
          </SpecialOfferDescription>
          <BookNowButton>
          <Link to={'/Products'} style={{textDecoration:'none'}}>
            <BookNowButtonContent>
              <BookNowButtonText>Book now</BookNowButtonText>
              <BookNowButtonIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/580564a042a417c2dd6f9642f62b12214e1267752fe908d9a169455a9d98d3f6?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Book now icon" />
            </BookNowButtonContent>
            </Link>
          </BookNowButton>
          <SpecialOfferIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/7af1e993e96875134b4b0b30b6bddacab3b0a536f9a238849ae41b94279805ef?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Special offer icon" />
        </SpecialOfferDetails>
      </SpecialOfferContent>
      <SpecialOfferImage>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/27cd1b9bee79b03362cdd0b5846c7e61d714f89c9ca4ddbf08198e7ccbe1b682?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Special offer" />
      </SpecialOfferImage>
    </SpecialOfferContainer>
    </Section>
  );
}

const Section = styled.div`
margin:60px;
`
const SpecialOfferContainer = styled.section`
  border-radius: 25px;
  background: linear-gradient(280deg, #e45705 1.05%, #b3e4e8 1.05%);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  display:flex;
`;

const SpecialOfferContent = styled.div`
  display: flex;
  gap: 20px;
  padding-left:70px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const SpecialOfferDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 60%;
  margin-left: 30px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SpecialOfferHeading = styled.h2`
  color: #fff;
  letter-spacing: 1.68px;
  align-self: end;
  font-size: 56px;
  font-weight: 900;
  margin-top: 80px;
  

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 55px;
    margin-top: 40px;
  }
`;

const SpecialOfferDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.54px;
  align-self: end;
  margin-top: 10px;
  font-size: 18px;
  
`;

const BookNowButton = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 40.87px;
  background: linear-gradient(
      0deg,
      #fff 0%,
      #fff 100%
    ),
    linear-gradient(276deg, #0191d6 -4.36%, #01a1d8 49.89%, #01cbdc 105.28%);
  width: 217px;
  max-width: 100%;
  font-size: 20px;
  letter-spacing: 0.8px;
  margin: 30px 0 0 52px;
  padding: 21px 36px;

  @media (max-width: 991px) {
    margin-left: 10px;
    padding: 0 20px;
  }
`;

const BookNowButtonContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const BookNowButtonText = styled.span`
  background: linear-gradient(
    276deg,
    #018dd6 -4.36%,
    #11b5db 49.89%,
    #01cbdc 105.28%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  flex-grow: 1;
  flex-basis: auto;
  cursor: pointer;
`;

const BookNowButtonIcon = styled.img`
  width: 22px;
  margin: auto 0;
`;

const SpecialOfferIcon = styled.img`
  width: 87px;
  fill: #f0f0f0;
  margin-top: 16px;
`;

const SpecialOfferImage = styled.div`
  
  margin-left: 20px;
  align-items:right;


  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }

  img { 
    width: 578px;
    object-fit: cover;
  }
`;

export default SpecialOfferSection;
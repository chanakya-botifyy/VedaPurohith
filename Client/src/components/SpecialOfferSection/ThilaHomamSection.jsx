import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ThilaHomamSection() {
  return (
    <Section>
    <SectionWrapper>
      <ContentWrapper>
        <ImageColumn>
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fc081b6a563f9e5d1903cd2a6bfb1c01445e67812623f3b0bc1e5d688ea95b4?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Thila Homam" loading="lazy" />
        </ImageColumn>
        <TextColumn>
          <TextContent>
            <Heading>
              Perform Thila Homam to Get Rid of Pitru Doshas...Perform Thila
              Homam to Get Rid of Pitru Doshas...
            </Heading>
            <Middle>
            <Link to={'/Products'} style={{textDecoration:'none'}}>
            <BookButton>Book Seva</BookButton>
            </Link>
            </Middle>
          </TextContent>
        </TextColumn>
      </ContentWrapper>
    </SectionWrapper>
    </Section>
  );
}

const Middle = styled.div`
  display: flex;
  justify-content: center;
`
const Section = styled.div`
display:flex;
justify-content: center;
    align-items: center;
    margin-bottom:34px;
    
`

const SectionWrapper = styled.section`
  justify-content: space-between;
  border-radius: 20px;
  background-color: #e8fdff;
  padding: 10px;
  width:60%;
  text-align:left;
  @media (max-width: 991px) {
   width :85% ;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items:center;
  gap: 20px;
  justify-content: space-around;

  @media (max-width: 991px) {
    flex-direction: row;
    /* align-items: stretch; */
    gap: 0;
  }
`;

const ImageColumn = styled.div`
  width: 28%;
  margin-left: 0;

  @media (max-width: 991px) {
    /* width: 100%; */
    width: 134px;
    height: 134px;
  }
`;

const Image = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  width: 100%;

  @media (max-width: 991px) {
    /* margin-top: 40px; */
    width: 134px;
    height: 134px;
  }
`;

const TextColumn = styled.div`
  width: 72%;
  margin-left: 20px;

  @media (max-width: 991px) {
    /* width: 100%; */
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
  padding: 0 6px;

  @media (max-width: 991px) {
    /* max-width: 100%; */
    /* margin-top: 40px; */
  }
`;

const Heading = styled.h2`
  color: #3c1100;
  font-size: 30px/40px;
  font-weight: 700;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 14px;
    font-weight: 700;
  }
`;

const BookButton = styled.button`
  border-radius: 80px;
  background: linear-gradient(
    276deg,
    #018bd6 -4.36%,
    #01cbdc 49.89%,
    #01cbdc 105.28%
  );
  align-self: center;
  margin-top: 20px;
  color: #fff;
  padding: 10px 60px;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 5px 30px;
    font-size: 8.39px;
    font-weight: 900;
  }
`;

export default ThilaHomamSection;
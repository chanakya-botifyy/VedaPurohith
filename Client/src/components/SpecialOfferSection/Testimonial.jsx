import React from "react";
import styled from "styled-components";
import oamlogo from '../Assets/oam logo.png';

const testimonialData = [
  {
    id: 1,
    name: "Kalyan Chakravarthi1",
    testimonial:
      "Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentencesLorem Epson is a dummy text to fill the sentences.",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae41232346637568d361ed6b411660fa4296b4a69c822d70b139c3d4f71ac1e6?apiKey=eb7f15f1bc7c491391257f0dd51005fc&",
  },
  {
    id: 2,
    name: "Kalyan Chakravarthi2",
    testimonial:
      "Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentencesLorem Epson is a dummy text to fill the sentences.",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae41232346637568d361ed6b411660fa4296b4a69c822d70b139c3d4f71ac1e6?apiKey=eb7f15f1bc7c491391257f0dd51005fc&",
  },
  {
    id: 3,
    name: "Kalyan Chakravarthi3",
    testimonial:
      "Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentencesLorem Epson is a dummy text to fill the sentences.",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae41232346637568d361ed6b411660fa4296b4a69c822d70b139c3d4f71ac1e6?apiKey=eb7f15f1bc7c491391257f0dd51005fc&",
  },
];

function Testimonial() {
  return (
    <TestimonialSection>
      <ImageWrapper>
        <Image src={oamlogo} alt="Testimonial" loading="lazy" />
        <Image2 src={oamlogo} alt="Testimonial" loading="lazy" />
      </ImageWrapper>
      <TestimonialContent>
        <THeader>
          <TestimonialTitle>Testimonial</TestimonialTitle>
          <TestimonialWrapper>
            {testimonialData.map((item) => (
              <TestimonialItem key={item.id}>
                <TestimonialHeader>
                  <Avatar src={item.avatar} alt={item.name} loading="lazy" />
                  <AuthorName>{item.name}</AuthorName>
                </TestimonialHeader>
                <TestimonialText>{item.testimonial}</TestimonialText>
              </TestimonialItem>
            ))}
          </TestimonialWrapper>
        </THeader>
        </TestimonialContent>
        <ImageWrapper2>
          <QuoteImage src={oamlogo} alt="Quote" loading="lazy" />
          <QuoteImage2 src={oamlogo} alt="Quote" loading="lazy" />
        </ImageWrapper2>
      
    </TestimonialSection>
  );
}

const TestimonialSection = styled.section`
  background: linear-gradient(0deg, #eff8f9 0%, #eff8f9 100%), #f9fff2;
  display: flex;

  align-items: flex-start;
  /* gap: 20px; */
  /* padding: 0 80px 47px 22px; */
  margin-bottom: 13px;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 991px) {
    /* flex-wrap: wrap; */
    padding:20px 0px 0px 0px;
    justify-content: center;
    

  }
`;

const ImageWrapper = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    /* position: absolute; */
    display: none;
    

  }
`;
const ImageWrapper2 = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    display: none;

  }
  
`;

const Image = styled.img`
  aspect-ratio: 1.11;
  object-fit: auto;
  object-position: center;
  width: 112px;
  align-self: end;
  max-width: 100%;
`;

const Image2 = styled.img`
  aspect-ratio: 1.03;
  object-fit: auto;
  object-position: center;
  width: 173px;
  align-self: center;
  margin-top: 326px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1px;
  font-weight: 900;
  flex-basis: auto;
  /* margin: auto 0; */
  /* width: 1055px; */
  height: 333px;

  @media (max-width: 991px) {
    height: 250px;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }
`;

const TestimonialWrapper = styled.div`
  display: flex;
  margin-top: 42px;
  flex-direction: row;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  gap: 25px;

  @media (max-width: 991px) {
    margin: 0px;
    gap: 10px;

    
  }
`;
const THeader = styled.div`
  display: flex;
  flex-direction: column;
`

const TestimonialTitle = styled.h2`
  color: #13151e;
  align-self: center;
  font-size: 40px;
  @media (max-width: 991px) {
    font-size: 20px;
    
  }
`;

const TestimonialItem = styled.div`
  display: flex;
  flex-direction:  column;
  align-items: center;
  font-size: 24px;
  text-align: center;
  border: 2px solid #F1F1F1;
  border-radius: 20px;
  width: 335px;
  height: 333p;
  padding: 30px;

  @media (max-width: 991px) {
    width:100px;
    height: 160px;
    margin-top: 0px;
    font-size: 12px;
    padding: 5px;
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  flex-direction:  column;
  align-items: center;
  gap: 20px;
  color: #1e1e1e;
  line-height: 150%;
  @media (max-width: 991px) {
    display: flex;
    flex-direction:  column;
    align-items: center;
    gap: 0px;
  }
`;

const Avatar = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 70px;
  border-radius: 50%;
  @media (max-width: 991px) {
    width: 30px;
  }
`;

const AuthorName = styled.p`
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font-size: 24px;
  font-weight: 800;
  @media (max-width: 991px) {
    font-size: 10px;
  font-weight: 800;
  }
`;

const TestimonialText = styled.p`
  margin-top: 20px;
  max-width: 100%;
  color: rgba(19, 21, 30, 0.6);
  justify-content: center;
  padding: 9px;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 991px) {
    padding: 0px;
    margin: 0px;
    font-size: 8px;
  }
`;

const QuoteImage = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 97px;
  align-self: start;
`;
const QuoteImage2 = styled.img`
  aspect-ratio: 1.03;
  object-fit: auto;
  object-position: center;
  width: 173px;
  align-self: center;
  margin-top: 326px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default Testimonial;
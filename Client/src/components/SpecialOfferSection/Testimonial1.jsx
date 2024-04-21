import * as React from "react";
import styled from "styled-components";

const testimonialData = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f2d4086d4a840e8850c19c0dcf07798f49d319d57c1fe01b14fe54cc631bfc2?apiKey=eb7f15f1bc7c491391257f0dd51005fc&",
    name: "Kalyan Chakravarthi",
    testimonial:
      "Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences.",
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f2d4086d4a840e8850c19c0dcf07798f49d319d57c1fe01b14fe54cc631bfc2?apiKey=eb7f15f1bc7c491391257f0dd51005fc&",
    name: "Kalyan Chakravarthi",
    testimonial:
      "Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences.",
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f2d4086d4a840e8850c19c0dcf07798f49d319d57c1fe01b14fe54cc631bfc2?apiKey=eb7f15f1bc7c491391257f0dd51005fc&",
    name: "Kalyan Chakravarthi",
    testimonial:
      "Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences.",
  },
];

function MyComponent() {
  return (
    <TestimonialSection>
      <TestimonialContent>
        <TestimonialHeading>Testimonial</TestimonialHeading>
        <TestimonialGrid>
          {testimonialData.map((testimonial) => (
            <TestimonialItem key={testimonial.id}>
              <TestimonialHeader>
                <TestimonialImage
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile picture`}
                />
                <TestimonialName>{testimonial.name}</TestimonialName>
              </TestimonialHeader>
              <TestimonialText>{testimonial.testimonial}</TestimonialText>
            </TestimonialItem>
          ))}
        </TestimonialGrid>
      </TestimonialContent>
      <DecorationImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/24281fec105f8392010c0000fed15148ad3b0a1cb9a261c11ca54e14b5209452?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="" />
    </TestimonialSection>
  );
}

const TestimonialSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #eff8f9;
  gap: 7px;
  padding: 0 38px 20px 80px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TestimonialHeading = styled.h2`
  color: #13151e;
  align-self: center;
  font: 900 40px/137.5% Poppins, sans-serif;
`;

const TestimonialGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 7px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    max-width: 100%;
  }
`;

const TestimonialItem = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 20px;
  border: 2px solid rgba(241, 241, 241, 1);
  text-align: center;
  padding: 20px;
  line-height: normal;
  width: 33%;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 25px;
  }
`;

const TestimonialHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  font-size: 24px;
  color: #1e1e1e;
  font-weight: 800;
  line-height: 150%;
`;

const TestimonialImage = styled.img`
  width: 70px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  align-self: center;
`;

const TestimonialName = styled.p`
  font-family: Poppins, sans-serif;
  justify-content: center;
  margin-top: 20px;
`;

const TestimonialText = styled.p`
  margin-top: 10px;
  color: rgba(19, 21, 30, 0.6);
  justify-content: center;
  padding: 8px;
  font: 600 16px/29px Poppins, sans-serif;
`;

const DecorationImage = styled.img`
  width: 143px;
  max-width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
`;

export default Testimonial1;
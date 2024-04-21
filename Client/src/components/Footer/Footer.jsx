import * as React from "react";
import styled from "styled-components";
import logo from '../Assets/newlogo.svg';
import { Link } from "react-router-dom";

export default function Footer() {
  const socialMediaLinks = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a699010a7a505908d2edd1779e10b85a8f385fff844d83b77ea7ce9731a266e?apiKey=eb7f15f1bc7c491391257f0dd51005fc&", alt: "Social Media 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a053803c3da706b9b89a127c356433acfca4c49dda2ee1d57e4595391e7833ea?apiKey=eb7f15f1bc7c491391257f0dd51005fc&", alt: "Social Media 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d13015808c36120c0fa6761dc00bd861a5089eb5bcc5982be3a34777fa31e38?apiKey=eb7f15f1bc7c491391257f0dd51005fc&", alt: "Social Media 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8eb8ede5cce9fdce5b9fa41a6232d9e9826bef1d079a9ecace1ef8d977dc3495?apiKey=eb7f15f1bc7c491391257f0dd51005fc&", alt: "Social Media 5" },
  ];

  const services = [
    "Services",
    "Pujas",
    "Vratham",
    "Homam",
    "Festivals",
    "Events",
  ];

  const about = ["Support","Terms & Conditions", "Privacy Policy", "Shipping Policy", "Customer Grievance", "Cancellation & Refund Policy"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Smooth scrolling animation
    });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <AddressColumn>
            <AddressContent>
              <CompanyLogo src={logo} alt="Company Logo" />
              <AddressDetails>
                <CompanyName>
                  <Strong>Address:</Strong> Veda Purohith SERVICES Pvt. Ltd.
                </CompanyName>
                <CompanyAddress>
                  Hyderabad, Telangana - 500081
                </CompanyAddress>
              </AddressDetails>
            </AddressContent>
          </AddressColumn>
          <LinksColumn>
            <LinksContainer>
            <Link to={'/Products'} style={{textDecoration:'none'}}>
              <LinksList>
                {services.map((service, index) => (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      <LinksTitle>{service}</LinksTitle>
                    ) : (
                      
                      <LinksItem>{service}</LinksItem>
                      
                    )}
                  </React.Fragment>
                ))}
              </LinksList>
              </Link>
              <LinksList>
                {about.map((item, index) => (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      <LinksTitle>{item}</LinksTitle>
                    ) : (
                      
                      <LinksItem >
                        <Link to={`/${item.replace(/\s+/g, '_').toLowerCase()}`} style={{ textDecoration: 'none',color:'black' }} onClick={scrollToTop}>
                        {item}</Link>
                        </LinksItem>
                    )}
                  </React.Fragment>
                ))}
              </LinksList>
            </LinksContainer>
          </LinksColumn>
        </FooterTop>
        <SocialMediaContainer>
          <SocialMediaIcons>
            {socialMediaLinks.map(({ src, alt }, index) => (
              <SocialMediaIcon key={index} src={src} alt={alt} />
            ))}
          </SocialMediaIcons>
        </SocialMediaContainer>
      </FooterContent>
      <CopyrightNotice>
        Copyright © 2024. Tech Quell Dynamics. All rights reserved.
      </CopyrightNotice>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
`;

const FooterContent = styled.div`
  justify-content: center;
  background-color: #e3fcff;
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FooterTop = styled.div`
  /* gap: 20px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 991px) {
    /* flex-direction: column; */
    align-items: stretch;
    gap: 0px;
  }
`;

const AddressColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  padding-top:10px ;
  @media (max-width: 991px) {
    width: 100%;
    align-items:center;
  }
`;

const AddressContent = styled.div`
  align-items: start;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 15px;
  color: rgba(30, 40, 51, 0.8);
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.3px;
  line-height: 20px;
  /* border-right: 3px solid #FFFFFF; */
  @media (max-width: 991px) {
    max-width: 100%;
    display:flex;
    align-items: center;
    padding-left:30px;
  }
`;

const CompanyLogo = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 163px;
  margin-left: 140px;
  /* max-width: 100%; */
  @media (max-width: 991px) {
    margin-left: 0px;
    width: 118px;
    height: 60px;
  }
`;

const AddressDetails = styled.address`
  margin-left: 17px;
  /* width: 448px; */
  display:flex;
    flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin:0px;
    display:flex;
    flex-direction: column;
    margin-left:0px;
  }
`;

const CompanyName = styled.span`
  font-weight: 800;
  font-size: 17px;
  letter-spacing: 0.34px;
  @media (max-width: 991px) {
    font-size:8px;
    font-weight: 800;
  }
`;
const Strong = styled.strong`
  color: #0188D6;
`

const CompanyAddress = styled.span`
  font-weight: 800;
  @media (max-width: 991px) {
    font-size:8px;
    font-weight: 800;
  }
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 29%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-self: stretch;
  font-size: 15px;
  color: #1e2833;
  font-weight: 800;
  letter-spacing: -0.2px;
  gap: 117px;
  margin: auto 0;
  align-items: flex-start;
  @media (max-width: 991px) {
    gap: 21px;
    margin: 0px;
  }
  
`;

const LinksList = styled.ul`
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  list-style: none;
  cursor: pointer;
`;

const LinksTitle = styled.li`
  color: #02b3da;
  letter-spacing: -0.23px;
  font-size: 17px;
  @media (max-width: 991px) {
    font-size: 8px;
    font-weight: 800;
  }
`;

const LinksItem = styled.a`
  margin-top: 17px;
  text-decoration: none;
  color: black;
  @media (max-width: 991px) {
    font-size: 6.62px;
    font-weight: 800;
    margin-top: 7.51px;
  }
`;

const SocialMediaContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  
`;

const SocialMediaIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 47px;
  @media (max-width: 991px) {
    width: 12px;
    height: 12px;
  }
`;

const CopyrightNotice = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  color: #1e2833;
  letter-spacing: -0.2px;
  font-size: 15px;
  font-weight: 800;
  overflow:hidden;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 6px;
    font-weight: 800;
  }
`;
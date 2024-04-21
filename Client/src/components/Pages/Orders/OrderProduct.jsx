import styled from "styled-components";
import React, { useState, useEffect,useContext } from 'react';


function SevaDetailsCard(props) {
  
return (
  <CardWrapper>
      <CardContent >
        <ImageColumn>
          <SevaImage src={props.SevaImage} alt="Seva" loading="lazy" />
        </ImageColumn>
        <DetailsColumn>
          <SevaName>{props.Seva}</SevaName>
          <SevaInfo>
            <InfoRow>
              <InfoItem>
                <span className="label">Date:</span>{" "}
                <span className="highlight">{new Date(props.OrderDate).toLocaleDateString()}</span>
              </InfoItem>
              <InfoItem>
                <span className="label">Slot:</span>{" "}
                <span className="highlight">{props.Slot}</span>
              </InfoItem>
            </InfoRow>
            <InfoRow>
              <InfoItem>
                <span className="label">Duration:</span>{" "}
                <span className="highlight">{props.Duration}</span>
              </InfoItem>
              <InfoItem>
                <span className="label">Cost:</span>{" "}
                <span className="highlight">{props.Total}</span>
              </InfoItem>
            </InfoRow>
            <InfoItem>
              <span className="label">Location:</span>{" "}
              <span className="highlight">{props.Location}</span>
            </InfoItem>
            <InfoItem>
              <span className="label">Billing Address:</span>{" "}
              <span className="highlight">{props.BillingAddress}</span>
            </InfoItem>
          </SevaInfo>
        </DetailsColumn>
      </CardContent>
  </CardWrapper>
);
}

const CardWrapper = styled.div`
  border-radius: 15px;
  border: 1px solid rgba(238, 238, 238, 0.8);
  width: 943px;
  padding: 24px;
  margin: 10px;

  @media (max-width: 991px) {
    padding: 10px;
    width:400px;
  }
`;

const CardContent = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 991px) {
    display: flex;
    flex-direction: row;
  }
`;

const ImageColumn = styled.div`
  width: 23%;

  @media (max-width: 991px) {
    /* width: 100%; */
  }
`;

const SevaImage = styled.img`
  width: 200px;
  height: 200px;
  /* max-width: 100%; */
  aspect-ratio: 1;
  object-fit: cover;
  margin: auto 0;
  border-radius: 5px;

  @media (max-width: 991px) {
    margin-top: 38px;
    width: 100px;
    height: 100px;
  }
`;

const DetailsColumn = styled.div`
  width: 77%;

  @media (max-width: 991px) {
    width: 100%;
  
  }
`;

const SevaName = styled.h2`
  font-size: 22px;
  color: #3c1100;
  font-weight: 600;
  line-height: 136%;
  @media (max-width: 991px) {
    font-size: 18px;
  
  }
`;

const SevaInfo = styled.div`
  margin-top: 24px;
  font-size: 16px;
  color: #2d9cdb;
  font-weight: 900;
  letter-spacing: 0.48px;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 10px;
  color: #2C2C2C;
`;

const InfoItem = styled.div`
  .label {
    font-weight: 600;
    color: #2C2C2C;
  }

  .highlight {
    color: #2d9cdb;
    font-weight: 600;
  }
`;

export default SevaDetailsCard;
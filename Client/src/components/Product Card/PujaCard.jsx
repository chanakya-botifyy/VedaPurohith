import * as React from "react";
import styled from "styled-components";
import Vector from '../Assets/Vector.svg';
import { Link } from "react-router-dom";



export default function PujaCard(props) {

  

  const allItems = props.items.split(',');
  const description = props.description.split(' ');
  const first10lines = description.slice(0, 15);
  const shotdescription = first10lines.join(' ');
  // Get the first 10 items
  const first10Items = allItems.slice(0, 10);
  const first10ItemsString = first10Items.join(', ');


  return (
    <CardWrapper>
      <Link key={props.id} to={`/Products/${props.id}`} >
        <CardImage src={props.titleimage} alt="Lakshmi Puja" />
      </Link>
      <CardContent>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          {/* <CardIcon src={Vector} alt="Icon" /> */}
        </CardHeader>
        <CardDescription>
          {shotdescription}...
        </CardDescription>
        <CardItems>
          <span className="item-label">Items:</span> {first10ItemsString} ...
        </CardItems>
        <CardCost>Cost: {props.cost} INR</CardCost>
        <CardActions>
          <CardviewBook>
          <Link key={props.id} to={`/Products/${props.id}`} style={{ textDecoration: 'none' }}>
            <CardActionView href={props.viewLink}>View</CardActionView>
          </Link>
          </CardviewBook>
          <CardActionBook >
          <Link key={props.id} to={`/Products/${props.id}`} style={{ textDecoration: 'none' }}>
            <CardActionBookText >Book Now</CardActionBookText>
          </Link>
          </CardActionBook>
        </CardActions>
      </CardContent>
    </CardWrapper>
  );
}

const CardviewBook = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px 10px;
  cursor: pointer;
  @media (max-width:991px){
    font-size: 14px;
    font-weight: 700;
    border-radius: 16.54px;
    
  }
`;
const CardWrapper = styled.article`
  /* max-width: 350px; */
  border-radius: 19px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(219, 219, 219, 1);
  background-color: #fff;
  /* display: flex; */
  /* flex-direction: column;
  justify-content: center; */
  font-weight: 900;
  padding-bottom: 19px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 310px;
  height: 600px;
  /* height: 700px; */
  @media (max-width: 991px) {
    width: 273px;
    margin: 0px;
    padding: 0px;
  }
  
  &:hover {
    transform : scale(1.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1.33;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  /* margin-top: 20px; */
  padding: 0 28px;
`;

const CardHeader = styled.header`
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* gap: 20px; */
  /* margin-left: 24px; */
  padding: 0 1px;
  
  color: #13151e;
  text-align: center;
  
`;

const CardTitle = styled.h2`
  flex-grow: 1;
  flex-basis: auto;
  cursor: pointer;
  font-size: 22px;
  font-weight: 900;
  @media (max-width:991px){
    font-size: 19px;

  }
  

`;

const CardIcon = styled.img`
  width: 20px;
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  margin: auto 0;
  cursor: pointer;
`;

const CardDescription = styled.p`
  margin-top: 7px;
  font-size:13px;
  font-weight:500;
  color: rgba(19, 21, 30, 0.6);
  @media (max-width:991px){
    font-size: 12px;
    
  }
`;

const CardItems = styled.p`
  margin-top: 10px;
  color: rgba(19, 21, 30, 0.6);
  font-size: 12px;
  font-weight:500;
  width: 250px;
  overflow: hidden;

  .item-label {
    font-weight: 800;
  }
  @media (max-width:991px){
    font-size: 9px;
    width: 220px;
  }
`;

const CardCost = styled.p`
  margin-top: 9px;
  color: rgba(19, 21, 30, 0.6);
  white-space: nowrap;
  font-size: 15px;
  font-weight:900;
  @media (max-width:991px){
    font-size: 13px;
    
  }
`;

const CardActions = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 17px;
  /* padding-left: 42px; */
  gap: 20px;
  font-size: 17px;
  font-weight: 700;
  white-space: nowrap;
  line-height: 30px;
`;

const CardActionView = styled.button`
  color: #13151e;
  margin: auto 0;
  background: none;
  border: none;
  font-size: 17px;
  font-weight: 700;
  padding: 4px 36px;
  cursor: pointer;
  @media (max-width:991px){
    font-size: 14px;
    font-weight: 700;
    
  }
`;

const CardActionBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 18.784px;
  border: 1.878px solid #02c0db;
  padding: 6px 20px;
  cursor: pointer;
  @media (max-width:991px){
    font-size: 14px;
    font-weight: 700;
    border-radius: 16.54px;
    
  }
`;

const CardActionBookText = styled.span`
  background: linear-gradient(90deg, #02c1db 0%, #0293d7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
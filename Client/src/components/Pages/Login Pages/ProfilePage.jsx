import styled from "styled-components";
import {store} from '../../../App.js';
import { useNavigate } from 'react-router-dom';
import React, { useContext,useEffect, useState } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import instance from "../../../Utils/Api.js";

// const profileData = {
//   name: "Sharma adduru",
//   location: "Hyderabad, Telangana",
//   email: "nabeel@gmail.com",
//   phone: "+917034985827",
//   address1: `S/O XXXXXXXXX, D.no: XX-XXX
// Kondapur, Near XXXXXXX, XXXXXXX district
// Pin code: XXXXXX`,
//   address2: `S/O XXXXXXXXX, D.no: XX-XXX
// Kondapur, Near XXXXXXX, XXXXXXX district
// Pin code: XXXXXX`,
// };


function ProfilePage({userInfo}) {

  const [token,setToken] = useContext(store);
  const [data,setData] = useState(null);
  const navigate = useNavigate();



  useEffect(()=>{
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
    if (storedToken) {
      instance.get('/Profile', {
        headers: {
          'x-token': storedToken
        }
      })
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    }
  }, [setToken]);
  if(!token){
    navigate('/Login');
  }
  const handleBack =()=>{
    navigate(-1);
  }
  const handleTokenRemove = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    // setToken(null)
  }
  
  
  // const handleSignout=()=>{
  //   localStorage.clear();
  //   window.location.reload(true);
  // }
  return (
    <Form>
      {data && 
    <ProfileWrapper>
      <ProfileHeader>
        <HeaderContent>
          <ProfileTitle>Profile</ProfileTitle>
          <ProfileActions>
            <SignOutText onClick={()=>{localStorage.removeItem('role'); localStorage.removeItem('token'); window.location.reload();}}>Sign Out</SignOutText>
            <SignOutIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/d52ec2c452869d61aeb36395db94fc8aa6720d1f0dd63c573be71d08a8ac5a43?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Sign out icon" onClick={handleBack} />
          </ProfileActions>
        </HeaderContent>
      </ProfileHeader>
      <ProfileContent>
        <ProfileInfo>
          <ProfileDetails>
            <ProfileAvatar src={data.profileImage} alt="Profile avatar" />
            <ProfileText>
              <ProfileName>{data.Name}</ProfileName>
              <ProfileLocation>{data.Address}</ProfileLocation>
            </ProfileText>
          </ProfileDetails>
          <EditProfileButton onClick={() => navigate(`/ProfileEdit`, { replace: true })}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a30bb3900b4f75da0ddc43c7964e6f2efbcd59a90aa51b6cdd3a6f84293a1b8?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Edit profile icon" />
          </EditProfileButton>
        </ProfileInfo>
        <ContactInfo>
          <ContactItem>
            <ContactLabel>Email</ContactLabel>
            <ContactValue>: {data.Email}</ContactValue>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Phone</ContactLabel>
            <ContactValue>: {data.Phone}</ContactValue>
          </ContactItem>
          <AddressItem>
            <AddressLabel>Address :</AddressLabel>
            <AddressValue>{data.Address}</AddressValue>
          </AddressItem>
          {/* <AddressItem>
            <AddressLabel>Address 2 :</AddressLabel>
            <AddressValue>{profileData.address2}</AddressValue>
          </AddressItem> */}
        </ContactInfo>
      </ProfileContent>
    </ProfileWrapper>
    }
    </Form>
  );
}

const Form = styled.div`
  display: flex;
  justify-content: center;
`
const ProfileWrapper = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(228, 231, 233, 1);
  background-color: var(--Gray-00, #fff);
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  margin-top: 120px;
  width: 1139px;
  height: 503px;
  @media (max-width: 991px) {
    width: 350px;
    height: 650px;
    margin-bottom: 20px;
  }
`;

const ProfileHeader = styled.header`
  border-radius: 20px 20px 0 0;
  border: 1px solid rgba(228, 231, 233, 1);
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 14px 21px;
  
  @media (max-width: 991px) {
    max-width: 100%;
    /* padding: 0 20px; */
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1094px;

  
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const ProfileTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: var(--Gray-900, #191c1f);
  text-transform: uppercase;
  margin: 0;
`;

const ProfileActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 400;
`;

const SignOutText = styled.button`
  font-size: 14px;
  font-weight: 500;
  background-color: white;
  padding: 0px;
`;

const SignOutIcon = styled.img`
  width: 24px;
  aspect-ratio: 1;
  object-fit: contain;
  cursor: pointer;
`;

const ProfileContent = styled.main`
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 1139px;  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ProfileInfo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  margin-top: 20px;
  
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
    align-items: flex-end;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProfileAvatar = styled.img`
  width: 48px;
  height: 48px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  @media (max-width: 991px) {
    width: 58px;
  height: 58px;
  }
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--Gray-900, #191c1f);
  margin: 0;
  
`;

const ProfileLocation = styled.p`
  font-size  :14px ;
  font-weight: 400;
  color: var(--Gray-600, #5f6c72);
  margin: 4px 0 0;
`;

const EditProfileButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 20px;
  cursor: pointer;
  @media (max-width: 991px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    &img{
      width: 30px;
      height: 30px;
    }
  }
`;

const ContactInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  width: 100%;
  max-width: 492px;
  padding: 10px 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  line-height: 143%;
  
  &:not(:first-child) {
    margin-top: 29px;
  }
  
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    gap: 0px;
  }
`;

const ContactLabel = styled.span`
  width: 140px;
  font-size: 14px;
  font-weight: 400;
  color: var(--Gray-900, #191c1f);
`;

const ContactValue = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: var(--Gray-600, #5f6c72);
`;

const AddressItem = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 29px;
  
  @media (max-width: 991px) {
    flex-wrap: wrap;
    gap: 0;
  }
`;

const AddressLabel = styled.span`
  width: 140px;
  font-size: 14px;
  font-weight: 400;
  color: var(--Gray-900, #191c1f);
  align-self: flex-start;
  padding: 8px 0;
`;

const AddressValue = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #63747c;
  background-color: #f3f2f2;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  @media (max-width: 991px) {
    width: 300px;
  }
`;

export default ProfilePage;
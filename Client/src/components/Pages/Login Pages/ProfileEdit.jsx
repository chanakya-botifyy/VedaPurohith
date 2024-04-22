import React from 'react';
import styled from 'styled-components';
import { useState,useContext,useEffect,useRef } from 'react';
import eye from '../../Assets/eye.png';
import image from '../../Assets/Puja.png';
import trush from '../../Assets/trash.png';
import { store } from '../../../App';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import instance from '../../../Utils/Api';



export default function ProfileEdit() {
  const [showPassword, setShowPassword] = useState(false);
  const [token,setToken] = useContext(store);
  const [data,setData] = useState(null);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [photo,setPhoto] = useState();
  
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('ProfilePic', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        
      };
      reader.readAsDataURL(file);
      

      try {
        const response = await instance.post('/uploadProfile', formData);
        
        const imageUrl = response.data.image_url;
        setData({ ...data, profileImage: imageUrl });
      } catch (error) {
        console.error('Error uploading profile picture:', error);
      }
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  useEffect(()=>{
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
    if(storedToken){
      instance.get('/Profile',{
        headers:{
          'x-token': storedToken
        }
      })
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    }
  },[setToken]);

  // Function to handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle form submission (updating data)
  const handleSubmit = () => {
    instance.put('/updateProfile', data, {
      headers: {
        'x-token': token
      }
    })
    .then(res => {
      // Handle success
      // alert('Data updated successfully');
      alert(res.data.message);
      navigate('/Profile');
      window.location.reload();
      console.log('Data updated successfully:', res.data);
    })
    .catch(err => {
      // Handle error
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with error status:', err.response.status);
        if (err.response.data && err.response.data.message) {
          // Display error message from the server
          alert('Error: ' + err.response.data.message);
        } else {
          // Display a generic error message
          alert('An error occurred while updating data');
        }
      } else if (err.request) {
        // The request was made but no response was received
        console.error('No response received from the server');
        alert('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', err.message);
        alert('Error setting up the request: ' + err.message);
      }
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleBack =()=>{
    navigate(-1);
  }
  const handleDefaultProfileImage = () => {
    const defaultProfileImageUrl = "https://king-prawn-app-r46w3.ondigitalocean.app/ProfilePic/default profile.png";
    setData({ ...data, profileImage: defaultProfileImageUrl });
  };
  return (
    <Form>
      {data &&
      <ProfileWrapper>
        <ProfileHeader>
          <HeaderContent>
            <ProfileTitle>Profile</ProfileTitle>
            <ProfileActions>
              
              <SignOutIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/d52ec2c452869d61aeb36395db94fc8aa6720d1f0dd63c573be71d08a8ac5a43?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Sign out icon" onClick={handleBack} />
            </ProfileActions>
          </HeaderContent>
        </ProfileHeader>
        <ProfilePic>
          <input id='file-upload' type='file' ref={fileInputRef} name='Profile pic' style={{ display: 'none' }} onChange={handleImageChange} accept="image/*" />
          <img src={data.profileImage} alt='profile pic' for="file-upload" style={{ display: 'inline-block' }} onClick={handleImageClick} />
          <Profile>
          <p>Profile Picture</p>
          <img src={trush} alt="trash icon" onClick={handleDefaultProfileImage}/>
          </Profile>
        </ProfilePic>
        <Field>
          <LeftField>
            <EmailLabel>Name</EmailLabel>
            <EmailInput type="text" placeholder="Enter your Name" name="Name" value={data.Name || ''} onChange={handleChange} required/>
            <EmailLabel>Mobile Number</EmailLabel>
            <NumberVerify>
              <Input type="number" placeholder="Enter your Mobile Number" name='Phone' value={data.Phone || ''} onChange={handleChange} required/>
              <Verify >Verify</Verify>
            </NumberVerify>
            <OTPVerify>
              <VerifyOTP type="number" placeholder="Enter OTP" />
              <Verify1>Resend code</Verify1>
            </OTPVerify>
            <EmailLabel>Email</EmailLabel>
            <EmailInput type="email" placeholder="Enter your email" name='Email' value={data.Email || ''} onChange={handleChange} required />
              <RegistrationFormField>
                <RegistrationFormLabel>Address*</RegistrationFormLabel>
                <RegistrationFormTextarea type="text" placeholder="Enter your Address" name='Address' value={data.Address} onChange={handleChange} />
              </RegistrationFormField>
              {/* <AddressLabel>Address 2 :</AddressLabel>
              <AddressValue /> */}
          </LeftField>
          <RightField>
          <PasswordLabel>Enter Old Password</PasswordLabel>
            <PasswordInputWrapper>
              <PasswordInput type={showPassword ? 'text' : 'password'} placeholder="Enter your password"name='OldPassword'  onChange={handleChange} required />
              <PasswordVisibilityToggle src={eye} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
            </PasswordInputWrapper>
            <PasswordLabel>Password</PasswordLabel>
            <PasswordInputWrapper>
              <PasswordInput type={showPassword ? 'text' : 'password'} placeholder="Enter your password" name='Password'  onChange={handleChange}  required  />
              <PasswordVisibilityToggle src={eye} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
            </PasswordInputWrapper>
            <PasswordLabel>Re Enter Password</PasswordLabel>
            <PasswordInputWrapper>
              <PasswordInput type={showPassword ? 'text' : 'password'} placeholder="Enter your password" name='ConfirmPassword'  onChange={handleChange}  required  />
              <PasswordVisibilityToggle src={eye} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
            </PasswordInputWrapper>
          </RightField>
        </Field>
        <Buttons>
        <CancelButton onClick={handleBack}>Cancel</CancelButton>
        <SignInButton type='submit' onClick={handleSubmit}>Update</SignInButton>
        </Buttons>
      </ProfileWrapper>
      }
    </Form>
  )
}

const RegistrationFormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  width: 310px;
`;

const RegistrationFormLabel = styled.label`
  font-weight: 400;
  font-style: normal;
  text-align: left;
  font-size: 11px;
  @media (max-width: 991px) {
    font-size: 11px;
    font-weight: 400;
  }
`;

const RegistrationFormTextarea = styled.textarea`
  background-color: #fff;
  border: 1px solid rgba(237, 237, 237, 1);
  border-radius: 6.211px;
  color: #6b6b6b;
  margin-top: 7px;
  padding: 10px 12px;
  height: 50px;
  resize: none;
  width: 305px;
`;

const CancelButton = styled.button`
  width: 145px;
  background-color: #FFF;
  height: 38px;
  font-size: 11px;
  font-weight: 400;
`;

const Buttons = styled.div`
display: flex;
justify-content: center;
margin-top: 31px;
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
`
const Field = styled.div`
  display: flex;
  flex-direction: row;
  gap: 44px;
  justify-content: center;
  @media (max-width:991px) {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
`;
const LeftField = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightField = styled.div``;

const ProfilePic = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 25px;
  & img{
    width : 147px ;
    height: 147px ;
    border-radius: 100px;
    cursor: pointer;
  }
`;
const Profile = styled.div`
display: flex;
align-items: center;
gap: 14px;
  & img{
    width: 23px;
    height: 25.2px;
    border-radius: 0px;
  }
`;

const ProfileWrapper = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(228, 231, 233, 1);
  background-color: var(--Gray-00, #fff);
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  margin-top: 120px;
  width: 1139px;
  height: 898px;
  @media (max-width: 991px) {
    width: 400px;
    height: 1100px;
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
`;



const AddressLabel = styled.span`
  width: 140px;
  font-size: 14px;
  font-weight: 400;
  color: var(--Gray-900, #191c1f);
  align-self: flex-start;
  padding: 8px 0;
`;

const AddressValue = styled.textarea`
  font-size: 14px;
  font-weight: 400;
  color: #63747c;
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  width: 310px;
  @media (max-width: 991px) {
    width: 300px;
  }
`;


const PasswordVisibilityToggle = styled.img`
  aspect-ratio: 1.06;
  object-fit: auto;
  object-position: center;
  width: 16px;
  align-self: start;
  cursor: pointer;
`;
const OTPVerify = styled.div`
display: flex;
justify-content: space-between;
width: 310px;
`;
const Verify1 = styled.a`
  display: flex;
  align-items: center;
  font-size: 11px;
  cursor: pointer;
`
const Input = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  flex-grow: 1;
    flex-basis: auto;
    border:none;
    outline:none;
    
`;



const LoginTab = styled.div`
  text-align: center;
  align-items: center;
  border-bottom: 2.3293px solid #000000;
  white-space: nowrap;
  flex-grow: 1;
  padding: 13px;
  font-weight:500;

  @media (max-width: 991px) {
    white-space: initial;
    font-size: 14px;
  font-weight: 500;
  padding: 12px 120px;
  border-bottom: none;
  }
`;



const EmailLabel = styled.label`
  color: #121212;
  text-align: left;
  font-size: 11px;
  font-weight: 400;
  line-height: 143%;
  margin-top: 15px;
  @media (max-width: 991px) {
    margin-top: 13px;
  }
`;

const EmailInput = styled.input`
  justify-content: center;
  border-radius: 6.211px;
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #fff;
  margin-top: 6px;
  color: #6b6b6b;
  font-weight: 600;
  white-space: nowrap;
  line-height: 143%;
  padding: 11px 12px;
  font-size: 11px;
  font-weight: 400;
  width: 310px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const PasswordLabel = styled.label`
  color: #121212;
  text-align: left;
  font-size: 11px;
  font-weight: 400;
  line-height: 143%;
  margin-top: 18px;
`;

const PasswordInputWrapper = styled.div`
  justify-content: center;
  border-radius: 6.211px;
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #fff;
  display: flex;
  margin-top: 7px;
  gap: 8px;
  color: #6b6b6b;
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
  line-height: 143%;
  padding: 11px 12px;
  width: 310px;


  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const PasswordInput = styled.input`
    flex-grow: 1;
    flex-basis: auto;
    border:none;
    outline:none;
    font-size: 11px;
  font-weight: 400;
  
  

  @media (max-width: 991px) {
    white-space: initial;
  }
`;


const SignInButton = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 6.211px;
  background: linear-gradient(180deg, #03c1dc 0%, #039ad8 100%);
  
  color: #fff;
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
  letter-spacing: 1.22px;
  line-height: 19px;
  padding: 9px 60px;
  border:none;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
    
  }
`;




const VerifyOTP = styled.input`
justify-content: center;
  border-radius: 6.211px;
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #fff;
  margin-top: 6px;
  color: #6b6b6b;
  font-weight: 600;
  width: 50%;
  white-space: nowrap;
  line-height: 143%;
  padding: 11px 12px;
  
`;



const NumberVerify = styled.div`
  align-items: center;
  border-radius: 6.211px;
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #fff;
  display: flex;
  margin-top: 7px;
  /* gap: 6px; */
  color: #6b6b6b;
  font-weight: 600;
  white-space: nowrap;
  line-height: 143%;
  padding: 11px 12px;
  width: 310px;
`
const Verify = styled.a`
  object-fit: auto;
  object-position: center;
  /* width: 16px; */
  /* align-self: start; */
  cursor: pointer;
  font-size: 11px;
`
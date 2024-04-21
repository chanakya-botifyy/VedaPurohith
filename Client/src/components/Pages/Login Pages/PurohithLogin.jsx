import React, { useState } from 'react';
import styled from 'styled-components';
import puorithlogin from '../../Assets/puorithlogin.png';
import {Link} from  "react-router-dom";
import instance from '../../../Utils/Api';
import { useNavigate } from 'react-router-dom';

const PurohithLogin = () => {
  const navigate = useNavigate();
  const [data,setData] = useState({
    Email:'',
    Password:''
  });
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const submitHandler=async(e)=>{
    e.preventDefault();
    try{
      const response = await instance.post('/PurohithLogin',data);
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('userId',response.data.userId);
      alert(response.data.message)
      navigate('/Purohith/Orders');
      window.location.reload();
    }catch(error){
      // Check if error response contains data (error message from server)
      if (error.response && error.response.data) {
        alert(error.response.data); // Display error message
      } else {
        alert('An error occurred'); // Display generic error message
      }
    }; 
  }

  return (
    <UserLogin>
    <LoginContainer>
      <LoginHeader>
        <PurohithLoginTab >Purohith Login</PurohithLoginTab>
      </LoginHeader>
      <LoginContent>
        <LoginContentWrapper>
          <WelcomeSection>
            <WelcomeMessage>
              <WelcomeTitle>Welcome Back</WelcomeTitle>
              <WelcomeDescription>
                Enter your email and password to access your account
              </WelcomeDescription>
              <WelcomeImage src={puorithlogin} alt="Welcome" />
            </WelcomeMessage>
          </WelcomeSection>
        <LoginFormSection>
            <LoginForm onSubmit={submitHandler} >
              <EmailLabel>Email</EmailLabel>
              <EmailInput placeholder="Enter your email" name="Email" onChange={changeHandler}  required />
              <PasswordLabel>Password</PasswordLabel>
              <PasswordInputWrapper>
                <PasswordInput placeholder="Enter your password" name="Password" onChange={changeHandler} required />
                <PasswordVisibilityToggle src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ca883c0965f77439c9a2380363b5f8d63563883baa64d8373f37f976ef06238?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Toggle Password Visibility" />
              </PasswordInputWrapper>
              <ForgotPassword>
              <RememberMeWrapper>
                <RememberMeCheckbox />
                <RememberMeLabel>Remember me</RememberMeLabel>
              </RememberMeWrapper>
              <ForgotPasswordLink>
                <ForgotPasswordText>Forgot password?</ForgotPasswordText>
                <ChangePasswordText>Change now</ChangePasswordText>
              </ForgotPasswordLink>
              </ForgotPassword>
              <SignInButton>Sign In</SignInButton>
              
              <OrDivider>
                <DividerLine />
                <OrText>Or</OrText>
                <DividerLine />
              </OrDivider>
              <Link to={'/Purohith/Register'} style={{textDecoration:'none'}}>
              <RegisterButton>Register With Us</RegisterButton>
              </Link>
            </LoginForm>
          </LoginFormSection>
        </LoginContentWrapper>
      </LoginContent>
    </LoginContainer>
    </UserLogin>

  )
}

const UserLogin = styled.div`

display: flex;
align-items:center;
justify-content: center;
background-color: #F3FDFF;
height: 1024px;
@media (max-width:991px){
    align-items: flex-start;
    display: flex;
    align-content: center;
    height: 0px;
  }

`

const LoginContainer = styled.div`
  border-radius: 23.293px;
  border: 1px solid rgba(191, 191, 191, 1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 716px;
  height: 563px;
  margin-top: 76px;
  @media (max-width:991px){
    height: 0px;
    display: flex;

  }
`;

const LoginHeader = styled.header`

  display: flex;
  width: 100%;
  
  gap: 20px;
  font-size: 14px;
  color: #000;
  font-weight: 500;
  line-height: 148%;

  @media (max-width: 991px) {
    
  }
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
    padding: 0 20px;
  }
`;

const UserLoginTab = styled(LoginTab)``;


const LoginContent = styled.main`
  justify-content: center;
  border-radius: 15.529px;
  padding: 45px 15px;

  @media (max-width: 991px) {
    padding: 0px;
  }
`;

const LoginContentWrapper = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
    margin: 16px;
    display: flex;
  }
`;

const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-left: 0px;

  @media (max-width: 991px) {
    
    display: flex;

  }
`;

const WelcomeMessage = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  width: 310px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const WelcomeTitle = styled.h2`
  color: #121212;
  /* letter-spacing: 1.24px; */
  font-size: 37px;
  font-weight: 400;
  margin: 0px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const WelcomeDescription = styled.p`
  color: #3d3d3d;
  /* letter-spacing: -0.22px; */
  margin-top: 12px;
  font-size: 11px;
  font-weight: 400;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const WelcomeImage = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 297px;
  height:237px;
  mix-blend-mode: luminosity;
  align-self: center;
  margin-top: 37px;
  @media (max-width:991px){
    width: 148px;
    height: 118px;
  }
`;

const LoginFormSection = styled.section`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 336px;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  letter-spacing: -0.43px;

  @media (max-width: 991px) {
    margin-top: 9px;
  }
`;

const EmailLabel = styled.label`
  color: #121212;
  text-align: left;
  font-size: 11px;
  font-weight: 400;
  line-height: 143%;
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

const PasswordVisibilityToggle = styled.img`
  aspect-ratio: 1.06;
  object-fit: auto;
  object-position: center;
  width: 16px;
  align-self: start;
  cursor: pointer;
`;
const ForgotPassword = styled.div`
display:flex;
flex-direction: row;
margin-top:10px;
font-size: 11px;
  font-weight: 400;

`
const RememberMeWrapper = styled.div`
  display: flex;
  gap: 5px;
  color: #3d3d3d;
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
  line-height: 143%;
  margin-right:60px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const RememberMeCheckbox = styled.input.attrs({ type: "checkbox" })`
  border-radius: 3.494px;
  border: 1px solid rgba(204, 204, 204, 1);
  width: 13px;
  height: 12px;
  margin: auto 0;
`;

const RememberMeLabel = styled.label`
  flex-grow: 1;
  font-size: 11px;
  font-weight: 400;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ForgotPasswordLink = styled.div`
  color: #000;
  font-weight: 500;
  line-height: 16px;
  flex-grow: 1;
  flex-basis: auto;
`;

const ForgotPasswordText = styled.span`
  font-weight: 500;
  color: rgba(61, 61, 61, 1);
  margin-right: 5px;
  font-size: 11px;
  font-weight: 400;
`;

const ChangePasswordText = styled.span`
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
`;

const SignInButton = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 6.211px;
  background: linear-gradient(180deg, #03c1dc 0%, #039ad8 100%);
  margin-top: 31px;
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
    padding: 9px 138px;
  }
`;



const OrDivider = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 31px;
  gap: 12px;
  color: #6b6b6b;
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
  line-height: 143%;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const DividerLine = styled.div`
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #ededed;
  align-self: stretch;
  width: 136px;
  height: 1px;
  margin: auto 0;
`;

const OrText = styled.span`
  align-self: stretch;
  font-size: 11px;
  font-weight: 400;
`;


const RegisterButton = styled.button`
  
  background: linear-gradient(180deg, #03c1dc 0%, #039ad8 100%);
  margin-top: 31px;
  color: #fff;
  letter-spacing: -0.22px;
  cursor:pointer;
  justify-content: center;
  align-items: center;
  border-radius: 6.211px;
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #fff;
  display: flex;
  width: 100%;
  font-weight: 400;
  white-space: nowrap;
  line-height: 143%;
  padding: 11px 60px;
  @media (max-width:991px){
    background: none;
    color:black;
  }

`;
const PurohithLoginTab = styled.div`
text-align: center;
align-items: center;
white-space: nowrap;
border-bottom: 2.3293px solid #000000;
flex-grow: 1;
padding: 12px 60px;
font-weight:600;
@media (max-width:991px){
  font-size: 14px;
  font-weight: 500;
  padding: 12px 120px;
  border-bottom: none;
}
`;





export default PurohithLogin;

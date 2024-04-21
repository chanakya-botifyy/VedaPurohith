import styled from 'styled-components';
import React, { useState } from 'react';
import axios from "axios";
import Logo from '../../Assets/userloginlogo.png';
import eye from '../../Assets/eye.png';
import { useNavigate } from 'react-router-dom';
// import firebase from './config';
const Login = () => {
  const [data, setData] = useState({
    Name: '',
    Phone: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  });

  const handleSubmit = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:4000/register', data)
      .then(response => {
        alert(JSON.stringify(response.data.message));
        document.getElementById('registrationForm').reset();
        navigate('/Login');
      })
      .catch(err => {
        // Check if error response contains data (error message from server)
        if (err.response && err.response.data) {
          alert(JSON.stringify(err.response.data.message)); // Display error message
        } else {
          alert('An error occurred'); // Display generic error message
        }
      });
  }

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <UserLogin>
      <LoginContainer>
        <LoginHeader>
          <UserLoginTab>User Registration</UserLoginTab>
        </LoginHeader>
        <LoginContent>
          <LoginContentWrapper>
            <WelcomeSection>
              <WelcomeMessage>
                <WelcomeTitle>Register With us</WelcomeTitle>
                <WelcomeDescription>
                  Enter your details to get registered
                </WelcomeDescription>
                <WelcomeImage src={Logo} alt="Welcome" />
              </WelcomeMessage>
            </WelcomeSection>
            <LoginFormSection>
              <LoginForm id="registrationForm" onSubmit={submitHandler}>
                <EmailLabel>Name</EmailLabel>
                <EmailInput type="text" placeholder="Enter your Name" name='Name' onChange={handleSubmit} autoComplete='off' required />
                <EmailLabel>Mobile Number</EmailLabel>
                <NumberVerify>
                  <Input type="number" placeholder="Enter your Mobile Number" name='Phone' onChange={handleSubmit} autoComplete='off' required />
                  <Verify >Verify</Verify>
                </NumberVerify>
                <OTPVerify>
                  <VerifyOTP type="number" placeholder="Enter OTP" />
                  <Verify1>Resend code</Verify1>
                </OTPVerify>
                <EmailLabel>Email</EmailLabel>
                <EmailInput type="email" placeholder="Enter your email" name='Email' onChange={handleSubmit} autoComplete='off' required />
                <PasswordLabel>Password</PasswordLabel>
                <PasswordInputWrapper>
                  <PasswordInput type={showPassword ? 'text' : 'password'} placeholder="Enter your password" name='Password' onChange={handleSubmit} autoComplete='off' required />
                  <PasswordVisibilityToggle src={eye} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
                </PasswordInputWrapper>
                <PasswordLabel>Re Enter Password</PasswordLabel>
                <PasswordInputWrapper>
                  <PasswordInput type={showPassword ? 'text' : 'password'} placeholder="Enter your password" name='ConfirmPassword' onChange={handleSubmit} autoComplete='off' required />
                  <PasswordVisibilityToggle src={eye} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
                </PasswordInputWrapper>
                <SignInButton type='submit'>Sign Up</SignInButton>
                <SignUpLink>
                  <NoAccountText>Already have an account?</NoAccountText>
                  <SignUpText onClick={() => navigate(`/Login`, { replace: true })}>Login</SignUpText>
                </SignUpLink>
              </LoginForm>
            </LoginFormSection>
          </LoginContentWrapper>
        </LoginContent>
      </LoginContainer>
    </UserLogin>
  );
}

const OTPVerify = styled.div`
display: flex;
justify-content: space-between;
`;
const Verify1 = styled.a`
  display: flex;
  align-items: center;
  font-size: 11px;
  cursor: pointer;
`
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
  height: 665px;
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
    font-size: 14px;
  font-weight: 500;
  padding: 12px 120px;
  border-bottom: none;
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
    width: 149px;
    height: 149px;
    color: black;
    mix-blend-mode: luminosity;
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
const SocialSignInButton = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 6.211px;
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #fff;
  display: flex;
  width: 100%;
  color: #3d3d3d;
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
  line-height: 143%;
  padding: 11px 60px;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const GoogleSignInButton = styled(SocialSignInButton)`
  margin-top: 31px;
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 11px 125px;
  }
`;

const GoogleIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
`;

const GoogleButtonText = styled.span`
  margin-left: 6px;
  font-size: 11px;
  font-weight: 400;
`;

const FacebookSignInButton = styled(SocialSignInButton)`
  margin-top: 6px;
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 11px 125px;
  }
`;

const FacebookIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
`;

const FacebookButtonText = styled.span`
  margin-left: 6px;
  font-size: 11px;
  font-weight: 400;
  
`;
const SignUpLink = styled.div`
  color: #000;
  text-align: center;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 19px;
  white-space: nowrap;
  

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const NoAccountText = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: rgba(61, 61, 61, 1);
  margin-right: 10px;
`;

const SignUpText = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
`;
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
`
const Verify = styled.a`
  object-fit: auto;
  object-position: center;
  /* width: 16px; */
  /* align-self: start; */
  cursor: pointer;
  font-size: 11px;
`




export default Login;

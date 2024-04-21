import styled from 'styled-components';
import React, {  useState, useContext } from 'react';
import axios from "axios";
import Logo from '../../Assets/userloginlogo.png';
import {useNavigate} from 'react-router-dom';
// import { NavbarImg } from '../../Navbar/NavbarImg.jsx';
// import ProfilePage from './ProfilePage.jsx';
import {store, refreshContext} from '../../../App.js';
import Cookies from 'js-cookie';
import instance from '../../../Utils/Api.js';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [value,setValue] = useState('');
  // const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();
  const [token,setToken] = useContext(store);
  const [exptime,setExptime] = useState();
  const {setTriggerRefresh} = useContext(refreshContext);

  const [data,setData] = useState({
    Email:'',
    Password:''
  });

  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = async e =>{
    e.preventDefault();
    const expirationTime = new Date(new Date().getTime() + 10 * 60 * 1000);
    try{
      const response = await instance.post('https://king-prawn-app-r46w3.ondigitalocean.app/login',data);
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('userId',response.data.userId);
      // localStorage.setItem('tokenExpiration', expirationTime);
      // setExptime(expirationTime)
      setToken(response.data.token);
      console.log(response.data);
      setTriggerRefresh(prev => prev + 1);
      navigate('/');
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
  if (new Date(exptime) < new Date()) {
    // Token is expired, remove it from localStorage
    localStorage.removeItem('token');
    // localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('role');
    return null;
  }

  // const handleClick =() =>{
  //   signInWithPopup(auth,provider).then((data)=>{
  //     setValue(data.user.email)
      
      
  //   })
  // };

  

  

  if(token){
    //  navigate('/');
    //  const expirationTime = new Date(new Date().getTime() + 10 * 60 * 1000);
    //  Cookies.set('token', token, { expires: expirationTime });
    //  window.location.reload();
     setTimeout(() => {
      // If the token is expired, navigate to the home page
      // navigate('/');
      localStorage.removeItem('token');
      localStorage.removeItem('role');

      window.location.reload();
    }, 10 * 60 * 1000);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <UserLogin>
      <LoginContainer>
        <LoginHeader>
          <UserLoginTab>User Login</UserLoginTab>
        </LoginHeader>
        <LoginContent>
          <LoginContentWrapper>
            <WelcomeSection>
              <WelcomeMessage>
                <WelcomeTitle>Welcome Back</WelcomeTitle>
                <WelcomeDescription>
                  Enter your email and password to access your account
                </WelcomeDescription>
                <WelcomeImage src={Logo} alt="Welcome" />
              </WelcomeMessage>
            </WelcomeSection>
            <LoginFormSection>
              <LoginForm onSubmit={submitHandler} autoComplete='off'>
                <EmailLabel>Email</EmailLabel>
                <EmailInput type="email" name="Email" placeholder="Enter your email"  onChange={changeHandler}  required />
                <PasswordLabel>Password</PasswordLabel>
                <PasswordInputWrapper>
                  <PasswordInput type={showPassword ? 'text' : 'password'} name="Password" placeholder="Enter your password"  onChange={changeHandler} required />
                  <PasswordVisibilityToggle src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ca883c0965f77439c9a2380363b5f8d63563883baa64d8373f37f976ef06238?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
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
                <SignInButton type='submit'>Sign In</SignInButton>
                <SignUpLink>
                  <NoAccountText>Don't have an account?</NoAccountText>
                  <SignUpText onClick={()=>navigate(`/Signup`, {replace:true})}>Sign Up</SignUpText>
                </SignUpLink>
                </LoginForm>
            </LoginFormSection>
          </LoginContentWrapper>
        </LoginContent>
      </LoginContainer>
    </UserLogin> </>
  );
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
    width: 148px;
    height: 118px;
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



export default Login;

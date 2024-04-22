import React from "react";
import styled from "styled-components";
import logo from '../Assets/newlogo.svg';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from "react";
import { store } from "../../App";
import profileLogo from '../Assets/Puja.png';
import axios from "axios";
import Cookies from 'js-cookie';
import instance from "../../Utils/Api";
import whatsapp from "../../components/Assets/whatsapp.png";

const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 20px; */
  /* padding-top: 5px; */
  background-color: #fff;
  /* font-size: 18px; */
  /* font-weight: 500; */
  /* line-height: 148%; */
  gap: 20px;
  position: fixed;
  top: 0;

  z-index: 1000;
  width:100%;
  height: 76px;
  
  @media (max-width: 991px) {
    padding-left: 0px;
  }
  

  
`;

const Logo = styled.img`

  aspect-ratio: 2.08;
  object-fit: contain;
  width: 117px;
  height: 56px;
  margin-left: 80px;
  @media (max-width: 991px){
  margin-left: 32px;
  }
`;



const LoginButton = styled.button`
  padding: 10px 33px;
  /* width: 159px; */
  border-radius: 25px;
  color: #fff;
  background: linear-gradient(180deg, #02c3dc 0%, #0292d7 100%);
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
`;
const PurohithButton = styled.button`
  padding: 10px 25px;
  /* width: 179px; */
  border-radius: 25px;
  color: #fff;
  background: linear-gradient(180deg, #02c3dc 0%, #0292d7 100%);
  border: none;
  cursor: pointer;
  margin-right: 20px;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
`;
const MobileMenuIcon = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
    cursor: pointer;
    font-size: 32px;
    margin-right: 32px;
  }
`;

const MobileMenu = styled.div`
  /* display: none; */
  
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  /* top: 85px; */
  background-color: #EDFEFF;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;

  & a{
    text-decoration: none;
    color: black;
    padding: 10px 10px 10px 0px;
    font-size: 14px;
    font-weight: 500;
    

  }
  & img{
    width: 56px;
  height: 56px;
  border-radius: 63px;
  }
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 73px;
    left: 0;
    /* padding: 10px; */
    width: 90%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1000;
  }
`;
const DeskMenu = styled.div`
  display: flex;
  
  a{
    text-decoration: none;
    color: black;
    padding: 10px;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    margin-right: 58px;
  }
  @media (max-width: 991px) {
    display: none;
  }

`

const DesktopMenu = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
margin-right: 80px;
font-size: 16px;
& img{
  width: 56px;
  height: 56px;
  border-radius: 63px;
  position: relative;
  /* position: fixed; */
}
@media (max-width:991px) {
  display: none;
}
`;
const Profile = styled.div`
  display: flex;
flex-direction: row;
gap: 20px;
/* margin-right: 80px; */
font-size: 16px;
& p{
  display: flex;
  align-items: center;
}
`


function Navbar() {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleclick = () => {
    setShowOptions(true);
    // handleMouseLeave();
  }

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
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
  return (
    <Navbars>
    <NavbarContainer>
      <div>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Logo src={logo} alt="Logo" loading="lazy" class="active" />
        </Link>
      </div>
      <MobileMenuIcon onClick={toggleMenu}>
        <span>&#9776;</span>
      </MobileMenuIcon>
      <MobileMenu style={{ display: menuOpen ? 'flex' : 'none' }}>
        {/* <Link to={'/Purohith'} style={{textDecoration:'none'}}>
            <LoginButton onClick={() => {window.scrollTo(0,0); setMenuOpen(false);}}>Purohith</LoginButton>
          </Link>
          <Link to={'/Login'} style={{textDecoration:'none'}}>
            <LoginButton onClick={() => {window.scrollTo(0,0); setMenuOpen(false);}}>Login</LoginButton>
          </Link> */}
        {!token ? (<>
          <a href="/">Home</a>
          <a onClick={handleLinkClick}><Link to={`/Products`} style={{ textDecoration: 'none', color: 'black' }}>Pujas</Link></a>
          <a onClick={handleLinkClick}><Link to={`/Orders`} style={{ textDecoration: 'none', color: 'black' }}>Orders</Link></a>
          <a onClick={handleLinkClick}><Link to={`/Aboutus`} style={{ textDecoration: 'none', color: 'black' }}>About Us</Link></a>
          <a onClick={handleLinkClick}><Link to={`/Login`} style={{ textDecoration: 'none', color: 'black' }}>User Login</Link></a>
          <a onClick={handleLinkClick}><Link to={`/Purohith`} style={{ textDecoration: 'none', color: 'black' }}>Purohith Login</Link></a>


        </>) : (<>
          <a href="/">Home</a>
          <a onClick={handleLinkClick}><Link to={`/Products`} style={{ textDecoration: 'none', color: 'black' }}>Pujas</Link></a>
          <a onClick={handleLinkClick}><Link to={`/Orders`} style={{ textDecoration: 'none', color: 'black' }}>Orders</Link></a>
          <a onClick={handleLinkClick}><Link to={`/Aboutus`} style={{ textDecoration: 'none', color: 'black' }}>About Us</Link></a>
          <Profile onClick={handleLinkClick}>

            <Link to={"/profile"}>
              <img src={data ? data.profileImage : ''} alt="Profile Logo" />
            </Link>
            <p>Hello, <b>{data ? data.Name : ''}</b></p>
          </Profile>
        </>)}
      </MobileMenu>
      <DeskMenu>
        <a href="/">Home</a>
        <Link to={`/Products`} style={{ textDecoration: 'none', color: 'black' }}>Pujas</Link>
        <Link to={`/Orders`} style={{ textDecoration: 'none', color: 'black' }}>Orders</Link>
        <Link to={`/Aboutus`} style={{ textDecoration: 'none', color: 'black' }}>About Us</Link>

      </DeskMenu>
      <DesktopMenu>

        {token ? (<>

          <p>Hello, <b>{data ? data.Name : ''}</b></p>

          <div className="profile-image-container" onMouseEnter={handleMouseEnter} onClick={handleclick}>
            <img src={data ? data.profileImage : ''} alt="Profile Logo" />
            {showOptions && (
              <Hover className="options">
                <Link to={"/profile"}>
                  <button onMouseLeave={handleMouseLeave}>My Profile</button></Link>
                <button onClick={() => { localStorage.removeItem('role'); localStorage.removeItem('token'); localStorage.removeItem('userId'); window.location.reload(); }}>Sign Out</button>
              </Hover>
            )}
          </div>

        </>)
          : (<>
            <Link to={'/Purohith'} style={{ textDecoration: 'none' }}>
              <PurohithButton onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}>Purohith Login</PurohithButton>
            </Link>
            <Link to={'/Login'} style={{ textDecoration: 'none' }}>
              <LoginButton onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}>User Login</LoginButton>
            </Link></>)}
      </DesktopMenu>
      <Whatsapp>
        
        <a href="https://api.whatsapp.com/send?phone=%2B917569814157&text=Hello,Welcome to Veda Purohith" target="_blank" > <img src={whatsapp} /></a>
      </Whatsapp>
    </NavbarContainer >
    </Navbars>
  );
}
const Navbars = styled.div`
  position: relative;
`;

const Whatsapp = styled.div`
  /* position: relative; */
  /* float: right; */
  /* top: 50px;
  right: 10px;
  width: 5px; */

  position: fixed;
  bottom: 60px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  z-index: 999; /* Ensure the icon is above other elements */

  & img{
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
  &:hover {
    transform : scale(1.1);
  }
  @media (max-width:991px){
    & img{
    width: 40px;
    height: 40px;
  }
  }

`;

const Hover = styled.div`
  position: absolute;
  /* bottom: -60px;  */
  right: 0;
  margin-right: 40px;
  display: flex;
  flex-direction: row;
  background-color: white;
  /* border: 1px solid #ccc; */
  padding: 5px;
  border-radius: 10px;

  & button{
    margin-bottom: 5px;
    border-radius: 25px;
    background: linear-gradient(180deg, #02c3dc 0%, #0292d7 100%);
    color: #ffffff;
    font-weight: 600;

  }
`;

export default Navbar;
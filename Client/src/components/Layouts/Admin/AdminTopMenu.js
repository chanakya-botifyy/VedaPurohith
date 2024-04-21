import { InputBase, Typography, styled } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import picture from '../../Assets/Puja.png';
import { useContext, useEffect, useState } from 'react';
import { ReactComponent as Bell } from '../../Assets/bell.svg';
import { ReactComponent as Message } from '../../Assets/message.svg';
import { ReactComponent as Setting } from '../../Assets/Setting.svg';
import {refreshContext} from '../../../App';
import {styled as styled2} from "styled-components";


const UpperBar = styled('div')({
    zIndex:'1400',
    width:'78.8%',
    height:'56px',
    position:'absolute',
    top:'40px',
    left:'300px',
    display:'flex',
    justifyContent:'space-between'
})

const SearchBarWrapper = styled('div')({
    backgroundColor:'white',
    width:'53.2%',
    height:'56px',
    borderRadius:'8px',
    border:'1px solid #EBEBEB',
    position:'relative',
})

const SearchBar = styled('div')({
    width:'92.54%',
    height:'26px',
    position:'relative',
    top:'15px',
    left:'28px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
})

const UserInfoWrapper = styled('div')({
    width:'415px',
    display:'flex',
    justifyContent:'space-between',
})

const NotificationWrapper = styled('div')({
    width:'212px',
    display:'flex',
    gap:'25px',
    position:'relative',
})

const NotificationButton = styled('button')({
    width:'48px',
    height:'48px',
    padding:'0px',
    margin:'0px',
    borderRadius:'15px',
    position:'relative',
    top:'6.18px',
    backgroundColor:'#2D9CDB26',
})
const NotificationNumber = styled('p')({
    width:'19px',
    height:'18.91px',
    borderRadius:'48px',
    position:'absolute',
    top:'-24px',
    left:'35px',
    backgroundColor:'#2D9CDB',
    border:'3px solid #F3F2F7',
    fontSize:'12px',
    color:'white',
})

const UserWrapper = styled('div')({
    display:'flex',
    height:'100%',
    justifyContent:'space-between',
    alignItems:'center'

})

const ProfilePicture = styled('img')({
    width:'56px',
    height:'56px',
    marginLeft:'20px',
    borderRadius:'63px',
    cursor:'pointer',
    border:'4px solid #FFFFFF',
})

export default function AdminTopMenu (){
    const [path, setPath] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const {setTriggerRefresh} = useContext(refreshContext)
    const navigate = useNavigate();
    useEffect(() => {
        setPath(window.location.pathname.split('/'));
    },[window.location.pathname])
    console.log(path)

    function logOut(){
        localStorage.clear('token');
        localStorage.clear('role');
        setTriggerRefresh(prev => prev + 1)
        navigate('/')
    }
    
    return (
        <>
            <UpperBar>
                <SearchBarWrapper>
                    <SearchBar>
                        <InputBase placeholder='Search Here'/>
                        <SearchIcon sx={{color:"#969BA0"}}/>
                    </SearchBar>
                </SearchBarWrapper>
                <UserInfoWrapper>
                    <NotificationWrapper>
                        <NotificationButton>
                            <NotificationNumber><span style={{position:'absolute', top:'2.5px', left:'3px'}}>21</span></NotificationNumber>
                            <Bell sx={{color:'#2D9CDB', width:'30px'}} onClick={() => {navigate('/Purohith/Notifications')}}/>
                        </NotificationButton>
                        <NotificationButton>
                            <NotificationNumber><span style={{position:'absolute', top:'2.5px', left:'3px'}}>21</span></NotificationNumber>
                            <Message sx={{color:'#2D9CDB', width:'30px'}}/>
                        </NotificationButton>
                        <NotificationButton sx={{backgroundColor:'rgba(255, 91, 91, 0.15)'}}>
                            <NotificationNumber sx={{backgroundColor:'#FF5B5B'}}><span style={{position:'absolute', top:'2.5px', left:'3px'}}>21</span></NotificationNumber>
                            <Setting sx={{color:'#2D9CDB', width:'30px'}}/>
                        </NotificationButton>
                    </NotificationWrapper>
                    <UserWrapper>
                        <Typography fontSize={'16px'} fontWeight={400}>Hello, <span style={{fontWeight:'600'}}>Kalyan</span></Typography>
                        <ProfilePicture src={picture} alt="Profile Picture" loading="lazy" onClick={logOut} onMouseEnter={() => setShowOptions(true)}/>
                        {showOptions && (
                            <Hover className="options">
                                <Link to={"/profile"}>
                                <button onMouseLeave={() => {setShowOptions(false)}}>My Profile</button></Link>
                                <button onClick={logOut}>Sign Out</button>
                            </Hover>
                        )}
                    </UserWrapper>
                </UserInfoWrapper>
            </UpperBar>
        </>
        

    )
}


const Hover = styled2.div`
  position: absolute;
  /* bottom: -60px;  */
  right: 0;
  top:55px;
  margin-right: 0px;
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
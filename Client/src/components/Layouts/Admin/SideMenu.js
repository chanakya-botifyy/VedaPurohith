import { styled } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/newlogo.svg';
import { ReactComponent as Home } from '../../Assets/Home.svg';
import { ReactComponent as Orders } from '../../Assets/Orders.svg';
import { ReactComponent as Sevas } from '../../Assets/Sevas.svg';
import { ReactComponent as Customer } from '../../Assets/Customer.svg';
import { ReactComponent as Purohith } from '../../Assets/Purohith.svg';
import { ReactComponent as Payments } from '../../Assets/Payments.svg';
import { ReactComponent as Banner } from '../../Assets/Banner.svg';

const MenuWraper = styled('div')({
    zIndex:'1400',
    backgroundColor:'white',
    width:'215px',
    position:'fixed',
    height:'100%',
    top:'12px',
    left:'14px',
    borderRadius:'10px',
    padding:'10px 15px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:'40px'
});

const Logo = styled('img')({
    width:'170.01px',
    height:'97.74px',
    objectFit:'contain',
});

const MenuListWrapper = styled('div')({
    width:'195px',
    display:'flex',
    flexDirection:'column',
    gap:'7px',
});

const MenuItem = styled('div')({
    fontSize:'18px',
    fontWeight:'500',
    padding:'15px 25px',
    display:'flex',
    alignItems:'center',
    gap:'18px',
});

const LinkStyle = {
    textDecoration:'none',
    height:'57px',
    borderRadius:'10px',
    color:'#464255',
}

const ActiveStyle = {
    ...LinkStyle,
    backgroundColor:'#D5E5F3',
    color:'#2D9CDB', 
}

const MenueList = [
    {name:'Dashboard', link:'/Admin/Dashboard', icon:Home},
    {name:'Orders List', link:'/Admin/Orders', icon:Orders},
    {name:'Seva List', link:'/Admin/Seva-List', icon:Sevas},
    {name:'Customer', link:'/Admin/Customer', icon:Customer},
    {name:'Purohiths', link:'/Admin/Purohiths', icon:Purohith},
    {name:'Payments', link:'/Admin/Payments', icon:Payments},
    {name:'Banners', link:'/Admin/Banners', icon:Banner},
];

export default function SideMenu(){
    return (
        <>
            <MenuWraper>
                <Link to={'/'} style={{textDecoration:'none'}}>
                    <Logo src={logo} alt="Logo" loading="lazy" />
                </Link>
                <MenuListWrapper>
                    {MenueList.map(item =>
                        <NavLink key={item.name} to={item.link} style={({isActive}) => isActive ? ActiveStyle : LinkStyle}> 
                            <MenuItem>
                                <item.icon widths={'17px'} height={'17px'}/>
                                {item.name}
                            </MenuItem>
                        </NavLink>
                    )}
                </MenuListWrapper>
            </MenuWraper>
        </>
        
    )
}
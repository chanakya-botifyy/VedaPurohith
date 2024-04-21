import { Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const OuterWrapper = styled('div')({
    height:'60px',
    display:'flex',
    justifyContent:'space-between',
    position:'relative'

})

const ButtonWraper = styled('div')({
    // width:'235px',
    height:'40px', 
    display:'flex', 
    gap:'16px',
    position:'absolute',
    right:'0px',
    bottom:'0px'
})

const ActionButtons = styled('button')({
    // width:'83px',
    padding:'10px, 14px',
    margin:'0px',
    backgroundColor:'#E5F3FF',
    color:'#2D9CDB',
    borderRadius:'8px',
    display:'flex',
    alignItems:'center',
    gap:'8px',
    fontWeight:'600',
    fontSize:'14px'
})

export default function PageInfoBar({title, button1, button2, button2Click, button1Click}){
    return(
        <>
            <OuterWrapper>
                <div>
                    <Typography variant='h5' fontSize={'24px'} fontWeight={600}>{title}</Typography>
                    <Typography variant='body1' fontSize={'14px'} fontWeight={500} display={'flex'} alignItems={'center'}>
                        <Link style={{textDecoration:'none', color:'#2D9CDB'}}>Dashbord</Link>
                        <ArrowRightIcon/>
                        <Link style={{textDecoration:'none', color:'#8B8E99'}}>{title} List</Link>
                    </Typography>
                </div>
                <ButtonWraper>
                    {!button1 ? <></> :
                        <ActionButtons onClick = {button1.onClick}><button1.icon/> {button1.name}</ActionButtons>}
                    { !button2 ? <></> :
                        <ActionButtons onClick = {button2Click} style={{color:'white', backgroundColor:'#2D9CDB'}} type={button2?.type ? button2.type : ''}>
                            <button2.icon /> {button2.name}
                        </ActionButtons> }
                </ButtonWraper>
            </OuterWrapper> 
        </>
    )
}
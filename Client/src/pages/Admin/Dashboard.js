import {Typography, styled} from '@mui/material'
import { ReactComponent as ArrowUp } from '../../components/Assets/ArrowUp.svg';
import { ReactComponent as TotalOrders } from '../../components/Assets/TotalOrders.svg';
import { ReactComponent as Delivered } from '../../components/Assets/Delivered.svg';
import { ReactComponent as Canceled } from '../../components/Assets/Canceled.svg';
import { ReactComponent as Revenue } from '../../components/Assets/Revenue.svg';

const DashboardKpi = ({label, count, percent, Icon}) => {
    return(
        <div style={{width:'250px', height:'130px', borderRadius:'14px', backgroundColor:'white', boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.04)', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{display:'flex', gap:'25px', justifyContent:'center', alignItems:'center'}}>
                <div style={{width:'85px', height:'85px', backgroundColor:'#00B07426', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Icon/>
                </div>
                <div style={{height:'100px'}}>
                    <Typography color={"#464255"} fontWeight={700} fontSize={'46px'} height={'55px'}>{count}</Typography>
                    <Typography color={"#464255"} fontWeight={400} fontSize={'16px'}>{label}</Typography>
                    <Typography color={"#A3A3A3"} fontWeight={400} fontSize={'12px'} sx={{display:'flex'}}>
                        <span style={{width:'16px', height:'16px', borderRadius:'25px', marginRight:'5px', backgroundColor:'rgba(46, 214, 163, 0.15)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <ArrowUp style={{width:'5px', height:'5px'}}/>
                        </span>
                        {percent}% (30 days)
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default function Dashboard(){
    return (
        <>
            <div>
                <Typography variant='h5' fontSize='32px' fontWeight={600} color='#464255'>Dashboard</Typography>
                <Typography fontSize='18px' fontWeight={500} color='#A3A3A3'>Hi, Samantha. Welcome back  to Bytez Admin!</Typography>
            </div>
            <div style={{display:'flex', justifyContent:'space-around', marginTop:'25px'}}>
                <DashboardKpi count={'75'} label={'Total Orders'} percent={'4'} Icon={TotalOrders}/>
                <DashboardKpi count={'75'} label={'Total Delivered'} percent={'4'} Icon={Delivered}/>
                <DashboardKpi count={'75'} label={'Total Canceled'} percent={'4'} Icon={Canceled}/>
                <DashboardKpi count={'75'} label={'Total Revenue'} percent={'4'} Icon={Revenue}/>
            </div>
        </>
        
    )
} 
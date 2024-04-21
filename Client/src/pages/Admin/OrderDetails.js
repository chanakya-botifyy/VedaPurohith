import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, styled } from "@mui/material";
import { ReactComponent as Calender } from '../../components/Assets/fi-sr-calendar.svg';
import PageInfoBar from "../../components/Layouts/Admin/PageInfoBar";
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import AssignPurohith from "../../components/AssignPurohith";
import { ReactComponent as CreditCard } from '../../components/Assets/CreditCard.svg';
import { ReactComponent as User } from '../../components/Assets/User.svg';
import { ReactComponent as Email } from '../../components/Assets/Email.svg';
import { ReactComponent as Phone } from '../../components/Assets/Phone.svg';
import { ReactComponent as Invoice } from '../../components/Assets/Invoice.svg';
import { ReactComponent as Location } from '../../components/Assets/fi-sr-marker.svg';
import { useParams } from "react-router-dom";
import instance from "../../Utils/Api";


const OrderInfoWrapper = styled('div')({
    height:'244px',
    backgroundColor:'white',
    borderRadius:'20px',
    display:'flex',
    justifyContent:'space-between',
})

const OrderInfoInnerWrapper = styled('div')({
    padding:'24px',
    display:'flex',
    flexDirection:'column',
    gap:'20px'
})

const OrderBillWrapper = styled('div')({
    height:'440px',
    backgroundColor:'white',
    borderRadius:'20px',
    display:'flex',
    justifyContent:'space-between',
})

const OrderDetailItem = ({Icon, label, data}) => {
    return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', height:'40px'}}>
        <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
            <div style={{width:'40px', height:'40px', backgroundColor:'#F0F1F3', color:'#667085', borderRadius:'100px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Icon style={{padding:'8px', width:'20px'}}/>
            </div>
            <Typography width={'200px'} fontSize={'14px'} color={'#1D1F2C'}>{label}</Typography>
        </div>
        <Typography fontSize={'14px'} color={'#1D1F2C'}>{data}</Typography>
    </div>) 
}

const OrderBillItem = ({ label, address}) => {
    return (
            <div style={{display:'flex', gap:'8px'}}>
                <div style={{width:'40px', height:'40px', backgroundColor:'#F0F1F3', color:'#667085', borderRadius:'100px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Location style={{padding:'8px', width:'20px'}}/>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography fontWeight={500} fontSize={'14px'} color={'#667085'}>{label}</Typography>
                    <Typography fontWeight={500} fontSize={'14px'} color={'#1D1F2C'}>{address}</Typography>
                </div>
            </div>
    )
}

export default function OrderDetails(){
    
    const [purohithOpen, setPurohitOpen] = useState(false);
    const [order,setOrder] = useState();
    const {orderId} = useParams();
    const role = localStorage.getItem('role');

    function onExport(){

    }
    function onAdd(){

    }

    async function fetchOrderDetails(){
        try {
            const response = await instance.get(`/orderDetails/${orderId}`);
            console.log(response);
            setOrder(response.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchOrderDetails();
    },[orderId])
    return (
        <>
            <PageInfoBar 
                title = {'Orders'} 
                button1={{name:'Export', icon:DownloadIcon, onclick:onExport }}
                button2={{name:'Add Orders', icon:AddIcon, onclick:onAdd }} 
            />
            { !order ? <></> : 
            <div style={{display:'flex', gap:'15px', flexDirection:'column', marginTop:'15px'}}>
                <OrderInfoWrapper>
                    <OrderInfoInnerWrapper>
                        <Typography fontSize={'18px'} color={'#1D1F2C'} fontWeight={600}>Order #{String(order.id).padStart(5,'0')}</Typography>
                        <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
                            <OrderDetailItem Icon={Calender} label={'Added'} data={new Date(order.OrderDate).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}/>
                            <OrderDetailItem Icon={CreditCard} label={'Payment Method'} data={'Visa'}/>
                            { !order.Purohith ? <></> :
                                <OrderDetailItem Icon={User} label={'Purohith'} data={order.Purohith.Name}/>
                            }
                        </div>
                    </OrderInfoInnerWrapper>
                    <OrderInfoInnerWrapper>
                        <Typography fontSize={'18px'} color={'#1D1F2C'} fontWeight={600}>Customer</Typography>
                        <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
                            <OrderDetailItem Icon={User} label={'Customer'} data={order.Customer}/>
                            <OrderDetailItem Icon={Email} label={'Email'} data={'Email@gmail.com'}/>
                            <OrderDetailItem Icon={Phone} label={'Phone'} data={'1234567890'}/>
                        </div>
                    </OrderInfoInnerWrapper>
                    <OrderInfoInnerWrapper>
                        <Typography fontSize={'18px'} color={'#1D1F2C'} fontWeight={600}>Document</Typography>
                        <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
                            <OrderDetailItem Icon={Invoice} label={'Invoice'} data={'INV-32011'}/>
                        </div>
                    </OrderInfoInnerWrapper>
                </OrderInfoWrapper>
                <OrderBillWrapper>
                    <Table sx={{color:'#1D1F2C'}}>
                        <TableHead>
                            <TableRow sx={{height:'64px'}}>
                                <TableCell sx={{fontWeight:'600', fontSize:'18px'}}>Order List</TableCell>
                            </TableRow>
                            <TableRow sx={{fontWeight:'500', fontSize:'14px', height:'56px'}}>
                                <TableCell >Seva</TableCell>
                                <TableCell >Order ID</TableCell>
                                <TableCell >Price</TableCell>
                                <TableCell >Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{fontWeight:'500', fontSize:'14px', height:'80px'}}>
                                <TableCell ><div style={{display:'flex', gap:'8px', height:'44px'}}>
                                    <div style={{width:'44px', borderRadius:'8px', backgroundColor:'#E0E2E7'}}></div>
                                    <div>
                                        <Typography fontSize={'14px'} fontWeight={500}>{order.Seva}</Typography>
                                        <Typography fontSize={'12px'} fontWeight={400} color={"#667085"}>{order.Category}</Typography>
                                    </div> 
                                </div></TableCell>
                                <TableCell style={{color:'#3858D6'}}>{String(order.id).padStart(5,'0')}</TableCell>
                                <TableCell sx={{fontWeight:'500', fontSize:'14px', color:'#667085'}}>${order.Total}</TableCell>
                                <TableCell sx={{fontWeight:'500', fontSize:'14px', color:'#667085'}}>${order.Total}</TableCell>
                            </TableRow>
                            <TableRow sx={{fontWeight:'500', fontSize:'14px', height:'80px'}}>
                                <TableCell ></TableCell>
                                <TableCell ></TableCell>
                                <TableCell >Subtotal</TableCell>
                                <TableCell >${order.Total}</TableCell>
                            </TableRow>
                            <TableRow sx={{fontWeight:'500', fontSize:'14px', height:'80px'}}>
                                <TableCell ></TableCell>
                                <TableCell ></TableCell>
                                <TableCell >GST(11%)</TableCell>
                                <TableCell >$0</TableCell>
                            </TableRow>
                            <TableRow sx={{fontWeight:'500', fontSize:'14px', height:'80px'}}>
                                <TableCell ></TableCell>
                                <TableCell ></TableCell>
                                <TableCell >Total</TableCell>
                                <TableCell >${order.Total}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <OrderInfoInnerWrapper style={{width:'373px'}}>
                        <Typography fontSize={'18px'} color={'#1D1F2C'} fontWeight={600}>Address</Typography>
                        <OrderBillItem
                            label={'Billing Address'}
                            address={order.BillingAddress} 
                        />
                        <OrderBillItem
                            label={'Shipping Address'}
                            address={order.Location} 
                        />
                    </OrderInfoInnerWrapper>
                </OrderBillWrapper>
                {!order.Purohith ? !purohithOpen ? 
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Button sx={{backgroundColor:'#2D9CDB', color:'white', borderRadius:'8px', height:'40px', marginBottom:'30px'}} variant="contained"
                            onClick={() => setPurohitOpen(true)}
                        >
                            <Typography padding={'10px, 14px'} fontSize={'13px'}>Assign Purohith</Typography>
                        </Button>
                    </div> :
                    <AssignPurohith orderId={orderId}/> : <></>
                }
                {role === 'Purohith' ? 
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Button sx={{backgroundColor:'#2D9CDB', color:'white', borderRadius:'8px', height:'40px', marginBottom:'30px'}} variant="contained"
                            onClick={() => setPurohitOpen(true)}
                        >
                            <Typography padding={'10px, 14px'} fontSize={'13px'}>Seva Completed</Typography>
                        </Button>
                    </div>: <></>
                }
            </div>}
        </>
    )
}
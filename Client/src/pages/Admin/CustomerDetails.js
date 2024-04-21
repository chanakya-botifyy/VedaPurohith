import PageInfoBar from "../../components/Layouts/Admin/PageInfoBar";
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import { Button, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography, styled } from "@mui/material";
import { ReactComponent as Rocket } from '../../components/Assets/Rocket.svg';
import { ReactComponent as Receipt } from '../../components/Assets/Receipt.svg';
import { ReactComponent as BoxIcon } from '../../components/Assets/Package.svg';
import userdefault from '../../components/Assets/userdefault.png';
import { useParams } from "react-router-dom";
import instance from "../../Utils/Api";
import { useEffect, useState } from "react";


const FunFact = ({count, label, bgcolor, bcolor, Icon}) => {
    return(
        <div style={{width:'380px'}}>
        <div style={{display:'flex', gap:'16px', borderRadius:'4px', padding:'16px', backgroundColor:bgcolor, justifyContent:'center', border:`1px solid ${bcolor}`}}>
            <div style={{width:'56px', height:'56px', backgroundColor:'white', borderRadius:'2px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Icon />
            </div>
            <div>
                <Typography fontSize={'20px'} fontWeight={600}>{count}</Typography>
                <Typography fontSize={'14px'} fontWeight={400} color={'#475156'}>{label}</Typography>
            </div>
        </div></div>
    )
}

const CustomeButton = styled(Button)({
    margin:'8px 20px', 
    fontWeight:'600px', 
    fontSize:'14px', 
    color:'#BB0000', 
    border:'1px solid #B80000', 
    borderRadius:'8px'
})

export default function CustomerDetails (){
    const [customer, setCustomer] = useState();
    const [customerOrders, setCustomerOrders] = useState();

    const {customerId} = useParams();

    function onExport(){

    }
    function onAdd(){

    }

    async function fetchCustomerDetails(){
        try {
            const response = await instance.get(`/customerDetails/${customerId}`);
            console.log(response);
            setCustomer(response.data.user);
            setCustomerOrders(response.data.userOrders)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCustomerDetails();
    },[customerId])

    async function changeStatus(){
        try{
            const response = await instance.get(`/userStatus/${customerId}`);
            console.log(response);
            fetchCustomerDetails();
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div style={{marginLeft:'15px'}}>
            <PageInfoBar 
                title = {'Customers'} 
            />
            
            <div style={{height:'88px', display:'flex', justifyContent:'space-between'}}>
                <FunFact 
                    count={!customerOrders ? '' : customerOrders.length} 
                    label={'Total Orders'} bgcolor={'#EAF6FE'} bcolor={'#ADDEFF'} Icon={Rocket}
                />
                <FunFact 
                    count={!customerOrders ? '' : customerOrders.filter(item => item.status === "Upcoming").length} 
                    label={'Pending Orders'} bgcolor={'#FFF3EB'} bcolor={'#FFC8A4'} Icon={Receipt}
                />
                <FunFact 
                    count={!customerOrders ? '' : customerOrders.filter(item => item.status === "Deliverd").length} 
                    label={'Completed Orders'} bgcolor={'#EAF7E9'} bcolor={'#97FF8F'} Icon={BoxIcon}
                />
            </div>
            {!customer ? <></> :
            <div style={{height:'296px', backgroundColor:'white', marginTop:'20px'}}>
                <div >
                    <Typography fontWeight={500} fontSize={'14px'} sx={{padding:'15px 24px'}}>ACCOUNT INFO</Typography>
                    <Divider />
                </div>
                <div style={{padding:'20px'}}>
                    <div style={{display:'flex', gap:'16px' }}>
                        <img src={userdefault} width={'48px'}/>
                        <div>
                            <Typography fontWeight={600} fontSize={'20px'} color={'#191C1F'}>{customer.Name}</Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>{customer.Address}</Typography>
                        </div>
                    </div>
                    <div style={{marginTop:'15px', display:'flex', flexDirection:'column', gap:'8px'}}>
                        <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Email: <span style={{color:'#5F6C72'}}>{customer.Email}</span></Typography>
                        <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Phone: <span style={{color:'#5F6C72'}}>{customer.Phone}</span></Typography>
                        <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Created At: <span style={{color:'#5F6C72'}}>{new Date(customer.Added).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</span></Typography>
                    </div>

                </div>
                <CustomeButton variant='outlined' color={customer.Status ? 'error' : 'success'} sx={{color:customer.Status ? '' : '#2B964E', borderColor:customer.Status ? '' : '#2B964E'}}
                    onClick={changeStatus}
                >
                    {customer.Status ? 'Block' : 'Activate'}
                </CustomeButton>
            </div>}
            <div style={{margin:'20px 0px'}}>
                <Typography fontWeight={600} fontSize={'24px'}>Latest Orders</Typography>
            </div>
            <div style={{backgroundColor:'white', borderRadius:'1px', fontWeight:'500px', fontSize:'14px', color:'#667085'}}>  
                <Table style={{}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Seva</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell sx={{width:'400px'}}>Total</TableCell>
                            <TableCell>Payment</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    {!customerOrders ? <></> : 
                    <TableBody>
                        {customerOrders.map(row => {
                            return (
                                <TableRow sx={{color:'#667085'}}>
                                    <TableCell sx={{color:'#3C3C3C', fontWeight:'600'}}>#{String(row.id).padStart(5,'0')}</TableCell>
                                    <TableCell>
                                        <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
                                            <Typography fontSize={'14px'} fontWeight={500} color={'#333843'}>{row.Seva}</Typography>
                                            <Typography fontSize={'12px'} fontWeight={400} color={'#667085'}>+3 other products</Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell sx={{color:'#667085'}}>{new Date(row.OrderDate).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</TableCell>
                                    <TableCell sx={{color:'#667085'}}>{row.Total}/-</TableCell>
                                    <TableCell sx={{color:'#667085'}}>Mastercard</TableCell>
                                    <TableCell>
                                        <div style={{backgroundColor:'#FDF1E8', borderRadius:'100px',height:'28px', width:'100px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                            <Typography padding={'10px 14px'} fontSize={'13px'} color={'#E46A11'}>Processing</Typography>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )})}
                    </TableBody>}
                </Table>
            </div>
        </div>
    )
}
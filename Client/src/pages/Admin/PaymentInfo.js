import PageInfoBar from '../../components/Layouts/Admin/PageInfoBar';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import { Button, Divider, TextField, Typography, styled } from '@mui/material';

const CustomeTextField = styled(TextField)(({ theme }) => ({
    marginTop:'5px',
    '& .MuiInputBase-root':{
        height:'39px',
        borderRadius: 12,
        backgroundColor: '#F9F9FC',
        border: 'none',
    },
    '& .MuiInputBase-input': {
        borderRadius: 12,
    }
}))

export default function PaymentInfo(){

    function onExport(){

    }
    function onAdd(){

    } 
    return(
        <>
            <PageInfoBar 
                title = {'Orders'} 
                button1={{name:'Export', icon:DownloadIcon, onclick:onExport }}
                button2={{name:'Add Orders', icon:AddIcon, onclick:onAdd }} 
            />
            <div style={{backgroundColor:'white', marginTop:'20px', borderRadius:'20px', paddingBottom:'15px'}}>
                <div >
                    <Typography fontWeight={500} fontSize={'14px'} sx={{padding:'15px 24px'}}>Seva payment Info</Typography>
                    <Divider />
                </div>
                <div style={{padding:'40px 60px', borderRadius:'20px', backgroundColor:'#F6F6F6', border:'2px solid #E0E0E0', margin:'20px 40px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', marginTop:'10px'}}>
                        <div style={{marginTop:'15px', display:'flex', flexDirection:'column', gap:'8px'}}>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Email: <span style={{color:'#5F6C72'}}>nabeel@gmail.com</span></Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Phone: <span style={{color:'#5F6C72'}}>1234567890</span></Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Applied date: <span style={{color:'#5F6C72'}}>07/11/2021</span></Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Location: <span style={{color:'#5F6C72'}}>Kondapur,HYD</span></Typography>
                        </div>
                        <div style={{marginTop:'15px', display:'flex', flexDirection:'column', gap:'8px'}}>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Experience: <span style={{color:'#5F6C72'}}>8yrs</span></Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Expertise: <span style={{color:'#5F6C72'}}>Homalu</span></Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Photo: <span style={{color:'#5F6C72'}}>XXXXXXXX</span></Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Pan Card  : <span style={{color:'#5F6C72'}}>XXXXXXXX</span></Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Aadhaar Card: <span style={{color:'#5F6C72'}}>XXXX XXXX XXXX</span></Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Download Above Files: <span style={{color:'#5F6C72'}}></span></Typography>
                        </div>
                        <div style={{marginTop:'15px', display:'flex', flexDirection:'column', gap:'8px'}}>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'} sx={{display:'flex', gap:'4px'}}>
                                Bank info: <span style={{color:'#5F6C72'}}>
                                <div style={{display:'flex', flexDirection:'column', borderRadius:'10px', backgroundColor:"#F3F2F2", padding:'15px', width:'300px'}}>
                                    <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>Account No: XXXXXXXXXXXX</Typography>
                                    <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>IFSC Code: XXXXXXX</Typography>
                                    <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>Bank Name: XXXXXXXXXXXXX</Typography>
                                </div>
                            </span></Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'} sx={{display:'flex', gap:'4px'}}>
                                Address: <span style={{color:'#5F6C72'}}>
                                <div style={{display:'flex', flexDirection:'column', borderRadius:'10px', backgroundColor:"#F3F2F2", padding:'15px', width:'300px'}}>
                                    <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}> S/O XXXXXXXXX, D.no: XX-XXX</Typography>
                                    <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>Kondapur, Near XXXXXXX, XXXXXXX district</Typography>
                                    <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>Pin code: XXXXXX</Typography>
                                </div>
                            </span></Typography>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <CustomeTextField 
                            placeholder='₹ Enter Amount'

                        />
                        <Button variant='outlined' color='success' sx={{margin:'8px 20px', fontWeight:'600px', fontSize:'14px', color:'#2B964E', border:'1px solid #2B964E', borderRadius:'8px', marginRight:'50px'}}>
                            Pay
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
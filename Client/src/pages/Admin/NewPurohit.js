import { Button, Divider, Typography } from "@mui/material";
import PageInfoBar from "../../components/Layouts/Admin/PageInfoBar";
import userdefault from '../../components/Assets/userdefault.png';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Utils/Api";


const PurohitApplication = ({purohit, onStatusChange}) => {
    return(
        <div style={{padding:'40px 60px', borderRadius:'20px', backgroundColor:'#F6F6F6', border:'2px solid #E0E0E0', margin:'20px 40px'}}>
            <div style={{display:'flex', gap:'16px', justifyContent:'center' }}>
                <img src={userdefault} width={'48px'} alt="profile"/>
                <div>
                    <Typography fontWeight={600} fontSize={'20px'} color={'#191C1F'}>{purohit.Name}</Typography>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>{purohit.Location}</Typography>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', marginTop:'10px'}}>
                <div style={{marginTop:'15px', display:'flex', flexDirection:'column', gap:'8px'}}>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Email: <span style={{color:'#5F6C72'}}>{purohit.Email}</span></Typography>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Phone: <span style={{color:'#5F6C72'}}>{purohit.Phone}</span></Typography>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Applied date: <span style={{color:'#5F6C72'}}>{new Date(purohit.Added).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</span></Typography>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Location: <span style={{color:'#5F6C72'}}>{purohit.Location}</span></Typography>
                </div>
                <div style={{marginTop:'15px', display:'flex', flexDirection:'column', gap:'8px'}}>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Experience: <span style={{color:'#5F6C72'}}>{purohit.Experience}</span></Typography>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Expertise: <span style={{color:'#5F6C72'}}>{purohit.Expertise}</span></Typography>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Photo: <span style={{color:'#5F6C72'}}>XXXXXXXX</span></Typography>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Pan Card  : <span style={{color:'#5F6C72'}}>XXXXXXXX</span></Typography>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Aadhaar Card: <span style={{color:'#5F6C72'}}>XXXX XXXX XXXX</span></Typography>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'}>Download Above Files: <span style={{color:'#5F6C72'}}></span></Typography>
                </div>
                <div style={{marginTop:'15px', display:'flex', flexDirection:'column', gap:'8px'}}>
                    <Typography fontWeight={400} fontSize={'14px'} color={'#191C1F'} sx={{display:'flex', gap:'4px'}}>
                        Bank info: <span style={{color:'#5F6C72'}}>
                        <div style={{display:'flex', flexDirection:'column', borderRadius:'10px', backgroundColor:"#F3F2F2", padding:'15px', width:'300px'}}>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>Account No: {purohit.BankInfo?.AccountNumber}</Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>IFSC Code: {purohit.BankInfo?.IfscCode}</Typography>
                            <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>Bank Name: {purohit.BankInfo?.BankName}</Typography>
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
            <div style={{display:'flex', justifyContent:'center'}}>
                <Button variant='outlined' color='success' sx={{margin:'8px 20px', fontWeight:'600px', fontSize:'14px', color:'#2B964E', border:'1px solid #2B964E', borderRadius:'8px', marginRight:'50px'}}
                    onClick={() => {onStatusChange(purohit._id, "Active")}}
                >
                    Accept
                </Button>
                <Button variant='outlined' color='error' sx={{margin:'8px 20px', fontWeight:'600px', fontSize:'14px', color:'#BB0000', border:'1px solid #B80000', borderRadius:'8px'}}
                    onClick={() => {onStatusChange(purohit._id, "Blocked")}}
                >
                    Reject
                </Button>
            </div>
        </div>
    )
}

export default function NewPurohit(){
    const [purohiths, setPurohiths] = useState();
    const navigate = useNavigate();

    async function fetchPurohiths(){
        try {
            const response = await instance.post('/allPurohiths',{Status:"New"});
            setPurohiths(response.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPurohiths();
    },[])

    async function changeStatus(PurohithId, Status){
        try{
            const response = await instance.post(`/purohitStatus/${PurohithId}`,{Status});
            console.log(response);
            fetchPurohiths();
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div style={{margin:'0px 20px'}}>
            <PageInfoBar 
                title = {'Purohit'} 
            />
            <div style={{backgroundColor:'white', marginTop:'20px', borderRadius:'20px', paddingBottom:'15px'}}>
                <div >
                    <Typography fontWeight={500} fontSize={'14px'} sx={{padding:'15px 24px'}}>New Purohith applications</Typography>
                    <Divider />
                </div>
                {!purohiths ? <></> : 
                    purohiths.map(row => (
                        <PurohitApplication key={row._id} purohit={row} onStatusChange = {changeStatus}/>
                    ))
                }
            </div>
        </div>
    )
}
import { Button, Divider, Typography, styled } from "@mui/material";
import PageInfoBar from "../../components/Layouts/Admin/PageInfoBar";
import userdefault from '../../components/Assets/userdefault.png';
import instance from "../../Utils/Api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CustomeButton = styled(Button)({
    margin:'8px 20px', 
    fontWeight:'600px', 
    fontSize:'14px', 
    color:'#BB0000', 
    border:'1px solid #B80000', 
    borderRadius:'8px'
})

export default function PurohitDetails (){
    const [purohit, setPurohit] = useState();

    const {PurohithId} = useParams();

    async function fetchPurohitDetails(){
        try {
            const response = await instance.get(`/PurohithDetails/${PurohithId}`);
            // console.log(response);
            setPurohit(response.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPurohitDetails();
    },[PurohithId])

    async function changeStatus(){
        try{
            const Status = purohit.Status === 'Active' ? 'Blocked' : 'Active';
            const response = await instance.post(`/purohitStatus/${PurohithId}`,{Status});
            console.log(response);
            fetchPurohitDetails();
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div style={{margin:'0px 20px'}}>
            <PageInfoBar 
                title = {'Purohit'} 
            />
            { !purohit ? <></> : 
            <div style={{height:'444px', backgroundColor:'white', marginTop:'20px'}}>
                <div >
                    <Typography fontWeight={500} fontSize={'14px'} sx={{padding:'15px 24px'}}>ACCOUNT INFO</Typography>
                    <Divider />
                </div>
                <div style={{padding:'40px 60px', borderRadius:'20px'}}>
                    <div style={{display:'flex', gap:'16px', justifyContent:'center' }}>
                        <img src={userdefault} width={'48px'}/>
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
                                    <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>Account No: {purohit.BankInfo.AccountNumber}</Typography>
                                    <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>IFSC Code: {purohit.BankInfo.IfscCode}</Typography>
                                    <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>Bank Name: {purohit.BankInfo.BankName}</Typography>
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
                        <CustomeButton variant='outlined' color={purohit.Status === 'Active' ? 'error' : 'success'} sx={{color:purohit.Status === 'Active' ? '' : '#2B964E', borderColor:purohit.Status === 'Active' ? '' : '#2B964E'}}
                            onClick={changeStatus}
                        >
                            {purohit.Status === 'Active' ? 'Block' : 'Activate'}
                        </CustomeButton>
                    </div>
                </div>
                
            </div>}
        </div>
    )
}
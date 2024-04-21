import { Divider, Grid, Typography } from '@mui/material';
import userdefault from '../../components/Assets/userdefault.png';
import { useEffect, useState } from 'react';
import instance from '../../Utils/Api';


export default function Notifications(){
    const [notification, setNotification] = useState();
    const userId = localStorage.getItem('userId');

    async function fetchOrderDetails(){
        try {
            const response = await instance.get(`/getNotifications/${userId}`);
            console.log(response);
            setNotification(response.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchOrderDetails();
    },[])

    function onExport(){

    }
    function onAdd(){

    } 
    return(
        <>
            <div style={{backgroundColor:'white', marginTop:'20px', borderRadius:'20px', paddingBottom:'15px'}}>
                <div >
                    <Typography fontWeight={500} fontSize={'20px'} sx={{padding:'15px 24px'}}>Notifications</Typography>
                    <Divider />
                </div>
                <Grid container sx={{margin:'20px 50px'}} rowGap={4}>
                    {notification && notification.map(row => (
                        <Grid item sm={8} md={6} minWidth={'400px'} sx={{display:'flex', justifyContent:'start'}}>
                            <div style={{display:'flex', gap:'16px', justifyContent:'center' }}>
                                <img src={userdefault} width={'48px'}/>
                                <div>
                                    <Typography fontWeight={600} fontSize={'20px'} color={'#191C1F'}>{row.Title}</Typography>
                                    <Typography fontWeight={400} fontSize={'14px'} color={'#5F6C72'}>{row.Message}</Typography>
                                </div>
                            </div>
                        </Grid>
                    ))}
                    
                </Grid>
            </div>
        </>
    )
}
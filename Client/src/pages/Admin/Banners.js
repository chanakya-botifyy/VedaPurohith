import {Grid, InputLabel, TextField, Typography, styled} from '@mui/material'
import PageInfoBar from '../../components/Layouts/Admin/PageInfoBar'
import UploadInput from '../../components/Layouts/UploadInput'
import { useState } from 'react';
import bannerImage from '../../components/Assets/mainlogo.png';

const CustomeTextField = styled(TextField)(({ theme }) => ({
    height:'40px',
    marginTop:'5px',
    '& .MuiInputBase-root':{
        borderRadius: 12,
        backgroundColor: '#F9F9FC',
        border: 'none',
    },
    '& .MuiInputBase-input': {
        borderRadius: 12,
    }
}))

export default function Banners(){
    const [photo, setPhoto] = useState();

    return (
        <>
            <PageInfoBar 
                title = {'Banners'} 
            />
            <div style={{height:'400px', borderRadius:'12px', backgroundColor:'white', marginTop:'25px'}}>
                <div style={{padding:'24px'}}>
                    <Typography color={"#1D1F2C"} fontWeight={'600'} fontSize={'18px'}>Current Banner</Typography>
                </div>
                <Grid container gap={5} sx={{padding:'0px 24px'}}>
                    <Grid item xs={12} sx={{display:'flex', justifyContent:'center'}}>
                        <img 
                            src={bannerImage}
                            alt='banner image'
                            width={'500px'}
                            height={'250px'}
                        />
                    </Grid>
                </Grid>
            </div>
            <div style={{height:'180px', borderRadius:'12px', backgroundColor:'white', marginTop:'25px'}}>
                <div style={{padding:'24px'}}>
                    <Typography color={"#1D1F2C"} fontWeight={'600'} fontSize={'18px'}>Upload New One</Typography>
                </div>
                <Grid container gap={5} sx={{padding:'0px 24px'}}>
                    <Grid item xs={12}>
                        <UploadInput
                            accept={"image/png, image/jpeg"}
                            onChange={(e) => {setPhoto(e.target.files[0])}}
                            required={true}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
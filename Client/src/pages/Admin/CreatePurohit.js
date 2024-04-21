import PageInfoBar from '../../components/Layouts/Admin/PageInfoBar';
import { ReactComponent as Canceled } from '../../components/Assets/fi-sr-cross.svg';
import AddIcon from '@mui/icons-material/Add';
import { Grid, TextField } from '@mui/material';
import styled from 'styled-components';

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

export default function CreatePurohith(){

    function onExport(){

    }
    function onAdd(){

    } 
    return(
        <>
            <PageInfoBar 
                title = {'Orders'} 
                button1={{name:'Cancel', icon:Canceled, onclick:onExport }}
                button2={{name:'Create Purohit', icon:AddIcon, onclick:onAdd }} 
            />
            <div style={{height:'400px', borderRadius:'12px', backgroundColor:'white', margin:'45px 350px',padding:'24px'}}>
                <Grid container gap={5} >
                    <Grid item xs={12}>
                        <CustomeTextField 
                            fullWidth 
                            id="name" 
                            label='Name *'
                            type="text"
                            // onChange={(e) => {setName(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomeTextField 
                            fullWidth 
                            id="name" 
                            label='Email *'
                            type="text"
                            // onChange={(e) => {setName(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomeTextField 
                            fullWidth 
                            id="name" 
                            label='Phone *'
                            type="text"
                            // onChange={(e) => {setName(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomeTextField 
                            fullWidth 
                            id="name" 
                            label='Password *'
                            type="text"
                            // onChange={(e) => {setName(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomeTextField 
                            fullWidth 
                            id="name" 
                            label='Confirm Password *'
                            type="text"
                            // onChange={(e) => {setName(e.target.value)}}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
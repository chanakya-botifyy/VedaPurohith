import PageInfoBar from '../../components/Layouts/Admin/PageInfoBar';
import { ReactComponent as Canceled } from '../../components/Assets/fi-sr-cross.svg';
import { ReactComponent as Pencil } from '../../components/Assets/fi-sr-pencil.svg';
import { FormControl, Grid, Input, InputLabel, MenuItem, Stack, TextField, Typography, duration, styled } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '../../Utils/Api';
import UploadInput from '../../components/Layouts/UploadInput';

const categoriesList = ['Puja', 'Vratham', 'Homam', 'Festials', 'Events', 'Vahana'];

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
export default function EditSeva(){
    const [sevaName, setSevaName] = useState();
    const [category, setCategory] = useState();
    const [description, setDescription] = useState();
    const [items, setItems] = useState("");
    const [photos, setPhotos] = useState();
    const [basePrice, setBasePrice] = useState();
    const [discountType, setDiscountType] = useState();
    const [discountValue, setDiscountValue] = useState();
    const [taxType, setTaxType] = useState();
    const [taxValue, setTaxValue] = useState();
    const [duration, setDuration] = useState();
    const {sevaId} = useParams();
    const navigate = useNavigate();

    function onExport(){

    }
    function onAdd(){

    } 

    async function fetchSevas(){
        try {
            const response = await instance.get(`/sevaById/${sevaId}`);
            setSevaName(response.data.title);
            setCategory(response.data.category);
            setDescription(response.data.description);
            setItems("");
            setPhotos("");
            setBasePrice(response.data.cost);
            setDiscountType();
            setDiscountValue();
            setTaxType();
            setTaxValue(response.data.gst);
            setDuration(response.data.Duration)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        if(sevaId){
            fetchSevas();
        }
    },[])

    async function UpdateSeva(){
        const formData = new FormData();
        formData.append('titleimage', photos);
        formData.append('title', sevaName);
        formData.append('category', category);
        formData.append('Duration', duration);
        formData.append('description', description);
        formData.append('items', items);
        formData.append('cost', basePrice);
        formData.append('gst', taxValue);
        try{
            const request = await instance.post(`/updateSeva/${sevaId}`,formData)
            console.log(request);
            navigate('/Admin/Seva-List');
        }catch(err){
            console.log(err)
        }
    }


    return(
        <form onSubmit={(e) => { e.preventDefault(); UpdateSeva()}}>
            <PageInfoBar 
                title = {'Sevas'} 
                button1={{name:'Export', icon:Canceled, onclick:onExport }}
                button2={{name:'Edit Seva', icon:Pencil, onclick:onAdd , type:'submit'}} 
            />
            <div style={{height:'680px', borderRadius:'12px', backgroundColor:'white', marginTop:'25px'}}>
                <div style={{padding:'24px'}}>
                    <Typography color={"#1D1F2C"} fontWeight={'600'} fontSize={'18px'}>General Information</Typography>
                </div>
                <Grid container gap={5} sx={{padding:'0px 24px'}}>
                    <Grid item xs={12}>
                        <InputLabel sx={{color:'#777980', fontWeight:'500', fontSize:'14px'}}>Seva Name*</InputLabel>
                        <CustomeTextField 
                            required
                            fullWidth 
                            id="name" 
                            placeholder='Type Seva name here. . .'
                            type="text"
                            value={sevaName}
                            onChange={(e) => {setSevaName(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel sx={{color:'#777980', fontWeight:'500', fontSize:'14px'}}>Seva Category*</InputLabel>
                        <CustomeTextField 
                            required
                            fullWidth 
                            id="select" 
                            placeholder='Select a category'
                            select
                            onChange={(e) => {setCategory(e.target.value)}}
                            value={category ? category: ""}
                        >
                            {categoriesList.map(item => 
                                    <MenuItem value={item} key={item}>{item}</MenuItem>
                                )}
                        </CustomeTextField>
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel sx={{color:'#777980', fontWeight:'500', fontSize:'14px'}}>Duration*</InputLabel>
                        <CustomeTextField 
                            required
                            fullWidth 
                            id="duration" 
                            placeholder='Select a duration'
                            onChange={(e) => {setDuration(e.target.value)}}
                            value={duration}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel sx={{color:'#777980', fontWeight:'500', fontSize:'14px'}}>Description*</InputLabel>
                        <CustomeTextField 
                            required
                            fullWidth 
                            id="name" 
                            placeholder='Select a category'
                            type="text"
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => {setDescription(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{marginTop:'70px'}}>
                        <InputLabel sx={{color:'#777980', fontWeight:'500', fontSize:'14px'}}>Items required</InputLabel>
                        <UploadInput
                            accept={".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"}
                            onChange={(e) => {setItems(e.target.files[0])}}
                            required={false}
                        />
                    </Grid>
                </Grid>
            </div>
            <div style={{height:'190px', borderRadius:'12px', backgroundColor:'white', marginTop:'25px'}}>
                <div style={{padding:'24px'}}>
                    <Typography color={"#1D1F2C"} fontWeight={'600'} fontSize={'18px'}>Media</Typography>
                </div>
                <Grid container gap={5} sx={{padding:'0px 24px'}}>
                    <Grid item xs={12}>
                        <InputLabel sx={{color:'#777980', fontWeight:'500', fontSize:'14px'}}>Photo</InputLabel>
                        <UploadInput
                            accept={"image/png, image/jpeg"}
                            onChange={(e) => {setPhotos(e.target.files[0])}}
                            required={false}
                        />
                    </Grid>
                </Grid>
            </div>
            <div style={{height:'400px', borderRadius:'12px', backgroundColor:'white', marginTop:'25px', marginBottom:'25px'}}>
                <div style={{padding:'24px'}}>
                    <Typography color={"#1D1F2C"} fontWeight={'600'} fontSize={'18px'}>Pricing</Typography>
                </div>
                <Grid container gap={5} columnGap={2} sx={{padding:'0px 24px'}}>
                    <Grid item xs={12}>
                        <InputLabel sx={{color:'#777980', fontWeight:'500', fontSize:'14px'}}>Base Price*</InputLabel>
                        <CustomeTextField 
                            required
                            fullWidth 
                            id="name" 
                            placeholder='Type base price here. . .'
                            type="text"
                            value={basePrice}
                            onChange={(e) => {setBasePrice(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={5.9}>
                        <InputLabel sx={{color:'#777980', fontWeight:'500', fontSize:'14px'}}>Discount Type</InputLabel>
                        <CustomeTextField 
                            fullWidth 
                            id="name" 
                            placeholder='Select a discount type'
                            type="text"
                            select
                            value={discountType ? discountType : ""}
                            onChange={(e) => {setDiscountType(e.target.value)}}
                        >
                            <MenuItem value='1'>Option 1</MenuItem>
                            <MenuItem value='2'>Option 2</MenuItem>
                        </CustomeTextField>
                    </Grid>
                    <Grid item xs={5.9}>
                        <InputLabel sx={{color:'#777980', fontWeight:'500', fontSize:'14px'}}>Discount Precentage (%)</InputLabel>
                        <CustomeTextField 
                            fullWidth 
                            id="name" 
                            placeholder='Type discount precentage. . .'
                            type="text"
                            value={discountValue}
                            onChange={(e) => {setDiscountValue(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={5.9}>
                        <InputLabel sx={{color:'#777980', fontWeight:'500', fontSize:'14px'}}>Tax Class</InputLabel>
                        <CustomeTextField 
                            fullWidth 
                            id="name" 
                            placeholder='Select a tax class'
                            type="text"
                            select
                            value={taxType ? taxType : ""}
                            onChange={(e) => {setTaxType(e.target.value)}}
                        >
                            <MenuItem value='1'>Option 1</MenuItem>
                            <MenuItem value='2'>Option 2</MenuItem>
                        </CustomeTextField>
                    </Grid>
                    <Grid item xs={5.9}>
                        <InputLabel sx={{color:'#777980', fontWeight:'500', fontSize:'14px'}}>VAT Amount (%)</InputLabel>
                        <CustomeTextField 
                            required
                            fullWidth 
                            id="name" 
                            placeholder='Type VAT amount. . .'
                            type='number'
                            value={taxValue}
                            onChange={(e) => {setTaxValue(e.target.value)}}
                        />
                    </Grid>
                </Grid>
            </div>
        </form>
    )
}
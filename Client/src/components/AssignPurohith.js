import { Button, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import instance from "../Utils/Api";
import styled from "styled-components";

// const locationList = ['Hyderabad', 'Chennai'];

const CustomeTextField = styled(TextField)(({ theme }) => ({
    border: 'none',
    width:'200px',
    '& .MuiInputBase-root':{
        height:'25px',
        fontSize:'13px',
        color:'#667085',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    }

}))

export default function AssignPurohith({orderId}){
    const [purohiths, setPurohiths] = useState();
    const [assigned, setAssigned] = useState();
    const [location, setLocation] = useState("");
    const [locationList, setLocationList] = useState([]);

    async function fetchPurohiths(){
        try {
            const response = await instance.post('/Purohiths', {Location:location});
            console.log(response);
            setPurohiths(response.data);
        }catch(err){
            console.log(err);
        }
    }

    async function fetchLocations(){
        try {
            const response = await instance.get('/PurohithLocations');
            console.log(response);
            setLocationList(response.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchLocations();
        fetchPurohiths();
    },[location])

    async function assign(id){
        try {
            const purohith = purohiths.find(item => item._id === id);
            const response = await instance.post(`/assignPurohiths/${orderId}`,{purohith:purohith});
            if(response.data.success){
                setAssigned(purohith)
            }
        }catch(err){
            console.log(err);
        }
    }

    console.log(assigned)

    return (
        <>
            <Typography fontWeight={600} fontSize={'18px'} color={'#636470'} textAlign={'center'}>Assign Purohith</Typography>
            {!purohiths ? <></>: 
            <div style={{backgroundColor:'white', borderRadius:'12px', fontWeight:'500px', fontSize:'14px', color:'#667085', marginBottom:'30px'}}>  
                <Table style={{}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone No</TableCell>
                            <TableCell sx={{display:'flex'}}>
                                Location
                                <CustomeTextField 
                                    SelectProps={{ MenuProps: { disableScrollLock: true } }}
                                    fullWidth 
                                    id="select" 
                                    select
                                    onChange={(e) => {setLocation(e.target.value)}}
                                    value={location ? location: ""}
                                >
                                    {locationList.map(item => 
                                            <MenuItem value={item} key={item}>{item}</MenuItem>
                                        )}
                                </CustomeTextField>
                            </TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {assigned ? 
                                <TableRow sx={{color:'#667085'}}>
                                    <TableCell><div style={{display:'flex', gap:'8px', height:'44px', alignItems:'center'}}>
                                            <div style={{width:'44px', height:'44px', borderRadius:'8px', backgroundColor:'#E0E2E7'}}></div>
                                            <div>
                                                <Typography fontSize={'14px'} fontWeight={500}>{assigned.Name}</Typography>
                                            </div> 
                                        </div></TableCell>
                                    <TableCell sx={{color:'#667085'}}>{assigned.Email}</TableCell>
                                    <TableCell sx={{color:'#667085'}}>{assigned.Phone}</TableCell>
                                    <TableCell sx={{color:'#667085'}}>{assigned.Location}</TableCell>
                                    <TableCell>
                                            <Typography padding={'10px 14px'} fontSize={'13px'} sx={{backgroundColor:'#E9FAF7', width:'90px', textAlign:'center', borderRadius:'8px'}}>
                                                Assigned
                                            </Typography>
                                    </TableCell>
                                </TableRow> : 
                        purohiths.map(row => {
                            return (
                                <TableRow sx={{color:'#667085'}}>
                                    <TableCell><div style={{display:'flex', gap:'8px', height:'44px', alignItems:'center'}}>
                                            <div style={{width:'44px', height:'44px', borderRadius:'8px', backgroundColor:'#E0E2E7'}}></div>
                                            <div>
                                                <Typography fontSize={'14px'} fontWeight={500}>{row.Name}</Typography>
                                            </div> 
                                        </div></TableCell>
                                    <TableCell sx={{color:'#667085'}}>{row.Email}</TableCell>
                                    <TableCell sx={{color:'#667085'}}>{row.Phone}</TableCell>
                                    <TableCell sx={{color:'#667085'}}>{row.Location}</TableCell>
                                    <TableCell>
                                        <Button sx={{backgroundColor:'#2D9CDB', color:'white', borderRadius:'8px', height:'40px'}} variant="contained"
                                           onClick={() => assign(row._id)} 
                                        >
                                            <Typography padding={'10px 14px'} fontSize={'13px'}>Assign</Typography>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )})}
                    </TableBody>
                </Table>
            </div>}
        </>
    )
}
import { Button, TextField, Typography, styled } from "@mui/material";
import { useRef, useState } from "react";

const CustomeButtom = styled('button')({
    width:'83px',
    height:'30px',
    margin:'10px 10px',
    background:'linear-gradient(#02C5DC, #0292D7)',
    borderRadius:'10px',
    padding:'5px 20px',
    color:'#FFFFFF',
    fontSize:'16px',
    fontWeight:'500',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
});

const Wrapper = styled('div')({
    height:'50px',
    marginTop:'5px',
    backgroundColor:'#F9F9FC',
    border:'1px solid rgba(0, 0, 0, 0.23)',
    borderRadius:'8px',
    display:'flex',
    alignItems:'center'
})

export default function UploadInput ({onChange, accept, required}){
    const [selected, setSelected] = useState()

    const hiddenFileInput = useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();   
      };

    const handleChange = event => {
        setSelected(event.target.files[0].name);
        onChange(event)
    };

    return (
        <Wrapper>
            <CustomeButtom 
                type='button'
                onClick={handleClick}
            >
                Browser
            </CustomeButtom>
            <Typography>{selected}</Typography>
            <input 
                accept={accept}
                onChange={handleChange}
                type='file' 
                required={required}
                ref={hiddenFileInput}
                style={{display:'none'}} 
            />
        </Wrapper>
    )
}
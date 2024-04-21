import { Button, Typography, styled } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TuneIcon from '@mui/icons-material/Tune';

const OuterWrapper = styled('div')({
    height:'40px',
    marginTop:'25px',
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
})

const FilterList = styled('div')({
    borderRadius:'8px', 
    backgroundColor:'white',
    padding:'4px',
    display:'flex',
    gap:'8px',
})

const FilterButton = styled(Button)({
    borderRadius:'8px',
    backgroundColor:'#FFFFFF',
    color:'#858D9D',
    padding:'10px, 14px',
    display:'flex',
    gap:'8px',
})

export default function FilterMenu({filterOptions, selected, setSelected}){
    
    return (
        <OuterWrapper>
            <FilterList>
                {filterOptions.map(opt => { 
                    const active = opt === selected;
                    return (
                    <div style={{backgroundColor:active ? '#F5F5F7':'', color:active ? '#2D9CDB':'', height:'32px', borderRadius:'6px', cursor:'pointer'}}>
                        <Typography px='12px' py='6px' fontSize={'14px'} onClick={() => {setSelected(opt)}}>
                            {opt}
                        </Typography>
                    </div>
                )})}
            </FilterList>
            <div style={{height:'40px', display:'flex', gap:'16px'}}>
                <FilterButton>
                    <DateRangeIcon sx={{width:'20px'}}/> <Typography fontSize='13px'>Select Date</Typography>
                </FilterButton>
                <FilterButton>
                    <TuneIcon sx={{width:'20px'}}/> <Typography fontSize='13px'>Filters</Typography>
                </FilterButton>
            </div>
        </OuterWrapper>
    )
}
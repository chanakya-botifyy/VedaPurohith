import {Checkbox, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Table, styled, Pagination, MenuItem, TextField} from '@mui/material';
import PageInfoBar from '../../components/Layouts/Admin/PageInfoBar'
import { ReactComponent as Download } from '../../components/Assets/download.svg';
import { ReactComponent as Add } from '../../components/Assets/add.svg';
import FilterMenu from '../../components/Layouts/Admin/FilterMenu';
import { useEffect, useState } from 'react';
import { ReactComponent as CheckedCheckbox } from '../../components/Assets/CheckedCheckbox.svg';
import { ReactComponent as UnCheckedCheckbox } from '../../components/Assets/UnCheckedCheckbox.svg';
import { ReactComponent as indeterminateCheckbox } from '../../components/Assets/indeterminateCheckbox.svg';
import { ReactComponent as Group } from '../../components/Assets/Group.svg';
import CustomPagination from '../../components/CustomPagination';
import { useNavigate } from 'react-router-dom';
import instance from '../../Utils/Api';

const filterOptions = ['Purohith', 'Users'];

const headCells = [
    {label:'Name', width:'330px'},
    {label:'Seva', width:'275px'},
    {label:'Amount', width:'136px'},
    {label:'Status', width:'128px'},
    {label:'Date', width:'136px'},
]

const tableData = [
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'},
    {orderId:'12345', seva:'Ganesh Puja', date:'29 Dec 2022', customer:'Josh Wisely', total:'5900', payment:'29 Dec 2022', category:'Vratham'}
]

const CustonTabelCell = styled(TableCell)({
    padding:'0px',
    color:'#667085',
})

const CustonTabelCell2 = styled(TableCell)({
    padding:'0px',
    color:'#1D1F2C',
    fontWeight:'500'
})

const CustomeStatus = styled(Typography)({
    height:'25px',
    width:'75px', 
    fontSize:'14px',
    padding:'4px 10px', 
    borderRadius:'8px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
})

const PaginationWrapper = styled('div')({
    height:'62px',
    display:'flex',
    justifyContent:'space-between',
    margin:'14px 24px 16px 24px',
    fontSize:'14px'

})

const CustomeTextField = styled(TextField)(({ theme }) => ({
    border: 'none',
    width:'150px',
    '& .MuiInputBase-root':{
        height:'25px',
        fontSize:'13px',
        color:'#667085',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    }

}))

export default function Payments(){
    const [selectedOption, setSelectedOption] = useState('Purohith');
    const [status, setStatus] = useState('');
    const [selected, setSelected] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [payments, setPayments] = useState(tableData);
    const navigate = useNavigate();
    const role = localStorage.getItem('role');
    const rowsPerPage = 8;
    const [page, setPage] = useState(1);

    function onExport(){

    }
    function onAdd(){

    }
    async function fetchPayments(){
        setIsLoading(true);
        try {
            const response = await instance.post('/allPayments',{Status:status});
            console.log(response);
            setPayments(response.data);
            setIsLoading(false);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPayments();
        setPage(1);
    },[selectedOption, status])

    const dataToShow = payments.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    function onViewpaymentsDetails(id){
        navigate(`/${role}/PaymentInfo/${id}`)
    }

    return (
        <>
            <PageInfoBar 
                title = {'Payments'} 
                button1={{name:'Export', icon:Download, onclick:onExport }}
                button2={{name:'Add Transaction', icon:Add, onclick:onAdd }} 
            />
            <FilterMenu
             filterOptions={filterOptions} 
             selected={selectedOption} 
             setSelected={setSelectedOption}
            />
            <TableContainer style={{height:'697px', backgroundColor:'white', marginTop:'25px', borderRadius:'12px', boxShadow:'0px 4px 30px #2E2D740D'}}>
                <Table stickyHeader>
                    <TableHead >
                        <TableRow style={{height:'56px', color:'#1D1F2C'}}>
                            <CustonTabelCell style={{width:'20px', paddingRight:'0px', paddingLeft:'10px'}}>
                                <Checkbox
                                    icon={<UnCheckedCheckbox/>} indeterminateIcon={indeterminateCheckbox} checkedIcon={<CheckedCheckbox/>}
                                    indeterminate={selected.length > 0 && selected.length < tableData.length}
                                    checked={tableData.length > 0 && selected.length === tableData.length}
                                    // onChange={handleSelectAllClick}
                                    inputProps={{ 'aria-label': 'select all transactions' }}
								/>
                            </CustonTabelCell>
                            <CustonTabelCell2 style={{width:'330px'}}>Name</CustonTabelCell2>
                            <CustonTabelCell2 style={{width:'225px'}}>Seva</CustonTabelCell2>
                            <CustonTabelCell2 style={{width:'136px'}}>Amount</CustonTabelCell2>
                            <CustonTabelCell2 style={{width:'250px'}}>
                                <div style={{display:'flex'}}>
                                    Status
                                    <CustomeTextField 
                                        SelectProps={{ MenuProps: { disableScrollLock: true } }}
                                        fullWidth 
                                        id="select" 
                                        select
                                        onChange={(e) => {setStatus(e.target.value)}}
                                        value={status ? status: ""}
                                    >
                                        <MenuItem value={"Completed"} >{"Completed"}</MenuItem>
                                        <MenuItem value={"Pending"} >{"Pending"}</MenuItem>
                                    </CustomeTextField>
                                </div>
                            </CustonTabelCell2>
                            <CustonTabelCell2 style={{width:'136px'}}>Date</CustonTabelCell2>
                            <CustonTabelCell2>Action</CustonTabelCell2>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataToShow.map(row => {
                            return(
                                <TableRow style={{height:'80px'}}>
                                    <CustonTabelCell style={{width:'20px', paddingRight:'0px', paddingLeft:'10px'}}>
                                        <Checkbox
                                            icon={<UnCheckedCheckbox/>} indeterminateIcon={indeterminateCheckbox} checkedIcon={<CheckedCheckbox/>}
                                            // indeterminate={selected.length > 0 && selected.length < wastageItems.length}
                                            // checked={wastageItems.length > 0 && selected.length === wastageItems.length}
                                            // onChange={handleSelectAllClick}
                                            inputProps={{ 'aria-label': 'select all transactions' }}
                                        />
                                    </CustonTabelCell>
                                    <CustonTabelCell sx={{color:'#1D1F2C'}}>{row.PurohithName}</CustonTabelCell>
                                    <CustonTabelCell >{row.Seva}</CustonTabelCell>
                                    <CustonTabelCell>{row.Amount}</CustonTabelCell>
                                    <CustonTabelCell><CustomeStatus sx={{backgroundColor: row.Status === 'Completed' ? "#E9FAF7": "#FEECEE", color: row.Status === 'Completed' ? "#667085": "#EB3D4D"}}>
                                        {row.Status}
                                    </CustomeStatus></CustonTabelCell>
                                    <CustonTabelCell>{new Date(row.Date).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</CustonTabelCell>
                                    <CustonTabelCell sx={{cursor:'pointer'}}>
                                            <Group onClick={() => {onViewpaymentsDetails(row.id)}}/>
                                    </CustonTabelCell>
                                </TableRow>
                        )})}
                    </TableBody>
                </Table>
            </TableContainer>
            <PaginationWrapper>
                <Typography color={'#667085'} fontWeight={500} fontSize={'14px'}>Showing {(page - 1) * rowsPerPage} - {page * rowsPerPage} from {payments.length}</Typography>
                <CustomPagination 
                    count={payments.length}
                    onChangePage={setPage}
                    page={page}
                    rowsPerPage={rowsPerPage}
                />
            </PaginationWrapper>
        </>
    )
}
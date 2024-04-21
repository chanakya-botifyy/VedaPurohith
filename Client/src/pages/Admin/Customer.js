import {Checkbox, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Table, styled, Pagination} from '@mui/material';
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

const filterOptions = ['All', 'Active', 'Blocked'];

const headCells = [
    {label:'Name', width:'300px'},
    {label:'Email', width:'200px'},
    {label:'Phone No', width:'136px'},
    {label:'DOB', width:'128px'},
    {label:'Status', width:'136px'},
    {label:'Added', width:'147px'},
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

const CustomeStatus = styled(Typography)({
    height:'25px',
    width:'52px', 
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

export default function Customer(){
    const [selectedOption, setSelectedOption] = useState('All');
    const [selected, setSelected] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [customers, setCustomers] = useState(tableData);
    const navigate = useNavigate();
    const rowsPerPage = 8;
    const [page, setPage] = useState(1);

    function onExport(){

    }
    function onAdd(){

    }

    async function fetchCustomers(){
        setIsLoading(true);
        try {
            const response = await instance.post('/allUsers',{status:selectedOption});
            console.log(response);
            setCustomers(response.data);
            setIsLoading(false);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCustomers();
        setPage(1);
    },[selectedOption])

    const dataToShow = customers.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    function onViewCustomersDetails(id){
        navigate(`/Admin/CustomerDetails/${id}`)
    }


    return (
        <>
            <PageInfoBar 
                title = {'Customer'} 
                button1={{name:'Export', icon:Download, onclick:onExport }}
                button2={{name:'Add New Customer', icon:Add, onclick:onAdd }} 
            />
            <FilterMenu
             filterOptions={filterOptions} 
             selected={selectedOption} 
             setSelected={setSelectedOption}
            />
            <TableContainer style={{height:'697px', backgroundColor:'white', marginTop:'25px', borderRadius:'12px', boxShadow:'0px 4px 30px #2E2D740D'}}>
                <Table stickyHeader>
                    <TableHead >
                        <TableRow style={{height:'56px'}}>
                            <CustonTabelCell style={{width:'20px', paddingRight:'0px', paddingLeft:'10px'}}>
                                <Checkbox
                                    icon={<UnCheckedCheckbox/>} indeterminateIcon={indeterminateCheckbox} checkedIcon={<CheckedCheckbox/>}
                                    indeterminate={selected.length > 0 && selected.length < tableData.length}
                                    checked={tableData.length > 0 && selected.length === tableData.length}
                                    // onChange={handleSelectAllClick}
                                    inputProps={{ 'aria-label': 'select all transactions' }}
								/>
                            </CustonTabelCell>
                            {headCells.map(cell => {
                                return (
                                    <CustonTabelCell style={{width:cell.width, fontWeight:'500', color:'#1D1F2C'}}>
                                        {cell.label}
                                    </CustonTabelCell>
                            )})}
                            <CustonTabelCell>Action</CustonTabelCell>
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
                                    <TableCell><div style={{display:'flex', gap:'8px', height:'44px', alignItems:'center'}}>
                                        <div style={{width:'44px', height:'44px', borderRadius:'8px', backgroundColor:'#E0E2E7'}}></div>
                                        <div>
                                            <Typography fontSize={'14px'} fontWeight={500}>{row.Name}</Typography>
                                        </div> 
                                    </div></TableCell>
                                    <CustonTabelCell sx={{color:'#1D1F2C'}}>{row.Email}</CustonTabelCell>
                                    <CustonTabelCell>{row.Phone}</CustonTabelCell>
                                    <CustonTabelCell>{new Date(row.Added).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</CustonTabelCell>
                                    <CustonTabelCell><CustomeStatus sx={{backgroundColor: row.Status ? "#E9FAF7": "#FEECEE", color: row.Status ? "#667085": "#EB3D4D"}}> 
                                        {row.Status ? "Active":'Blocked'} 
                                    </CustomeStatus></CustonTabelCell>
                                    <CustonTabelCell>{new Date(row.Added).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</CustonTabelCell>
                                    {/* <CustonTabelCell>{row.category}</CustonTabelCell> */}
                                    <CustonTabelCell sx={{cursor:'pointer'}}>
                                            <Group onClick={() => {onViewCustomersDetails(row._id)}}/>
                                    </CustonTabelCell>
                                </TableRow>
                        )})}
                    </TableBody>
                </Table>
            </TableContainer>
            <PaginationWrapper>
                <Typography color={'#667085'} fontWeight={500} fontSize={'14px'}>Showing {(page - 1) * rowsPerPage} - {page * rowsPerPage} from {customers.length}</Typography>
                <CustomPagination 
                    count={customers.length}
                    onChangePage={setPage}
                    page={page}
                    rowsPerPage={rowsPerPage}
                />
            </PaginationWrapper>
        </>
    )
}
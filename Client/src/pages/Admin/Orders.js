import {Checkbox, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Table, styled} from '@mui/material'
import PageInfoBar from '../../components/Layouts/Admin/PageInfoBar'
import { ReactComponent as Download } from '../../components/Assets/download.svg';
import { ReactComponent as Add } from '../../components/Assets/add.svg';
import FilterMenu from '../../components/Layouts/Admin/FilterMenu';
import { useEffect, useState } from 'react';
import { ReactComponent as CheckedCheckbox } from '../../components/Assets/CheckedCheckbox.svg';
import { ReactComponent as UnCheckedCheckbox } from '../../components/Assets/UnCheckedCheckbox.svg';
import { ReactComponent as IndeterminateCheckbox } from '../../components/Assets/indeterminateCheckbox.svg';
import { ReactComponent as Group } from '../../components/Assets/Group.svg';
import CustomPagination from '../../components/CustomPagination';
import instance from '../../Utils/Api';
import TableSkeletonLoader from '../../components/Layouts/TableSkeletonLoader';
import { useNavigate } from 'react-router-dom';

const filterOptions = ['Upcoming', 'Deliverd', 'Cancelled'];

const headCells = [
    {label:'Order ID', width:'100px'},
    {label:'Seva', width:'253px'},
    {label:'Date', width:'136px'},
    {label:'Customer', width:'128px'},
    {label:'Total', width:'136px'},
    {label:'Payment', width:'147px'},
    {label:'Category', width:'150px'}
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

const PaginationWrapper = styled('div')({
    height:'62px',
    display:'flex',
    justifyContent:'space-between',
    margin:'14px 24px 16px 24px',
    fontSize:'14px'

})
export default function Orders(){

    const [selectedOption, setSelectedOption] = useState('Upcoming');
    const [selected, setSelected] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState(tableData);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const role = localStorage.getItem('role');
    const userId = localStorage.getItem('userId');
    const rowsPerPage = 8;
    function onExport(){

    }
    function onAdd(){

    }

    async function fetchOrders(){
        setIsLoading(true);
        try {
            let response
            if(role === "Purohith"){
                response = await instance.post('/allOrders',{status:selectedOption, userId:userId});
            }else{
                response = await instance.post('/allOrders',{status:selectedOption});
            }
            console.log(response);
            setOrders(response.data);
            setIsLoading(false);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchOrders();
    },[selectedOption])

    const dataToShow = orders.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    function onViewOrderDetails(id){
        navigate(`/${role}/OrderDetails/${id}`)
    }

    return (
        <>
            <PageInfoBar 
                title = {'Orders'} 
                button1={{name:'Export', icon:Download, onclick:onExport }}
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
                                    icon={<UnCheckedCheckbox/>} indeterminateIcon={<IndeterminateCheckbox/>} checkedIcon={<CheckedCheckbox/>}
                                    // indeterminate={selected.length > 0 && selected.length < tableData.length}
                                    // checked={tableData.length > 0 && selected.length === tableData.length}
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
                            <CustonTabelCell style={{width:'95px'}}>Action</CustonTabelCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {isLoading ? (
                        <TableSkeletonLoader
                        rowsPerPage={rowsPerPage}
                        columnCount={headCells.length}
                        hasCheckbox={true}
                        hasActions={true}
                        />
                        ) : (
                            dataToShow.map(row => {
                                return(
                                    <TableRow style={{height:'80px'}} key={row._id}>
                                        <CustonTabelCell style={{width:'20px', paddingRight:'0px', paddingLeft:'10px'}}>
                                            <Checkbox
                                                icon={<UnCheckedCheckbox/>} indeterminateIcon={<IndeterminateCheckbox/>} checkedIcon={<CheckedCheckbox/>}
                                                // indeterminate={selected.length > 0 && selected.length < wastageItems.length}
                                                // checked={wastageItems.length > 0 && selected.length === wastageItems.length}
                                                // onChange={handleSelectAllClick}
                                                inputProps={{ 'aria-label': 'select all transactions' }}
                                            />
                                        </CustonTabelCell>
                                        <CustonTabelCell sx={{color:'#2D9CDB'}}>{String(row.id).padStart(5,'0')}</CustonTabelCell>
                                        <CustonTabelCell sx={{color:'#1D1F2C'}}>{row.Seva}</CustonTabelCell>
                                        <CustonTabelCell>{new Date(row.OrderDate).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</CustonTabelCell>
                                        <CustonTabelCell>{row.Customer}</CustonTabelCell>
                                        <CustonTabelCell>{row.Total}</CustonTabelCell>
                                        <CustonTabelCell>{new Date(row.PaymentDate).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</CustonTabelCell>
                                        <CustonTabelCell>{row.Category}</CustonTabelCell>
                                        <CustonTabelCell sx={{cursor:'pointer'}}>
                                            <Group onClick={() => {onViewOrderDetails(row._id)}}/>
                                        </CustonTabelCell>
                                    </TableRow>
                            )})
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <PaginationWrapper>
                <Typography color={'#667085'} fontWeight={500} fontSize={'14px'}>Showing {(page - 1) * rowsPerPage} - {page * rowsPerPage} from {orders.length}</Typography>
                <CustomPagination 
                    count={orders.length}
                    onChangePage={setPage}
                    page={page}
                    rowsPerPage={rowsPerPage}
                />
            </PaginationWrapper>
        </>
        
    )
}

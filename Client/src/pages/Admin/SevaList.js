import {Checkbox, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Table, styled, Pagination} from '@mui/material';
import { useEffect, useState } from 'react'
import { ReactComponent as Download } from '../../components/Assets/download.svg';
import { ReactComponent as Add } from '../../components/Assets/add.svg';
import PageInfoBar from '../../components/Layouts/Admin/PageInfoBar'
import FilterMenu from '../../components/Layouts/Admin/FilterMenu'
import { ReactComponent as CheckedCheckbox } from '../../components/Assets/CheckedCheckbox.svg';
import { ReactComponent as UnCheckedCheckbox } from '../../components/Assets/UnCheckedCheckbox.svg';
import { ReactComponent as indeterminateCheckbox } from '../../components/Assets/indeterminateCheckbox.svg';
import { ReactComponent as Group } from '../../components/Assets/Group.svg';
import { ReactComponent as Pencil } from '../../components/Assets/fi-sr-pencil.svg';
import { ReactComponent as Trash } from '../../components/Assets/fi-sr-trash.svg';
import CustomPagination from '../../components/CustomPagination';
import { useNavigate } from 'react-router-dom';
import instance from '../../Utils/Api';


const filterOptions = ['Puja', 'Vratham', 'Homam', 'Festials', 'Events', 'Vahana'];

const headCells = [
    {label:'Sevas', width:'250px'},
    {label:'Items', width:'100px'},
    {label:'Category', width:'136px'},
    {label:'Price', width:'128px'},
    {label:'GST', width:'136px'},
    {label:'Total Cost', width:'147px'},
    {label:'Added', width:'150px'}
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

export default function SevaList(){
    const [selectedOption, setSelectedOption] = useState('Puja');
    const [selected, setSelected] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sevas, setSevas] = useState(tableData);
    const navigate = useNavigate();
    const role = localStorage.getItem('role');
    const rowsPerPage = 8;
    const [page, setPage] = useState(1);

    function onExport(){

    }
    function onAdd(){

    }

    async function fetchSevas(){
        setIsLoading(true);
        try {
            const response = await instance.post('/allSevas',{category:selectedOption});
            // console.log(response);
            setSevas(response.data);
            setIsLoading(false);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchSevas();
    },[selectedOption])

    const dataToShow = sevas.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    function onViewSevaDetails(id){
        navigate(`/${role}/AddSeva`)
    }

    function onEditSeva(id){
        navigate(`/${role}/EditSeva/${id}`)
    }

    async function onDeleteSeva(id){
        try {
            const response = await instance.post('/removeSeva',{id});
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <PageInfoBar 
                title = {'Sevas'} 
                button1={{name:'Export', icon:Download, onclick:onExport }}
                button2={{name:'Add Seva', icon:Add, onclick:onAdd }} 
                button2Click={() => {navigate(`/${role}/AddSeva`)}}
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
                                    <CustonTabelCell sx={{color:'#1D1F2C'}}>{row.title}</CustonTabelCell>
                                    <CustonTabelCell sx={{color:'#2D9CDB'}}>{"list"}</CustonTabelCell>
                                    <CustonTabelCell>{row.category}</CustonTabelCell>
                                    <CustonTabelCell>{row.cost}</CustonTabelCell>
                                    <CustonTabelCell>{row.gst}</CustonTabelCell>
                                    <CustonTabelCell>{row.cost + row.gst}</CustonTabelCell>
                                    <CustonTabelCell>{new Date(row.addedDate).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</CustonTabelCell>
                                    <CustonTabelCell sx={{}}>
                                        <div style={{display:'flex', gap:'10px', cursor:'pointer'}}>
                                            <Pencil onClick={() => {onEditSeva(row._id)}}/>
                                            <Group onClick={() => {onViewSevaDetails(row._id)}}/>
                                            <Trash onClick={() => {onDeleteSeva(row._id)}}/>
                                        </div> 
                                    </CustonTabelCell>
                                </TableRow>
                        )})}
                    </TableBody>
                </Table>
            </TableContainer>
            <PaginationWrapper>
                <Typography color={'#667085'} fontWeight={500} fontSize={'14px'}>Showing {(page - 1) * rowsPerPage} - {page * rowsPerPage} from {sevas.length}</Typography>
                <CustomPagination 
                    count={sevas.length}
                    onChangePage={setPage}
                    page={page}
                    rowsPerPage={rowsPerPage}
                />
            </PaginationWrapper>
        </>
    )
}
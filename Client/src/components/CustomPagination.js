import { Pagination, styled} from "@mui/material";

const CustamizedPagination = styled(Pagination)({

    '& .MuiButtonBase-root' : {color:'#2D9CDB', backgroundColor:'#D5E5F3', borderRadius:'8px', border:'none'},
    '& .Mui-selected': {color:'#D5E5F3', backgroundColor:'#2D9CDB !important'},
})

export default function CustomPagination({count, page, onChangePage, rowsPerPage}){

    const pageCount = Math.ceil(count / rowsPerPage);

    return(
        <CustamizedPagination
            count={pageCount} variant="outlined" shape="rounded"
            onChange={(_,value) => onChangePage(value)}
            page = {page}
        />
    )
}
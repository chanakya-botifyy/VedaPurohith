import React from 'react';
import { TableRow, TableCell, Skeleton } from '@mui/material';


const TableSkeletonLoader = ({ rowsPerPage, columnCount, hasActions, hasCheckbox }) => {
  return (
    <>
      {Array.from(new Array(rowsPerPage)).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
        {hasCheckbox && (
         <TableCell>
            <Skeleton animation="wave" variant="text" width="14px" />
          </TableCell>
          )}
          {Array.from(new Array(columnCount)).map((_, cellIndex) => (
            <TableCell key={cellIndex}>
              <Skeleton animation="wave" variant="text" width="100%" />
            </TableCell>
          ))}
          {hasActions && (
            <TableCell>
              <Skeleton animation="wave" variant="text" width="20px" />
            </TableCell>
         )}
        </TableRow>
      ))}
    </>
  );
};

export default TableSkeletonLoader;
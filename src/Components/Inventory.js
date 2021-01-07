import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SearchAppBar from '../Components/SearchBar';

const columns = [
  { id: 'sku_number', label: 'SKU', minWidth: 50 },
  { id: 'design_code', label: 'Design Code', minWidth: 50 },
  { id: 'xyz1', label: 'XYZ1', minWidth: 50 },
  { id: 'design_category', label: 'Design Category', minWidth: 50 },
  { id: 'DiamondCt', label: 'Diamond Ct.', minWidth: 50 },
  { id: 'net_weight', label: 'Net Weight', minWidth: 50 },
  { id: 'xyz2', label: 'xyz2', minWidth: 50 },
  { id: 'sku_quantity', label: 'SKU Qty', minWidth: 50 },
  { id: 'createdAt', label: 'Date', minWidth: 50 },
  { id: 'xyz3', label: 'xyz3', minWidth: 50 },
  
];

function createData(sku_number, design_code, xyz1, design_category, DiamondCt, net_weight, xyz2, sku_quantity, createdAt, xyz3) {
  return { sku_number, design_code, xyz1, design_category, DiamondCt, net_weight, xyz2, sku_quantity, createdAt, xyz3};
}

const rows = [
  createData('1', '1', 3, 4,5,6,7,8,9,10),
  createData('1', '1', 3, 4,5,6,7,8,9,10),
  createData('1', '1', 3, 4,5,6,7,8,9,10),
  createData('1', '1', 3, 4,5,6,7,8,9,10),
  createData('1', '1', 3, 4,5,6,7,8,9,10),
  createData('1', '1', 3, 4,5,6,7,8,9,10),
  createData('1', '1', 3, 4,5,6,7,8,9,10),
  createData('1', '1', 3, 4,5,6,7,8,9,10),
  createData('1', '1', 3, 4,5,6,7,8,9,10),
  createData('1', '1', 3, 4,5,6,7,8,9,10),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const Inventory =()=> {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>

      <div style={{backgroundColor:'#f2f2f2'}}>
        <div style={{padding:'0% 8%',float:'left',}}><SearchAppBar/></div>
        <div style={{padding:'2% 8% 2% 8%',border:'none',boxShadow:'none',float:'left',}}>Total Stones: 00</div>
        <div style={{padding:'2% 8% 2% 8%',border:'none',boxShadow:'none',float:'left',}}>Total Carats: 00</div>
        <br clear='All'/>
        </div>

      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default Inventory;
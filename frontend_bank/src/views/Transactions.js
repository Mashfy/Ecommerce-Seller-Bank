import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 50,
    margin: '100px auto 200px',
    width: '70%',
  },
  tableBody: {
    margin: '10px',
  },
});

export default function Transactions() {
  const classes = useStyles();
  const [transactions, setTransactions] = useState([]);
  useEffect(async () => {
    const { data } = await axios.get(
      'http://127.0.0.1:7000/bankapi/payment/transactions'
    );
    console.log({ data });
    setTransactions(data);
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>S No.</StyledTableCell>
              <StyledTableCell>Sender Id</StyledTableCell>
              <StyledTableCell>Receiver Id</StyledTableCell>
              {/* <StyledTableCell align='right'>Calories</StyledTableCell> */}
              <StyledTableCell>Amount</StyledTableCell>
              {/* <StyledTableCell align='right'>Transfer</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((item, index) => {
              return (
                <StyledTableRow key={item._id}>
                  <StyledTableCell component='th' scope='row'>
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align='left' component='th' scope='row'>
                    {item.sender}
                  </StyledTableCell>
                  {/* <StyledTableCell align="right">{item.name}</StyledTableCell> */}
                  <StyledTableCell align='left'>
                    {item.receiver}
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    {item.transactionAmount}
                  </StyledTableCell>
                  {/* <StyledTableCell align='right'>
                    <Link to={`/customers/${item._id}`}>
                      <Button variant='contained' color='primary'>
                        Transfer
                      </Button>
                    </Link>
                  </StyledTableCell> */}
                  {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

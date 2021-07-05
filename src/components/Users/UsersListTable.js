import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DeleteIcon from '@material-ui/icons/Delete';

import AddUserCard from '../UI/AddUserCard';

const deleteUserHandler  = (event) => {
  console.log("+ deleteUserHandler:" + event); 
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const UsersList = (props) => {
  const classes = useStyles();
  return (
    <AddUserCard className="MarginTop_1">
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.usersListData.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="center"><DeleteIcon onClick={() => deleteUserHandler(row.id)}></DeleteIcon></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </AddUserCard>
  );
}

export default UsersList;
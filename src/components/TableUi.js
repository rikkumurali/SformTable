import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const TableUi = (props) => {

    return (
        <>
            <Container maxWidth="lg" style={{ marginTop: '30px' }}>
                <TableContainer component={Paper}  >
                    <Table sx={{ minWidth: 450 }} aria-label="simple table" >
                        <TableHead >
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Age</TableCell>
                                <TableCell align="center">E-mail</TableCell>
                                <TableCell align="center">Username</TableCell>
                                <TableCell align="center">Password</TableCell>
                                <TableCell align="center">Re-password</TableCell>
                            </TableRow>
                        </TableHead>

                        {props.ndata ? (<TableBody>

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="center">{props.data.name}</TableCell>
                                <TableCell align="center">{props.data.age}</TableCell>
                                <TableCell align="center">{props.data.email}</TableCell>
                                <TableCell align="center">{props.data.userName}</TableCell>
                                <TableCell align="center">{props.data.passWord}</TableCell>
                                <TableCell align="center">{props.data.rpswd}</TableCell>
                            </TableRow>

                        </TableBody>) : ''}


                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default TableUi
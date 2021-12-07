import faker from 'faker';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        border: 0,
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 1250
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        color: '#908DA0'
    },
    name: {
        color: '#908DA0'
    },
    jobTitle: {
        color: '#908DA0'
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
}));

const position = "Nhân viên Bán Hàng Qua Điện Thoại - X-sell";
let id = "";

let USERS = [], STATUSES = ['Hoạt động', 'Đã từ chối', 'Mới'];
for (let i = 0; i < 14; i++) {
    USERS[i] = {
        id: i + 1,
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        joinDate: faker.date.past().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

function MTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Họ Tên</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Vị Trí</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Ngày Vào Làm</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Người Tạo</TableCell>
                        <TableCell className={classes.tableHeaderCell}>TT Ứng Viên</TableCell>
                        <TableCell className={classes.tableHeaderCell}>TT Biên Tập Viên</TableCell>
                        <TableCell className={classes.tableHeaderCell}>TT HRIS</TableCell>
                        <TableCell className={classes.tableHeaderCell}>TT Hợp Đồng</TableCell>
                        <TableCell className={classes.tableHeaderCell}></TableCell>
                        <TableCell className={classes.tableHeaderCell}></TableCell>
                        <TableCell className={classes.tableHeaderCell}></TableCell>
                        <TableCell className={classes.tableHeaderCell}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.name}>
                            <TableCell>
                                <Grid container>
                                    <Grid item lg={1}>
                                        <Typography>{row.id}</Typography>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Avatar alt={row.name} src='.' className={classes.avatar} />
                                    </Grid>
                                    <Grid item lg={9}>
                                        <Typography className={classes.name}>{row.name}</Typography>
                                        <Typography variant="body2">{row.phone}</Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2">{position}</Typography>
                            </TableCell>
                            <TableCell>{row.joinDate}</TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                                <Typography
                                    className={classes.status}
                                    style={{
                                        backgroundColor:
                                            ((row.status === 'Hoạt động' && '#3CAF4C') ||
                                                (row.status === 'Mới' && '#2392F5') ||
                                                (row.status === 'Đã từ chối' && '#F56B6F'))
                                    }}
                                >{row.status}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    className={classes.status}
                                    style={{
                                        backgroundColor:
                                            ((row.status === 'Hoạt động' && '#3CAF4C') ||
                                                (row.status === 'Mới' && '#2392F5') ||
                                                (row.status === 'Đã từ chối' && '#F56B6F'))
                                    }}
                                >{row.status}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    className={classes.status}
                                    style={{
                                        backgroundColor:
                                            ((row.status === 'Hoạt động' && '#3CAF4C') ||
                                                (row.status === 'Mới' && '#2392F5') ||
                                                (row.status === 'Đã từ chối' && '#F56B6F'))
                                    }}
                                >{row.status}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    className={classes.status}
                                    style={{
                                        backgroundColor:
                                            ((row.status === 'Hoạt động' && '#3CAF4C') ||
                                                (row.status === 'Mới' && '#2392F5') ||
                                                (row.status === 'Đã từ chối' && '#F56B6F'))
                                    }}
                                >{row.status}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    className={classes.status}
                                    style={{
                                        backgroundColor:
                                            ((row.status === 'Hoạt động' && '#3CAF4C') ||
                                                (row.status === 'Mới' && '#2392F5') ||
                                                (row.status === 'Đã từ chối' && '#F56B6F'))
                                    }}
                                >{row.status}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[9, 18, 27]}
                        component="div"
                        count={USERS.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default MTable;

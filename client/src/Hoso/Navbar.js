import React from 'react';
import img from './../imgs/user_icon.png';
import {
    Grid,
    Typography,
} from '@material-ui/core';
const Navbar = () => {
    return (
        <div className="sidebar">
            <header>
                <h3> <span>Fe </span> Credit</h3>
                <h5>Vay tiêu dùng tín chấp</h5>
                <br />
                <hr />
                <div>
                    <p>Danh mục</p>
                    <p>
                        Quản lý ứng viên & hồ sơ
                    </p>
                </div>
            </header>
            <footer>
                <hr />
                <div className="authors">

                    <Grid container>
                        <Grid item lg={2}>
                            <img alt="thumbnail" src={img} width="30"></img>
                        </Grid>
                        <Grid item lg={9}>
                            <Typography style={{ fontSize: '13px' }}> Phạm Hải Yến 2</Typography>
                            <Typography style={{ fontSize: '10px', color: '#788EA1', backgroundColor: '#252428' }}> Biên tập viên</Typography>
                        </Grid>

                    </Grid>
                </div>
                <hr />
                <div className="footer-typo">
                    <Typography style={{
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}> 2021 @ FE Credit</Typography>

                    <Typography style={{
                        fontSize: '10px',
                        color: '#788EA1',
                        backgroundColor: '#252428'
                    }}> Tự hào là công ty tài chính đầu ngành đã và đang phục vụ hàng triệu người dân Việt Nam</Typography>
                </div>
            </footer>
        </div>
    )
}

export default Navbar;

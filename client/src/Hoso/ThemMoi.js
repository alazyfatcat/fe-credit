import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import img from './../imgs/back-button.png';

const ThemMoi = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="body-content">
                <div className="before-header">
                    <div className="overflow">
                        <Link to="/hoso">
                            <img src={img} width="80px" />
                        </Link>
                        <h1>Danh sách hồ sơ {'>'} Thêm Mới</h1>

                    </div>
                </div>
                <div className="div-indent">
                    <p>Tạo ứng viên mới</p>
                    <div className="indent-1">
                        <h6>1. Thông tin ứng viên </h6>
                        <div className="div-wrap">
                            <div className="div1">
                                <label> * Họ</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                            <div className="div1">
                                <label>  Tên Đệm</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>

                            <div className="div1">
                                <label> * Tên Gọi</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                        </div>
                        <p className="text-orange">(*) Nhập tên bằng tiếng Việt có dấu và in hoa chữ cái đầu tiên</p>
                        <div className="div-wrap">
                            <div className="div1">
                                <label> * Ngày vào làm</label>
                                <input placeholder="Chọn giá trị"></input>
                            </div>
                            <div className="div1">
                                <label> * Điện thoại</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                            <div className="div1">
                                <label> * Email</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                        </div>
                    </div>
                    <div className="indent-1">
                        <h6>2. Vị trí làm việc </h6>
                        <div className="div-wrap">
                            <div className="div1">
                                <label>  Mã chức danh</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                            <div className="div1">
                                <label> * Nơi làm việc</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                        </div>
                        <div className="div-wrap">
                            <div className="div1">
                                <label> * Công ty</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                            <div className="div1">
                                <label>  Khối</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                            <div className="div1">
                                <label>  Trung tâm</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                            <div className="div1">
                                <label>  Phòng</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                        </div>
                        <div className="div-wrap">
                            <div className="div1">
                                <label>  Bộ Phận</label>
                                <input placeholder="Chọn giá trị"></input>
                            </div>
                            <div className="div1">
                                <label>  Nhóm</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                            <div className="div1">
                                <label>  Chức vụ</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                            <div className="div1">
                                <label> * Chức danh</label>
                                <input placeholder="Nhập giá trị"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemMoi;

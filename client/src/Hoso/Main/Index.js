import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import MTable from './MTable';
import './../index.css';
import img from './../../imgs/back-button.png'


const Main = () => {
    return (
        <div className="body-content">
            <div className="before-header">
                <div className="overflow">
                    <Link to="/">
                        <img src={img} width="80px" />
                    </Link>
                    <h1>Danh sách hồ sơ</h1>
                </div>
                <div className="buttons">
                    <Link to="/hoso/themmoi"> <Button title="Thêm mới" /></Link>
                    <Button title="Xuất Dữ liệu" />
                    <Button title="Xuất người tham chiếu" />
                </div>
            </div>
            <br />
            <div className="header">
                <div className="div-wrap">
                    <div className="div1">
                        <label>Trạng thái hồ sơ</label>
                        <select>
                            <optgroup>
                                <option value="boloc">Bộ lọc</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="div1">
                        <label>Trạng thái NV</label>
                        <select>
                            <optgroup>
                                <option value="tatca">Tất cả</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="div1">
                        <label>Ngày vào làm</label>
                        <input type="date" id="tungay" name="tungay" />
                    </div>
                    <div>
                        <button className="apply">Áp dụng</button>
                    </div>
                </div>
                <div>
                    <input value="Tìm kiếm theo tên và email" />
                </div>
            </div>
            <div className="after-header">
                <p>Hiển thị từ hàng số 1 trong số 26 kết quả </p>
                <select>
                    <optgroup>
                        <option value="tatca">10 kết quả mỗi trang</option>
                    </optgroup>
                </select>
            </div>
            <MTable />
        </div>
    )
}

export default Main;

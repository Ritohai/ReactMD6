import React from "react";
import Navbar from "../../NavigationComponent/Navbar";

function Owner() {
    return (
        <main>
            <div className="box-left">
                <div className="navbar">
                    <Navbar />
                </div>
            </div>
            <div class="content">
                <div className="menu-btn">
                    <button className="btn-bar">
                        <div className="box-line">
                            <span className="line-1" />
                            <span className="line-2" />
                            <span className="line-3" />
                        </div>
                    </button>
                </div>
                <div className="breadcrumb_wrap">
                    <ol id="breadcrumb">
                        <li>
                            <a href="../">Quản lý chủ sở hữu</a>
                            <span>/</span>
                        </li>
                        <li>Danh sách thông tin chủ sở hữu</li>
                    </ol>
                </div>
                <div className="form-dashboard">
                    <form action="">
                        <div className="id-name form-control">
                            <div className="id-user">
                                <label htmlFor="">ID chủ sở hữu</label>
                                <div className="input">
                                    <input type="text" placeholder="một hai ba" />
                                    <span>~</span>
                                    <input type="text" placeholder="một hai ba" />
                                </div>
                            </div>
                            <div className="brand">
                                <label htmlFor="">Đại lí</label>
                                <select>
                                    <option value="" />
                                    <option value="">Apple</option>
                                    <option value="">SamSung</option>
                                    <option value="">Sony</option>
                                </select>
                            </div>
                            <div className="type">
                                <input
                                    type="checkbox"
                                    name="type-canhan"
                                    defaultValue="canhan"
                                    id="type-canhan"
                                />
                                <label htmlFor="type-canhan">Cá nhân</label>
                                <input
                                    type="checkbox"
                                    name="type-tapdoan"
                                    defaultValue="tapdoan"
                                    id="type-tapdoan"
                                />
                                <label htmlFor="type-tapdoan">Tập đoàn</label>
                            </div>
                        </div>
                        <div className="company form-control">
                            <div className="company-name">
                                <label htmlFor="">ID chủ sở hữu</label>
                                <input type="text" placeholder="Công ty TNHH abc" />
                            </div>
                            <div className="user-name">
                                <label htmlFor="">Tên người phụ trách</label>
                                <div className="input">
                                    <input type="text" placeholder="một hai ba" />
                                    <input type="text" placeholder="một hai ba" />
                                </div>
                            </div>
                        </div>
                        <div className="address form-control">
                            <div className="post">
                                <label htmlFor="">Mã bưu điện</label>
                                <div className="input">
                                    <input type="text" placeholder="một hai ba" />
                                    <span>-</span>
                                    <input type="text" placeholder="một hai ba" />
                                </div>
                            </div>
                            <div className="province">
                                <label htmlFor="">Tỉnh</label>
                                <select name="" id="">
                                    <option value="">TP.HCM</option>
                                    <option value="">Hà Nội</option>
                                </select>
                            </div>
                            <div className="group-city">
                                <label htmlFor="">Nhóm thành phố</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="contact form-control">
                            <div className="machi-chome">
                                <label htmlFor="">Machi-chome</label>
                                <input type="text" />
                            </div>
                            <div className="phone">
                                <label htmlFor="">Số điện thoại</label>
                                <div className="input-number">
                                    <input type="number" placeholder={1234} />
                                    <span>-</span>
                                    <input type="number" placeholder={1234} />
                                    <span>-</span>
                                    <input type="number" placeholder={1234} />
                                </div>
                            </div>
                            <div className="zone">
                                <label htmlFor="">Phân vùng dữ liệu</label>
                                <div className="input-zone">
                                    <div>
                                        <input
                                            type="radio"
                                            id="register"
                                            name="zone"
                                            defaultValue="register"
                                            defaultChecked=""
                                        />
                                        <label htmlFor="register">Đăng kí</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="any-case"
                                            name="zone"
                                            defaultValue="any-case"
                                        />
                                        <label htmlFor="any-case">Mọi trường hợp</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="cancel"
                                            name="zone"
                                            defaultValue="cancel"
                                        />
                                        <label htmlFor="cancel">Hủy bỏ</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="btn-group">
                        <button>Đã xóa tình trạng</button>
                        <button>Tìm kiếm</button>
                    </div>
                </div>
                <div className="table-content">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                className="table table-hover"
                                id="dataTable"
                                width="100%"
                                cellSpacing={0}
                               
                            >
                                <thead>
                                    <tr>
                                        <th>ID chủ sở hữu</th>
                                        <th>ID Đại lí</th>
                                        <th>Họ chủ sở hữu</th>
                                        <th>Tên chủ sở hữu</th>
                                        <th>Email</th>
                                        <th>Số điện thoại</th>
                                        <th>
                                            Tên doanh nghiệp <br /> (tên thương mại)
                                        </th>
                                        <th>Thành phố</th>
                                        <th>Mã Zip-code 1</th>
                                        <th>Mã Zip-code 2</th>
                                        <th>Địa chỉ</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>1</td>
                                        <td>111</td>
                                        <td>cá nhân</td>
                                        <td>kana</td>
                                        <td>kana</td>
                                        <td>12fdgerhydh34</td>
                                        <td>1hfhfhfghf</td>
                                        <td>111</td>
                                        <td>cá nhân</td>
                                        <td>kana</td>
                                        <td>kana</td>
                                        <td>1234</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Owner;
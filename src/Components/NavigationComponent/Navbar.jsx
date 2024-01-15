import React, {useState} from 'react';
import "../../css/home.css";
import "../../css/table.css";
import "../../css/top.css";



function Navbar() {
  const [activeNav, setActiveNav] = useState([]);
  const handleNavClick = (drop) => {
    if (activeNav.includes(drop)) {
      setActiveNav(activeNav.filter((item) => item !== drop));
    } else {
      setActiveNav([...activeNav, drop]);
    }
  }
  return (
    <div className="nav-list">
      <div className={`nav-item ${activeNav.includes(0) ? 'tran' : ''}`} >
        <a href="#" onClick={() => handleNavClick(0)}>
          Quản lý chủ sở hữu
        </a>
        <div className="drop-down">
          <a href="/owner">Danh sách tìm kiếm</a>
        </div>
      </div>
      <div className={`nav-item ${activeNav.includes(1) ? 'tran' : ''}`}>
        <a href="#" onClick={() => handleNavClick(1)}>Quản lý cửa hàng</a>
        <div className="drop-down">
          <a href="/store">Danh sách tìm kiếm</a>
        </div>
      </div>
      <div className={`nav-item ${activeNav.includes(2) ? 'tran' : ''}`} >
        <a href="#" onClick={() => handleNavClick(2)}>Quản lý thương hiệu</a>
        <div className="drop-down">
          <a href="/agent">Danh sách tìm kiếm</a>
          <a href="/agent/reg_agent">Đăng ký</a>
        </div>
      </div>
      <div className={`nav-item ${activeNav.includes(3) ? 'tran' : ''}`} >
        <a href="#" onClick={() => handleNavClick(3)}>Quản lý đại lý</a>
        <div className="drop-down">
          <a href="/agent">Danh sách tìm kiếm</a>
          <a href="/agent/reg_agent">Đăng ký</a>
        </div>
      </div>
      <div className={`nav-item ${activeNav.includes(4) ? 'tran' : ''}`} >
        <a href="#" onClick={() => handleNavClick(4)}>Quản lý tài khoản</a>
        <div className="drop-down">
          <a href="/account">Danh sách tìm kiếm</a>
          <a href="/account/reg_account">Đăng ký</a>
        </div>
      </div>
    </div>

  )
}

export default Navbar
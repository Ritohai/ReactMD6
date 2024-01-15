import React from 'react';
import Navbar from '../NavigationComponent/Navbar';


function Home() {
  
  return (
    <main>
      <div className="box-left">
        <div className="navbar">
          <Navbar/>
        </div>
      </div>
      <div className="content">
          <div className="text">Trang chủ</div>
          <div className="container-box">
            <div className="box">
              <div className="item">Số chủ sở hữu đã đăng ký</div>
              <div className="box-item">0 chủ thể</div>
            </div>
            <div className="box">
              <div className="item">Số lượng cửa hàng đăng ký (cơ sở)</div>
              <div className="box-item">0 cửa hàng</div>
            </div>
            <div className="box">
              <div className="item">Số lượng thương hiệu có sẵn</div>
              <div className="box-item">0 thương hiệu</div>
            </div>
            <div className="box">
              <div className="item">Số lượng cửa hàng có thương hiệu đã đăng ký</div>
              <div className="box-item">0 cửa hàng</div>
            </div>
          </div>
      </div>
    </main>
  )
}

export default Home
import React from 'react'
import Navbar from '../../NavigationComponent/Navbar'

function RegAccount() {
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
              <a href="../">Quản lý đại lý</a>
              <span>/</span>
            </li>
            <li>Đăng kí đại lý</li>
          </ol>
        </div>
        <div className="table-content" style={{ marginTop: "10px" }}>
          <div className="card-body">
            <div className="table-responsive">
              Đây là đăng kí
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RegAccount
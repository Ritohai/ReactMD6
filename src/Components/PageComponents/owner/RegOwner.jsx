import React from 'react';
import Navbar from '../../NavigationComponent/Navbar'
import "../../../css/top.css";
import "../../../css/login.css";
import "../../../css/table.css";

function RegOwner() {
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
                      <li>Đăng kí chủ sở hữu</li>
                  </ol>
              </div>
              <div className="table-content" style={{ marginTop: "10px" }}>
                  <div className="card-body">
                      <div className="table-responsive">
                          <form action="#">
                              <div>
                                  <label htmlFor="fname">Tên đại lý: </label>
                                  <input type="text" id="fname" name="fname" />
                              </div>
                              <div>
                                  <label htmlFor="fname">Họ: </label>
                                  <input type="text" id="fname" name="fname" />
                              </div>
                              <div>
                                  <label htmlFor="fname">Tên: </label>
                                  <input type="text" id="fname" name="fname" />
                              </div>
                              <div>
                                  <label htmlFor="fname">Email: </label>
                                  <input type="text" id="fname" name="fname" />
                              </div>
                              <div>
                                  <label htmlFor="fname">Tên đại lý:</label>
                                  <input type="text" id="fname" name="fname" />
                              </div>
                              <div>
                                  <label htmlFor="fname">Tên đại lý:</label>
                                  <input type="text" id="fname" name="fname" />
                              </div>
                              <div>
                                  <label htmlFor="fname">Tên đại lý:</label>
                                  <input type="text" id="fname" name="fname" />
                              </div>
                              <div>
                                  <label htmlFor="fname">Tên đại lý:</label>
                                  <input type="text" id="fname" name="fname" />
                              </div>
                              <div>
                                  <label htmlFor="fname">Tên đại lý:</label>
                                  <input type="text" id="fname" name="fname" />
                              </div>



                              <input type="submit" defaultValue="Đăng kí" />
                          </form>

                      </div>
                  </div>
              </div>
          </div>
      </main>
  )
}

export default RegOwner
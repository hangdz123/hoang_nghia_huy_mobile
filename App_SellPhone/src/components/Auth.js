import React, { Component } from 'react';

export default class Auth extends Component {
  render() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title"> Trang Đăng nhập</h3>
          <div className="form-group mt-3">
            <label>Tài khoản</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Nhập tài khoản ..."
            />
          </div>
          <div className="form-group mt-3">
            <label>Mật khẩu</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Nhập mật khẩu ..."
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Đăng nhập
            </button>
          </div>
        </div>
      </form>
    </div>
  )
 }
}



import React, { Component } from "react";
import "./bootstrap/dist/css/bootstrap.min.css";
import "./Apps.css";

class Registration extends Component {
  state = {};
  render() {
    return (
      <div className="bgcolor">
        <div className="">
          <div className="row">
            <div className="col-md-9"></div>
            <div className="col-md-3">
              <form>
                <div className="form-group" style={{ paddingTop: 20 }}>
                  <label>First name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  <a href="#">Sign Up </a>
                </button>
                <p className="forgot-password text-right padbo1">
                  Already registered <a href="#">sign in?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;

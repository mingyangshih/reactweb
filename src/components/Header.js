import React from "react";
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-header p-2 shadow d-flex justify-content-between">
      <div className="text-light">
        <i className="bi bi-life-preserver"></i>
        <span className="fs-5 ps-2">Clayton Learn React</span>
      </div>
      <div>
        {/* <button className="btn btn-primary btn-sm mx-1">Login</button>
        <button className="btn btn-danger btn-sm mx-1">Logout</button> */}
        <NavLink to="/" className="text-decoration-none px-1 text-light"  exact="true"> Home</NavLink>
        <NavLink to="/news" className="text-decoration-none px-1 text-light" > News</NavLink>
        <NavLink to="/about" className="text-decoration-none px-1 text-light" > About</NavLink>
      </div>
    </div>
  );
};

export default Header;
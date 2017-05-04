import React from 'react';

const Navbar = () =>{
  return(
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Gaza Sky Geeks
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <p className="navbar-text">
              <a href="/" className="navbar-link">Room Booking</a>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

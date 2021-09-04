import React from "react";

const Header = (props) => {
  return (
    <header className="container-fluid bg-danger py-2 fixed-top">
      <div className="container d-flex justify-content-between px-3">
        <h3 className="text-white">BitPeople</h3>
      </div>
    </header>
  );
};

export default Header;

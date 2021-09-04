import React from "react";
import { FaList } from "react-icons/fa";
import { BsGrid3X2GapFill } from "react-icons/bs";

const Header = ({ viewButtonHandler, isGridView }) => {
  return (
    <header className="container-fluid bg-danger py-2 fixed-top">
      <div className="container d-flex justify-content-between px-3">
        <h3 className="text-white">BitPeople</h3>

        <button onClick={viewButtonHandler} type="button" className="btn text-danger bg-light">
          {isGridView ? <FaList /> : <BsGrid3X2GapFill />}
        </button>
      </div>
    </header>
  );
};

export default Header;

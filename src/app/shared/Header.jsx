import React from "react";
import { IoIosRefresh } from "react-icons/io";

const Header = ({ viewButtonHandler, isGridView, refreshBtnHandler}) => {


import { FaList } from "react-icons/fa";
import { BsGrid3X2GapFill } from "react-icons/bs";

const Header = ({ viewButtonHandler, isGridView }) => {
  return (
    <header className="container-fluid bg-danger py-2 fixed-top">
      <div className="container d-flex justify-content-between px-3">
        <h3 className="text-white">BitPeople</h3>
        <div>
          <button onClick={refreshBtnHandler} type="button" className="btn bg-danger text-light">
          < IoIosRefresh />
          </button>
        </div>
        <button onClick={viewButtonHandler} type="button" className="btn text-danger bg-light">
          {isGridView ? <FaList /> : <BsGrid3X2GapFill />}
        </button>
      </div>
    </header>
  );
};

export default Header;

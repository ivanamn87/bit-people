import React from "react";
import { IoIosRefresh } from "react-icons/io";

const Header = ({ viewButtonHandler, isGridView, refreshBtnHandler}) => {

  function refresh() {
    
  
  }


  return (
    <header className="container-fluid bg-danger py-2 fixed-top">
      <div className="container d-flex justify-content-between px-3">
        <h3 className="text-white">BitPeople</h3>
        <div>
          <button onClick={refreshBtnHandler} type="button" className="btn bg-danger text-light">
          < IoIosRefresh />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

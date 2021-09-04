import React from "react";
import { IoIosRefresh } from "react-icons/io";

const Header = ({ viewButtonHandler, isGridView }) => {

  function refresh() {
    
  
  }


  return (
    <header className="container-fluid bg-danger py-2 fixed-top">
      <div className="container d-flex justify-content-between px-3">
        <h3 className="text-white">BitPeople</h3>
        <div>
          <button className="btn bg-danger text-light">
            < IoIosRefresh />
          </button>
          <button
            onClick={viewButtonHandler}
            type="button"
            className="btn text-danger bg-light"
          >
            {isGridView ? "List View" : "Grid View"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

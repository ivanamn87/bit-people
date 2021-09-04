import React from "react";

const Header = ({viewButtonHandler, isGridView}) => {
  return (
    <header className="container-fluid bg-danger py-2 fixed-top">
      <div className="container d-flex justify-content-between px-3">
        <h3 className="text-white">BitPeople</h3>
        <div>
          <button onClick={props.viewButtonHandler} type="button" className="btn text-danger bg-light">
            {isGridView ? "List View" : "Grid View"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

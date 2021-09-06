import React, { useState, useEffect } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { DisplayUsers } from "./DisplayUsers";
import { getBitPeople } from "../../services/bitPeopleService";

// setting gridView state to localStorage: 1. first we try to get state from localStorage
const viewFromLocalStorage = JSON.parse(localStorage.getItem("gridView"));

export const HomePage = () => {
  const [bitPeopleList, setBitPeopleList] = useState([]);
  // setting gridView state to localStorage: 2. then we useState with localStorage initial value
  const [gridView, setGridView] = useState(viewFromLocalStorage);
  
  // setting gridView state to localStorage: 3. finally we use UseEffect to set state in localStorage
  useEffect(() => {
    localStorage.setItem("gridView", JSON.stringify(gridView));
  }, [gridView]);

  useEffect(() => {
    loadBitPeople();
  }, []);

  const loadBitPeople = () => {
    getBitPeople().then((peopleList) => {
      setBitPeopleList(peopleList);
    });
  };

  const gridViewHandler = () => {
    setGridView(!gridView);
  };

  return (
    <>
      <Header isGridView={gridView} viewButtonHandler={gridViewHandler} refreshBtnHandler={loadBitPeople} />
      <DisplayUsers isGridView={gridView} bitPeopleList={bitPeopleList} />
      <Footer />
    </>
  );
};

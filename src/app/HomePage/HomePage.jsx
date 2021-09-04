import React, { useState, useEffect } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { DisplayUsers } from "./DisplayUsers";
import { getBitPeople } from "../../services/bitPeopleService";

export const HomePage = () => {
  const [bitPeopleList, setBitPeopleList] = useState([]);
  const [gridView, setGridView] = useState(false);
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
      <Header isGridView={gridView} viewButtonHandler={gridViewHandler} refreshBtnHandler={loadBitPeople}/>
      <DisplayUsers isGridView={gridView} bitPeopleList={bitPeopleList} />
      <Footer />
    </>
  );
};

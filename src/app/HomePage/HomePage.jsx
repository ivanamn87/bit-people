import React, { useState, useEffect } from "react";
import Header from "react-bootstrap/lib/Modal";
import Footer from "react-bootstrap/lib/Modal";
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
      <Header isGridView={gridView} viewButtonHandler={gridViewHandler} />
      <DisplayUsers isGridView={gridView} bitPeopleList={bitPeopleList} />
      <Footer />
    </>
  );
};

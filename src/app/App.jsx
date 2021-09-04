import React, { useState, useEffect } from "react";

import Header from "./shared/Header";
import { DisplayUsers } from "./HomePage/DisplayUsers";
import Footer from "./shared/Header";
import { getBitPeople } from "../services/bitPeopleService";

const App = () => {
  const [bitPeopleList, setBitPeopleList] = useState([]);

  useEffect(() => {
    loadBitPeople();
  }, []);

  const loadBitPeople = () => {
    getBitPeople().then((peopleList) => {
      setBitPeopleList(peopleList);
    });
  };

  return (
    <>
      <Header />
      <DisplayUsers bitPeopleList={bitPeopleList} />
      <Footer />
    </>
  );
};

export default App;

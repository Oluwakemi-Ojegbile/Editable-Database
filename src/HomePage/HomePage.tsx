import React from "react";
import { HomePageStyle } from "./HomePage.style";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";

function HomePage({
  addNewRow,
  handleChange,
  searchVal,
  handleCancelText,
  dataBase,
  updateNewRow,
  deleteTableRow,
  isAdding,
}: any) {
  return (
    <HomePageStyle>
      <Header
        addNewRow={addNewRow}
        handleChange={handleChange}
        searchVal={searchVal}
        handleCancelText={handleCancelText}
      />
      <Table
        dataBase={dataBase}
        updateNewRow={updateNewRow}
        deleteTableRow={deleteTableRow}
        searchVal={searchVal}
        isAdding={isAdding}
      />
    </HomePageStyle>
  );
}

export default HomePage;

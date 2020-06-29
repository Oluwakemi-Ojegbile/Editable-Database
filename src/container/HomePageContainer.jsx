import React, { useState } from "react";
import HomePage from "../HomePage/HomePage";
import useLocalStorage from "../hooks/localStorage";

function HomePageContainer() {
  const [searchVal, setSearchVal] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [dataBase, setDataBase] = useLocalStorage("person", [
    {
      id: Math.random(),
      firstName: "Mehmet",
      lastName: "Baran",
      birthYear: 1987,
      birthPlace: "Lagos",
    },
    {
      id: Math.random(),
      firstName: "Zeyah Bethul",
      lastName: "Baran",
      birthYear: 2017,
      birthPlace: "Ondo",
    },
  ]);

  function handleChange(e) {
    setSearchVal(e.target.value);
  }

  function handleCancelText() {
    setSearchVal("");
  }

  const addNewRow = (person) => {
    localStorage.setItem("person", JSON.stringify([...dataBase, person]));
    const inputData = {
      id: Math.random(),
      firstName: "",
      lastName: "",
      birthYear: "",
      birthPlace: "",
    };
    setDataBase([...dataBase, inputData]);
    setIsAdding(true);
  };

  const updateNewRow = (id, updatedRow) => {
    setDataBase(
      dataBase.map((newRow) => (newRow.id === id ? updatedRow : newRow))
    );
  };

  const deleteTableRow = (index) => {
    const newRow = [...dataBase];
    newRow.splice(index, 1);
    setDataBase(newRow);
    localStorage.setItem("person", JSON.stringify(newRow));
  };

  return (
    <HomePage
      addNewRow={addNewRow}
      handleChange={handleChange}
      searchVal={searchVal}
      handleCancelText={handleCancelText}
      dataBase={dataBase}
      updateNewRow={updateNewRow}
      deleteTableRow={deleteTableRow}
      isAdding={isAdding}
    />
  );
}

export default HomePageContainer;

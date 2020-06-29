import React, { useState, useEffect } from "react";
import { TableStyle } from "./Table.style";
import TableRow from "./TableRow";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-up.svg";

function Table({
  dataBase,
  updateNewRow,
  handleChange,
  deleteTableRow,
  searchVal,
  isAdding,
}: any) {
  const [filtered, setFiltered] = useState<any>([]);

  const [sortTableRow, setSortTableRow] = useState<any>("default");

  const sortTypes: any = {
    up: {
      class: "up",
      fn: (a: any, b: any) => {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      },
    },
    down: {
      class: "down",
      fn: (a: any, b: any) => {
        if (b.firstName < a.firstName) {
          return -1;
        }
        if (b.firstName > a.firstName) {
          return 1;
        }
        return 0;
      },
    },
    default: {
      class: "default",
      fn: (a: any, b: any) => a,
    },
  };

  const onSortChange = () => {
    let newRow: any;
    if (sortTableRow === "down") newRow = "up";
    else if (sortTableRow === "up") newRow = "default";
    else if (sortTableRow === "default") newRow = "down";
    setSortTableRow(newRow);
  };

  const sortClass = () => {
    if (sortTableRow === "down") return "arrow arrow-down";
    else if (sortTableRow === "up") return " arrow arrow-up";
    else if (sortTableRow === "default") return " arrow";
  };

  useEffect(() => {
    const data =
      searchVal !== ""
        ? dataBase.filter((person: any) => {
            const valToLowerCase = searchVal.toLowerCase();
            const matchedWords = [
              person.firstName.toLowerCase().includes(valToLowerCase),
              person.lastName.toLowerCase().includes(valToLowerCase),
            ];
            return matchedWords.some((element) => element);
          })
        : dataBase;
    setFiltered([...data]);
  }, [searchVal, dataBase]);

  const dataBaseList =
    filtered.length <= 0 ? (
      <p className="nodata">No such data Yet!!!</p>
    ) : (
      filtered?.sort(sortTypes[sortTableRow].fn).map((item: any) => {
        return (
          <TableRow
            item={item}
            key={item.id}
            updateNewRow={updateNewRow}
            handleChange={handleChange}
            deleteTableRow={deleteTableRow}
            searchVal={searchVal}
            isAdding={isAdding}
          />
        );
      })
    );

  return (
    <TableStyle>
      <div className="table-header">
        <div>
          <span onClick={onSortChange}>
            <ArrowIcon className={sortClass()} />
          </span>
          Actions
        </div>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Birth Year</div>
        <div>Birth Place</div>
      </div>
      <div>{dataBaseList}</div>
    </TableStyle>
  );
}

export default Table;

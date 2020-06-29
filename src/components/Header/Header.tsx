import React from "react";
import { HeaderStyle, SearchBox } from "./Header.style";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as SearchClose } from "../../assets/clear.svg";

function Header({ addNewRow, handleChange, searchVal, handleCancelText }: any) {
  function handleAdd() {
    addNewRow();
  }
  return (
    <HeaderStyle>
      <div className="page-title">Editable Database</div>
      <div className="left-side">
        <SearchBox>
          <span>
            <SearchIcon className="search" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            value={searchVal}
            onChange={(e) => handleChange(e)}
            className="search-input"
          />
          <span role="button">
            <SearchClose
              className="search-close"
              onClick={() => handleCancelText()}
            />
          </span>
          <button className="btn" onClick={() => handleAdd()}>
            +<span className="tooltiptext">Add</span>
          </button>
        </SearchBox>
      </div>
    </HeaderStyle>
  );
}

export default Header;

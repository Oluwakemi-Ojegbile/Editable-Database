import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  padding: 25px;
  justify-content: space-between;

  .page-title {
    font-size: 1.55rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    color: #008080;
  }
  .left-side {
    display: flex;
  }
`;
const SearchBox = styled.div`
  color: #20b2aa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  span {
    align-self: center;
    display: flex;
    align-items: center;

    .search {
      height: 100%;
      margin-right: -30px;
    }
    .search-close {
      margin-left: -30px;
      cursor: pointer;
      color: #20b2aa;
    }
  }

  .search-input {
    font-size: 1.3rem;
    width: 315px;
    height: 32px;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid #008080;
    color: #000;
    padding-left: 30px;
  }
  input::placeholder {
    color: #20b2aa;
  }
  .btn {
    background: #3ddc97;
    font-size: 1.2rem;
    margin-left: 16px;
    border: none;
    border-radius: 3px;
    color: #fff;
    outline: 0;
    cursor: pointer;
  }
  .btn .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: #fff;
  font-size: 0.7rem;
  text-align: center;
  border-radius: 3px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  margin-top: 15px;
}

.btn:hover .tooltiptext {
  visibility: visible;
}
`;
export { HeaderStyle, SearchBox };

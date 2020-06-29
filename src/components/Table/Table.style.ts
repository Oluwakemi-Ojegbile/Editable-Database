import styled from "styled-components";

const TableStyle = styled.div`
  display: grid;
  margin: 3rem auto;
  width: 100%;
  box-shadow: 4px 4px 8px rgba(36, 36, 36, 0.2);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  .table-header {
    display: grid;
    padding: 15px;
    text-align: center;
    color: slategrey;
    font-weight: bold;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid rgb(218, 212, 212);
    .arrow {
      width: 20px;
      height: 20px;
      color: #20b2aa;
      cursor: pointer;
      margin-right: 20px;
    }
    .arrow-down {
      transform: rotate(180deg);
    }
  }
  .table-data {
    display: grid;
    padding: 15px;
    text-align: center;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid rgb(218, 212, 212);
    color: darkslategrey;
    background: transparent;

    .icon-box {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      justify-items: flex-end;
    }
    .icon {
      width: 20px;
      height: 20px;
      color: #20b2aa;
      cursor: pointer;
      /* padding-right: 30px; */
    }
    .inputField {
      border: none;
      outline: none;
      border-bottom: 1px solid gray;
    }
    .textField {
      border: none;
      outline: none;
      padding-left: 70px;
    }
  }
`;

export { TableStyle };

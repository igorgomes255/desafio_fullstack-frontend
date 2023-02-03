import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  section {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    border-bottom: 1px solid rosybrown;

    h2 {
      margin-left: 50px;
      font-family: "Source Sans Pro";
    }
  }
`;

export const DivAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
  }

  div span {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 18px;
    color: #5f9ea0;
  }

  div button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6f8faf;
    border-radius: 4px;

    height: 30px;

    color: #ffffff;

    cursor: pointer;
  }

  div button:hover {
    background-color: #868e96;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;

  section div {
    margin-right: 50px;
    cursor: pointer;
  }
`;

export const DivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  width: 800px;

  table {
    width: 100%;
    font-family: "Source Sans Pro";
    border-collapse: collapse;
  }

  table:hover {
    box-shadow: 0px 0px 25px 0px rgba(112, 128, 144, 1);
  }

  table tbody {
    display: block;
    width: 100%;
    overflow: auto;
    height: 150px;
  }

  tbody::-webkit-scrollbar {
    height: 10px;
    background-color: #242424;
  }

  tbody::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
  }

  table thead tr {
    display: block;
  }

  table thead {
    background: black;
  }

  table th,
  table td {
    padding: 5px;
    text-align: left;
    width: 250px;
    border: 1px solid #faf9f6;
    font-family: "Source Sans Pro";
  }

  tr:nth-child(even) {
    background-color: #71797e;
  }

  tr:hover {
    background-color: #708090;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #1434a4;
    color: white;
  }
`;

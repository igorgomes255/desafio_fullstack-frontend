import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px;

  label {
    color: #d3d3d3;
    font-size: 18px;
    font-weight: 700;
    font-family: "Source Sans Pro";
  }

  input {
    width: 200px;
    height: 35px;
    border-radius: 4px;
    border: 1px solid #dde6e9;
    font-family: "Source Sans Pro";
  }

  span {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 0px;

    color: red;
    margin-bottom: 20px;
  }
`;

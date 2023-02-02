import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-top: 60px;

  width: 320px;
  height: 500px;
  border: 1px solid #faf9f6;
  border-radius: 4px;

  -webkit-box-shadow: 0px 0px 25px 0px rgba(112, 128, 144, 1);
  -moz-box-shadow: 0px 0px 25px 0px rgba(112, 128, 144, 1);
  box-shadow: 0px 0px 25px 0px rgba(112, 128, 144, 1);

  form {
    margin-top: 20px;
  }

  button {
    width: 200px;
    height: 35px;
    font-weight: 700;
    border-radius: 4px;
    font-family: "Source Sans Pro";
    background-color: #6f8faf;
    cursor: pointer;
  }

  p {
    color: #814141;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 35px;
  font-weight: 700;
  border-radius: 4px;
  font-family: "Source Sans Pro";
  background-color: #868e96;

  text-decoration: none;

  color: #f8f9fa;
`;

export const DivEye = styled.div`
  background-color: transparent;
  position: relative;

  div {
    width: 40px;
    height: 40px;
    bottom: 20px;
    left: 170px;
    border-radius: 50%;
    position: absolute;
    background: transparent;
    cursor: pointer;
  }
`;

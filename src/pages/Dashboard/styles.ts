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
    font-family: var(--font-1);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    color: #f8f9fa;
  }

  div button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #212529;
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
`;

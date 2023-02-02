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

    p {
      margin-left: 50px;
    }
  }
`;

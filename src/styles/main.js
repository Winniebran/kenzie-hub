import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media (min-width: 500px) {
    width: 70%;
    align-items: center;
  }
`;

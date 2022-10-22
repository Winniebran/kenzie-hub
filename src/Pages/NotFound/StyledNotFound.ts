import styled from "styled-components";

export const StyledNotFound = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;


  a {
    width: 90%;
    height: 45px;
    background-color: var(--color-grey-1);
    color: var(--color-white);
    font-size: var(--headline-2);
    font-weight: var(--font-weight-3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    @media (min-width: 400px) {
    width: 23rem;
  }
  }
`;

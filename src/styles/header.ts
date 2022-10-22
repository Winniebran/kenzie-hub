import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  border-top: 1px solid var(--color-grey-3);
  border-bottom: 1px solid var(--color-grey-3);
  margin-top: 6rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 15px;
    padding-left: 20px;
  }

  @media (min-width: 500px) {
    div {
      width: 70%;
      padding: 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

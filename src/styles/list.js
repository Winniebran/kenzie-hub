import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  background-color: var(--color-grey-3);
  max-height: 290px;
  overflow: auto;
  border-radius: 4px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px var(--color-grey-1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-1);
    border-radius: 10px;
  }

  @media (min-width: 500px) {
      max-height: 400px;
    }

  li {
    width: 95%;
    height: 2.5rem;
    margin: 15px auto;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-4);
    border-radius: 5px;
    
    div {
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        color: var(--color-white);
        font-size: var( --headline-1);
      }
    }

    &:hover {
      background-color: var(--color-grey-2);
    }

    @media (min-width: 500px) {
      padding: 0 15px;
    }
  }
`;

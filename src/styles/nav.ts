import styled, { css } from "styled-components";

interface iNavProps {
  width?: string;
  position?: string;
}

export const StyledNav = styled.nav<iNavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  background-color: var(--color-grey-4);

  @media (min-width: 500px) {
    ${({ width }) => {
      if (width === "one") {
        return css`
          width: 23rem;
        `;
      } else if (width === "two") {
        return css`
          width: 70%;
        `;
      }
    }}
  }

  ${({ position }) => {
    if (position === "one") {
      return css`
        position: fixed;
        top: 0;
        padding-top: 2rem;
      `;
    }
  }}

  button, a {
    width: 20%;
    height: 30px;
    background-color: var(--color-grey-3);
    color: var(--color-white);
    font-size: var(--headline-3);
    font-weight: var(--font-weight-3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    transition: ease-in-out 0.4s;

    &:hover {
      background-color: var(--color-grey-2);
    }

    @media (min-width: 500px) {
      width: 4rem;
    }
  }
`;

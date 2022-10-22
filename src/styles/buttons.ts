import styled, { css } from "styled-components";

interface iButtonProps {
  width?: string;
}

export const StyledButton = styled.button<iButtonProps>`
  color: var(--color-white);
  background-color: var(--color-grey-3);
  width: 28px;
  height: 28px;
  font-size: var(--headline-0);
  font-weight: var(--font-weight-1);
  border-radius: 4px;


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
`;

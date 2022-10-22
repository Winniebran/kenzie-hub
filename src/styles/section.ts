import styled, { css } from "styled-components";

interface iSectionProps {
  align?: string;
  padding?: string;
}

export const StyledSection = styled.section<iSectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  min-height: 100vh;
  width: 100%;

  ${({ align }) => {
    if (align === "one") {
      return css`
        justify-content: center;
      `;
    } else if (align === "two") {
      return css`
        min-height: 10%;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
      `;
    }
  }}

  ${({ padding }) => {
    if (padding === "one") {
      return css`
        padding: 0;
      `;
    }
  }}

  .information {
    width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-grey-3);
    gap: 20px;
    border-radius: 4px 4px 0 0;

    @media (min-width: 400px) {
      width: 23rem;
    }
  }
`;

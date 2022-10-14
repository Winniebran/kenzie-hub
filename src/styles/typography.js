import styled, { css } from "styled-components";
import { BaseTitle } from "../styles/components/typography.jsx";

export const StyledTitle = styled(BaseTitle)`
  color: var(--color-white);
  font-weight: var(--font-weight-1);

  ${({ fontSize }) => {
    if (fontSize === "one") {
      return css`
        font-size: var(--headline-1);
      `;
    } else if (fontSize === "two") {
      return css`
        font-size: var(--title-3);
      `;
    } else if (fontSize === "three") {
      return css`
        font-size: var(--title-1);
      `;
    } else if (fontSize === "four") {
      return css`
        font-size: var(--headline-2);
      `;
    }
  }}

  ${({ margin }) => {
    if (margin === "one") {
      return css`
        margin: 30px 0;
      `;
    } else if (margin === "two") {
      return css`
        margin-top: 2rem;
      `;
    } else if (margin === "three") {
      return css`
        margin: 2rem 0;
      `;
    }
  }}

    ${({ text }) => {
    if (text === "one") {
      return css`
        line-height: 25px;
        text-align: justify;
      `;
    }
  }}
`;

export const StyledSpan = styled.span`
  ${({ fontSize }) => {
    if (fontSize === "one") {
      return css`
        font-size: var(--headline-3);
        font-weight: var(--font-weight-2);
        margin-bottom: 1rem;
      `;
    } else if (fontSize === "two") {
      return css`
        font-size: var(--headline-2);
        font-weight: var(--font-weight-4);
      `;
    } else if (fontSize === "three") {
      return css`
        font-size: var(--headline-3);
        font-weight: var(--font-weight-4);
      `;
    }
  }};

  ${({ color }) => {
    if (color === "one") {
      return css`
        color: var(--color-grey-1);
      `;
    } else if (color === "two") {
      return css`
        color: var(--feedback-negative);
      `;
    } else if (color === "three") {
      return css`
        color: var(--color-white);
      `;
    }
  }};

  ${({ text }) => {
    if (text === "one") {
      return css`
        line-height: 25px;
        text-align: justify;
      `;
    }
  }}
`;

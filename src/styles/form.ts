import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: var(--color-grey-3);
  height: fit-content;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 0 0 4px 4px;
  padding-top: 20px;

  @media (min-width: 400px) {
    width: 23rem;
  }

  div {
    align-self: center;
    width: 90%;
    height: 45px;
    position: relative;

    label {
      color: var(--color-white);
      position: absolute;
      bottom: 16px;
      left: -5px;
      padding: 15px;
      font-size: var(--headline-4);
    }

    input {
      width: 100%;
      height: 100%;
      outline: none;
      padding: 16px 0 0 10px;
      background-color: var(--color-grey-2);
      border-radius: 4px;
      font-size: var(--headline-2);
      color: var(--color-white);
      border: 1px solid transparent;

      &:focus {
        border: 1px solid var(--color-white);
        border-radius: 4px;
      }

      &::placeholder {
        color: var(--color-grey-1);
      }

      
    }
  }

  button {
    width: 90%;
    height: 45px;
    background-color: var(--color-primary-2);
    color: var(--color-white);
    font-size: var(--headline-2);
    font-weight: var(--font-weight-3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    transition: ease-in-out 0.4s;

    &:hover {
      background-color: var(--color-primary-1);
    }

    &:disabled {
      background-color: var(--color-primary-1);
      cursor: not-allowed;
    }
  }

  .registerBlock {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    }
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  outline: 0;
  padding-left: 10px;
  color: var(--color-white);
  background-color: var(--color-grey-2);
  border-radius: 4px;
  font-size: var(--headline-2);

  &:focus {
    border: 1px solid var(--color-white);
    border-radius: 4px;
  }
`;

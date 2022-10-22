import styled from "styled-components";

export const StyledModal = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  backdrop-filter: blur(3px);

  .header-modal {
    width: 90%;
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background-color: var(--color-grey-2);
    border-radius: 4px 4px 0 0;

    button {
      color: var(--color-white);
      font-size: 25px;
    }

    @media (min-width: 400px) {
      width: 23rem;
    }
  }

  .editAndDeleteButtons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    width: 100%;
    margin: 5px 0 15px 0;
    gap: 5px;

    .editButton {
      margin: 0;
      color: var(--color-white);
      background-color: var(--color-primary-negative);
      width: 150px;
      min-width: 80px;
      height: 40px;
      font-size: var(--headline-2);
      font-weight: var(--font-weight-3);
      border-radius: 4px;
    }

    .deleteButton {
      margin: 0;
      width: 80px;
      min-width: 50px;
      height: 40px;
      color: var(--color-white);
      background-color: var(--color-grey-1);
      font-size: var(--headline-2);
      font-weight: var(--font-weight-3);
      border-radius: 4px;
    }

    @media (min-width: 400px) {
      padding: 0 19px;
    }
  }
`;

import React from "react";
import { Link } from "react-router-dom";

import { StyledTitle } from "../../styles/typography";
import { StyledNotFound } from "./StyledNotFound";

const NotFound = () => {
  return (
    <StyledNotFound>
      <StyledTitle tag="h1" fontSize="three">
        PAGE NOT FOUND
      </StyledTitle>
      <Link to={"/"}> Voltar para home </Link>
    </StyledNotFound>
  );
};

export default NotFound;

import { Link } from "react-router-dom";
import { RegisterForm } from "./RegisterForm/RegisterForm.jsx";

import Logo from "../../assets/Logo.svg";
import { StyledSpan, StyledTitle } from "../../styles/typography.js";
import { StyledImg } from "../../styles/image.js";
import { StyledNav } from "../../styles/nav.js";
import { StyledSection } from "../../styles/section.js";

export const Cadastro = () => {
  return (
    <StyledSection align="one">
      <StyledNav width="one">
        <StyledImg src={Logo} alt="logo" />
        <Link to={"/"}>Voltar</Link>
      </StyledNav>
      <div className="information">
        <StyledTitle tag="h2" fontSize="one" margin="two">
          Crie a sua conta
        </StyledTitle>
        <StyledSpan fontSize="one" color="one">
          Rápido e grátis, vamos nessa
        </StyledSpan>
      </div>
      <RegisterForm />
    </StyledSection>
  );
};

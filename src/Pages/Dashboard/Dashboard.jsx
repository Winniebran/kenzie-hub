import React, { useContext } from "react";

import Logo from "../../assets/Logo.svg";
import { UserContext } from "../../contexts/UserContext";
import { TechsContext } from "../../contexts/TechsContext";
import { Technologies } from "./Technologies/Technologies";
import { AddTechModal } from "./Modal/AddModal/AddTechModal";
import { EditAndDeleteTechModal } from "./Modal/EditAndDeleteModal/EditAndDeleteModal";

import { StyledSection } from "../../styles/section";
import { StyledNav } from "../../styles/nav";
import { StyledImg } from "../../styles/image";
import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledHeader } from "../../styles/header";
import { StyledMain } from "../../styles/main";
import { StyledButton } from "../../styles/buttons";
import { StyledList } from "../../styles/list";

export const Dashboard = () => {
  const { user, logout } = useContext(UserContext);
  const { showAddModal, setShowAddModal, showEditAndDeleteModal } = useContext(TechsContext);

  return (
    <StyledSection padding="one">
      <StyledNav position="one" width="two">
        <StyledImg src={Logo} alt="" />
        <button onClick={() => logout()}>Sair</button>
      </StyledNav>

      <StyledHeader>
        <div>
          <StyledTitle fontSize="two" tag="h1">
            Olá, {user?.name}
          </StyledTitle>
          <StyledSpan fontSize="three" color="one">
            {user?.course_module}
          </StyledSpan>
        </div>
      </StyledHeader>

      <StyledMain>
        <StyledSection align="two">
          <StyledTitle fontSize="one" margin="three" text="one" tag="h2">
            Tecnologias
          </StyledTitle>
          <StyledButton onClick={() => setShowAddModal(true)}>+</StyledButton>
        </StyledSection>
        {!user?.techs.length ? (
          <StyledTitle fontSize="one" text="one" tag="h2">
            Nenhuma tecnologia foi cadastrada ainda!
          </StyledTitle>
        ) : (
          <StyledList>
            {user.techs.map((tech) => (
              <Technologies tech={tech} key={tech.id} />
            ))}
          </StyledList>
        )}
      </StyledMain>

      {showAddModal && <AddTechModal />}
      {showEditAndDeleteModal && <EditAndDeleteTechModal />}
    </StyledSection>
  );
};

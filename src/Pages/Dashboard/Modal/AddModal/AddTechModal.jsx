import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { formSchemaModal } from "./addModalSchema";
import { TechsContext } from "../../../../contexts/TechsContext";

import { StyledSpan, StyledTitle } from "../../../../styles/typography";
import { StyledForm, StyledSelect } from "../../../../styles/form";
import { StyledModal } from "../modal";

export const AddTechModal = () => {
  const { addTechsModal, setShowAddModal } = useContext(TechsContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaModal),
  });

  return (
    <StyledModal>
      <div className="header-modal">
        <StyledTitle fontSize="four" tag="h3">
          Cadastrar Tecnologias
        </StyledTitle>
        <button type="button" onClick={() => setShowAddModal(false)}><AiOutlineCloseCircle/></button>
      </div>

      <StyledForm onSubmit={handleSubmit(addTechsModal)} >
        <div>
          <label htmlFor="title">Nome</label>
          <input
            type="text"
            id="title"
            placeholder="Digite a tecnologia"
            {...register("title")}
          />
        </div>
        <StyledSpan fontSize="two" color="two">
          {errors.title?.message}
        </StyledSpan>

        <div>
          <StyledSelect {...register("status")}>
            <optgroup label="Selecione o status">
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </optgroup>
          </StyledSelect>
        </div>
        <StyledSpan fontSize="two" color="two">
          {errors.status?.message}
        </StyledSpan>

        <button>Cadastrar Tecnologia</button>
      </StyledForm>
    </StyledModal>
  );
};

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { TechsContext } from "../../../../contexts/TechsContext";
import { iTechs } from "../AddModal/AddTechModal";

import { StyledForm, StyledSelect } from "../../../../styles/form";
import { StyledTitle } from "../../../../styles/typography";
import { StyledModal } from "../modal";


export const EditAndDeleteTechModal = () => {
  const {
    setShowEditAndDeleteModal,
    editTechsModal,
    deleteTechsModal,
    currentTech,
  } = useContext(TechsContext);

  const { register, handleSubmit } = useForm<iTechs>();

  return (
    <StyledModal>
      <div className="header-modal">
        <StyledTitle fontSize="four" tag="h3">
          Tecnologia Detalhes
        </StyledTitle>
        <button type="button" onClick={() => setShowEditAndDeleteModal(false)}>
          <AiOutlineCloseCircle />
        </button>
      </div>

      <StyledForm
        onSubmit={handleSubmit((data) => editTechsModal(data, currentTech?.id as string))}
      >
        <div>
          <label htmlFor="title">Nome do projeto</label>
          <input
            type="text"
            id="title"
            value={currentTech?.title}
            disabled
          />
        </div>
        <div>
          <StyledSelect
            defaultValue={currentTech?.status}
            {...register("status")}
          >
            <optgroup label="Selecione o novo status">
              <option defaultValue="Iniciante">Iniciante</option>
              <option defaultValue="Intermediário">Intermediário</option>
              <option defaultValue="Avançado">Avançado</option>
            </optgroup>
          </StyledSelect>
        </div>
        <div className="editAndDeleteButtons">
          <button className="editButton">Salvar Alterações</button>
          <button
            className="deleteButton"
            type="button"
            onClick={() => deleteTechsModal(currentTech?.id as string)}
          >
            Excluir
          </button>
        </div>
      </StyledForm>
    </StyledModal>
  );
};

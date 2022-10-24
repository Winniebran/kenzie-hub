import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { iTechs } from "../Pages/Dashboard/Modal/AddModal/AddTechModal";
import { ApiRequests } from "../services/ApiRequests";
import { UserContext } from "./UserContext";

interface iChildren {
  children: React.ReactNode;
}

interface iTechsContextProps {
  addTechsModal: (data: iTechs) => void;
  editTechsModal: (data: iTechs, id: string) => void;
  deleteTechsModal: (id: string) => void;
  showAddModal: boolean;
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  showEditAndDeleteModal: boolean;
  setShowEditAndDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentTech: iTechs | null;
  setCurrentTech: React.Dispatch<React.SetStateAction<iTechs | null>>;
}

export const TechsContext = createContext({} as iTechsContextProps);

export const TechsProvider = ({ children }: iChildren) => {
  const { user, setUser } = useContext(UserContext);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditAndDeleteModal, setShowEditAndDeleteModal] = useState(false);
  const [currentTech, setCurrentTech] = useState<iTechs | null>(null);

  const addTechsModal = async (data: iTechs) => {
    try {
      const response = await ApiRequests.post("/users/techs", data);
      toast.success("Tecnologia criada com sucesso.");
      setShowAddModal(false);
      //Mantenho as informações do usuário e adiciono uma nova tech as techs que já existem desse usuário
      if (user) {
        setUser({ ...user, techs: [...user.techs, response.data] });
      }
    } catch (error) {
      console.log(error);
      toast.error("Essa tecnologia já foi criada, é possível editá-la.");
    }
  };

  const editTechsModal = async (data: iTechs, id: string) => {
    try {
      await ApiRequests.put(`/users/techs/${id}`, data);
      toast.success("Tecnologia editada com sucesso.");
      setShowEditAndDeleteModal(false);
      // Utilizei o map para criar uma nova lista editando somente o item selecionado
      if (user) {
        const newTechs = user.techs.map((tech: iTechs) => {
          // Edito o item que tem id identico ao que eu cliquei
          if (tech.id === id) {
            //Mantenho todas as informações da tecnologia identicas com exceção do status
            return { ...tech, status: data.status };
          } else {
            //Matenho todas as outras tecnologias da lista como estão
            return tech;
          }
        });
        // Atualizei techs inserindo a nova lista
        setUser({ ...user, techs: newTechs });
      }
    } catch (error) {
      console.log(error);
      toast.error("Tecnologia não pôde ser editada");
    }
  };

  const deleteTechsModal = async (id: string) => {
    try {
      await ApiRequests.delete(`/users/techs/${id}`);
      toast.success("Tecnologia excluída com sucesso.");
      setShowEditAndDeleteModal(false);
      // Utilizei o filter para criar uma nova lista removendo o item selecionado
      if (user) {
        const newTechs = user.techs.filter((tech: iTechs) => tech.id !== id);
        // Atualizei techs inserindo a nova lista
        setUser({ ...user, techs: newTechs });
      }
    } catch (error) {
      console.log(error);
      toast.error("Tecnologia não pôde ser excluída");
    }
  };

  return (
    <TechsContext.Provider
      value={{
        addTechsModal,
        editTechsModal,
        deleteTechsModal,
        showAddModal,
        setShowAddModal,
        showEditAndDeleteModal,
        setShowEditAndDeleteModal,
        currentTech,
        setCurrentTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};

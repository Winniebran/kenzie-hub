import { useContext, useEffect, useState, useCallback } from "react";
import { BsTrash } from "react-icons/bs";

import { TechsContext } from "../../../contexts/TechsContext";
import { iTechs } from "../Modal/AddModal/AddTechModal";

import { StyledSpan, StyledTitle } from "../../../styles/typography";


interface iTechObject {
  tech: iTechs
}

export const Technologies = ({ tech }:iTechObject) => {
  const { setShowEditAndDeleteModal, setCurrentTech, deleteTechsModal } = useContext(TechsContext);
  const [mobile, setMobile] = useState(false);

  const getIdTech = (tech:iTechs) => {
    setCurrentTech({ ...tech });
    setShowEditAndDeleteModal(true);
  };

  const isMobile = useCallback(() => {
    if (window.innerWidth < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", isMobile);
    return () => {
      window.removeEventListener("resize", isMobile);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li onClick={() => getIdTech(tech)}>
      <StyledTitle fontSize="four" tag="h2">
        {tech.title}
      </StyledTitle>
      {mobile ? (
        <StyledSpan fontSize="three" color="one">
          {tech.status}
        </StyledSpan>
      ) : (
        <div>
          <StyledSpan fontSize="three" color="one">
            {tech.status}
          </StyledSpan>
          <button
            onClick={(event) => {
              event.stopPropagation();
              deleteTechsModal(tech.id);
            }}
          >
            <BsTrash />
          </button>
        </div>
      )}
    </li>
  );
};

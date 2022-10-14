import * as yup from "yup";

export const formSchemaModal = yup.object().shape({
    title: yup
      .string()
      .trim()
      .required("Digite a tecnologia"),
    status: yup
      .string()
      .required("Selecione o status"),
  });
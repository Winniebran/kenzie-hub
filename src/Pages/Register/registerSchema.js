import * as yup from "yup";

export const formSchemaRegister = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(18, "Deve conter no máximo 18 caracteres")
    .required("Nome obrigatório"),
  email: yup
    .string()
    .trim()
    .required("E-mail Obrigatório")
    .email("E-mail inválido"),
  password: yup
    .string()
    .trim()
    .required("Senha obrigatória")
    .matches(/[A-Z]/, "Deve conter uma maiúscula")
    .matches(/([a-z])/, "Deve conter uma minúscula")
    .matches(/(\d)/, "Deve conter um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve conter pelo menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .trim()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  bio: yup
    .string()
    .trim()
    .required("Fale um pouco sobre você")
    .min(20, "Deve conter pelo menos 20 caracteres"),
  contact: yup
    .string()
    .trim()
    .required("Insira o teu link de contato")
    .url("Insira um link válido"),
  // .matches(
  //   /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
  // "Insira um link ou telefone válido"
  // ),
  // .matches(/^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}[0-9]{4}$/, "Insira um link ou telefone válido"),
  course_module: yup.string().required("Selecione o módulo"),
});

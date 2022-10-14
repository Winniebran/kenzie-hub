import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaRegister } from "../registerSchema";
import { UserContext } from "../../../contexts/UserContext";

import { StyledSpan } from "../../../styles/typography";
import { StyledForm, StyledSelect } from "../../../styles/form";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { signUp } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");
    token && navigate("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaRegister),
  });

  return (
    <StyledForm onSubmit={handleSubmit(signUp)}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Digite o seu nome"
          {...register("name")}
        />
      </div>
      <StyledSpan fontSize="two" color="two">
        {errors.name?.message}
      </StyledSpan>
      
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Digite o seu e-mail"
          {...register("email")}
        />
      </div>
      <StyledSpan fontSize="two" color="two">
        {errors.email?.message}
      </StyledSpan>
      
      <div>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite a sua senha"
          {...register("password")}
        />
      </div>
      <StyledSpan fontSize="two" color="two">
        {errors.password?.message}
      </StyledSpan>
      
      <div>
        <label htmlFor="confirmPassword">Confirmar senha</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirme a sua senha"
          {...register("confirmPassword")}
        />
      </div>
      <StyledSpan fontSize="two" color="two">
        {errors.confirmPassword?.message}
      </StyledSpan>
      
      <div>
        <label htmlFor="bio">Bio</label>
        <input
          id="bio"
          type="text"
          placeholder="Digite uma breve biografia"
          {...register("bio")}
        />
      </div>
      <StyledSpan fontSize="two" color="two">
        {errors.bio?.message}
      </StyledSpan>
      
      <div>
        <label htmlFor="contact">Contato</label>
        <input
          id="contact"
          type="text"
          placeholder="Digite o seu contanto"
          {...register("contact")}
        />
      </div>
      <StyledSpan fontSize="two" color="two">
        {errors.contact?.message}
      </StyledSpan>
      
      <div>
        <StyledSelect {...register("course_module")}>
          <optgroup label="Selecione o módulo">
            <option>Primeiro módulo (Introdução ao Frontend)</option>
            <option>Segundo módulo (Frontend Avançado)</option>
            <option>Terceiro módulo (Introdução ao Backend)</option>
            <option>Quarto módulo (Backend Avançado)</option>
          </optgroup>
        </StyledSelect>
      </div>
      <StyledSpan fontSize="two" color="two">
        {errors.course_module?.message}
      </StyledSpan>
      
      <button type="submit" disabled={loading}>
        {loading ? "Cadastrando.." : "Cadastrar"}
      </button>
    </StyledForm>
  );
};

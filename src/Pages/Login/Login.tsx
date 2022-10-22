import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaLogin } from "./loginSchema";

import Logo from "../../assets/Logo.svg";
import { UserContext } from "../../contexts/UserContext";

import { StyledSection } from "../../styles/section";
import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledForm } from "../../styles/form";
import { StyledImg } from "../../styles/image";


export interface iUserLogin {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");
    token && navigate("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <StyledSection align="one">
      <StyledImg src={Logo} alt="logo" />
      <StyledForm onSubmit={handleSubmit(login)}>
        <StyledTitle fontSize="one" margin="one" tag="h1">
          Login
        </StyledTitle>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
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
            type="password"
            id="password"
            placeholder="Digite a sua senha"
            {...register("password")}
          />
        </div>
        <StyledSpan fontSize="two" color="two">
          {errors.password?.message}
        </StyledSpan>
        <button>Entrar</button>
        <section className="registerBlock">
          <StyledSpan fontSize="one" color="one">
            Ainda não possui uma conta?
          </StyledSpan>
          <Link to={"/register"}> Cadastre-se </Link>
        </section>
      </StyledForm>
    </StyledSection>
  );
};

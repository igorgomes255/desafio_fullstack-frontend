import { createContext, useContext } from "react";
import * as yup from "yup";
import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../services/api";
import { AxiosError, AxiosResponse } from "axios";
import { IAuthProvider, IDataLogin } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IUserContext {
  register: UseFormRegister<IDataLogin>;
  handleSubmit: UseFormHandleSubmit<IDataLogin>;
  errors: FieldErrorsImpl<IDataLogin>;
  loginUser: (data: IDataLogin) => void;
}

export const LoginContext = createContext({} as IUserContext);

const LoginProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataLogin>({
    resolver: yupResolver(schema),
  });

  const loginUser = (data: IDataLogin) => {
    api
      .post("/login", data)
      .then((response: AxiosResponse) => {
        toast.success("Login efetuado com sucesso!", { theme: "dark" });

        window.localStorage.clear();
        window.localStorage.setItem("@token", response.data.token);

        setTimeout(() => {
          navigate("/contacts", { replace: true });
        }, 3000);
      })
      .catch((err: AxiosError) => {
        console.log(err.response?.data);

        toast.error("E-mail ou senha inválidos!", { theme: "dark" });
      });
  };

  return (
    <LoginContext.Provider
      value={{ register, handleSubmit, errors, loginUser }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export function useLoginContext() {
  const context = useContext(LoginContext);

  return context;
}

export default LoginProvider;

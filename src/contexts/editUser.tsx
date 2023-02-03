import { useContext, createContext } from "react";
import * as yup from "yup";
import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { IAuthProvider, IDataUser } from "../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError, AxiosResponse } from "axios";
import api from "../services/api";
import { useUserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

interface IUserEditContext {
  register: UseFormRegister<IDataUser>;
  handleSubmit: UseFormHandleSubmit<IDataUser>;
  errors: FieldErrorsImpl<IDataUser>;
  editUser: (data: IDataUser) => void;
  deleteUser: () => void;
}

export const EditUserContext = createContext({} as IUserEditContext);

const EditUserProvider = ({ children }: IAuthProvider) => {
  const { token, setEditUser, setModalUser, setModalEditUser } =
    useUserContext();

  const navigate = useNavigate();

  const schema = yup.object().shape({
    full_name: yup.string().required("Campo obrigátorio"),
    phone: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataUser>({
    resolver: yupResolver(schema),
  });

  const editUser = (data: IDataUser) => {
    api
      .patch("/users/profile", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setEditUser(response.data);
        setModalEditUser(false);
      })
      .catch((err: AxiosError) => {
        console.log(err.response?.data);
      });
  };

  const deleteUser = () => {
    api
      .delete("/users/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: AxiosResponse) => {
        console.log(response.data);

        setModalUser(false);

        setTimeout(() => {
          navigate("/", { replace: true });
          localStorage.clear();
        }, 3000);
      })
      .catch((err: AxiosError) => console.log(err));
  };

  return (
    <EditUserContext.Provider
      value={{ register, handleSubmit, errors, editUser, deleteUser }}
    >
      {children}
    </EditUserContext.Provider>
  );
};

export function useEditContext() {
  const context = useContext(EditUserContext);

  return context;
}

export default EditUserProvider;

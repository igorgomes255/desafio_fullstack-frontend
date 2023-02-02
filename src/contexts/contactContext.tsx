import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
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
import { IAuthProvider, IDataContact } from "../interfaces";

interface IContactContext {
  register: UseFormRegister<IDataContact>;
  handleSubmit: UseFormHandleSubmit<IDataContact>;
  errors: FieldErrorsImpl<IDataContact>;
  submitContact: (data: IDataContact) => void;
  modalAdd: boolean;
  setModalAdd: Dispatch<SetStateAction<boolean>>;
}

export const ContactContext = createContext({} as IContactContext);

const ContactProvider = ({ children }: IAuthProvider) => {
  const [modalAdd, setModalAdd] = useState(false);

  const schema = yup.object().shape({
    full_name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    phone: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataContact>({
    resolver: yupResolver(schema),
  });

  const submitContact = (data: IDataContact) => {
    api
      .post("/contact", data)
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  return (
    <ContactContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        submitContact,
        modalAdd,
        setModalAdd,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export function useContactContext() {
  const context = useContext(ContactContext);

  return context;
}

export default ContactProvider;

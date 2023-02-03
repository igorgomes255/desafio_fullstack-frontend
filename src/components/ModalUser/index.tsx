import { MdClose } from "react-icons/md";
import { useEditContext } from "../../contexts/editUser";
import { useUserContext } from "../../contexts/userContext";
import DivInput from "../input";
import { Container, FormTech, ModalHeader, ModalTech } from "./styles";

const ModalEditUser = () => {
  const { setModalEditUser } = useUserContext();
  const { errors, editUser, handleSubmit, register } = useEditContext();

  return (
    <Container>
      <ModalTech>
        <ModalHeader>
          <h3>Editar usuário</h3>
          <button onClick={() => setModalEditUser(false)}>
            <MdClose />
          </button>
        </ModalHeader>
        <FormTech onSubmit={handleSubmit(editUser)}>
          <DivInput
            label="Nome completo"
            placeholder="nome completo"
            {...register("full_name")}
            errors={errors.full_name?.message}
          />

          <DivInput
            label="Telefone"
            placeholder="telefone"
            {...register("phone")}
            errors={errors.phone?.message}
          />
          <button type="submit">Enviar</button>
        </FormTech>
      </ModalTech>
    </Container>
  );
};

export { ModalEditUser };

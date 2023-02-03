import { useContactContext } from "../../contexts/contactContext";
import DivInput from "../input";
import { Container, FormTech, ModalHeader, ModalTech } from "./styles";
import { MdClose } from "react-icons/md";
import { useEditContactContext } from "../../contexts/editContactContext";

const ModalEditContact = () => {
  const {
    register,
    handleSubmit,
    errors,
    editContact,
    deleteContact,
    setModalEdit,
  } = useEditContactContext();

  return (
    <Container>
      <ModalTech>
        <ModalHeader>
          <h3>Editar Contato</h3>
          <button onClick={() => setModalEdit(false)}>
            <MdClose />
          </button>
        </ModalHeader>
        <FormTech onSubmit={handleSubmit(editContact)}>
          <DivInput
            label="Nome completo"
            placeholder="nome completo"
            {...register("full_name")}
            errors={errors.full_name?.message}
          />
          <DivInput
            label="Email"
            placeholder="email@email.com"
            type="email"
            {...register("email")}
            errors={errors.email?.message}
          />
          <DivInput
            label="Telefone"
            placeholder="telefone"
            {...register("phone")}
            errors={errors.phone?.message}
          />
          <button type="submit">Salvar</button>
        </FormTech>
      </ModalTech>
    </Container>
  );
};

export { ModalEditContact };

import { useContactContext } from "../../contexts/contactContext";
import DivInput from "../input";
import { Container, FormTech, ModalHeader, ModalTech } from "./styles";
import { MdClose } from "react-icons/md";

const ModalContact = () => {
  const { setModalAdd, submitContact, handleSubmit, errors, register } =
    useContactContext();

  return (
    <Container>
      <ModalTech>
        <ModalHeader>
          <h3>Cadastrar Contatos</h3>
          <button onClick={() => setModalAdd(false)}>
            <MdClose />
          </button>
        </ModalHeader>
        <FormTech onSubmit={handleSubmit(submitContact)}>
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
          <button type="submit">Enviar</button>
        </FormTech>
      </ModalTech>
    </Container>
  );
};

export { ModalContact };

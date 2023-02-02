import DivInput from "../../components/input";
import { useRegisterContext } from "../../contexts/registerContext";
import { Container, LinkStyled } from "./styles";

const Register = () => {
  const { register, handleSubmit, errors, submitUser } = useRegisterContext();

  return (
    <Container>
      <form onSubmit={handleSubmit(submitUser)}>
        <DivInput
          label="Nome completo"
          placeholder="Algo"
          {...register("full_name")}
          errors={errors.full_name?.message}
        />
        <DivInput
          label="Email"
          placeholder="email@email.com"
          {...register("email")}
          errors={errors.email?.message}
        />
        <DivInput
          label="Senha"
          placeholder="Senha"
          {...register("password")}
          errors={errors.password?.message}
        />
        <DivInput
          label="Telefone"
          placeholder="Telefone"
          {...register("phone")}
          errors={errors.phone?.message}
        />
        <button type="submit">Enviar</button>
      </form>
      <LinkStyled type="submit" to="/">
        Voltar
      </LinkStyled>
    </Container>
  );
};

export { Register };

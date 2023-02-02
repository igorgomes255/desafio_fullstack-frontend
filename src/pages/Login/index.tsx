import DivInput from "../../components/input";
import { useLoginContext } from "../../contexts/loginContext";
import { Container, LinkStyled } from "./styles";
import { FcContacts } from "react-icons/fc";

const Login = () => {
  const { register, handleSubmit, errors, loginUser } = useLoginContext();

  return (
    <Container>
      <FcContacts size={80} />
      <form onSubmit={handleSubmit(loginUser)}>
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

        <button type="submit">Entrar</button>
      </form>

      <p>Não possui uma conta?</p>

      <LinkStyled type="submit" to="/register">
        Cadastre-se
      </LinkStyled>
    </Container>
  );
};

export { Login };

import DivInput from "../../components/input";
import { useLoginContext } from "../../contexts/loginContext";
import { useState } from "react";
import { Container, DivEye, LinkStyled } from "./styles";
import { FcContacts } from "react-icons/fc";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const { register, handleSubmit, errors, loginUser } = useLoginContext();

  const [visible, setVisible] = useState("password");

  const showPassword = () => {
    visible === "password" ? setVisible("text") : setVisible("password");
  };

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
          type={visible}
          children={
            <DivEye>
              <div onClick={showPassword}>
                {visible === "password" ? <BsEyeFill /> : <BsEyeSlashFill />}
              </div>
            </DivEye>
          }
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

import { Link } from "react-router-dom";
import DivInput from "../../components/input";
import { useUserContext } from "../../contexts/userContext";

const Login = () => {
  const { register, handleSubmit, errors, loginUser } = useUserContext();

  return (
    <div>
      <form onSubmit={handleSubmit(loginUser)}>
        <DivInput
          label="Email"
          placeholder="email@email.com"
          {...register("email")}
        />
        <DivInput label="Senha" placeholder="Senha" {...register("password")} />

        <button type="submit">Entrar</button>
      </form>

      <p>Não possui uma conta?</p>

      <Link type="submit" to="/register">
        Cadastre-se
      </Link>
    </div>
  );
};

export { Login };

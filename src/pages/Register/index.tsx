import { Link } from "react-router-dom";
import DivInput from "../../components/input";
import { useUserContext } from "../../contexts/userContext";

const Register = () => {
  const { register, handleSubmit, errors, submitUser } = useUserContext();

  return (
    <div>
      <form onSubmit={handleSubmit(submitUser)}>
        <DivInput
          label="Nome completo"
          placeholder="Algo"
          {...register("full_name")}
        />
        <DivInput
          label="Email"
          placeholder="email@email.com"
          {...register("email")}
        />
        <DivInput label="Senha" placeholder="Senha" {...register("password")} />
        <DivInput
          label="Telefone"
          placeholder="Telefone"
          {...register("phone")}
        />
        <button type="submit">Enviar</button>
      </form>
      <Link type="submit" to="/">
        Voltar
      </Link>
    </div>
  );
};

export { Register };

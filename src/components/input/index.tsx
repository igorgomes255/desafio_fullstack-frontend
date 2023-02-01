import { forwardRef } from "react";
import { Container } from "./styles";

interface IDivInput {
  label: string;
  placeholder: string;
}

const DivInput = forwardRef<HTMLInputElement, IDivInput>(
  ({ label, placeholder, ...register }, ref) => {
    return (
      <Container>
        <label>{label}</label>
        <input placeholder={placeholder} {...register} ref={ref} />
      </Container>
    );
  }
);

export default DivInput;

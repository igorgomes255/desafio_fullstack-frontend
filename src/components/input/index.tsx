import { forwardRef } from "react";
import { FieldErrorsImpl } from "react-hook-form";
import { Container } from "./styles";

interface IDivInput {
  label: string;
  placeholder: string;
  errors: any;
}

const DivInput = forwardRef<HTMLInputElement, IDivInput>(
  ({ label, placeholder, errors, ...register }, ref) => {
    return (
      <Container>
        <label>{label}</label>
        <input placeholder={placeholder} {...register} ref={ref} />
        <span>{errors}</span>
      </Container>
    );
  }
);

export default DivInput;

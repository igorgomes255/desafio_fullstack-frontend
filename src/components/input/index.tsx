import { forwardRef } from "react";
import { ReactNode } from "react";
import { Container } from "./styles";

interface IDivInput {
  children?: ReactNode;
  label: string;
  placeholder: string;
  errors: any;
  type?: string;
}

const DivInput = forwardRef<HTMLInputElement, IDivInput>(
  ({ label, placeholder, errors, type, children, ...register }, ref) => {
    return (
      <Container>
        <label>{label}</label>
        <input placeholder={placeholder} type={type} {...register} ref={ref} />
        <span>{errors}</span> {children}
      </Container>
    );
  }
);

export default DivInput;

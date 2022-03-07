import style from "./AppInput.module.scss";
import { ForwardedRef, forwardRef } from "react";

interface IProps {
  type?: "text" | "password";
  name: string;
  placeholder: string;
}

const AppInput = forwardRef(
  (
    { type = "text", name, placeholder }: IProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        className={style.input}
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        aria-label={name}
        required
      />
    );
  }
);

export default AppInput;

//TODO: add some required and pattern fields to props

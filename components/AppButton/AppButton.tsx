import style from "./AppButton.module.scss";

interface IProps {
  name: string;
  callback?: () => void;
  type?: "button" | "submit" | "reset";
}

function AppButton({ name, type, callback }: IProps) {
  return (
    <button
      type={type || "button"}
      onClick={callback}
      className={style.button}
      aria-label="button"
    >
      {name}
    </button>
  );
}

export default AppButton;

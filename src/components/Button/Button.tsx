import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "button" | "submit";
  text: string;
  actionOnClick?: () => void;
}

const Button = ({
  type,
  text,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled type={type} onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;

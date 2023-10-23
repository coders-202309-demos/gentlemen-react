interface ButtonProps {
  type: "button" | "submit";
  modifier: string;
  text: string;
  actionOnClick: () => void;
}

const Button = ({
  type,
  modifier,
  text,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      type={type}
      className={`button button--${modifier}`}
      onClick={actionOnClick}
    >
      {text}
    </button>
  );
};

export default Button;

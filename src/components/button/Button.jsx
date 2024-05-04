// styles
import "./Button.css";

const Button = (props) => {
  const {
    text = "",
    variant = "default",
    leftIcon,
    type = "button",
    rightIcon,
    onClickHandler,
  } = props;

  let selectedVariantClass = "Default";
  switch (variant) {
    case "default":
      selectedVariantClass = "Default";
      break;
    case "secondary":
      selectedVariantClass = "Secondary";
      break;

    default:
      break;
  }

  return (
    <button
      type={type}
      className={`ButtonContainer ${selectedVariantClass}`}
      onClick={onClickHandler}
    >
      {leftIcon && leftIcon}
      <span>{text}</span>
      {rightIcon && rightIcon}
    </button>
  );
};

export default Button;

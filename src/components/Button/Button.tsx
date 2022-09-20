import { ReactNode } from "react";
import "./Button.css"
import { StandardProps } from "../../typeDeclaration";

interface ButtonProps extends StandardProps{
  onClick?: React.MouseEventHandler
}

const Button = ({
  width,
  height,
  border,
  borderRadius,
  shadow,
  className,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={"button " + className}
      style={{
        width: width,
        height: height,
        border: border,
        borderRadius: borderRadius,
        boxShadow: shadow,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

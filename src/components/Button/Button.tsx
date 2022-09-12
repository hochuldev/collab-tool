import { ReactNode } from "react";
import "./Button.css"
import { StandardProps } from "../../typeDeclaration";

const Button = ({
  width,
  height,
  border,
  borderRadius,
  shadow,
  className,
  children,
}: StandardProps) => {
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
    >
      {children}
    </button>
  );
};

export default Button;

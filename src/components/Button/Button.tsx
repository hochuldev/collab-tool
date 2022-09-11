import { ReactNode } from "react";
import "./Button.css"

interface ButtonProps {
  width: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  shadow?: string;
  className?: string;
  children?: ReactNode
}

const Button = ({
  width,
  height,
  border,
  borderRadius,
  shadow,
  className,
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
    >
      {children}
    </button>
  );
};

export default Button;

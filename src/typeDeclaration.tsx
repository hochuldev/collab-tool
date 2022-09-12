import { ReactNode } from "react";

export interface EmptyProps {
}

export interface StandardProps {
  width: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  shadow?: string;
  className?: string;
  children?: ReactNode
}
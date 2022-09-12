import React, {ReactNode} from "react";
import "./Sidebar.css"
import Button from "../Button/Button";
interface SidebarProps {
  width: string,
  theme: 'light' | 'dark',
  className: string,
  children: ReactNode
}

const determineColor = (theme: "light" | "dark") => {
  if(theme === "light") {
    return {
      backgroundColor: "rgb(238, 238, 238)",
      color: "rgb(204,204,204)"
    }
  } else {
    return {
      backgroundColor: "rgb(44, 42, 52)",
      color: "black",
    }
  }
}

const Sidebar = ({width, className, theme, children}: SidebarProps) => {

  const {backgroundColor, color} = determineColor(theme)
  return (
    <aside className={"sidebar " + className} style={{width: width, backgroundColor: backgroundColor, color: color}}>
      {children}
    </aside>
  )
}

export default Sidebar
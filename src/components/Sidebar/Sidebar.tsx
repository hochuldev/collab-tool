import React, { ReactNode } from 'react'
import SidebarSection from './Section'
import './Sidebar.css'
// import Main from "./Main";
// interface SidebarProps {
//   width?: string,
//   theme: 'light' | 'dark',
//   className?: string,
//   children: ReactNode
// }

// const determineColor = (theme: "light" | "dark") => {
//   if(theme === "light") {
//     return {
//       backgroundColor: "rgb(238, 238, 238)",
//       color: "rgb(204,204,204)"
//     }
//   } else {
//     return {
//       backgroundColor: "rgb(44, 42, 52)",
//       color: "black",
//     }
//   }
// }

interface SidebarProps {
  children: ReactNode
  className?: string
}

const Sidebar = ({ className, children }: SidebarProps) => {
  return <aside className={'sidebar ' + className}>{children}</aside>
}

const willExport = Object.assign(Sidebar, {
  Section: SidebarSection,
})

export default willExport

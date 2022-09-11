import React from "react";
import { JsxElement } from "typescript";
import "./Sidebar.css"

const Sidebar = ({wInPx, className}: {wInPx: string, className: string}) => {
  return (
    <aside className={"sidebar " + className} style={{width: {wInPx}}}>
      
    </aside>
  )
}

export default Sidebar
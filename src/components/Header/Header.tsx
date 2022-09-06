import React, { useState } from "react";
import './Header.css';
import { EmptyProps } from "../../typeDeclaration";

const Header = (props: EmptyProps) => {
  const [projectColor, setProjectColor] = useState('blue')
  return (
    <header>
      <div className="header__color-box_blue header__color-box"></div>
      <button className="header__bookmark">
        <img src="/bookmark-star.png" alt="북마크 버튼" />
      </button>
    </header>
  )
}

export default Header
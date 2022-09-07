import React from "react";
import "./HeaderMenu.css"

interface project {
  projectName: string
}

const HeaderMenu = (props:project) => {
  return (
    <div className="header__menu">
      <div className="header__menu-title">
        <span>{props.projectName + ' 프로젝트'}</span>
      </div>
      <ul className="header__menu-list">
        <li className="header__menu-item header__menu-item_icon-color">색상 설정</li>
        <li className="header__menu-item header__menu-item_icon-notification">알림 설정</li>
        <li className="header__menu-item header__menu-item_icon-hide">숨김</li>
        <li className="header__menu-item header__menu-item_icon-exit">프로젝트 나가기</li>
      </ul>
    </div>
  )
}

export default HeaderMenu
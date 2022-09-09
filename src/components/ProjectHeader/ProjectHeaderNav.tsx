import React from "react";
import "./HeaderNav.css"
import { EmptyProps } from "../../typeDeclaration";
import { Link, useLocation } from "react-router-dom";

const createLinkClassName = (currentPage: string, targetPage: string) => {
  // 링크가 적절하게 스타일링될 수 있도록, 클래스네임을 생성하는 함수.
  let className = "header__nav-link "
  className += (currentPage === targetPage ? " header__nav-link_current-page" : "")
  return className
}

const HeaderNav = (props: EmptyProps) => {
  // TODO: 홈페이지가 프로젝트의 홈 페이지를 가리키도록 수정해야 한다. 또한 아래의 다른 링크들도, root를 시작으로 갖지만, 프로젝트 이름을 시작으로 갖도록 만들어야 한다
  
  const currentPage = useLocation().pathname
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <Link className={createLinkClassName(currentPage, "/home")} to="/home">홈</Link>
        </li> 
        <li className="header__nav-item">
          <Link className={createLinkClassName(currentPage, "/task")} to="task">업무</Link>
        </li>
        <li className="header__nav-item">
          <Link className={createLinkClassName(currentPage, "/gaant-chart")} to="gaant-chart">간트차트</Link>
        </li>
        <li className="header__nav-item">
          <Link className={createLinkClassName(currentPage, "/calendar")} to="calendar">캘린더</Link>
        </li>
        <li className="header__nav-item">
          <Link className={createLinkClassName(currentPage, "/file")} to="file">파일</Link>
        </li>
        <li className="header__nav-item">
          <Link className={createLinkClassName(currentPage, "/notification")} to="notification">알림</Link>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav
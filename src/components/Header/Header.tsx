import React, { useState } from "react";
import './Header.css';
import { EmptyProps } from "../../typeDeclaration";
import HeaderMenu from "./HeaderMenu";
import bookmark from "../../assets/bookmark-icon.png"
import HeaderNav from "./HeaderNav";
import SearchBar from "../SearchBar/SearchBar";

const Header = (props: EmptyProps) => {
  // TODO: 헤더 컴포넌트 내부의 추상화 수준이 일관되지 못하다. 차라리, 컴포넌트를 3개의 하위 컴포넌트로 나누어서, 따로 구현하고 합치자.
  const [projectColor, setProjectColor] = useState('blue') // TODO: api 콜을 통해, 서버에 저장된 프로젝트 정보(색, 이름 등)를 불러와서, state를 변경하는 코드를 추가해야 함.
  const [projectName, setProjectName] = useState('Workflow')

  return (
    <header className="header">
      <div className= {`header__color-box_${projectColor} header__color-box`}></div>
      <button className="header__bookmark">
        <img src={bookmark} alt="북마크 버튼" />
      </button>
      <HeaderMenu projectName={projectName}></HeaderMenu>
      <h1>{projectName + " 업무 공유방"}</h1> {/* TODO: 아이콘 추가, 스타일링 추가 */}
      <HeaderNav/>
      <SearchBar/>
    </header>
  )
}

export default Header
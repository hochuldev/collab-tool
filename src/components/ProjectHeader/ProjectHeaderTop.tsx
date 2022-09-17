import React, { MouseEventHandler } from "react"
import { useState } from "react"
import bookmark from "../../assets/bookmark-icon.png"
import threeDotsIcon from "../../assets/three-dots-icon.svg"
import Button from "../Button/Button"
// import companyIcon from "../../assets/company-icon.svg"
import "./ProjectHeaderTop.css"

const ProjectHeaderMenu = ({projectName, hidden}: {projectName:string, hidden: boolean}) => {
  // TODO: 사용자 권한에 따라서, 다른 메뉴를 보여줘야 함. 관리자와 일반 사용자는 다른 메뉴 ui를 갖는다.
  return (
    <div className={"project-header__menu" + (hidden ? " hidden" : "")}>
      <div className="project-header__menu-title">
        <span>{projectName + ' 프로젝트'}</span>
      </div>
      <ul className="project-header__menu-list">
        <li className="project-header__menu-item project-header__menu-item_icon-color">색상 설정</li>
        <li className="project-header__menu-item project-header__menu-item_icon-notification">알림 설정</li>
        <li className="project-header__menu-item project-header__menu-item_icon-hide">숨김</li>
        <li className="project-header__menu-item project-header__menu-item_icon-exit">프로젝트 나가기</li>
      </ul>
    </div>
  )
}

const ProjectHeaderTop = ({projectName, projectColor}: {projectName: string, projectColor: string}) => {
  //TODO: headerTop의 크기가 px단위로 고정돼있는데, 안된다. 프로젝트 제목의 길이에 따라서 길이가 변하도록 만든 뒤, 최대 길이를 정하고, ellipsis 적용하자.
  const [hidden, setHidden] = useState(true)

  const toggleHidden:MouseEventHandler = (e) => {
    hidden ? setHidden(false) : setHidden(true)
  }

  return (
    <div className="project-header__top">
      <div className= {`project-header__color-box_${projectColor} project-header__color-box`}></div>
      <Button width="18px">
        <img className="project-header__bookmark-icon" src={bookmark} alt="북마크 버튼" />
      </Button>
      <Button width="18px">
        <img className="project-header__three-dots" src={threeDotsIcon} alt="프로젝트 설정 버튼" onClick={toggleHidden}></img>
      </Button>
      <ProjectHeaderMenu projectName={projectName} hidden={hidden}></ProjectHeaderMenu>
      <h1>{projectName + " 업무 공유방"}</h1>
    </div>
  )
}

export default ProjectHeaderTop
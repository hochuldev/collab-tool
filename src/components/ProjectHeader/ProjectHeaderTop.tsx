import React from "react"
import bookmark from "../../assets/bookmark-icon.png"
import threeDotsIcon from "../../assets/three-dots-icon.svg"
import "./ProjectHeaderTop.css"

interface project {
  projectName: string
}

const ProjectHeaderMenu = (props:project) => {
  return (
    <div className="project-header__menu">
      <div className="project-header__menu-title">
        <span>{props.projectName + ' 프로젝트'}</span>
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
  
  return (
    <div>
      <div className= {`project-header__color-box_${projectColor} project-header__color-box`}></div>
      <button className="project-header__bookmark">
        <img src={bookmark} alt="북마크 버튼" />
      </button>
      <button className="project-header__three-dots">
        <img style={{width: '20px'}} src={threeDotsIcon} alt="프로젝트 설정 버튼"></img>
      </button>
      <ProjectHeaderMenu projectName={projectName}></ProjectHeaderMenu>
      <h1>{projectName + " 업무 공유방"}</h1> {/* TODO: 아이콘 추가, 스타일링 추가 */}
    </div>
  )
}

export default ProjectHeaderTop